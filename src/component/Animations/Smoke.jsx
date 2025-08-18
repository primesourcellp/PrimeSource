import { useState, useEffect, useRef } from "react";

export default function FloatingSmoke() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [parts, setParts] = useState([]);
  const reqRef = useRef();
  const idleRef = useRef();
  const partId = useRef(0);
  const isDesktop = useRef(false);

  useEffect(() => {
    isDesktop.current = window.innerWidth >= 768;
    const handleResize = () => (isDesktop.current = window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);

    const move = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
      if (!active) setActive(true);
      clearTimeout(idleRef.current);
      idleRef.current = setTimeout(() => setActive(false), 600);
      
      if (active && isDesktop.current) {
        setParts(p => [
          ...p.slice(-40),
          ...Array(2).fill().map(() => ({
            id: partId.current++,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 10 + 3,
            opacity: Math.random() * 0.3 + 0.1,
            life: 100,
            decay: Math.random() * 0.3 + 0.1,
            xVel: (Math.random() - 0.5) * 1.5,
            yVel: -Math.random() * 1.2,
          }))
        ]);
      }
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      setPos(p => ({
        x: p.x + (target.x - p.x) * 0.1,
        y: p.y + (target.y - p.y) * 0.1
      }));
      
      setParts(p => 
        p.map(part => ({
          ...part,
          x: part.x + part.xVel,
          y: part.y + part.yVel,
          life: part.life - part.decay,
          opacity: part.opacity * (part.life / 100),
          size: part.size * 1.02
        })).filter(p => p.life > 0)
      );
      
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(reqRef.current);
    };
  }, [target, active]);

  if (!isDesktop.current) return null;

  return (
    <>
      {parts.map(p => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: `rgba(180, 220, 255, ${p.opacity})`,
            transform: `translate(-50%, -50%)`,
            filter: "blur(4px)",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      ))}
      
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: `${active ? 35 : 25}px`,
          height: `${active ? 35 : 25}px`,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,230,255,0.4) 0%, rgba(180,220,255,0.2) 70%)",
          transform: `translate(-50%, -50%)`,
          filter: "blur(8px)",
          transition: "all 0.3s ease-out",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </>
  );
}