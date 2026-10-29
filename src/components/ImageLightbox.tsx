import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Send } from 'lucide-react';
import { GalleryItem } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';
import { shareProductToWhatsApp } from '../utils/shareUtils';

interface ImageLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const { generateWhatsAppUrl, openWhatsAppInquiry } = useStore();
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prev);
      }
      if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % items.length;
        onNavigate(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handleWhatsAppInquiry = () => {
    openWhatsAppInquiry({
      title: currentItem.title,
      image: currentItem.image,
      categoryLabel: currentItem.category,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md select-none animate-fade-in"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="absolute top-0 inset-x-0 p-4 md:px-8 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase">
            {currentItem.category}
          </span>
          <span className="text-xs text-white/50">·</span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title={isZoomed ? 'Zoom out' : 'Zoom in'}
            aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title="Close (Esc)"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image View */}
      <div
        className="relative max-w-5xl max-h-[75vh] md:max-h-[82vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className={`rounded-lg object-contain transition-transform duration-300 shadow-2xl max-h-[70vh] ${
            isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-3 md:left-6 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-all z-20 backdrop-blur-xs"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-3 md:right-6 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-all z-20 backdrop-blur-xs"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Details & Enquiry */}
      <div
        className="absolute bottom-0 inset-x-0 p-4 md:px-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h4 id="lightbox-title" className="text-base md:text-lg font-serif font-semibold text-[#FAF6EE]">
              {currentItem.title}
            </h4>
            <p className="text-xs text-white/70 max-w-xl">
              {currentItem.caption}
            </p>
          </div>

          <button
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-lg shadow-md transition-all active:scale-[0.98] shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enquire This Design on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
