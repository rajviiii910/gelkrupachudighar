import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { STORE_INFO } from '../data/storeConfig';

export const FloatingWhatsApp: React.FC = () => {
  const { generateWhatsAppUrl } = useStore();
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏 I am visiting your website and have a question regarding bangles / bridal chuda.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip greeting balloon */}
      {showTooltip && (
        <div className="relative bg-white text-stone-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-stone-200 max-w-[210px] hidden sm:flex items-center gap-2 animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-600 flex items-center justify-center text-[10px]"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <div className="text-[11px] leading-snug">
            <strong className="text-[#3b050c] block font-serif">Need help choosing?</strong>
            Chat with our Surat boutique on WhatsApp!
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleOpenWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={`Chat with ${STORE_INFO.name} on WhatsApp`}
      >
        {/* Subtle ripple pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </button>
    </aside>
  );
};
