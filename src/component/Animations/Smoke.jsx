import { useState, useEffect, useRef } from "react";

export default function FloatingSmoke() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(true);
  const requestRef = useRef();
  const idleTimeout = useRef();
  const particleId = useRef(0);

  useEffect(() => {
    // Only enable on desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => setIsMoving(false), 800);
      
      // Add new particles when mouse moves
      if (isMoving) {
        const newParticles = Array(3).fill().map(() => ({
          id: particleId.current++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 15 + 5,
          opacity: Math.random() * 0.4 + 0.1,
          life: 100,
          decay: Math.random() * 0.5 + 0.1,
          xVel: (Math.random() - 0.5) * 2,
          yVel: -Math.random() * 1.5,
        }));
        setParticles(prev => [...prev, ...newParticles].slice(-50));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }));
      
      // Update particles
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.xVel,
          y: p.y + p.yVel,
          life: p.life - p.decay,
          opacity: p.opacity * (p.life / 100),
          size: p.size * 1.01,
          yVel: p.yVel * 0.98,
          xVel: p.xVel * 0.98
        })).filter(p => p.life > 0)
      );
      
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [target, isDesktop, isMoving]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Smoke particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: `rgba(200, 200, 200, ${p.opacity})`,
            transform: `translate(-50%, -50%)`,
            filter: "blur(5px)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}
      
      {/* Main smoke puff that follows cursor */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(220, 220, 220, 0.3)",
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.2 : 1})`,
          filter: "blur(10px)",
          transition: "transform 0.2s ease-out",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}