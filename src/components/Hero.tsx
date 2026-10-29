import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, MapPin, Star, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const Hero: React.FC = () => {
  const { generateWhatsAppUrl } = useStore();

  const handleWhatsAppChat = () => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏 I am looking for bridal chudi and bangles collections. Could you assist me with your latest designs?`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#250206] text-[#FAF6EE]">
      {/* Background Image with Measured Scrim for WCAG AA readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_bridal_bangles_1793184886546.jpg"
          alt="Royal Indian Bridal Bangles and Chudi Collection at Gelkrupa Chudighar Surat"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out hover:scale-100"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#250206]/95 via-[#3b050c]/85 to-[#250206]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#250206]/40 to-[#250206]/90" />
      </div>

      {/* Decorative Traditional Motif Top/Bottom subtle borders */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60 z-10" />
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60 z-10" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* Subtle Gujarati Cultural Kicker (Clean unboxed text, no pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium tracking-widest text-[#d4af37] uppercase mb-3">
          <Sparkles className="w-4 h-4 text-[#fae8a4]" />
          <span>{STORE_INFO.gujaratiMotto}</span>
          <span aria-hidden="true">·</span>
          <span>Heavy Bridal Jewellery & Bangles Boutique · Mota Varachha, Surat</span>
        </div>

        {/* Live Wedding Season Offer Ticker Pill */}
        <div className="mb-5">
          <a
            href="#offers"
            className="group inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-[#d4af37]/30 to-amber-500/20 hover:from-amber-500/30 hover:to-amber-500/30 border border-[#d4af37]/60 text-xs font-semibold text-[#fae8a4] backdrop-blur-md transition-all shadow-md hover:scale-102"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>🎁 Wedding Season Special: Free Bridal Chudi Set with Heavy AD Diamond Necklace!</span>
            <span className="text-[#d4af37] underline font-bold group-hover:text-white">View Offers &rarr;</span>
          </a>
        </div>

        {/* Main Heading - Exact user requirement */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#FAF6EE] leading-[1.15] mb-6 max-w-4xl" style={{ textWrap: 'balance' }}>
          Every Bangle Tells a{' '}
          <span className="gold-gradient-text italic font-normal">
            Beautiful Story
          </span>
        </h1>

        {/* Editorial Subtitle with strong Jewellery focus */}
        <p className="text-base sm:text-lg md:text-xl text-[#FAF6EE]/85 max-w-3xl font-light leading-relaxed mb-8" style={{ textWrap: 'balance' }}>
          Welcome to <strong className="font-semibold text-white">{STORE_INFO.name} ({STORE_INFO.gujaratiName})</strong> — Surat’s exclusive boutique for <span className="text-[#fae8a4] font-medium">heavy American Diamond (AD) necklace sets, royal bridal chokers, Rani Haars</span>, custom wedding chuda with pearl latkans, and handcrafted colourful glass bangles.
        </p>

        {/* Justdial Verification Badge */}
        <div className="mb-10">
          <a
            href={STORE_INFO.justdial.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-[#d4af37]/40 hover:border-[#d4af37] text-xs font-medium text-[#FAF6EE] backdrop-blur-xs transition-colors"
          >
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold ml-1 text-white">{STORE_INFO.justdial.rating} / 5</span>
            </div>
            <span className="text-white/40">·</span>
            <span>Justdial Verified Business in Surat</span>
            <ExternalLink className="w-3 h-3 text-[#d4af37]" />
          </a>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#featured"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-[#250206] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#b69228] hover:from-[#fff] hover:to-[#d4af37] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
          >
            Explore Heavy Jewellery & Sets
          </a>

          <a
            href="#offers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#FAF6EE] bg-amber-500/20 hover:bg-amber-500/30 border border-[#d4af37] rounded-xl backdrop-blur-xs transition-all duration-300 active:scale-[0.98]"
          >
            <span>Wedding Offers 🎁</span>
          </a>

          <button
            onClick={handleWhatsAppChat}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#FAF6EE] bg-white/10 hover:bg-white/15 border border-[#d4af37]/40 hover:border-[#d4af37] rounded-xl backdrop-blur-xs transition-all duration-300 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Enquiry</span>
          </button>
        </div>

        {/* Trust Highlights Strip (Zero-pill discipline, clean typographic layout) */}
        <div className="w-full max-w-4xl pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#d4af37]">AD Diamond</div>
            <div className="text-xs text-[#FAF6EE]/75 mt-0.5">Heavy Bridal Necklaces</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#d4af37]">Royal Offers</div>
            <div className="text-xs text-[#FAF6EE]/75 mt-0.5">Free Bridal Chuda Combo</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#d4af37]">Bridal Chuda</div>
            <div className="text-xs text-[#FAF6EE]/75 mt-0.5">Custom Latkan Sets</div>
          </div>
          <div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#d4af37]">Mota Varachha</div>
            <div className="text-xs text-[#FAF6EE]/75 mt-0.5">ABC Circle Showroom</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#collections"
          aria-label="Scroll to collections"
          className="mt-12 text-[#FAF6EE]/50 hover:text-[#d4af37] transition-colors animate-bounce p-2"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
