import { useMemo } from "react";

export default function FloatingHearts({ heavy = false }) {
  const count = heavy ? 35 : 18;

  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${7 + Math.random() * 8}s`,
      size: `${8 + Math.random() * 12}px`,
      opacity: 0.15 + Math.random() * 0.3,
    }));
  }, [count]);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}