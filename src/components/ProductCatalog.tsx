import React, { useState } from 'react';
import { Search, Send, Plus, Eye, Check, Ruler, Sparkles } from 'lucide-react';
import { PRODUCTS, Product, Collection } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';
import { shareProductToWhatsApp } from '../utils/shareUtils';

interface ProductCatalogProps {
  selectedCategory: Collection['id'] | 'all' | 'offers';
  onCategoryChange: (category: Collection['id'] | 'all' | 'offers') => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { addToEnquiry, setActiveQuickViewProduct, setIsSizeGuideOpen, openWhatsAppInquiry } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories: { id: Collection['id'] | 'all' | 'offers'; label: string; badge?: string }[] = [
    { id: 'all', label: 'All Collections' },
    { id: 'ad_jewellery', label: '✨ AD Diamond Jewellery', badge: 'Main Focus' },
    { id: 'bridal_haar', label: '👑 Rani Haar & Chokers' },
    { id: 'offers', label: '🎁 Special Offers & Combos', badge: 'Active Deals' },
    { id: 'bridal', label: 'Bridal Chudi Sets' },
    { id: 'glass', label: 'Glass Bangles' },
    { id: 'traditional', label: 'Traditional Kadas' },
    { id: 'festive', label: 'Festive Wear' },
  ];

  const filteredProducts = PRODUCTS.filter((prod) => {
    let matchesCategory = true;
    if (selectedCategory === 'offers') {
      matchesCategory = Boolean(prod.offerBadge || prod.originalPrice);
    } else if (selectedCategory !== 'all') {
      matchesCategory = prod.category === selectedCategory;
    }

    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (prod.offerBadge && prod.offerBadge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleAddToList = (prod: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToEnquiry(prod);
    setAddedIds((prev) => ({ ...prev, [prod.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [prod.id]: false }));
    }, 1800);
  };

  const handleWhatsAppEnquiry = (prod: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    openWhatsAppInquiry({
      title: prod.name,
      image: prod.image,
      price: prod.price,
      categoryLabel: prod.categoryLabel,
      size: prod.sizes[0] || 'Free Size',
    });
  };

  return (
    <section id="featured" className="py-24 bg-[#FCF9F2] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Heavy Bridal Jewellery & Handcrafted Bangles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3b050c] tracking-tight">
              Signature Jewellery & Bangles Collection
            </h2>
            <p className="mt-2 text-sm text-stone-600 max-w-2xl font-light">
              Explore heavy American Diamond (AD) necklace sets, royal Rani Haars, bridal chuda combos, and handcrafted glass bangles curated for Indian brides and celebrations in Surat.
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <a
              href="#offers"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#800020] hover:text-[#5a0016] bg-amber-100/70 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-300 transition-colors"
            >
              <span>View Active Offers 🎁</span>
            </a>

            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#b69228] hover:text-[#94741c] transition-colors"
            >
              <Ruler className="w-4 h-4" />
              <span className="underline">Bangle Size Chart</span>
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#3b050c] text-[#FAF6EE] shadow-md ring-1 ring-[#d4af37]/40'
                      : 'bg-white/90 hover:bg-white text-stone-700 border border-stone-200/90 hover:border-[#d4af37]'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase ${
                      active ? 'bg-[#d4af37] text-[#250206]' : 'bg-stone-100 text-[#800020]'
                    }`}>
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search AD diamond, necklace, chudi, combo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-stone-200 rounded-xl pl-9 pr-4 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 text-sm">No items found matching your filter or search.</p>
            <button
              onClick={() => {
                onCategoryChange('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#3b050c] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const savings = prod.originalPrice && prod.price ? prod.originalPrice - prod.price : 0;
              const savingsPercent = prod.originalPrice && prod.price
                ? Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)
                : 0;

              return (
                <div
                  key={prod.id}
                  onClick={() => setActiveQuickViewProduct(prod)}
                  className={`group cursor-pointer bg-white rounded-2xl overflow-hidden border shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                    prod.isJewellery
                      ? 'border-[#d4af37]/50 hover:border-[#d4af37] ring-1 ring-[#d4af37]/20'
                      : 'border-stone-200/90 hover:border-[#d4af37]/60'
                  }`}
                >
                  {/* Image Showcase */}
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Top Offer Badge */}
                    {prod.offerBadge && (
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[#d4af37] to-[#b69228] text-[#250206] text-[10px] font-bold tracking-wider uppercase rounded-md shadow-md max-w-full truncate">
                          <Sparkles className="w-3 h-3 shrink-0" />
                          <span className="truncate">{prod.offerBadge}</span>
                        </span>
                      </div>
                    )}

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-xs text-white text-xs font-medium rounded-lg shadow-sm">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View & Details</span>
                      </span>
                    </div>

                    {/* Category & Jewelry badge */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white drop-shadow-md">
                      <span>{prod.categoryLabel}</span>
                      {prod.isJewellery && (
                        <span className="text-[#fae8a4] font-bold">✨ Heavy Jewellery</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Size or Free Size */}
                      <div className="text-[11px] text-stone-500 font-medium mb-1">
                        {prod.isJewellery ? 'Necklace Fit:' : 'Sizes:'} {prod.sizes.join(', ')}
                      </div>

                      <h3 className="font-serif font-bold text-[#3b050c] text-base group-hover:text-[#931427] transition-colors line-clamp-2 leading-snug">
                        {prod.name}
                      </h3>

                      <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100">
                      {/* Price in tabular numbers with original strikethrough */}
                      <div className="flex items-baseline justify-between mb-3">
                        {prod.price ? (
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-serif font-bold text-lg text-[#3b050c] tabular-nums">
                                ₹{prod.price.toLocaleString('en-IN')}
                              </span>
                              {prod.originalPrice && (
                                <span className="text-xs text-stone-400 line-through tabular-nums">
                                  ₹{prod.originalPrice.toLocaleString('en-IN')}
                                </span>
                              )}
                              {savingsPercent > 0 && (
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                  {savingsPercent}% OFF
                                </span>
                              )}
                            </div>
                            {prod.priceNote && (
                              <span className="text-[10px] text-stone-500 block mt-0.5">
                                {prod.priceNote}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs font-serif italic text-[#b69228]">
                            Price on enquiry
                          </span>
                        )}

                        <button
                          onClick={(e) => handleAddToList(prod, e)}
                          className={`p-2 rounded-lg border transition-all ${
                            addedIds[prod.id]
                              ? 'bg-[#3b050c] text-[#d4af37] border-[#3b050c]'
                              : 'bg-stone-50 hover:bg-[#FAF6EE] text-stone-700 border-stone-200 hover:border-[#d4af37]'
                          }`}
                          title="Add to WhatsApp Enquiry List"
                          aria-label="Add to enquiry list"
                        >
                          {addedIds[prod.id] ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* WhatsApp Photo Enquiry Button */}
                      <button
                        onClick={(e) => handleWhatsAppEnquiry(prod, e)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors active:scale-[0.98]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>WhatsApp Enquiry with Photo</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
