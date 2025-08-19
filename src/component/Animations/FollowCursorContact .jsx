import { useState, useEffect, useRef } from "react";

export default function FloatingContact() {
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [blast, setBlast] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const requestRef = useRef();
  const idleTimeout = useRef();

  useEffect(() => {
    // Only enable on desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setTarget({ x: e.clientX + 50, y: e.clientY + 40 });
      setIsMoving(true);
      clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => setIsMoving(false), 800);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [target, isDesktop]);

  // Handle click blast
  const handleClick = () => {
    setBlast({ x: position.x, y: position.y });
    setTimeout(() => setBlast(null), 1000); // longer animation
  };

  if (!isDesktop) return null;

  return (
    <>
      {/* Floating Contact */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isMoving ? 1.05 : 1})`,
          transition: "transform 0.2s ease-out",
          zIndex: 9999,
          cursor: "pointer",
        }}
        className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg text-black
          bg-gradient-to-r from-[#3A9188]/40 via-[white]/40 to-[#3A9188]/40
          backdrop-blur-md border border-white/10
          transition-all duration-300 select-none
          ${isMoving ? "opacity-90 shadow-xl" : "opacity-60 animate-pulse shadow-md"}`}
        onClick={handleClick}
      >
        Contact Us
      </div>

      {/* Blast Animation */}
     

      {/* Keyframes */}
      <style>{`
        @keyframes blastAnim {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
            filter: blur(0px);
          }
          50% {
            opacity: 0.9;
            filter: blur(2px);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
            filter: blur(6px);
          }
        }
        @keyframes rippleAnim {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(8);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
