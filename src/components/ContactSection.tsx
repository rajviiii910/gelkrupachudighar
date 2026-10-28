import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send, Instagram, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO, BANGLE_SIZE_CHART } from '../data/storeConfig';
import { useStore } from '../context/StoreContext';

export const ContactSection: React.FC = () => {
  const { generateWhatsAppUrl, setIsSizeGuideOpen } = useStore();

  const [formData, setFormData] = useState({
    name: '',
    city: 'Surat',
    category: 'Bridal Chudi Sets',
    size: '2-6',
    message: '',
  });

  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Namaste Gelkrupa Chudighar! 🙏\n\n*Website Enquiry Details:*\n• Name: ${formData.name || 'Valued Customer'}\n• City/Location: ${formData.city}\n• Collection of Interest: ${formData.category}\n• Wrist Size: ${formData.size}\n${formData.message ? `• Note/Requirement: ${formData.message}` : ''}\n\nCould you please share your latest catalogue and availability? Thank you!`;

    const url = generateWhatsAppUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');

    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FCF9F2] text-[#250206] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#b69228] uppercase mb-2">
            <MessageCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Direct WhatsApp & Enquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#3b050c] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Contact & Custom Enquiries
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Have a custom bridal chuda requirement or looking for specific glass chudi shades? Reach out to us directly on WhatsApp or submit your enquiry below.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-xs space-y-6">
              <h3 className="font-serif font-bold text-xl text-[#3b050c] pb-3 border-b border-stone-100">
                Verified Contact Details
              </h3>

              {/* WhatsApp Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-stone-500">
                    Official WhatsApp
                  </div>
                  <a
                    href={generateWhatsAppUrl('Namaste Gelkrupa Chudighar!')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-base font-bold text-[#3b050c] hover:text-[#25D366] transition-colors"
                  >
                    {STORE_INFO.contact.displayPhone}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Fast response for catalogue & size recommendations
                  </p>
                </div>
              </div>

              {/* Showroom Address Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3b050c]/10 flex items-center justify-center text-[#3b050c] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-stone-500">
                    Store Location
                  </div>
                  <div className="text-sm font-semibold text-[#3b050c]">
                    {STORE_INFO.location.area}, {STORE_INFO.location.city}
                  </div>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {STORE_INFO.location.fullAddress}
                  </p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#b69228]/10 flex items-center justify-center text-[#b69228] shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-stone-500">
                    Instagram Showcase
                  </div>
                  <div className="text-sm font-mono font-semibold text-[#3b050c]">
                    {STORE_INFO.contact.instagram}
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Follow for real customer bridal looks & new arrivals
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Sizing Reminder Box */}
            <div className="bg-[#FAF6EE] p-5 rounded-2xl border border-[#d4af37]/30 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-sm text-[#3b050c]">
                  Not sure of your bangle size?
                </h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Check our reference table from 2-2 to 2-10
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(true)}
                className="px-3.5 py-1.5 text-xs font-semibold text-[#3b050c] bg-white border border-[#d4af37]/40 rounded-lg hover:bg-[#FAF6EE] transition-colors shrink-0"
              >
                Size Guide
              </button>
            </div>
          </div>

          {/* Interactive WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-md">
            <h3 className="font-serif font-bold text-xl text-[#3b050c] mb-1">
              Send a WhatsApp Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 font-light">
              Fill in your preferences and we will format your message for instant WhatsApp delivery.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-medium text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    placeholder="e.g. Pooja Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FCF9F2] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="customer-city" className="block text-xs font-medium text-stone-700 mb-1">
                    Your City / Area
                  </label>
                  <input
                    id="customer-city"
                    type="text"
                    placeholder="e.g. Surat / Ahmedabad"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FCF9F2] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Collection */}
                <div>
                  <label htmlFor="enquiry-category" className="block text-xs font-medium text-stone-700 mb-1">
                    Collection of Interest
                  </label>
                  <select
                    id="enquiry-category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#FCF9F2] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#d4af37]"
                  >
                    <option value="Bridal Chudi Sets">Bridal Chudi Sets & Chuda</option>
                    <option value="Glass Bangles">Glass Bangles (Traditional)</option>
                    <option value="Traditional Bangles">Traditional Kadas & Patlas</option>
                    <option value="Festive Wear">Festive & Navratri Wear</option>
                    <option value="Party Wear">Party & Cocktail Bangles</option>
                  </select>
                </div>

                {/* Wrist Size */}
                <div>
                  <label htmlFor="enquiry-size" className="block text-xs font-medium text-stone-700 mb-1">
                    Wrist Size
                  </label>
                  <select
                    id="enquiry-size"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full bg-[#FCF9F2] border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 focus:outline-hidden focus:border-[#d4af37]"
                  >
                    {BANGLE_SIZE_CHART.map((s) => (
                      <option key={s.size} value={s.size}>
                        Size {s.size} ({s.innerDiameterInches})
                      </option>
                    ))}
                    <option value="Not Sure / Need Help">I am not sure (Help me measure)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="enquiry-msg" className="block text-xs font-medium text-stone-700 mb-1">
                  Custom Requirements or Questions (Optional)
                </label>
                <textarea
                  id="enquiry-msg"
                  rows={3}
                  placeholder="e.g. Looking for a deep red and green set to match my wedding lehenga..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FCF9F2] border border-stone-200 rounded-xl p-3 text-xs text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open WhatsApp Enquiry</span>
              </button>

              {sentSuccess && (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your enquiry message has opened in WhatsApp! We look forward to assisting you.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
