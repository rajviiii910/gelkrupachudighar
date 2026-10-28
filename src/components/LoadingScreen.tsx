import React, { useEffect, useState } from 'react';
import { STORE_INFO } from '../data/storeConfig';

export const LoadingScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = prefersReducedMotion ? 400 : 1100;

    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#250206] text-[#FAF6EE] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated Rotating Golden Bangle Motif */}
      <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/30 animate-ping opacity-25" />

        {/* Traditional Bangle with simulated kundan studs */}
        <div className="w-24 h-24 rounded-full border-3 border-[#d4af37] border-t-[#fae8a4] border-b-[#b69228] animate-spin flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
          <div className="w-18 h-18 rounded-full border border-dashed border-[#fae8a4]/60" />
        </div>

        {/* Center Sparkle symbol */}
        <div className="absolute text-[#d4af37] text-lg font-serif">
          ✦
        </div>
      </div>

      {/* Brand Title */}
      <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#FAF6EE] mb-2">
        {STORE_INFO.name}
      </h1>

      <p className="text-xs font-serif text-[#d4af37] tracking-widest uppercase mb-1">
        {STORE_INFO.gujaratiMotto}
      </p>

      <p className="text-xs text-[#FAF6EE]/70 font-light italic">
        “Every Bangle Tells a Beautiful Story”
      </p>
    </div>
  );
};
