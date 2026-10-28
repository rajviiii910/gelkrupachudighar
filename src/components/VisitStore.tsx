import React from 'react';
import { MapPin, Navigation, Clock, Phone, Sparkles, Car, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const VisitStore: React.FC = () => {
  const { generateWhatsAppUrl } = useStore();

  const handleNotifyVisit = () => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏 I am planning to visit your boutique in Mota Varachha, Surat. Could you please confirm if you are open today and if an appointment is needed for bridal chuda?`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="visit" className="py-24 bg-[#FAF6EE] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Mota Varachha, Surat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3b050c] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Visit Our Boutique
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Experience the vibrant colors and try bangles in person. Our friendly team is ready to assist you in finding your flawless wrist fit.
          </p>
        </div>

        {/* 2-Column Storefront Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Timings (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#b69228] uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <span>Showroom Address</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#3b050c] mb-1">
                  {STORE_INFO.name}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {STORE_INFO.location.fullAddress}
                </p>
                <div className="mt-3">
                  <a
                    href={STORE_INFO.location.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#250206] bg-gradient-to-r from-[#fae8a4] to-[#d4af37] hover:from-white hover:to-[#d4af37] rounded-lg shadow-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Timings */}
              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#b69228] uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Store Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                  {STORE_INFO.contact.hours.map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-1 border-b border-stone-50">
                      <span className="font-medium text-stone-600">{h.days}</span>
                      <span className="font-mono tabular-nums font-semibold text-[#3b050c]">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boutique Amenities */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="text-xs font-semibold text-[#3b050c] uppercase tracking-wider mb-2">
                  Visitor Highlights:
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Dedicated bridal outfit matching table & lighting</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Full range of trial bangles in all sizes (2-2 to 2-10)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <Car className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>Convenient vehicle parking available nearby</span>
                </div>
              </div>
            </div>

            {/* Notify visit button */}
            <div className="pt-6 mt-6 border-t border-stone-100">
              <button
                onClick={handleNotifyVisit}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#3b050c] hover:bg-[#540914] text-[#FAF6EE] text-xs font-semibold rounded-xl transition-colors"
              >
                <span>Notify Boutique of Your Visit</span>
              </button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col min-h-[380px] lg:min-h-full">
            <div className="px-5 py-3.5 bg-[#FAF6EE] border-b border-stone-200 flex items-center justify-between text-xs">
              <span className="font-medium text-[#3b050c] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Mota Varachha, Surat (Interactive Map)</span>
              </span>
              <a
                href={STORE_INFO.location.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b69228] hover:text-[#94741c] font-semibold underline text-[11px]"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[350px]">
              <iframe
                title="Gelkrupa Chudighar Location in Mota Varachha, Surat"
                src="https://maps.google.com/maps?q=Mota+Varachha,+Surat,+Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
