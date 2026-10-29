import React from 'react';
import { Sparkles, MapPin, Star, ExternalLink } from 'lucide-react';
import { STORE_INFO, BOUTIQUE_VALUES } from '../data/storeConfig';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-[#FAF6EE] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Artistry & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3b050c] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Our Story & Showroom
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            In Indian culture, the gentle chime of glass bangles carries blessings of auspiciousness, joy, and timeless celebration.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-xl bg-stone-900 aspect-4/3">
              <img
                src="/src/assets/images/boutique_store_display_1793257579012.jpg"
                alt="Gelkrupa Chudighar Showroom in Mota Varachha, Surat"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif text-[#FAF6EE]">
                “Gelkrupa Chudighar (શ્રી ગેલકૃપા ચૂડીઘર) Showroom · Mota Varachha, Surat”
              </div>
            </div>

            {/* Justdial Verified Callout */}
            <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-xs flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="font-semibold text-stone-800">4.9 / 5 Rating on Justdial</span>
              </div>
              <a
                href={STORE_INFO.justdial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b69228] hover:text-[#94741c] font-medium flex items-center gap-1"
              >
                <span>View Justdial Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-stone-700 font-light leading-relaxed">
            <h3 className="text-2xl font-serif font-bold text-[#3b050c] leading-snug">
              Every Bangle Tells a Story of Grace, Tradition, and Love
            </h3>

            <p>
              Located at <strong className="font-semibold text-[#3b050c]">Shop No. 24, Saurashtra Township, near ABC Circle in Mota Varachha, Surat</strong>,{' '}
              <strong className="font-semibold text-[#3b050c]">{STORE_INFO.name} ({STORE_INFO.gujaratiName})</strong> has established itself as a cherished destination for brides, festive celebrants, and families seeking authentic Indian chudi.
            </p>

            <p>
              From a bride preparing for her sacred pheras, to young women dressing up for the nine energetic nights of Navratri Garba, or celebrating Karwa Chauth, Diwali, and baby showers (Godhbharai), our boutique curates thousands of glass chudi, kundan kadas, and custom bridal chuda sets that harmonize with traditional attire.
            </p>

            <p>
              Every pair of kadas and chudi stack is carefully inspected for smooth inner comfort and perfect sizing (from 2-2 to 2-10). Visit our Mota Varachha showroom or connect directly on WhatsApp at <strong className="font-semibold font-mono text-[#3b050c]">{STORE_INFO.contact.displayPhone}</strong>.
            </p>

            <div className="pt-2 text-xs font-serif text-[#b69228] italic">
              — {STORE_INFO.name}, Shop No. 24, Saurashtra Township, Mota Varachha, Surat, Gujarat
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUTIQUE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-xs hover:border-[#d4af37]/60 hover:shadow-md transition-all duration-300"
            >
              <div className="font-serif font-bold text-xl text-[#d4af37] mb-2">
                0{idx + 1}.
              </div>
              <h4 className="font-serif font-bold text-[#3b050c] text-base mb-2">
                {val.title}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
