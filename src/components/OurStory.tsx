import React from 'react';
import { Sparkles, ShieldCheck, Heart, Eye } from 'lucide-react';
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
            Our Story & Philosophy
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            In Indian culture, the gentle chime of glass bangles carries blessings of auspiciousness, joy, and timeless celebration.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-xl bg-stone-900 aspect-4/3">
              <img
                src="/src/assets/images/collection_glass_bangles_1793184887897.jpg"
                alt="Traditional glass bangles craftsmanship at Gelkrupa Chudighar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif text-[#FAF6EE] italic">
                “Celebrating the vibrant hues of Indian womanhood & culture”
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-stone-700 font-light leading-relaxed">
            <h3 className="text-2xl font-serif font-bold text-[#3b050c] leading-snug">
              Every Bangle Tells a Story of Grace, Tradition, and Love
            </h3>

            <p>
              Located in the vibrant community of <strong className="font-semibold text-[#3b050c]">Mota Varachha, Surat</strong>,{' '}
              <strong className="font-semibold text-[#3b050c]">{STORE_INFO.name}</strong> was created with a heartfelt devotion to Indian adornment. We believe that choosing bangles is not just another shopping trip — it is an emotional and joyful ritual.
            </p>

            <p>
              From a bride preparing for her sacred pheras, to young women dressing up for the nine energetic nights of Navratri Garba, or celebrating Karwa Chauth and Diwali, our boutique curates pieces that honor tradition while maintaining the highest standard of finish and comfort.
            </p>

            <p>
              Every pair of kadas, every stack of pure glass chudi, and every bridal set is carefully inspected so you feel radiant from the moment it slips over your hand.
            </p>

            <div className="pt-2 text-xs font-serif text-[#b69228] italic">
              — {STORE_INFO.name}, Mota Varachha, Surat, Gujarat
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
