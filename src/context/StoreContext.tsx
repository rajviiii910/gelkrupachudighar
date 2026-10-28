import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, STORE_INFO } from '../data/storeConfig';

export interface EnquiryItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

interface StoreContextType {
  enquiryItems: EnquiryItem[];
  addToEnquiry: (product: Product, size?: string) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateSize: (productId: string, size: string) => void;
  clearEnquiry: () => void;
  isEnquiryOpen: boolean;
  setIsEnquiryOpen: (open: boolean) => void;
  isSizeGuideOpen: boolean;
  setIsSizeGuideOpen: (open: boolean) => void;
  activeQuickViewProduct: Product | null;
  setActiveQuickViewProduct: (product: Product | null) => void;
  generateWhatsAppUrl: (message: string) => string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('gelkrupa_enquiry_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('gelkrupa_enquiry_items', JSON.stringify(enquiryItems));
    } catch (e) {
      console.warn('Storage error', e);
    }
  }, [enquiryItems]);

  const addToEnquiry = (product: Product, size?: string) => {
    const chosenSize = size || (product.sizes.length > 0 ? product.sizes[1] || product.sizes[0] : '2-6');
    setEnquiryItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.selectedSize === chosenSize);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === chosenSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, selectedSize: chosenSize, quantity: 1 }];
    });
    setIsEnquiryOpen(true);
  };

  const removeFromEnquiry = (productId: string) => {
    setEnquiryItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId);
      return;
    }
    setEnquiryItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const updateSize = (productId: string, size: string) => {
    setEnquiryItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, selectedSize: size } : item))
    );
  };

  const clearEnquiry = () => {
    setEnquiryItems([]);
  };

  const generateWhatsAppUrl = (message: string) => {
    const cleanNumber = STORE_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <StoreContext.Provider
      value={{
        enquiryItems,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        updateSize,
        clearEnquiry,
        isEnquiryOpen,
        setIsEnquiryOpen,
        isSizeGuideOpen,
        setIsSizeGuideOpen,
        activeQuickViewProduct,
        setActiveQuickViewProduct,
        generateWhatsAppUrl,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
