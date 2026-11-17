import React from 'react';

// Decorative brand rainbow (matches the printed workbook and share image).
const BANDS = ['#2D5A4A', '#A7C4A0', '#E8D5B7', '#F4D35E'];

export default function RainbowArc({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 104" aria-hidden="true" focusable="false">
      {BANDS.map((colour, i) => {
        const r = 92 - i * 22;
        return (
          <path
            key={colour}
            d={`M${100 - r},104 A${r},${r} 0 0 1 ${100 + r},104`}
            fill="none"
            stroke={colour}
            strokeWidth="16"
          />
        );
      })}
    </svg>
  );
}
