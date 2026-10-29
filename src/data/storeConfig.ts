/**
 * Gelkrupa Chudighar - Boutique Configuration & Data
 * Verified from Justdial Profile: https://jsdl.in/DT-54QUA2AA6A6
 * Location: Mota Varachha, Surat, Gujarat
 * Offerings: Handcrafted Bangles, Chudi, and Heavy American Diamond (AD) & Bridal Jewellery Sets
 */

export interface Product {
  id: string;
  name: string;
  category: 'glass' | 'bridal' | 'traditional' | 'festive' | 'party' | 'ad_jewellery' | 'bridal_haar';
  categoryLabel: string;
  image: string;
  price?: number;
  originalPrice?: number;
  priceNote?: string;
  offerBadge?: string;
  isJewellery?: boolean;
  description: string;
  sizes: string[];
  features: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  gujaratiTitle: string;
  badge: string;
  discountText: string;
  description: string;
  promoCode: string;
  validityText: string;
  image: string;
  features: string[];
  terms: string;
  isFeatured?: boolean;
}

export interface Collection {
  id: 'glass' | 'bridal' | 'traditional' | 'festive' | 'party' | 'ad_jewellery' | 'bridal_haar';
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
  tagline: 'Every Bangle & Jewel Tells a Beautiful Story',
  subTagline: 'Bridal Bangles, Chudi & Heavy AD Diamond Jewellery Boutique',
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
    id: 'ad_jewellery',
    name: 'AD Diamond Jewellery',
    subtitle: 'American Diamond Heavy Necklaces',
    description: 'Glamorous heavy American Diamond (AD) choker sets, cascading necklaces, chandelier earrings, and maang tikka with emerald & ruby gemstone drops.',
    image: '/src/assets/images/ad_diamond_heavy_necklace_1793263370796.jpg',
    countLabel: 'Heavy AD Bridal Sets',
  },
  {
    id: 'bridal_haar',
    name: 'Bridal Necklaces & Rani Haar',
    subtitle: 'Royal Kundan, Polki & Temple Chokers',
    description: 'Majestic multilayered pearl Rani Haars, heavy bridal temple chokers, and royal Nizam polki sets crafted for wedding pheras and reception glamour.',
    image: '/src/assets/images/royal_bridal_rani_haar_1793263371600.jpg',
    countLabel: 'Heirloom Bridal Edition',
  },
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
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-bridal-combo',
    title: 'Royal Bridal Trousseau Combo Offer',
    gujaratiTitle: 'રાયલ બ્રાઇડલ ચૂડા + નેકલેસ કોમ્બો ઓફર',
    badge: 'MOST POPULAR BRIDAL OFFER',
    discountText: 'FREE Bridal Chudi Set (Worth ₹1,200)',
    description: 'Purchase any Heavy American Diamond (AD) Choker Set or Royal Rani Haar and receive a bespoke designer Bridal Chudi / Glass Bangles Set completely FREE for your wedding pheras.',
    promoCode: 'GELKRUPA-BRIDAL',
    validityText: 'Valid This Wedding Season',
    image: '/src/assets/images/ad_bridal_combo_offer_1793264124717.jpg',
    features: [
      'Complimentary matching bridal chudi with kundan latkans',
      'Free customized wrist-sizing & styling consultation',
      'Luxury keepsake velvet wedding trousseau box included',
    ],
    terms: 'Applicable on all heavy AD choker sets & Rani Haars above ₹5,000.',
    isFeatured: true,
  },
  {
    id: 'offer-festive-privilege',
    title: 'Wedding Season Flat 15% Privilege Discount',
    gujaratiTitle: 'હેવી AD જ્વેલરી ફ્લેટ ૧૫% છૂટ',
    badge: 'LIMITED SEASON PRIVILEGE',
    discountText: 'FLAT 15% OFF on Heavy AD Sets',
    description: 'Get an instant 15% privilege discount on all heavy American Diamond bridal sets, cascading chokers, and multi-layered Rani Haars upon advance booking.',
    promoCode: 'WEDDING15',
    validityText: 'Limited Period Offer',
    image: '/src/assets/images/ad_ruby_royal_necklace_1793264143061.jpg',
    features: [
      'Instant 15% billing discount on AD bridal necklaces',
      'Includes matching earrings & designer maang tikka',
      'Available for both boutique visits & WhatsApp bookings',
    ],
    terms: 'Valid on single bill purchase of selected AD jewellery sets.',
    isFeatured: true,
  },
  {
    id: 'offer-showroom-matching',
    title: 'Bring-Your-Lehenga Showroom Trial Privilege',
    gujaratiTitle: 'લેહેંગા મેચિંગ & ફિટિંગ ટ્રાયલ',
    badge: 'BOUTIQUE IN-STORE EXCLUSIVE',
    discountText: 'FREE Styling & Size Fitting Trial',
    description: 'Bring your bridal lehenga or wedding reception saree to our Mota Varachha showroom: enjoy dedicated personal styling, color stone matching, and precision wrist sizing.',
    promoCode: 'MATCHMYOUTFIT',
    validityText: 'Always Available at Showroom',
    image: '/src/assets/images/boutique_counter_trial_1793257578750.jpg',
    features: [
      '1-on-1 personal bridal jewellery styling session',
      'Velvet roll wrist trial with exact millimeter sizing',
      'Exclusive showroom discount voucher on final bill',
    ],
    terms: 'Prior appointment or WhatsApp booking recommended.',
  },
  {
    id: 'offer-bulk-family',
    title: 'Family & Bridesmaids Festive Bulk Package',
    gujaratiTitle: 'ફેમિલી ચૂડી પેકેજ હોલસેલ રેટ',
    badge: 'FAMILY & BRIDESMAIDS SPECIAL',
    discountText: 'Special Wholesale Rates on 24+ Sets',
    description: 'Special bulk rates on colorful handcrafted glass bangles, velvet chudi, and festive kadas for wedding guests, sangeet group dances, and family rituals.',
    promoCode: 'UTSAV-BULK',
    validityText: 'Ongoing Celebration Special',
    image: '/src/assets/images/collection_glass_bangles_1793184887897.jpg',
    features: [
      'Assorted rainbow colors matching all outfit palettes',
      'Standard sizes 2-4, 2-6, 2-8 curated per set',
      'Safe shockproof boutique bundle packaging',
    ],
    terms: 'Minimum quantity 24 sets of matching or assorted bangles.',
  },
];

export const PRODUCTS: Product[] = [
  // Heavy American Diamond (AD) & Bridal Jewellery (PRIMARY FOCUS)
  {
    id: 'prod-combo-1',
    name: 'Royal Bridal Trousseau Combo: Heavy AD Choker + Bridal Chuda Set',
    category: 'ad_jewellery',
    categoryLabel: 'AD Diamond Jewellery',
    image: '/src/assets/images/ad_bridal_combo_offer_1793264124717.jpg',
    price: 8499,
    originalPrice: 10999,
    priceNote: 'Complete Combo (Choker + Earrings + Chuda + Velvet Gift Box)',
    offerBadge: '🎁 SPECIAL COMBO: FREE Bridal Chuda Included',
    isJewellery: true,
    description: 'Our most celebrated bridal package: Imperial emerald-drop American Diamond heavy choker, matching chandelier jhumkas, plus a matching crimson & gold bridal chudi set with pearl latkans in a velvet bridal box.',
    sizes: ['Free Size Choker (Adjustable)', 'Chuda Sizes: 2-4, 2-6, 2-8'],
    features: [
      'Complete wedding day trousseau solution',
      'AAA+ brilliant cut AD diamonds & emerald green drops',
      'Custom handcrafted chudi with traditional latkans',
      'Includes premium velvet bridal keepsake box',
    ],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-ad-3',
    name: 'Maharani Pigeon-Blood Ruby & AD Diamond Peacock Choker Set',
    category: 'ad_jewellery',
    categoryLabel: 'AD Diamond Jewellery',
    image: '/src/assets/images/ad_ruby_royal_necklace_1793264143061.jpg',
    price: 7200,
    originalPrice: 8800,
    priceNote: 'Grand Choker + Peacock Jhumkas + Maang Tikka',
    offerBadge: '⭐ FLAT 15% Wedding Season Offer',
    isJewellery: true,
    description: 'Magnificent bridal choker with uncut pigeon-blood ruby stones and sparkling micro-pave AD diamonds forming royal peacock arches. Includes heavy matching jhumkas and ornate floral maang tikka.',
    sizes: ['Free Size (Adjustable Dori)'],
    features: [
      'Hand-set micro-faceted cubic zirconia & synthetic rubies',
      'Antique gold & 24k micron plating luster',
      'Matching peacock jhumkas with pearl hangings',
      'Luxe velvet display box',
    ],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-ad-1',
    name: 'Imperial Emerald & AD Diamond Bridal Choker Set',
    category: 'ad_jewellery',
    categoryLabel: 'AD Diamond Jewellery',
    image: '/src/assets/images/ad_diamond_heavy_necklace_1793263370796.jpg',
    price: 6850,
    originalPrice: 8200,
    priceNote: 'Complete Set (Heavy Choker + Earrings + Maang Tikka)',
    offerBadge: '🎁 FREE Matching Bangle Set with this Choker',
    isJewellery: true,
    description: 'Breathtaking heavy bridal American Diamond choker featuring brilliant-cut cubic zirconia in floral filigree with teardrop Colombian emerald green drops. Includes matching heavy earrings and maang tikka.',
    sizes: ['Free Size (Adjustable Dori)'],
    features: ['AAA+ Micro-faceted Cubic Zirconia', 'High rhodium anti-tarnish finish', 'Matching chandelier earrings & tikka', 'Luxe velvet display box included'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-ad-2',
    name: 'Waterfall Cascading American Diamond Choker',
    category: 'ad_jewellery',
    categoryLabel: 'AD Diamond Jewellery',
    image: '/src/assets/images/ad_diamond_choker_cocktail_1793263372143.jpg',
    price: 5400,
    originalPrice: 6500,
    priceNote: 'Heavy Choker + Matching Chandelier Earrings',
    offerBadge: '⭐ 15% OFF with Code WEDDING15',
    isJewellery: true,
    description: 'Ultra-glamorous cascading American Diamond bridal & reception necklace set with intricate geometric lattice and shimmering diamond fringe. Guaranteed head-turner for Sangeet & Reception nights.',
    sizes: ['Free Size (Adjustable)'],
    features: ['Solitaire-grade refractive brilliance', 'Lightweight skin-friendly alloy base', 'Platinum finish luster', 'Includes protective storage box'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-haar-1',
    name: 'Royal Nizam Polki Kundan Pearl Rani Haar',
    category: 'bridal_haar',
    categoryLabel: 'Bridal Necklaces & Rani Haar',
    image: '/src/assets/images/royal_bridal_rani_haar_1793263371600.jpg',
    price: 7900,
    originalPrice: 9500,
    priceNote: 'Complete Royal Rani Haar + Jhumkas + Tikka',
    offerBadge: '👑 Royal Heirloom Special Privilege',
    isJewellery: true,
    description: 'Grand heritage bridal long necklace featuring 4-strand lustrous pearls, heavy royal polki kundan peacock pendant, ruby accents, and matching heritage jhumkas and maang tikka.',
    sizes: ['Free Size (Adjustable)'],
    features: ['Real hand-strung freshwater simulated pearls', 'Traditional 22k antique gold plating', 'Detailed hand-painted meenakari back', 'Pairs with both sarees & heavy lehengas'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 'prod-haar-2',
    name: 'Padmavati Temple Lakshmi Kundan Choker Set',
    category: 'bridal_haar',
    categoryLabel: 'Bridal Necklaces & Rani Haar',
    image: '/src/assets/images/temple_kundan_heavy_necklace_1793263372614.jpg',
    price: 6200,
    originalPrice: 7500,
    priceNote: 'Heavy Bridal Choker + Jhumkas',
    offerBadge: '✨ Free Matching Keepsake Box',
    isJewellery: true,
    description: 'Regal temple bridal choker with auspicious Goddess Lakshmi embossing, uncut polki stones, deep maroon & emerald meenakari, and clustered pearl bead drops.',
    sizes: ['Free Size (Adjustable)'],
    features: ['Auspicious temple motifs', 'Broad bridal collar silhouette', 'Heavy matching dome jhumkas', 'Velvet keepsake box'],
    isFeatured: true,
  },

  // Bangles & Chudi Collection
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
    id: 'gal-ad-1',
    title: 'Heavy American Diamond Bridal Choker with Emeralds',
    category: 'Jewellery',
    image: '/src/assets/images/ad_diamond_heavy_necklace_1793263370796.jpg',
    caption: 'Luxury bridal AD diamond choker set with Colombian emerald drops, earrings and maang tikka.',
  },
  {
    id: 'gal-ad-combo',
    title: 'Royal Bridal Combo: AD Choker + Bridal Chuda Trousseau',
    category: 'Jewellery',
    image: '/src/assets/images/ad_bridal_combo_offer_1793264124717.jpg',
    caption: 'The ultimate wedding trousseau flat lay: Heavy AD diamond necklace with matching crimson bridal chuda and latkans.',
  },
  {
    id: 'gal-ad-ruby',
    title: 'Maharani Pigeon-Blood Ruby & AD Diamond Peacock Set',
    category: 'Jewellery',
    image: '/src/assets/images/ad_ruby_royal_necklace_1793264143061.jpg',
    caption: 'Grand bridal peacock choker with pigeon-blood rubies, brilliant AD diamonds and matching heavy jhumkas.',
  },
  {
    id: 'gal-ad-2',
    title: 'Royal Nizam Polki Kundan Pearl Rani Haar',
    category: 'Jewellery',
    image: '/src/assets/images/royal_bridal_rani_haar_1793263371600.jpg',
    caption: 'Majestic multi-strand pearl long necklace with heavy polki kundan peacock pendant.',
  },
  {
    id: 'gal-ad-3',
    title: 'Waterfall Cascading AD Reception Choker',
    category: 'Jewellery',
    image: '/src/assets/images/ad_diamond_choker_cocktail_1793263372143.jpg',
    caption: 'High-brilliance American Diamond fringe choker for Sangeet & Reception nights.',
  },
  {
    id: 'gal-ad-4',
    title: 'Padmavati Temple Lakshmi Kundan Choker',
    category: 'Jewellery',
    image: '/src/assets/images/temple_kundan_heavy_necklace_1793263372614.jpg',
    caption: 'Heavy antique temple jewelry choker with Goddess Lakshmi motif and matching dome jhumkas.',
  },
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
    title: 'Complete Bridal Adornment',
    description: 'From custom bridal chuda sets to heavy American Diamond (AD) & Kundan necklace sets that harmonize with your wedding lehenga.',
  },
  {
    title: 'Artisanal Craftsmanship',
    description: 'Every chudi stack, kada pair, and diamond necklace is selected with obsessive attention to symmetry, finish, and comfortable wear.',
  },
  {
    title: 'Premium Glass & AD Diamonds',
    description: 'We source high-refraction American Diamonds, tempered glass chudi, and non-tarnishing rhodium & gold finishes made to be treasured.',
  },
  {
    title: 'Heart of Mota Varachha',
    description: 'Located at Saurashtra Township near ABC Circle, trusted by brides and families across Surat for wedding jewellery.',
  },
];
