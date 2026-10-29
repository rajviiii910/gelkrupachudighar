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
          <div className="relative space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl">
                <img
                  src="/src/assets/images/ad_diamond_heavy_necklace_1793263370796.jpg"
                  alt="Heavy Bridal American Diamond Necklace Set"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/5 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-serif text-[#FAF6EE] leading-tight">
                  “Heavy AD Bridal Choker & Tikka Set”
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl">
                <img
                  src="/src/assets/images/collection_bridal_chuda_1793184886986.jpg"
                  alt="Bespoke Indian Bridal Chuda Set"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-4/5 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-serif text-[#FAF6EE] leading-tight">
                  “Handcrafted Red & Ivory Bridal Chuda”
                </div>
              </div>
            </div>

            {/* Accent card linking to offers */}
            <a
              href="#offers"
              className="group bg-[#3b050c] p-3.5 rounded-xl border border-[#d4af37]/60 shadow-xl flex items-center justify-between hover:border-[#d4af37] transition-all hover:bg-[#480710]"
            >
              <div className="flex items-center gap-2.5">
                <Gift className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <div className="text-xs font-serif font-bold text-white flex items-center gap-1.5">
                    <span>Royal Bridal Combo Offer</span>
                    <span className="text-[10px] text-amber-300 font-mono bg-amber-500/20 px-1.5 py-0.2 rounded">FREE CHUDA</span>
                  </div>
                  <div className="text-[11px] text-[#FAF6EE]/80">Free Bridal Chudi Set with Heavy AD Diamond Necklace</div>
                </div>
              </div>
              <span className="text-xs text-[#d4af37] underline font-semibold group-hover:text-white">Claim &rarr;</span>
            </a>
          </div>

          {/* Right Column: Copy & Bridal Service */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#d4af37] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#fae8a4]" />
              <span>Royal Bridal & Jewellery Edition</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EE] tracking-tight leading-tight mb-6" style={{ textWrap: 'balance' }}>
              Bridal Chuda & Heavy Jewellery Showcase
            </h2>

            <p className="text-sm sm:text-base text-[#FAF6EE]/85 font-light leading-relaxed mb-8">
              A bride’s adornment is a complete harmony of grace. At <strong className="text-white font-medium">{STORE_INFO.name}</strong> in Mota Varachha, Surat, we curate complete wedding collections: bespoke bridal chuda sets, heirloom kundan kadas, and grand <strong>American Diamond (AD) heavy choker sets, Rani Haars, and temple jewellery</strong> customized to your wedding lehenga palette.
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
