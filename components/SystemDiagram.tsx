import React from 'react';
import { motion } from 'framer-motion';

export const SystemDiagram: React.FC = () => {
  const nodes = [
    { id: 'inbound', label: 'Inbound', x: 60, y: 80 },
    { id: 'qualify', label: 'Qualify', x: 240, y: 80 },
    { id: 'route', label: 'Route', x: 420, y: 80 },
    { id: 'outbound', label: 'Outbound', x: 240, y: 220 },
    { id: 'crm', label: 'CRM Sync', x: 60, y: 320 },
    { id: 'analytics', label: 'Analytics', x: 420, y: 320 },
  ];

  const links: [string, string][] = [
    ['inbound', 'qualify'],
    ['qualify', 'route'],
    ['qualify', 'outbound'],
    ['outbound', 'crm'],
    ['outbound', 'analytics'],
    ['route', 'analytics'],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative w-full">
      {/* Glow backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-accent/20 blur-[120px] rounded-full opacity-60"></div>
      </div>

      {/* Card frame */}
      <div className="gradient-border-static p-6 sm:p-8 backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-white/15"></span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-ink-mute uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse-soft"></span>
            system live
          </div>
        </div>

        <svg viewBox="0 0 480 380" className="w-full h-auto" role="img" aria-label="Architecture diagram showing inbound, qualify, route, outbound, CRM sync, and analytics nodes">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#9C82FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="nodeGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1E1A2E" />
              <stop offset="100%" stopColor="#0F0F18" />
            </radialGradient>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background grid lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`hgrid-${i}`}
              x1={0}
              x2={480}
              y1={i * 50}
              y2={i * 50}
              stroke="rgba(255,255,255,0.025)"
              strokeWidth={1}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`vgrid-${i}`}
              x1={i * 50}
              x2={i * 50}
              y1={0}
              y2={380}
              stroke="rgba(255,255,255,0.025)"
              strokeWidth={1}
            />
          ))}

          {/* Connections */}
          {links.map(([a, b], i) => {
            const from = nodeMap[a];
            const to = nodeMap[b];
            return (
              <g key={`link-${i}`}>
                <line
                  x1={from.x + 60}
                  y1={from.y + 22}
                  x2={to.x + 60}
                  y2={to.y + 22}
                  stroke="url(#lineGrad)"
                  strokeWidth={1.4}
                />
                <motion.circle
                  r={2.5}
                  fill="#B6A3FF"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [from.x + 60, to.x + 60],
                    cy: [from.y + 22, to.y + 22],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: i * 0.55,
                    ease: 'easeInOut',
                  }}
                  style={{ filter: 'drop-shadow(0 0 4px #9C82FF)' }}
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((n, i) => (
            <g key={n.id}>
              <rect
                x={n.x}
                y={n.y}
                width={120}
                height={44}
                rx={10}
                fill="url(#nodeGrad)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={1}
              />
              <motion.rect
                x={n.x}
                y={n.y}
                width={120}
                height={44}
                rx={10}
                fill="none"
                stroke="rgba(124,92,255,0.6)"
                strokeWidth={1}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3.5, delay: i * 0.4, repeat: Infinity }}
              />
              <circle
                cx={n.x + 14}
                cy={n.y + 22}
                r={3.2}
                fill="#9C82FF"
                filter="url(#nodeGlow)"
              />
              <text
                x={n.x + 26}
                y={n.y + 27}
                fontFamily="Inter, sans-serif"
                fontSize={12}
                fontWeight={500}
                fill="#F5F5FA"
                letterSpacing="-0.01em"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Bottom status bar */}
        <div className="mt-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-ink-mute">
          <span>node graph · v2.4</span>
          <span className="text-accent-300">12 active flows</span>
        </div>
      </div>
    </div>
  );
};
