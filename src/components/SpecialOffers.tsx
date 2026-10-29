import React, { useState } from 'react';
import { Tag, Sparkles, Copy, Check, MessageCircle, Gift, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { SPECIAL_OFFERS, SpecialOffer, STORE_INFO } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const SpecialOffers: React.FC = () => {
  const { generateWhatsAppUrl } = useStore();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  const handleClaimOffer = (offer: SpecialOffer) => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏\n\nI want to claim your exclusive offer:\n🎉 *${offer.title}* (${offer.gujaratiTitle})\n🎁 Offer: *${offer.discountText}*\n🏷️ Promo Code: *${offer.promoCode}*\n\nPlease share the heavy American Diamond (AD) jewellery and bridal designs available under this offer!`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="offers" className="py-24 bg-gradient-to-b from-[#250206] via-[#330309] to-[#250206] text-[#FAF6EE] relative overflow-hidden">
      {/* Decorative Gold Radial Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[650px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative Top/Bottom Hairlines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-xs font-semibold uppercase tracking-widest text-[#fae8a4] mb-4 backdrop-blur-xs">
            <Gift className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Wedding Season Special Privileges · લગ્ન સ્પેશિયલ ઓફર્સ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF6EE] tracking-tight leading-tight">
            Exclusive Boutique Offers & Bridal Combos
          </h2>

          <p className="mt-4 text-base text-[#FAF6EE]/80 font-light leading-relaxed">
            Elevate your auspicious wedding celebrations with signature privileges on heavy American Diamond (AD) jewellery sets, Rani Haars, and custom bridal chuda at <span className="text-white font-medium">{STORE_INFO.name}</span>, Mota Varachha, Surat.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-[#d4af37] font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Limited Wedding Season Validity</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Justdial 4.9 ★ Verified Boutique</span>
            </span>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SPECIAL_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.promoCode;

            return (
              <div
                key={offer.id}
                className={`relative rounded-3xl overflow-hidden border backdrop-blur-xs transition-all duration-300 flex flex-col justify-between ${
                  offer.isFeatured
                    ? 'bg-gradient-to-br from-[#3d060e] via-[#2a0308] to-[#1c0205] border-[#d4af37]/60 shadow-2xl hover:border-[#d4af37]'
                    : 'bg-[#2a0308]/90 border-white/15 hover:border-[#d4af37]/50 shadow-xl'
                }`}
              >
                {/* Image & Ribbon Banner */}
                <div className="relative aspect-16/9 overflow-hidden bg-black/40">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center scale-102 hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#250206] via-[#250206]/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#d4af37] text-[#250206] text-[11px] font-bold tracking-wider uppercase rounded-md shadow-md">
                      <Sparkles className="w-3 h-3 fill-[#250206]" />
                      <span>{offer.badge}</span>
                    </span>
                  </div>

                  {/* Discount Callout Banner at bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-md">
                      {offer.discountText}
                    </div>
                    <div className="text-xs text-[#fae8a4] font-medium drop-shadow-sm">
                      {offer.validityText}
                    </div>
                  </div>
                </div>

                {/* Offer Details Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-serif italic text-[#d4af37] mb-1">
                      {offer.gujaratiTitle}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {offer.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#FAF6EE]/80 leading-relaxed font-light mb-6">
                      {offer.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-6">
                      {offer.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#FAF6EE]/90">
                          <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Promo Code & Action Button Area */}
                  <div className="pt-5 border-t border-white/10 space-y-4">
                    {/* Promo Code Bar */}
                    <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/40 border border-[#d4af37]/30">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-[#d4af37]" />
                        <div className="text-left">
                          <div className="text-[10px] text-[#FAF6EE]/60 uppercase tracking-widest font-mono">Use Promo Code</div>
                          <div className="font-mono font-bold text-sm text-[#fae8a4] tracking-wider">{offer.promoCode}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopyCode(offer.promoCode)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isCopied
                            ? 'bg-[#25D366] text-white'
                            : 'bg-white/15 hover:bg-white/25 text-[#FAF6EE] border border-white/20'
                        }`}
                        title="Copy Promo Code"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Claim on WhatsApp CTA */}
                    <button
                      onClick={() => handleClaimOffer(offer)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#b69228] hover:from-[#fff] hover:to-[#d4af37] text-[#250206] font-semibold text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-[0.99]"
                    >
                      <MessageCircle className="w-4 h-4 fill-[#250206]" />
                      <span>Claim This Offer via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="text-[11px] text-center text-[#FAF6EE]/50 font-light">
                      *{offer.terms}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bridal Styling Invitation Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-[#3b050c] via-[#4d0711] to-[#3b050c] border border-[#d4af37]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Personalized Showroom Consultation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Visiting Our Showroom with Your Wedding Outfit?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/80 font-light max-w-xl">
              Bring your bridal lehenga or saree fabric to our boutique at Saurashtra Township, Mota Varachha. Our specialists will match heavy AD diamond chokers and custom chudi perfectly to your embroidery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${STORE_INFO.contact.callNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-colors"
            >
              <span>Call: {STORE_INFO.contact.displayCallNumber}</span>
            </a>

            <button
              onClick={() => {
                const msg = `Namaste Gelkrupa Chudighar! 🙏 I would like to book a bridal jewellery & chudi matching appointment at your Mota Varachha showroom with my wedding outfit.`;
                window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
