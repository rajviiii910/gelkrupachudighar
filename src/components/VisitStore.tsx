import React from 'react';
import { MapPin, Navigation, Clock, Phone, Sparkles, Car, CheckCircle2, Star, ExternalLink, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const VisitStore: React.FC = () => {
  const { generateWhatsAppUrl } = useStore();

  const handleNotifyVisit = () => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏 I am planning to visit your boutique at Shop No. 24, Saurashtra Township, Mota Varachha, Surat. Could you please confirm if you are open today?`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="visit" className="py-24 bg-[#FAF6EE] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Mota Varachha, Surat · Gujarat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3b050c] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Visit Our Showroom & Boutique
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Welcome to <strong className="font-semibold text-[#3b050c]">{STORE_INFO.name} ({STORE_INFO.gujaratiName})</strong>. Visit us in person to explore thousands of glass bangles, bridal chuda sets, and get custom fitting assistance.
          </p>

          {/* Justdial Verified Badge */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <a
              href={STORE_INFO.justdial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF9F2] border border-[#d4af37]/40 hover:border-[#d4af37] text-xs font-medium text-[#3b050c] shadow-xs transition-colors"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <span className="font-bold ml-1 text-stone-800">{STORE_INFO.justdial.rating} / 5</span>
              </div>
              <span className="text-stone-400">·</span>
              <span className="text-xs font-semibold text-[#250206]">Justdial Verified Profile</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Showroom Visual Showcase Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-md group">
            <img
              src="/src/assets/images/boutique_store_display_1793257579012.jpg"
              alt="Gelkrupa Chudighar Showroom in Mota Varachha Surat"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#fae8a4]">Showroom Display</span>
              <h4 className="font-serif font-bold text-lg text-white">
                Extensive Glass & Bridal Bangles Collection
              </h4>
              <p className="text-xs text-stone-200 mt-0.5">
                Thousands of authentic chudi designs neatly organized across illuminated showcases.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-md group">
            <img
              src="/src/assets/images/boutique_counter_trial_1793257578750.jpg"
              alt="Bangles Trial Counter at Gelkrupa Chudighar"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#fae8a4]">Trial & Consultation</span>
              <h4 className="font-serif font-bold text-lg text-white">
                Comfortable Fitting & Hand Measurement Counter
              </h4>
              <p className="text-xs text-stone-200 mt-0.5">
                Try different styles on velvet rolls with our experienced staff to match your outfit.
              </p>
            </div>
          </div>
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
                  <span>Verified Showroom Address</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#3b050c] mb-1">
                  {STORE_INFO.name} ({STORE_INFO.gujaratiName})
                </h3>
                <div className="text-sm font-semibold text-stone-900 mt-1">
                  {STORE_INFO.location.shopNo}, {STORE_INFO.location.complex}
                </div>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {STORE_INFO.location.landmark}, {STORE_INFO.location.area}, {STORE_INFO.location.city} - {STORE_INFO.location.pincode}, Gujarat
                </p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={STORE_INFO.location.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#250206] bg-gradient-to-r from-[#fae8a4] to-[#d4af37] hover:from-white hover:to-[#d4af37] rounded-lg shadow-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Maps</span>
                  </a>

                  <a
                    href={STORE_INFO.justdial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Justdial Listing</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone Call & WhatsApp */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#b69228] uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Contact & Calling Numbers</span>
                </div>
                <div className="flex items-center justify-between py-1 text-xs sm:text-sm">
                  <span className="text-stone-600 font-medium">Direct Call:</span>
                  <a
                    href={`tel:${STORE_INFO.contact.callNumber}`}
                    className="font-mono font-bold text-[#3b050c] hover:text-[#931427] transition-colors"
                  >
                    {STORE_INFO.contact.displayCallNumber}
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 text-xs sm:text-sm">
                  <span className="text-stone-600 font-medium">WhatsApp / Mobile:</span>
                  <a
                    href={`tel:${STORE_INFO.contact.whatsappNumber}`}
                    className="font-mono font-bold text-stone-700 hover:text-[#25D366] transition-colors"
                  >
                    {STORE_INFO.contact.displayPhone}
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
                  <span>Convenient vehicle parking at Saurashtra Township</span>
                </div>
              </div>
            </div>

            {/* Notify visit button */}
            <div className="pt-6 mt-6 border-t border-stone-100 flex gap-2">
              <button
                onClick={handleNotifyVisit}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Before Visiting</span>
              </button>

              <a
                href={`tel:${STORE_INFO.contact.callNumber}`}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#3b050c] hover:bg-[#540914] text-white text-xs font-semibold rounded-xl transition-colors shrink-0"
                title={`Call ${STORE_INFO.contact.displayCallNumber}`}
              >
                <Phone className="w-4 h-4" />
                <span>Call ({STORE_INFO.contact.displayCallNumber})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col min-h-[420px] lg:min-h-full">
            <div className="px-5 py-3.5 bg-[#FAF6EE] border-b border-stone-200 flex items-center justify-between text-xs">
              <span className="font-medium text-[#3b050c] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Shop No. 24, Saurashtra Township, Mota Varachha, Surat</span>
              </span>
              <a
                href={STORE_INFO.location.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b69228] hover:text-[#94741c] font-semibold underline text-[11px]"
              >
                Open in Maps ↗
              </a>
            </div>

            <div className="relative flex-1 w-full min-h-[400px]">
              <iframe
                title="Gelkrupa Chudighar Location in Mota Varachha, Surat"
                src={STORE_INFO.location.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
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
