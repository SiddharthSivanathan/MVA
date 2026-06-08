import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-glow pointer-events-none fixed top-0 left-0 z-[100] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(30,200,200,0.18) 0%, rgba(255,107,26,0.10) 40%, transparent 65%)',
          marginLeft: '-210px',
          marginTop: '-210px',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="cursor-glow pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise"
        style={{
          marginLeft: '-3px',
          marginTop: '-3px',
          boxShadow: '0 0 12px rgba(30,200,200,0.8)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
