import type { CSSProperties } from 'react';

type EmojiParticle = {
  left: number;
  delay: number;
  duration: number;
  size: number;
};

const createParticles = (seed: string, count = 18): EmojiParticle[] => {
  // Deterministic layout so every card shares identical flow
  const baseStep = count > 1 ? 96 / (count - 1) : 0;
  const sizePattern = [2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0];

  return Array.from({ length: count }, (_, idx) => {
    const baseLeft = 2 + idx * baseStep;
    const wave = Math.sin(idx * 1.35) * 4.2;
    const micro = Math.cos(idx * 0.55) * 1.4;
    const left = Math.min(98, Math.max(2, baseLeft + wave + micro));

    const delay = 0.08 + idx * 0.18 + Math.sin(idx * 0.75) * 0.04;
    const duration = 2.4 + (Math.sin(idx * 1.12) + 1) * 0.55; // slight speed variance
    const size = 28 + (sizePattern[idx] ?? 0);

    return { left, delay, duration, size };
  });
};

export default function EmojiParticles({ emoji, seed }: { emoji: string; seed: string }) {
  const particles = createParticles(seed, 18);

  return (
    <div className="emoji-cloud card-emoji" aria-hidden>
      {particles.map((particle, idx) => {
        const style: CSSProperties = {
          left: `${particle.left}%`,
          animationDelay: `-${particle.delay}s`, // start mid-cycle for smoother entry
          animationDuration: `${particle.duration}s`,
          fontSize: `${particle.size}px`,
        };

        return (
          <span key={`${seed}-${idx}`} className="emoji-spark" style={style}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
