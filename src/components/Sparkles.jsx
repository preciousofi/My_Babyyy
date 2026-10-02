import { useMemo } from "react";

export default function Sparkles() {
  const sparkles = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: `${7 + Math.random() * 8}px`,
    }));
  }, []);

  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
            fontSize: sparkle.size,
          }}
        >
          {sparkle.id % 2 === 0 ? "✦" : "✧"}
        </span>
      ))}
    </div>
  );
}