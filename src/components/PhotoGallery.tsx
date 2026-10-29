import React, { useState } from 'react';
import { Sparkles, Eye, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/storeConfig';
import { ImageLightbox } from './ImageLightbox';

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Storefront', 'Bridal', 'Glass', 'Traditional', 'Festive'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FCF9F2] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Visual Splendour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3b050c] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Boutique Photo Gallery
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            A glimpse into the intricate craftsmanship, vibrant hues, and radiant bridal sets curated at Gelkrupa Chudighar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? 'bg-[#3b050c] text-[#FAF6EE] shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-[#d4af37]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group cursor-pointer relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Hover icon */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform transition-transform duration-300">
                <div className="text-[11px] font-mono tracking-wider text-[#fae8a4] uppercase mb-1">
                  {item.category}
                </div>
                <h3 className="font-serif font-bold text-base text-white group-hover:text-[#fae8a4] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
