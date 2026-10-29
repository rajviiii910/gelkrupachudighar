import React from 'react';
import { X, Trash2, Send, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { STORE_INFO } from '../data/storeConfig';

export const EnquiryDrawer: React.FC = () => {
  const {
    enquiryItems,
    removeFromEnquiry,
    updateQuantity,
    updateSize,
    clearEnquiry,
    isEnquiryOpen,
    setIsEnquiryOpen,
    generateWhatsAppUrl,
    setIsSizeGuideOpen,
  } = useStore();

  if (!isEnquiryOpen) return null;

  const totalItemsCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);
  const estimatedSubtotal = enquiryItems.reduce((acc, item) => {
    return acc + (item.product.price ? item.product.price * item.quantity : 0);
  }, 0);

  const handleSendWhatsAppEnquiry = () => {
    if (enquiryItems.length === 0) return;

    let message = `Namaste Gelkrupa Chudighar! 🙏\n\nI am browsing your collection on your website and would like to enquire about availability and ordering for the following bangles:\n\n`;

    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    enquiryItems.forEach((item, idx) => {
      const imgUrl = `${origin}${item.product.image}`;
      message += `${idx + 1}. *${item.product.name}*\n`;
      message += `   • Category: ${item.product.categoryLabel}\n`;
      message += `   • Size: ${item.selectedSize}\n`;
      message += `   • Quantity: ${item.quantity}\n`;
      if (item.product.price) {
        message += `   • Price: ₹${(item.product.price * item.quantity).toLocaleString('en-IN')} (${item.product.priceNote || 'Set'})\n`;
      }
      message += `   • 📸 Design Photo: ${imgUrl}\n\n`;
    });

    if (estimatedSubtotal > 0) {
      message += `Estimated Total: ₹${estimatedSubtotal.toLocaleString('en-IN')}\n\n`;
    }

    message += `Could you please confirm availability, customization options, and delivery/pickup at your Mota Varachha boutique in Surat? Thank you!`;

    const url = generateWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      onClick={() => setIsEnquiryOpen(false)}
    >
      <div
        className="relative w-full max-w-md bg-[#FAF6EE] text-[#250206] shadow-2xl flex flex-col h-full border-l border-[#d4af37]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#3b050c] text-[#FAF6EE]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <div>
              <h3 id="enquiry-drawer-title" className="text-lg font-serif font-semibold tracking-wide">
                Bangle Enquiry List
              </h3>
              <p className="text-xs text-[#FAF6EE]/70 font-sans">
                {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsEnquiryOpen(false)}
            className="p-1.5 text-[#FAF6EE]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close enquiry list"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {enquiryItems.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#3b050c]/10 flex items-center justify-center text-[#3b050c]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-lg text-[#3b050c]">Your enquiry list is empty</h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Explore our Glass Bangles, Bridal Chudi, and Heritage Kadas. Add designs you love to enquire directly via WhatsApp.
              </p>
              <button
                onClick={() => setIsEnquiryOpen(false)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#3b050c] hover:bg-[#540914] rounded-lg transition-colors"
              >
                Browse Collections <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs">
                <span className="text-stone-500 font-medium">Selected Designs</span>
                <button
                  onClick={clearEnquiry}
                  className="text-stone-500 hover:text-[#931427] transition-colors"
                >
                  Clear all
                </button>
              </div>

              {enquiryItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-xs flex gap-3.5 relative"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-lg shrink-0 border border-stone-200"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h5 className="font-serif font-semibold text-sm text-[#3b050c] truncate">
                          {item.product.name}
                        </h5>
                        <button
                          onClick={() => removeFromEnquiry(item.product.id)}
                          className="text-stone-400 hover:text-[#931427] transition-colors p-1"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-stone-500">{item.product.categoryLabel}</p>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t border-stone-100">
                      {/* Size selector */}
                      <div className="flex items-center gap-1.5 text-xs">
                        <label htmlFor={`size-${item.product.id}`} className="text-stone-500 text-[11px]">
                          Size:
                        </label>
                        <select
                          id={`size-${item.product.id}`}
                          value={item.selectedSize}
                          onChange={(e) => updateSize(item.product.id, e.target.value)}
                          className="bg-stone-50 border border-stone-200 text-stone-800 rounded px-1.5 py-0.5 text-xs focus:outline-hidden focus:border-[#d4af37]"
                        >
                          {item.product.sizes.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Quantity buttons */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-stone-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-mono tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {item.product.price && (
                      <div className="mt-1.5 text-right font-mono text-xs font-semibold text-[#3b050c] tabular-nums">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="text-xs text-[#b69228] hover:text-[#94741c] underline font-medium"
                >
                  Need help measuring wrist size? Open Sizing Chart
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer CTA */}
        {enquiryItems.length > 0 && (
          <div className="p-6 bg-[#FCF9F2] border-t border-[#d4af37]/30 space-y-3">
            {estimatedSubtotal > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-600">Estimated Total:</span>
                <span className="font-serif font-bold text-lg text-[#3b050c] tabular-nums">
                  ₹{estimatedSubtotal.toLocaleString('en-IN')}
                </span>
              </div>
            )}
            <p className="text-[11px] text-stone-500 leading-snug">
              Clicking below opens WhatsApp with all your chosen bangles, wrist sizes, and direct design photo links pre-filled.
            </p>
            <button
              onClick={handleSendWhatsAppEnquiry}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Send Enquiry with Photo Links on WhatsApp</span>
            </button>
            <div className="text-center">
              <span className="text-[11px] text-stone-400">
                Direct WhatsApp contact with {STORE_INFO.name}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
