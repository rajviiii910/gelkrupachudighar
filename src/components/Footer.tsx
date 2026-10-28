import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Heart, Sparkles, Instagram } from 'lucide-react';
import { STORE_INFO, COLLECTIONS } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const Footer: React.FC = () => {
  const { generateWhatsAppUrl, setIsSizeGuideOpen } = useStore();

  const handleWhatsApp = () => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏 I am visiting your website and would like more details.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#250206] text-[#FAF6EE] pt-16 pb-12 border-t border-[#d4af37]/30 relative overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight text-[#FAF6EE]">
              {STORE_INFO.name}
            </h3>
            <p className="text-xs text-[#d4af37] font-serif tracking-widest uppercase">
              {STORE_INFO.gujaratiMotto}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed font-light">
              Mota Varachha’s distinguished bridal chudi & Indian bangles boutique. Specializing in handcrafted glass bangles, temple kadas, and custom wedding bridal sets.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#250206] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#b69228] hover:from-white hover:to-[#d4af37] rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#250206]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Our Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF6EE]/80">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <a
                    href="#collections"
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-[#d4af37] hover:underline"
                >
                  Indian Bangle Sizing Chart
                </button>
              </li>
            </ul>
          </div>

          {/* Showroom & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
              Showroom & Timings
            </h4>

            <div className="flex items-start gap-3 text-xs text-[#FAF6EE]/85">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium">{STORE_INFO.name}</strong>
                <span>{STORE_INFO.location.fullAddress}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#FAF6EE]/85">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium text-white">Boutique Hours:</span>
                <span>Mon – Sat: 10:00 AM – 9:30 PM</span>
                <span className="block">Sun: 11:00 AM – 9:00 PM</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#FAF6EE]/85 pt-1">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <a
                href={`tel:${STORE_INFO.contact.whatsappNumber}`}
                className="hover:text-[#d4af37] font-mono tabular-nums"
              >
                {STORE_INFO.contact.displayPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6EE]/60">
          <div>
            © {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved. Mota Varachha, Surat, Gujarat.
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#FAF6EE]/60">
            <span>Crafted with love for Indian brides & celebrations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
