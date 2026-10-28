import React from 'react';
import { X, Ruler, HelpCircle, CheckCircle2 } from 'lucide-react';
import { BANGLE_SIZE_CHART } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useStore();

  if (!isSizeGuideOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF6EE] text-[#250206] border border-[#d4af37]/40 shadow-2xl rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/30 bg-[#3b050c] text-[#FAF6EE]">
          <div className="flex items-center gap-3">
            <Ruler className="w-5 h-5 text-[#d4af37]" />
            <h3 id="size-guide-title" className="text-xl font-serif font-semibold tracking-wide">
              Indian Bangle Sizing Guide
            </h3>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 text-[#FAF6EE]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close size guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-sm">
          {/* Overview text */}
          <div className="bg-[#FCF9F2] p-4 rounded-xl border border-[#d4af37]/20">
            <p className="text-stone-700 leading-relaxed">
              In India, bangle sizes are traditionally measured in inches and sixteenths of an inch (e.g.,
              <strong className="text-[#3b050c]"> 2-6</strong> means 2 and 6/16 inches in diameter, or 2⅜″).
              For glass and bridal chudi, selecting the correct size ensures comfortable sliding over your hand and a graceful drape on your wrist.
            </p>
          </div>

          {/* Sizing Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#3b050c]/20 text-xs font-semibold uppercase tracking-wider text-[#3b050c]">
                  <th className="py-2.5 px-3">Bangle Size</th>
                  <th className="py-2.5 px-3">Inner Diameter (mm)</th>
                  <th className="py-2.5 px-3">Inner Diameter (Inches)</th>
                  <th className="py-2.5 px-3">Hand Circumference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200/80 font-medium">
                {BANGLE_SIZE_CHART.map((row) => (
                  <tr key={row.size} className="hover:bg-[#FCF9F2]/90 transition-colors">
                    <td className="py-3 px-3 font-serif font-bold text-[#3b050c] text-base">
                      {row.size}
                    </td>
                    <td className="py-3 px-3 text-stone-700 font-mono tabular-nums">
                      {row.innerDiameterMm} mm
                    </td>
                    <td className="py-3 px-3 text-stone-700 font-mono tabular-nums">
                      {row.innerDiameterInches}
                    </td>
                    <td className="py-3 px-3 text-stone-700 font-mono tabular-nums">
                      ~{row.circumferenceMm} mm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <div className="flex items-center gap-2 text-[#3b050c] font-semibold text-base font-serif">
              <HelpCircle className="w-4 h-4 text-[#d4af37]" />
              <h4>How to Measure at Home</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/80 p-4 rounded-xl border border-stone-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-stone-900 mb-1">Method 1: Existing Bangle</h5>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Take a round bangle that fits you comfortably. Measure the inner diameter straight across from inside edge to inside edge with a ruler in millimeters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-stone-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-stone-900 mb-1">Method 2: Hand Knuckles</h5>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      Tuck your thumb into your palm (as if putting on a bangle). Wrap a strip of paper tightly around the widest part of your knuckles, mark the point, and measure length.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Need help note */}
          <div className="p-3 text-center bg-[#3b050c]/5 rounded-xl border border-[#3b050c]/10 text-xs text-stone-700">
            Unsure of your size? You can always consult our boutique team directly on WhatsApp or try sizes in person at our Mota Varachha showroom!
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F6EFE0] border-t border-[#d4af37]/20 flex justify-end">
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#3b050c] hover:bg-[#540914] rounded-lg transition-colors shadow-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
