'use client';

import { useEffect, useRef } from 'react';

interface Logo {
  name: string;
  emoji: string;
  color: string;
}

const languages: Logo[] = [
  { name: 'JavaScript', emoji: '⚡', color: 'from-yellow-400 to-yellow-600' },
  { name: 'TypeScript', emoji: '🔷', color: 'from-blue-400 to-blue-600' },
  { name: 'React', emoji: '⚛️', color: 'from-cyan-400 to-cyan-600' },
  { name: 'Node.js', emoji: '🟢', color: 'from-green-400 to-green-600' },
  { name: 'Python', emoji: '🐍', color: 'from-blue-300 to-blue-700' },
  { name: 'SQL', emoji: '🗄️', color: 'from-indigo-400 to-indigo-700' },
  { name: 'HTML/CSS', emoji: '🎨', color: 'from-orange-400 to-red-600' },
  { name: 'Git', emoji: '📦', color: 'from-red-500 to-red-700' },
];

export default function LanguagesSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rotation = 10;
    let animationId: number;

    const animate = () => {
      rotation += 0.5;
      container.style.transform = `rotateX(20deg) rotateY(${rotation}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const angle = (360 / languages.length) * (Math.PI / 180);
  const radius = 150;

  return (
    <div className="flex items-center justify-center min-h-[400px] perspective">
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .sphere-container {
          width: 400px;
          height: 400px;
          position: relative;
          transform-style: preserve-3d;
        }
        .logo-item {
          position: absolute;
          width: 80px;
          height: 80px;
          left: 50%;
          top: 50%;
          margin-left: -40px;
          margin-top: -40px;
          transform-style: preserve-3d;
        }
      `}</style>
      
      <div className="sphere-container" ref={containerRef}>
        {languages.map((logo, index) => {
          const x = Math.cos(index * angle) * radius;
          const z = Math.sin(index * angle) * radius;
          
          return (
            <div
              key={logo.name}
              className="logo-item"
              style={{
                transform: `translateZ(${z}px) translateX(${x}px)`,
              }}
            >
              <div
                className={`w-full h-full rounded-lg bg-gradient-to-br ${logo.color} flex items-center justify-center shadow-lg hover:shadow-xl transition cursor-pointer transform hover:scale-110`}
                title={logo.name}
              >
                <span className="text-4xl">{logo.emoji}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
