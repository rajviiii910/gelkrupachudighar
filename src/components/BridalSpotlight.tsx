import React from 'react';
import { Sparkles, HeartHandshake, CheckCircle2, MessageCircle, Gift } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { STORE_INFO } from '../data/storeConfig';

export const BridalSpotlight: React.FC = () => {
  const { generateWhatsAppUrl, setIsSizeGuideOpen } = useStore();

  const handleBridalConsultation = () => {
    const msg = `Namaste Gelkrupa Chudighar! 👰\n\nI am getting married soon and would love to consult for a custom Bridal Chuda and bangles set to match my wedding lehenga.\n\nCould you please help me with custom design options and boutique appointment in Mota Varachha?`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const bridalSteps = [
    {
      step: '01',
      title: 'Share Your Outfit Details',
      desc: 'Send us photos of your bridal lehenga, saree, or jewelry palette so our stylists can suggest harmonizing kundan, latkan, and chuda tones.',
    },
    {
      step: '02',
      title: 'Wrist Measurement & Fitting',
      desc: 'We assist you in selecting your precise Indian bangle size (2-2 to 2-10) for maximum wedding-day comfort and royal grandeur.',
    },
    {
      step: '03',
      title: 'Bespoke Velvet Presentation',
      desc: 'Your bridal chuda set is arranged and cushioned in a keepsake velvet box, ready for your auspicious Chuda ceremony.',
    },
  ];

  return (
    <section id="bridal" className="py-24 bg-[#250206] text-[#FAF6EE] relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Duo with Luxury Framing */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl">
              <img
                src="/src/assets/images/collection_bridal_chuda_1793184886986.jpg"
                alt="Bespoke Indian Bridal Chuda Set by Gelkrupa Chudighar Surat"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif text-[#FAF6EE] italic">
                “Handcrafted Red & Ivory Chuda with Heirloom Kundan Latkans”
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 w-52 bg-[#3b050c] p-4 rounded-xl border border-[#d4af37]/50 shadow-2xl">
              <div className="flex items-center gap-2 text-[#d4af37] text-xs font-serif font-bold mb-1">
                <Gift className="w-4 h-4" />
                <span>Velvet Box Packaging</span>
              </div>
              <p className="text-[11px] text-[#FAF6EE]/80 leading-snug">
                Protective heirloom casing included with every full bridal set.
              </p>
            </div>
          </div>

          {/* Right Column: Copy & Bridal Service */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#fae8a4]" />
              <span>Royal Wedding Edition</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EE] tracking-tight leading-tight mb-6" style={{ textWrap: 'balance' }}>
              Bridal & Festive Collections Showcase
            </h2>

            <p className="text-sm sm:text-base text-[#FAF6EE]/85 font-light leading-relaxed mb-8">
              A bride’s chuda is not merely jewelry; it is a sacred symbol of auspicious beginnings and timeless grace. At <strong className="text-white font-medium">{STORE_INFO.name}</strong> in Mota Varachha, we specialize in curating custom bridal chuda sets that harmonize seamlessly with your wedding couture.
            </p>

            {/* 3 Step Consultation Process */}
            <div className="space-y-4 mb-8">
              {bridalSteps.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="font-serif font-bold text-lg text-[#d4af37] shrink-0 w-8 pt-0.5">
                    {item.step}.
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-sm sm:text-base text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FAF6EE]/75 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={handleBridalConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-xl shadow-lg transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book Bridal Consultation via WhatsApp</span>
              </button>

              <button
                onClick={() => setIsSizeGuideOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 border border-[#d4af37]/40 text-[#FAF6EE] text-xs font-medium rounded-xl transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-[#d4af37]" />
                <span>Bangle Sizing Assistance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
