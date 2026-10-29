import React, { useState } from 'react';
import { X, MessageCircle, Share2, Download, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { STORE_INFO } from '../data/storeConfig';
import { copyImageToClipboard, downloadImage, shareProductToWhatsApp } from '../utils/shareUtils';

export const WhatsAppPhotoModal: React.FC = () => {
  const { activeWhatsAppInquiry, setActiveWhatsAppInquiry, generateWhatsAppUrl } = useStore();
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [loadingAction, setLoadingAction] = useState(false);

  if (!activeWhatsAppInquiry) return null;

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const fullImageUrl = activeWhatsAppInquiry.image.startsWith('http')
    ? activeWhatsAppInquiry.image
    : `${origin}${activeWhatsAppInquiry.image}`;

  const priceText = activeWhatsAppInquiry.price
    ? `₹${activeWhatsAppInquiry.price.toLocaleString('en-IN')}`
    : 'Price on enquiry';

  const defaultMessage = `Namaste Gelkrupa Chudighar! 🙏\n\nI want to enquire about this bangle design:\n*${activeWhatsAppInquiry.title}*\n• Category: ${activeWhatsAppInquiry.categoryLabel || 'Bangles'}\n• Selected Size: ${activeWhatsAppInquiry.size || '2-6'}\n• Price: ${priceText}\n• 📸 Photo Link: ${fullImageUrl}\n\nCould you please check availability at your Mota Varachha showroom? Thank you!`;

  const handleOpenWhatsAppWithPhoto = async () => {
    setLoadingAction(true);
    // Copy image to clipboard so user can simply paste inside WhatsApp
    const copyOk = await copyImageToClipboard(activeWhatsAppInquiry.image);
    if (copyOk) {
      setCopiedSuccess(true);
    }

    // Open WhatsApp with prefilled message containing the direct high-res image link
    const waUrl = generateWhatsAppUrl(defaultMessage);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setLoadingAction(false);
  };

  const handleNativeSharePhoto = async () => {
    setLoadingAction(true);
    await shareProductToWhatsApp({
      title: activeWhatsAppInquiry.title,
      message: defaultMessage,
      imageUrl: activeWhatsAppInquiry.image,
    });
    setLoadingAction(false);
  };

  const handleDownload = () => {
    downloadImage(activeWhatsAppInquiry.image, activeWhatsAppInquiry.title);
  };

  const handleManualCopyImage = async () => {
    const ok = await copyImageToClipboard(activeWhatsAppInquiry.image);
    if (ok) {
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 3000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-photo-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={() => setActiveWhatsAppInquiry(null)}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF6EE] text-[#250206] border border-[#d4af37]/50 shadow-2xl rounded-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#3b050c] text-[#FAF6EE] border-b border-[#d4af37]/30">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
            <h3 id="whatsapp-photo-title" className="font-serif font-semibold text-base">
              Send Bangle Photo on WhatsApp
            </h3>
          </div>
          <button
            onClick={() => setActiveWhatsAppInquiry(null)}
            className="p-1 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4">
          {/* Main Bangle Image Preview */}
          <div className="relative rounded-xl overflow-hidden border-2 border-[#d4af37]/40 bg-stone-900 shadow-md group">
            <img
              src={activeWhatsAppInquiry.image}
              alt={activeWhatsAppInquiry.title}
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="absolute top-3 right-3 flex gap-2">
              <button
                onClick={handleDownload}
                className="p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-xs flex items-center gap-1 shadow-xs transition-colors"
                title="Download Photo"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Save</span>
              </button>
            </div>
            <div className="absolute bottom-2 left-3 text-[11px] font-mono uppercase tracking-wider text-[#fae8a4] bg-black/60 px-2 py-0.5 rounded-sm">
              {activeWhatsAppInquiry.categoryLabel || 'Bangle Design'}
            </div>
          </div>

          {/* Details */}
          <div>
            <h4 className="font-serif font-bold text-lg text-[#3b050c]">
              {activeWhatsAppInquiry.title}
            </h4>
            <div className="flex items-center gap-3 text-xs text-stone-600 mt-1">
              {activeWhatsAppInquiry.size && (
                <span>Wrist Size: <strong className="text-stone-800">{activeWhatsAppInquiry.size}</strong></span>
              )}
              {activeWhatsAppInquiry.price && (
                <span>Price: <strong className="text-[#3b050c] font-mono tabular-nums">{priceText}</strong></span>
              )}
            </div>
          </div>

          {/* Bilingual Guidance */}
          <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs space-y-1">
            <p className="font-medium text-amber-900">
              ગુજરાતી: વ્હોટ્સએપ ખુલતાની સાથે આ બંગડીનો ફોટો અને વિગતો સીધા જશે (કોઈ PDF કે ડોક્યુમેન્ટ નહીં).
            </p>
            <p className="text-[11px] text-amber-800">
              English: This exact bangle image and details will be sent directly to Gelkrupa Chudighar on WhatsApp.
            </p>
          </div>

          {copiedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ફોટો કોપી થઈ ગયો છે! વ્હોટ્સએપ ચેટમાં Paste (પેસ્ટ) કરતાં સીધો ફોટો આવી જશે.</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            {/* Primary WhatsApp Button */}
            <button
              onClick={handleOpenWhatsAppWithPhoto}
              disabled={loadingAction}
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Bangle Photo on WhatsApp</span>
            </button>

            {/* Native Mobile Share / App Button */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleNativeSharePhoto}
                disabled={loadingAction}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-medium rounded-xl transition-colors"
                title="Share photo via phone apps"
              >
                <Share2 className="w-3.5 h-3.5 text-stone-600" />
                <span>Share as Photo</span>
              </button>

              <button
                onClick={handleManualCopyImage}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-medium rounded-xl transition-colors"
                title="Copy Image to Clipboard"
              >
                <Copy className="w-3.5 h-3.5 text-stone-600" />
                <span>Copy Image</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-[#F6EFE0] border-t border-[#d4af37]/20 text-[11px] text-stone-500 flex items-center justify-between">
          <span>Direct to {STORE_INFO.contact.displayPhone}</span>
          <span className="font-serif italic text-[#3b050c]">{STORE_INFO.name}</span>
        </div>
      </div>
    </div>
  );
};
