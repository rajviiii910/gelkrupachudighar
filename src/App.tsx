/**
 * Gelkrupa Chudighar - Premium Indian Bangles & Bridal Chudi Boutique
 * Location: Mota Varachha, Surat, Gujarat
 */

import React, { useState } from 'react';
import { StoreProvider } from './context/StoreContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionShowcase } from './components/CollectionShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { BridalSpotlight } from './components/BridalSpotlight';
import { OurStory } from './components/OurStory';
import { PhotoGallery } from './components/PhotoGallery';
import { VisitStore } from './components/VisitStore';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { WhatsAppPhotoModal } from './components/WhatsAppPhotoModal';
import { Collection } from './data/storeConfig';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Collection['id'] | 'all'>('all');

  const handleSelectCollection = (categoryId: Collection['id']) => {
    setSelectedCategory(categoryId);
    const featuredElem = document.getElementById('featured');
    if (featuredElem) {
      featuredElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StoreProvider>
      <div className="min-h-screen bg-[#FAF6EE] text-[#250206] selection:bg-[#730e1d] selection:text-[#FAF6EE] flex flex-col">
        {/* Entrance Animation */}
        <LoadingScreen />

        {/* Sticky Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Animated Full-Screen Hero */}
          <Hero />

          {/* 2. Shop by Collection */}
          <CollectionShowcase onSelectCollection={handleSelectCollection} />

          {/* 3. Featured Products with WhatsApp Enquiry */}
          <ProductCatalog
            selectedCategory={selectedCategory}
            onCategoryChange={(cat) => setSelectedCategory(cat)}
          />

          {/* 6. Bridal & Festive Collections Showcase */}
          <BridalSpotlight />

          {/* 4. Our Story */}
          <OurStory />

          {/* 5. Photo Gallery with Image Lightbox */}
          <PhotoGallery />

          {/* 7. Visit Our Store with Google Maps */}
          <VisitStore />

          {/* 8. Contact & WhatsApp Enquiry */}
          <ContactSection />
        </main>

        {/* 9. Premium Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Interactive Modals and Drawers */}
        <ProductModal />
        <SizeGuideModal />
        <EnquiryDrawer />
        <WhatsAppPhotoModal />
      </div>
    </StoreProvider>
  );
}
