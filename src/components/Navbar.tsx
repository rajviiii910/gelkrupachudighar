import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, Ruler, Phone } from 'lucide-react';
import { STORE_INFO } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const Navbar: React.FC = () => {
  const { enquiryItems, setIsEnquiryOpen, setIsSizeGuideOpen, generateWhatsAppUrl } = useStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalEnquiryCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleQuickWhatsApp = () => {
    const msg = `Namaste Gelkrupa Chudighar! 🙏 I am visiting your website and would like to enquire about your bangles and bridal chudi collections.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Featured', href: '#featured' },
    { label: 'Bridal Chuda', href: '#bridal' },
    { label: 'Our Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit Boutique', href: '#visit' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#250206]/95 backdrop-blur-md shadow-lg border-b border-[#d4af37]/25 py-3'
          : 'bg-gradient-to-b from-[#250206]/90 via-[#250206]/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#FAF6EE] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>{STORE_INFO.name}</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#FAF6EE]/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Size guide trigger button */}
            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FAF6EE]/80 hover:text-[#d4af37] border border-white/15 hover:border-[#d4af37]/50 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Indian Bangle Sizing Chart"
            >
              <Ruler className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Size Guide</span>
            </button>

            {/* Enquiry Bag Button with Counter */}
            <button
              onClick={() => setIsEnquiryOpen(true)}
              className="relative p-2 text-[#FAF6EE] hover:text-[#d4af37] hover:bg-white/10 rounded-lg transition-colors"
              aria-label={`Enquiry list with ${totalEnquiryCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalEnquiryCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#d4af37] text-[#250206] text-[10px] font-bold flex items-center justify-center font-mono">
                  {totalEnquiryCount}
                </span>
              )}
            </button>

            {/* Quick Call Button */}
            <a
              href={`tel:${STORE_INFO.contact.callNumber}`}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#FAF6EE] hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37] rounded-lg transition-colors whitespace-nowrap shrink-0"
              title={`Call: ${STORE_INFO.contact.displayCallNumber}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-mono tabular-nums">{STORE_INFO.contact.displayCallNumber}</span>
            </a>

            {/* Primary Action Button: WhatsApp Enquiry */}
            <button
              onClick={handleQuickWhatsApp}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#250206] bg-gradient-to-r from-[#fae8a4] via-[#d4af37] to-[#b69228] hover:from-[#fff] hover:to-[#d4af37] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#250206]" />
              <span>WhatsApp Us</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#FAF6EE] hover:text-[#d4af37] rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#250206] border-b border-[#d4af37]/30 px-6 py-6 space-y-4 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-[#FAF6EE] hover:text-[#d4af37] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <a
              href={`tel:${STORE_INFO.contact.callNumber}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#3b050c] border border-[#d4af37]/50 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call: {STORE_INFO.contact.displayCallNumber}</span>
            </a>

            <button
              onClick={() => {
                setIsSizeGuideOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#FAF6EE] bg-white/5 border border-[#d4af37]/30 rounded-lg"
            >
              <Ruler className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Bangle Sizing Chart (2-2 to 2-10)</span>
            </button>

            <button
              onClick={() => {
                handleQuickWhatsApp();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-[#250206] bg-[#d4af37] hover:bg-[#eacb67] rounded-lg"
            >
              <MessageCircle className="w-4 h-4 fill-[#250206]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
