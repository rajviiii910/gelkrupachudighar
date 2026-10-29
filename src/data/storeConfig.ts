/**
 * Gelkrupa Chudighar - Boutique Configuration & Data
 * Verified from Justdial Profile: https://jsdl.in/DT-54QUA2AA6A6
 * Location: Mota Varachha, Surat, Gujarat
 */

export interface Product {
  id: string;
  name: string;
  category: 'glass' | 'bridal' | 'traditional' | 'festive' | 'party';
  categoryLabel: string;
  image: string;
  price?: number;
  priceNote?: string;
  description: string;
  sizes: string[];
  features: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface Collection {
  id: 'glass' | 'bridal' | 'traditional' | 'festive' | 'party';
  name: string;
  subtitle: string;
  description: string;
  image: string;
  countLabel: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface BangleSizeGuide {
  size: string;
  innerDiameterMm: number;
  innerDiameterInches: string;
  circumferenceMm: number;
}

export const STORE_INFO = {
  name: 'Gelkrupa Chudighar',
  gujaratiName: 'શ્રી ગેલકૃપા ચૂડીઘર',
  tagline: 'Every Bangle Tells a Beautiful Story',
  subTagline: 'Luxurious Bridal Bangles & Traditional Chudi Boutique',
  gujaratiMotto: 'સૌભાગ્ય અને પરંપરાગત શણગાર',
  justdial: {
    url: 'https://jsdl.in/DT-54QUA2AA6A6',
    rating: '4.9',
    reviewCount: 'Justdial Verified',
    label: 'Verified on Justdial',
  },
  location: {
    shopNo: 'Shop No. 24, Ground Floor, A-7',
    complex: 'Saurashtra Township',
    landmark: 'Near ABC Circle, Sai Shradha Residency (Sudama Chowk Area)',
    road: 'Varachha Village Road',
    area: 'Mota Varachha',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    pincode: '394101',
    fullAddress: 'Shop No. 24, A-7, Ground Floor, Saurashtra Township, Near ABC Circle, Sai Shradha Residency, Mota Varachha, Surat, Gujarat 394101',
    googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Shop+No+24+Saurashtra+Township+Near+ABC+Circle+Mota+Varachha+Surat+Gujarat+394101',
    embedMapUrl: 'https://maps.google.com/maps?q=Saurashtra+Township+Mota+Varachha+Surat+Gujarat+394101&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  contact: {
    // Direct call number requested by boutique owner
    callNumber: '+919925421871',
    displayCallNumber: '+91 99254 21871',
    // Verified WhatsApp & secondary mobile
    whatsappNumber: '+917201811622',
    displayPhone: '+91 72018 11622',
    localPhone: '072018 11622',
    email: 'gelkrupachudighar@gmail.com',
    instagram: '@gelkrupa_chudighar',
    hours: [
      { days: 'Monday – Saturday', time: '10:00 AM – 9:30 PM' },
      { days: 'Sunday', time: '11:00 AM – 9:00 PM' },
    ],
  },
};

export const BANGLE_SIZE_CHART: BangleSizeGuide[] = [
  { size: '2-2', innerDiameterMm: 54.0, innerDiameterInches: '2.125"', circumferenceMm: 169.6 },
  { size: '2-4', innerDiameterMm: 57.2, innerDiameterInches: '2.250"', circumferenceMm: 179.6 },
  { size: '2-6', innerDiameterMm: 60.3, innerDiameterInches: '2.375"', circumferenceMm: 189.5 },
  { size: '2-8', innerDiameterMm: 63.5, innerDiameterInches: '2.500"', circumferenceMm: 199.5 },
  { size: '2-10', innerDiameterMm: 66.7, innerDiameterInches: '2.625"', circumferenceMm: 209.5 },
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'bridal',
    name: 'Bridal Chudi Sets',
    subtitle: 'Royal Wedding Chuda & Custom Sets',
    description: 'Bespoke bridal chuda sets embellished with kundan inlays, velvet cushioning, traditional red and ivory finishes with heirloom latkans.',
    image: '/src/assets/images/collection_bridal_chuda_1793184886986.jpg',
    countLabel: 'Curated Bridal Edition',
  },
  {
    id: 'glass',
    name: 'Glass Bangles',
    subtitle: 'Vibrant Authentic Chudi',
    description: 'Luminous pure glass chudi in kaleidoscopic jewel tones — emerald, ruby, sapphire, and firozi with fine gold sparkle detailing.',
    image: '/src/assets/images/collection_glass_bangles_1793184887897.jpg',
    countLabel: 'All Colors & Sizes',
  },
  {
    id: 'traditional',
    name: 'Traditional Bangles',
    subtitle: 'Heritage Kadas & Patlas',
    description: 'Antique gold finish temple kadas, royal peacock and floral engravings, polki kundan stone settings crafted for auspicious ceremonies.',
    image: '/src/assets/images/collection_traditional_kadas_1793184888879.jpg',
    countLabel: 'Heritage Craft',
  },
  {
    id: 'festive',
    name: 'Festive Wear',
    subtitle: 'Navratri, Karwa Chauth & Diwali',
    description: 'Dazzling mirror work, metallic shimmer, and colourful festival bangles designed to complement vibrant chaniya cholis and festive sarees.',
    image: '/src/assets/images/collection_festive_party_1793184888497.jpg',
    countLabel: 'Festive Specials',
  },
  {
    id: 'party',
    name: 'Party Wear',
    subtitle: 'Contemporary Elegance & Cocktails',
    description: 'Sleek champagne gold and crystal encrusted bangles for receptions, sangeet nights, and modern fusion ensembles.',
    image: '/src/assets/images/collection_festive_party_1793184888497.jpg',
    countLabel: 'Designer Singles & Pairs',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Rajwada Bridal Chuda with Kundan Latkan',
    category: 'bridal',
    categoryLabel: 'Bridal Chudi Sets',
    image: '/src/assets/images/collection_bridal_chuda_1793184886986.jpg',
    price: 3499,
    priceNote: 'Complete Royal Bridal Set with Latkans',
    description: 'Traditional Gujarati and Rajasthani bride favorite chuda set featuring deep crimson chudi, ivory embossed spacers, floral kundan and hand-strung pearl latkans.',
    sizes: ['2-4', '2-6', '2-8'],
    features: ['Premium acrylic and glass core', 'Non-tarnishing gold finish', 'Includes velvet storage case', 'Customizable latkan length'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-2',
    name: 'Shimmering Firozi & Emerald Glass Bangles',
    category: 'glass',
    categoryLabel: 'Glass Bangles',
    image: '/src/assets/images/collection_glass_bangles_1793184887897.jpg',
    price: 280,
    priceNote: 'Set of 24 Bangles (2 Dozen)',
    description: 'Hand-blown pure glass chudi in classic festive jewel tones with delicate micro-gold shimmer flakes. Smooth inner rim for effortless wearing.',
    sizes: ['2-2', '2-4', '2-6', '2-8', '2-10'],
    features: ['High-tensile tempered glass', 'Vivid optical clarity', 'Hypoallergenic smooth inner finish', 'Ideal for daily & festive mix-matching'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-3',
    name: 'Mayur Peacock Temple Antique Kadas (Pair)',
    category: 'traditional',
    categoryLabel: 'Traditional Bangles',
    image: '/src/assets/images/collection_traditional_kadas_1793184888879.jpg',
    price: 1850,
    priceNote: 'Pair of 2 Screw-Clasp Kadas',
    description: 'Intricately embossed heritage kadas featuring majestic royal peacock iconography, uncut polki kundan stones, and ruby accents with a secure side lock.',
    sizes: ['2-4', '2-6', '2-8'],
    features: ['Antique 22k matte gold micro-plating', 'Screw opening for comfortable fit', 'Lightweight hollow-core comfort', 'Lead and nickel safe'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-4',
    name: 'Aaina Mirror-Work Festive Chudi Stack',
    category: 'festive',
    categoryLabel: 'Festive Wear',
    image: '/src/assets/images/collection_festive_party_1793184888497.jpg',
    price: 950,
    priceNote: 'Full Both-Hands Set (48 Pieces)',
    description: 'Glistening mirror-inlay bangles accented with champagne gold beaded borders. Perfect companion for Surat’s legendary Navratri Garba nights.',
    sizes: ['2-4', '2-6', '2-8'],
    features: ['Real reflective mirror work', 'Resilient thread binding', 'Reflects festive lighting gracefully', 'Pairs with Lehengas & Sarees'],
    isFeatured: true,
  },
  {
    id: 'prod-5',
    name: 'Kundan & Ruby Bridal Patlas',
    category: 'bridal',
    categoryLabel: 'Bridal Chudi Sets',
    image: '/src/assets/images/collection_traditional_kadas_1793184888879.jpg',
    price: 2200,
    priceNote: 'Pair of 2 Heavy Bridal Patlas',
    description: 'Broad bridal side patlas with emerald-cut faux ruby stones surrounded by flower kundan crystals. The quintessential frame for bridal chudi.',
    sizes: ['2-4', '2-6', '2-8', '2-10'],
    features: ['Broad 18mm royal profile', 'High-grade simulated rubies', 'Signature velvet lined packaging'],
    isFeatured: true,
  },
  {
    id: 'prod-6',
    name: 'Suhag Red & Marigold Bridal Glass Set',
    category: 'glass',
    categoryLabel: 'Glass Bangles',
    image: '/src/assets/images/collection_glass_bangles_1793184887897.jpg',
    price: 350,
    priceNote: 'Set of 36 Bangles (3 Dozen)',
    description: 'Auspicious deep crimson red and haldi yellow glass bangles with 24k gold leaf line patterns for auspicious poojas, weddings, and godbharai ceremonies.',
    sizes: ['2-2', '2-4', '2-6', '2-8'],
    features: ['Traditional religious colors', 'Handcrafted glass craft', 'Resistant to dulling'],
  },
  {
    id: 'prod-7',
    name: 'Champagne Crystal Evening Bangles',
    category: 'party',
    categoryLabel: 'Party Wear',
    image: '/src/assets/images/collection_festive_party_1793184888497.jpg',
    price: 1400,
    priceNote: 'Set of 8 Bangles',
    description: 'Delicate cubic zirconia encrusted thin bangles in champagne gold. Subtle, chic, and lightweight for cocktail receptions and family gatherings.',
    sizes: ['2-4', '2-6', '2-8'],
    features: ['Pavé setting stones', 'Hypoallergenic brass base', 'Anti-tarnish protective coating'],
  },
  {
    id: 'prod-8',
    name: 'Floral Meenakari Heritage Kadas',
    category: 'traditional',
    categoryLabel: 'Traditional Bangles',
    image: '/src/assets/images/hero_bridal_bangles_1793184886546.jpg',
    price: 1950,
    priceNote: 'Pair of 2 Kadas',
    description: 'Exquisite hand-painted meenakari enamel work on antique gold finish with floral vines and pearls, inspired by royal Rajputana and Gujarati heirlooms.',
    sizes: ['2-4', '2-6', '2-8'],
    features: ['Vibrant hand meenakari', 'Pearl fringe accents', 'Openable side hinge'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-store-1',
    title: 'Gelkrupa Chudighar Showroom in Mota Varachha',
    category: 'Storefront',
    image: '/src/assets/images/boutique_store_display_1793257579012.jpg',
    caption: 'Our boutique at Shop No. 24, Saurashtra Township, near ABC Circle, Mota Varachha, Surat.',
  },
  {
    id: 'gal-store-2',
    title: 'Boutique Bangle Counter & Sizing Table',
    category: 'Storefront',
    image: '/src/assets/images/boutique_counter_trial_1793257578750.jpg',
    caption: 'Velvet trial counter equipped with wrist sizing gauges and bridal collections.',
  },
  {
    id: 'gal-1',
    title: 'Royal Bridal Chudi Set with Kundan Latkans',
    category: 'Bridal',
    image: '/src/assets/images/hero_bridal_bangles_1793184886546.jpg',
    caption: 'Bespoke bridal styling crafted for wedding ceremonies in Surat.',
  },
  {
    id: 'gal-2',
    title: 'Traditional Wedding Chuda Arrangement',
    category: 'Bridal',
    image: '/src/assets/images/collection_bridal_chuda_1793184886986.jpg',
    caption: 'Pure red and ivory tones paired with heavy bridal hanging latkans.',
  },
  {
    id: 'gal-3',
    title: 'Kaleidoscope of Handcrafted Glass Chudi',
    category: 'Glass',
    image: '/src/assets/images/collection_glass_bangles_1793184887897.jpg',
    caption: 'Handcrafted glass bangles stacked in vibrant jewel hues at our boutique.',
  },
  {
    id: 'gal-4',
    title: 'Temple Work Peacock Kadas',
    category: 'Traditional',
    image: '/src/assets/images/collection_traditional_kadas_1793184888879.jpg',
    caption: 'Antique gold finish with ruby inlays and intricate peacock engraving.',
  },
  {
    id: 'gal-5',
    title: 'Navratri Mirror-Work Festive Stack',
    category: 'Festive',
    image: '/src/assets/images/collection_festive_party_1793184888497.jpg',
    caption: 'Sparkling mirror bangles ready for Garba nights and festive gatherings.',
  },
  {
    id: 'gal-6',
    title: 'Heirloom Mehndi & Chudi Harmony',
    category: 'Bridal',
    image: '/src/assets/images/hero_bridal_bangles_1793184886546.jpg',
    caption: 'The unforgettable charm of a bride adorned in traditional chudi.',
  },
];

export const BOUTIQUE_VALUES = [
  {
    title: 'Artisanal Craftsmanship',
    description: 'Every chudi set is curated with obsessive attention to symmetry, color balance, and wrist ergonomics.',
  },
  {
    title: 'Custom Bridal Consultations',
    description: 'Bring your bridal lehenga or wedding outfit palette — we custom assemble matching chuda and kadas to perfection.',
  },
  {
    title: 'Authentic Glass & Kundan',
    description: 'We source fine glass chudi and non-tarnishing kundan pieces made to be treasured across seasons.',
  },
  {
    title: 'Heart of Mota Varachha',
    description: 'Located at Saurashtra Township near ABC Circle, trusted by brides and families across Surat.',
  },
];
