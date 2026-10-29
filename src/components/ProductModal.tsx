import React, { useState } from 'react';
import { X, Send, Plus, Check, Ruler, Sparkles, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { STORE_INFO } from '../data/storeConfig';
import { shareProductToWhatsApp } from '../utils/shareUtils';

export const ProductModal: React.FC = () => {
  const {
    activeQuickViewProduct,
    setActiveQuickViewProduct,
    addToEnquiry,
    setIsSizeGuideOpen,
    generateWhatsAppUrl,
    openWhatsAppInquiry,
  } = useStore();

  const [selectedSize, setSelectedSize] = useState<string>('2-6');
  const [addedToast, setAddedToast] = useState(false);

  if (!activeQuickViewProduct) return null;

  const currentSize = activeQuickViewProduct.sizes.includes(selectedSize)
    ? selectedSize
    : activeQuickViewProduct.sizes[0] || '2-6';

  const handleAddToList = () => {
    addToEnquiry(activeQuickViewProduct, currentSize);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleDirectWhatsApp = () => {
    openWhatsAppInquiry({
      title: activeQuickViewProduct.name,
      image: activeQuickViewProduct.image,
      price: activeQuickViewProduct.price,
      categoryLabel: activeQuickViewProduct.categoryLabel,
      size: currentSize,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={() => setActiveQuickViewProduct(null)}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF6EE] text-[#250206] border border-[#d4af37]/40 shadow-2xl rounded-2xl overflow-hidden max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors md:text-stone-700 md:bg-white/80 md:hover:bg-white md:shadow-xs"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 relative bg-[#250206] flex items-center justify-center overflow-hidden min-h-[280px] md:min-h-[460px]">
          <img
            src={activeQuickViewProduct.image}
            alt={activeQuickViewProduct.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden pointer-events-none" />
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            {/* Category text (unboxed) */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#b69228] uppercase tracking-wider">
              <span>{activeQuickViewProduct.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>Mota Varachha Edition</span>
            </div>

            {/* Title */}
            <h3 id="product-modal-title" className="text-xl md:text-2xl font-serif font-bold text-[#3b050c] leading-snug">
              {activeQuickViewProduct.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-2 pt-1 border-b border-stone-200 pb-3">
              {activeQuickViewProduct.price ? (
                <>
                  <span className="text-2xl font-serif font-bold text-[#3b050c] tabular-nums">
                    ₹{activeQuickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                  {activeQuickViewProduct.priceNote && (
                    <span className="text-xs text-stone-500 font-sans">
                      ({activeQuickViewProduct.priceNote})
                    </span>
                  )}
                </>
              ) : (
                <span className="text-lg font-serif font-semibold text-[#b69228]">
                  Price Available on Request / Custom Fitting
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              {activeQuickViewProduct.description}
            </p>

            {/* Size Selector */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#3b050c]">Select Wrist Size (Indian Standard):</span>
                <button
                  type="button"
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center gap-1 text-[#b69228] hover:text-[#94741c] transition-colors"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Chart</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeQuickViewProduct.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                      currentSize === s
                        ? 'border-[#3b050c] bg-[#3b050c] text-white shadow-xs'
                        : 'border-stone-200 bg-white text-stone-700 hover:border-[#d4af37]'
                    }`}
                  >
                    Size {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            {activeQuickViewProduct.features && activeQuickViewProduct.features.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
                  Craft Details:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {activeQuickViewProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3b050c]" />
              <span>Inspected for quality and smooth inner rim at our Surat boutique</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-2.5">
            <button
              onClick={handleDirectWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Send Enquiry & Photo to WhatsApp (Size {currentSize})</span>
            </button>

            <button
              onClick={handleAddToList}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#3b050c] hover:bg-[#540914] text-[#FAF6EE] font-medium text-xs rounded-xl transition-all"
            >
              {addedToast ? (
                <>
                  <Check className="w-4 h-4 text-[#d4af37]" />
                  <span>Added to Enquiry List!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to WhatsApp Enquiry List</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
