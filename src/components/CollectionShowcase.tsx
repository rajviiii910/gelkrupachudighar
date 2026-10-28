import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTIONS, Collection } from '../data/storeConfig';

interface CollectionShowcaseProps {
  onSelectCollection: (category: Collection['id']) => void;
}

export const CollectionShowcase: React.FC<CollectionShowcaseProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections" className="py-24 bg-[#FAF6EE] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Curated Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3b050c] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Shop by Collection
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            From the auspicious tinkling of pure glass chudi to regal bridal chuda and antique temple kadas, explore our quintessential offerings.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS.map((col, index) => {
            const isFeatured = index === 0; // Bridal gets prominent card
            return (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#d4af37]/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Frame */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={col.image}
                    alt={`${col.name} at Gelkrupa Chudighar Surat`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Clean unboxed count label */}
                  <div className="absolute top-4 left-4 text-[11px] font-medium tracking-wider uppercase text-white bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm">
                    {col.countLabel}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-serif text-[#b69228] italic mb-1">
                      {col.subtitle}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#3b050c] group-hover:text-[#931427] transition-colors flex items-center justify-between">
                      <span>{col.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#d4af37] transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-[#3b050c] group-hover:text-[#931427]">
                    <span>View Collection</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
