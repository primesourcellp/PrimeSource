import React, { useEffect, useRef } from 'react';

const JobDriveBanner = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let particleCount;
    let connectionDistance;

    const setupCanvas = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;

      if (width < 768) {
        particleCount = 30;
        connectionDistance = 70;
      } else {
        particleCount = 40;
        connectionDistance = 100;
      }

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.radius = Math.random() * 1 + 1; // Random size
        this.opacity = 0.8;
      }

      update() {
        // Wall collision
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction (repulse effect)
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force = (100 - dist) / 100 * 2;
          this.x += forceDirectionX * force;
          this.y += forceDirectionY * force;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(58, 145, 136, ${this.opacity})`;
        ctx.shadowColor = '#3A9188';
        ctx.shadowBlur = this.radius * 2;
        ctx.fill();
        ctx.closePath();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0; // Reset shadow for lines

      // Draw lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(58, 145, 136, ${1 - dist / connectionDistance})`;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setupCanvas();
    };

    const handleMouseMove = (e) => {
      mouse.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    setupCanvas();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default JobDriveBanner;