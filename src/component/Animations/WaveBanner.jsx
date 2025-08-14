import React, { useEffect, useRef } from 'react';

const ParticlesBanner = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 50;
    let animationId;

    const setupCanvas = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 2,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          density: Math.random() * 30 + 1
        });
      }
    };

    const drawParticles = () => {
      particles.forEach(particle => {
        // Mouse interaction
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        
        if (force < 0) force = 0;
        
        const directionX = forceDirectionX * force * particle.density;
        const directionY = forceDirectionY * force * particle.density;
        
        if (distance < maxDistance) {
          particle.x -= directionX;
          particle.y -= directionY;
        } else {
          // Return to base position
          if (particle.x !== particle.baseX) {
            const dx = particle.baseX - particle.x;
            particle.x += dx / 10;
          }
          if (particle.y !== particle.baseY) {
            const dy = particle.baseY - particle.y;
            particle.y += dy / 10;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = `rgba(58, 145, 136, ${0.5 + force * 0.5})`;
        ctx.fill();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setupCanvas();
    };

    const handleMouseMove = (e) => {
      mouse.current = {
        x: e.clientX - canvas.offsetLeft,
        y: e.clientY - canvas.offsetTop
      };
    };

    setupCanvas();
    animate();

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default ParticlesBanner;