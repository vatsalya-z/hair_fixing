export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  suitability: string;
  icon: string;
  image: string;
  priceStarting: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  baseType: string;
  hairType: string;
  lifespan: string;
  description: string;
  image: string;
  price: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  clientType: string;
  category: string;
  ageGroup: string;
  beforeImg: string;
  afterImg: string;
  solutionProvided: string;
  recoveryTime: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  updatedDate?: string;
  author?: string;
  isDraft?: boolean;
  readTime: string;
  image: string;
  summary: string;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
  ctaText: string;
}

export const SITE_INFO = {
  name: "ozzone Hair - Hair Fixing & Replacement Studio",
  shortName: "ozzone Hair Thiruvananthapuram",
  tagline: "Premier Non-Surgical Hair Replacement Center in Trivandrum",
  phone: "+91 77360 77110",
  altPhone: "+91 98470 62707",
  whatsapp: "919847062707",
  email: "mail@ozzonehair.com",
  timing: "Mon - Sat: 9:00 AM - 7:30 PM | Sunday: By Appointment",
  address: "TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam, Thiruvananthapuram, Kerala 695034",
  branch2: "Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008",
  mapUrl: "https://www.google.com/maps/place/Ozzone+Farrell+bangalore/@12.9660325,77.6380037,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16a25d4a7c99:0xd411d97542f78f0b!8m2!3d12.9660325!4d77.6380037!16s%2Fg%2F1tfxf3nj",
  mapEmbedUrl: "https://maps.google.com/maps?q=Ozzone+Farrell+bangalore&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "hair-patching",
    slug: "hair-patching-service",
    title: "Custom Hair Patching System",
    shortDesc: "Natural human hair patch seamlessly fitted to bald areas with zero pain and instant 100% density.",
    fullDesc: "Our high-precision hair patching service in Thiruvananthapuram is tailored to individual scalp topography. Crafted from 100% natural virgin human hair, our featherlight breathable lace bases blend imperceptibly with your natural hair texture, wave pattern, and color tone.",
    benefits: [
      "100% Natural Human Hair with invisible hairline",
      "Breathable Swiss & French lace base technology",
      "Custom cut, color blend, and salon styling included",
      "Instant transformation in single 90-minute session"
    ],
    duration: "90 minutes",
    suitability: "Male pattern baldness, crown thinning, receding hairline",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    priceStarting: "₹9,999",
  },
  {
    id: "hair-bonding",
    slug: "hair-bonding-technique",
    title: "Dermatological Hair Bonding",
    shortDesc: "Long-lasting secure bonding using FDA-approved hypoallergenic adhesive resins for active lifestyles.",
    fullDesc: "Hair bonding is the perfect solution for professionals and athletes in Kerala seeking worry-free confidence. Using medical-grade, dermatologically tested hypoallergenic bonding fluids, your hair system stays rock-solid during swimming, workouts, and humid Kerala weather.",
    benefits: [
      "Waterproof & sweat-resistant medical grade bond",
      "Withstands high humidity, showering, and active sports",
      "Requires maintenance only once every 4 to 6 weeks",
      "Non-surgical, painless, and zero downtime"
    ],
    duration: "120 minutes",
    suitability: "Active lifestyles, swimmers, sports enthusiasts",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    priceStarting: "₹12,499",
  },
  {
    id: "hair-weaving",
    slug: "micro-ring-hair-weaving",
    title: "Non-Surgical Hair Weaving",
    shortDesc: "Glue-free tracking method interlocking hair system with your existing roots using micro-tracks.",
    fullDesc: "Ideal for clients who prefer an adhesive-free approach, our advanced micro-track hair weaving anchors the high-grade replacement unit to thin strands of your existing hair without chemicals, solvents, or heat.",
    benefits: [
      "Zero adhesives, chemical solvents, or glue residues",
      "Firm mechanical anchor using micro-silicone tracks",
      "Breathable scalp exposure for natural shampooing",
      "Ideal for clients with sensitive or allergy-prone scalps"
    ],
    duration: "100 minutes",
    suitability: "Moderate thinning, adhesive sensitivities",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    priceStarting: "₹11,999",
  },
  {
    id: "non-surgical-replacement",
    slug: "non-surgical-hair-replacement",
    title: "Full Scalp Non-Surgical Replacement",
    shortDesc: "Comprehensive hair restoration for advanced alopecia and high-grade baldness without surgery.",
    fullDesc: "Engineered for clients suffering from Alopecia Areata, Totalis, or advanced Norwood Scale 5-7 baldness. Our full cranial prosthesis delivers a full head of thick, buoyant, natural hair with customized hair direction.",
    benefits: [
      "Full crown and perimeter coverage",
      "Ultra-thin skin polyurethane membrane",
      "Micro-knotting technique mimics scalp follicles",
      "Complete styling versatility — comb in any direction"
    ],
    duration: "150 minutes",
    suitability: "Extensive baldness, alopecia, medical hair loss",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    priceStarting: "₹18,500",
  },
  {
    id: "womens-hair-extensions",
    slug: "womens-toppers-extensions",
    title: "Women's Crown Toppers & Extensions",
    shortDesc: "Discreet volumizing crown pieces and clip-in toppers designed exclusively for female hair thinning.",
    fullDesc: "Hair thinning along the partition or crown in women can affect confidence deeply. Our silk-base toppers offer natural parting lines that simulate scalp tissue with undetectable silk injection.",
    benefits: [
      "Silk-top illusion with genuine scalp look",
      "Ultra-light clip-in or semi-permanent micro-ring fix",
      "Heat-resistant natural hair — curl, straighten, and blow-dry",
      "Private female consulting suite with licensed stylists"
    ],
    duration: "75 minutes",
    suitability: "Female pattern diffuse thinning, post-partum loss",
    icon: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    priceStarting: "₹14,000",
  },
  {
    id: "maintenance-servicing",
    slug: "hair-patch-service-maintenance",
    title: "Hair Patch Servicing & Scalp Spa",
    shortDesc: "Professional re-bonding, deep scalp cleansing, system conditioning, and precision re-styling.",
    fullDesc: "Prolong the life of your hair system with our comprehensive monthly maintenance ritual. Includes deep detangling, ultrasonic base sanitization, scalp exfoliation, and fresh medical adhesive re-application.",
    benefits: [
      "Scalp detox and anti-dandruff treatment",
      "System deep conditioning and keratin polish",
      "Precision perimeter touch-up and adhesive reset",
      "Quick 45-minute express turnaround available"
    ],
    duration: "45-60 minutes",
    suitability: "Monthly routine for all hair patch users",
    icon: "CheckCircle",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    priceStarting: "₹1,200",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "c22-solvent",
    title: "C22 solvent",
    category: "Solvents & Cleaners",
    baseType: "Citrus-Based Fast Acting Formula",
    hairType: "Safe for All Hair Systems & Scalp",
    lifespan: "118ml / 4 oz",
    description: "Citrus solution for cleaning the hair systems. C-22 is the #1 fast-acting cleaner for scalp and all hair systems. Gentle on skin, with a pleasant fresh citrus scent, and easily rinses off with soap and water.",
    image: "/images/products/c22-solvent.webp",
    price: "Enquire for Price",
    rating: 5.0,
  },
  {
    id: "ultrahold",
    title: "ULTRAHOLD",
    category: "Adhesives & Bonding",
    baseType: "Medical Grade Waterproof Acrylic Adhesive",
    hairType: "Lace, Poly & Skin Bases",
    lifespan: "4+ Weeks Maximum Wear",
    description: "Ultrahold® Power is a highly versatile, easy to use anionic styling polymer and medical-grade hair system adhesive suitable for long-lasting, waterproof, and sweat-resistant bonding in Kerala's climate.",
    image: "/images/products/ultrahold.jpg",
    price: "Enquire for Price",
    rating: 5.0,
  },
];

export interface ProductFaqItem {
  question: string;
  answer: string;
}

export const PRODUCT_FAQS: ProductFaqItem[] = [
  {
    question: "Are C-22 Solvent and Ultrahold Adhesive safe for sensitive scalps?",
    answer: "Yes, absolutely. Walker Tape C-22 is an organic citrus-based solvent with natural fruit oils, making it exceptionally gentle on the skin while rapidly dissolving adhesive residues. Ultrahold is a dermatologically tested, medical-grade hypoallergenic acrylic adhesive that does not irritate or damage sensitive scalp tissue.",
  },
  {
    question: "How long does Ultrahold adhesive keep a hair system attached in Kerala's humidity?",
    answer: "Ultrahold is rated as a Maximum Wear adhesive (4+ weeks). Even in Kerala's tropical humid weather, heavy sweating, workouts, or frequent showers, its waterproof acrylic polymer bond holds firmly for 3 to 5 weeks before requiring a routine maintenance service.",
  },
  {
    question: "How do I apply C-22 Solvent and does it leave an oily residue?",
    answer: "Spray C-22 Solvent along the perimeter of your hair patch or lace system. Allow it to soak for 60 seconds. The adhesive will soften and release painlessly. Afterward, simply rinse your scalp and hair unit with lukewarm water and shampoo. C-22 is completely water-soluble and washes away cleanly with zero sticky or oily traces.",
  },
  {
    question: "Can I buy C-22 Solvent and Ultrahold directly at your Thiruvananthapuram studio?",
    answer: "Yes! Genuine 100% imported bottles of C-22 Solvent (118ml) and Ultrahold Adhesive are always in stock at our Thiruvananthapuram studio located at Statue Junction (MG Road, opposite Secretariat) and Pattom. You can walk in for immediate pickup or order via WhatsApp for courier delivery across Kerala.",
  },
  {
    question: "Which hair system base materials are compatible with Ultrahold?",
    answer: "Ultrahold works seamlessly across all hair replacement base materials, including delicate Swiss Lace, breathable French Lace, 0.03mm Polyurethane (PU) micro-skin perimeters, and Silk Top monofilament units.",
  },
  {
    question: "Can I swim, take hot showers, and wear a helmet with Ultrahold?",
    answer: "Yes. Once fully cured (we advise avoiding water/heavy sweating for 24 hours immediately following application), Ultrahold forms a 100% waterproof and moisture-resistant bond that withstands swimming, intense workouts, shampooing, and motorcycle helmet pressure.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    clientType: "Male - 32 Yrs, IT Professional (Technopark Trivandrum)",
    category: "Hair Patching",
    ageGroup: "30-35",
    beforeImg: "/images/gallery/client_1-1.jpg",
    afterImg: "/images/gallery/client_1-1.jpg",
    solutionProvided: "Custom Hair Fixing & Replacement",
    recoveryTime: "Instant 90-min transformation",
  },
  {
    id: "gal-2",
    clientType: "Male - 45 Yrs, Govt Officer (Secretariat)",
    category: "Hair Bonding",
    ageGroup: "45-50",
    beforeImg: "/images/gallery/client_2-1.jpg",
    afterImg: "/images/gallery/client_2-1.jpg",
    solutionProvided: "Non-Surgical Hair Replacement System",
    recoveryTime: "Zero downtime",
  },
  {
    id: "gal-3",
    clientType: "Male - 29 Yrs, Marketing Executive (Kesavadasapuram)",
    category: "Hair Fixing",
    ageGroup: "25-30",
    beforeImg: "/images/gallery/client_3-1.jpg",
    afterImg: "/images/gallery/client_3-1.jpg",
    solutionProvided: "100% Natural Human Hair Patch",
    recoveryTime: "Immediate same-day wear",
  },
  {
    id: "gal-4",
    clientType: "Male - 38 Yrs, Business Owner (Pattom)",
    category: "Hair Patching",
    ageGroup: "35-40",
    beforeImg: "/images/gallery/client_4-1.jpg",
    afterImg: "/images/gallery/client_4-1.jpg",
    solutionProvided: "Dermatological Scalp Bonding Result",
    recoveryTime: "90 minutes studio session",
  },
  {
    id: "gal-5",
    clientType: "Male - 31 Yrs, Crown & Frontal Restoration (Statue)",
    category: "Hair Patching",
    ageGroup: "30-35",
    beforeImg: "/images/gallery/Gemini_Generated_Image_mlb2ramlb2ramlb2.png",
    afterImg: "/images/gallery/Gemini_Generated_Image_mlb2ramlb2ramlb2.png",
    solutionProvided: "Full Natural Hair Patch Fixing",
    recoveryTime: "Instant 90-min transformation",
  },
  {
    id: "gal-6",
    clientType: "Male - 42 Yrs, Receding Hairline & Crown Density (Pattom)",
    category: "Hair Bonding",
    ageGroup: "40-45",
    beforeImg: "/images/gallery/Gemini_Generated_Image_uj96liuj96liuj96.png",
    afterImg: "/images/gallery/Gemini_Generated_Image_uj96liuj96liuj96.png",
    solutionProvided: "HD Lace Hair Replacement System",
    recoveryTime: "Immediate same-day wear",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-hair-fixing-thiruvananthapuram",
    slug: "hair-fixing-in-thiruvananthapuram",
    title: "Hair Fixing in Thiruvananthapuram: The Complete Non-Surgical Hair Replacement Guide",
    category: "Hair Fixing",
    author: "ozzone Hair Specialist Team",
    date: "November 10, 2026",
    updatedDate: "November 14, 2026",
    isDraft: false,
    readTime: "6 min read",
    image: "/images/blog/hair-fixing-in-thiruvananthapuram.jpg",
    summary: "Complete 2026 guide to professional hair fixing in Thiruvananthapuram. Learn how non-surgical hair systems, custom hair patches, and medical bonding deliver 100% natural, undetectable results in just 90 minutes at our Trivandrum studios.",
    content: [
      "Hair loss and thinning affect thousands of men and women across Kerala every year. For residents in Thiruvananthapuram seeking a guaranteed, painless, and instant solution, hair fixing has emerged as the premier non-surgical alternative to invasive surgical transplants.",
      "What is Hair Fixing? Hair fixing in Thiruvananthapuram is an advanced cosmetic hair restoration technique where a custom-crafted hair system — made exclusively with 100% natural human hair — is seamlessly integrated with your existing hair and scalp. Whether you suffer from crown baldness, receding hairlines, or diffuse thinning, hair fixing restores complete volume and a natural graduated hairline without incisions, stitches, or medication.",
      "How Does the 90-Minute Procedure Work? At ozzone Hair Studio in Palayam, the hair fixing process begins with a confidential scalp analysis. Our certified specialists create an exact mold of your thinning area, match your hair texture, density, curl pattern, and color tone, and securely bond the featherlight lace or micro-skin base using FDA-approved dermatological polymers. Finally, our senior stylists cut and style your new hair to blend flawlessly with your natural hair.",
      "Why Hair Fixing Outperforms Hair Transplants in Kerala: Traditional hair transplant surgery requires 9 to 12 months for uncertain growth, costs upwards of ₹1 Lakh, and often leaves visible donor area scarring. In contrast, non-surgical hair fixing delivers guaranteed 100% hair density immediately in a single 90-minute session with zero downtime, zero pain, and complete styling flexibility.",
      "Engineered for Kerala's Humid Coastal Climate: One of the most frequent questions Trivandrum clients ask is whether sweating, swimming, or humid weather will dislodge a hair patch. Modern hair systems utilize breathable Swiss and French lace bases paired with waterproof medical adhesives like Ultra Hold and Ghost Bond. You can shower daily, ride your two-wheeler through MG Road traffic, work out at the gym, and swim at Kovalam beach with 100% confidence.",
      "Cost of Hair Fixing in Thiruvananthapuram: Professional hair fixing in Trivandrum starts from ₹8,500 for targeted crown patches, with premium custom lace systems ranging between ₹16,000 and ₹24,000. With affordable monthly maintenance averaging ₹1,000 to ₹1,500, it remains one of the most accessible aesthetic investments for your personal and professional confidence.",
      "Book Your Free Consultation in Trivandrum: Ready to restore your natural look? Visit ozzone Hair Studio at Palayam (Opp. Jubilee Memorial Hospital) for a free, confidential hair analysis with our certified technicians."
    ]
  },
  {
    id: "blog-1",
    slug: "hair-patch-vs-hair-transplant-trivandrum",
    title: "Hair Patch vs Hair Transplant: Non-Surgical Fixing in Kerala [Draft]",
    category: "Hair Restoration",
    author: "ozzone Hair Specialist Team",
    date: "November 5, 2026",
    updatedDate: "November 14, 2026",
    isDraft: true,
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    summary: "A transparent comparison of cost, surgical risks, recovery time, and guaranteed density between hair patches and surgical transplants for hair loss in Thiruvananthapuram.",
    content: [
      "When confronted with male pattern baldness or thinning hair, most individuals in Thiruvananthapuram weigh two major options: surgical hair transplant and non-surgical hair fixing.",
      "Surgical Risks and Recovery Times: Surgical hair transplants require micro-incisions, follicle extraction from the donor area, long healing periods of 9 to 12 months, and rely heavily on existing donor hair density. If donor hair is sparse or if androgenetic alopecia continues, surgical results can look thin and unnatural. Potential risks include folliculitis, scarring, and surgical infection.",
      "Instant Density and Painless Restoration: Non-surgical hair patching, on the other hand, delivers instant 100% hair density within a single 90-minute session. There are zero needles, zero scars, and zero downtime. You walk into our Thiruvananthapuram clinic and walk out with your youthful look restored completely.",
      "Financial Comparison and Value: Surgical transplants in Kerala range from ₹70,000 to over ₹1,80,000 without guaranteed density. A custom hair patch in Trivandrum starts at ₹8,500 to ₹22,000 with complete density control and style versatility.",
      "Scalp Comfort in Kerala Humidity: Kerala's tropical humid climate is uniquely accommodated by our breathable Swiss and French lace systems, ensuring natural perspiration escape and total scalp comfort throughout monsoon and summer."
    ]
  },
  {
    id: "blog-2",
    slug: "how-long-does-a-hair-patch-last",
    title: "How Long Does a Hair Patch Last? Durability & Care Guide [Draft]",
    category: "Maintenance Tips",
    author: "Senior Hair Technician, ozzone Hair",
    date: "November 12, 2026",
    updatedDate: "November 14, 2026",
    isDraft: true,
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    summary: "Discover the true lifespan of custom hair patches, factors affecting longevity, and how regular monthly servicing extends system life in Kerala.",
    content: [
      "How Long Does a Hair System Really Last? On average, a high-quality 100% natural human hair patch lasts between 6 to 12 months, with ultra-durable monofilament units lasting up to 14 months and ultra-thin skin units designed for 4 to 6 months of peak undetectable realism.",
      "Key Factors Affecting Durability: Three primary factors govern system lifespan: base material thickness, hair knotting type, and daily home maintenance habits. Breathable Swiss lace bases offer supreme realism but require gentler brushing, whereas hybrid polyurethane bases offer longer resilience.",
      "The Role of Monthly Servicing: In Trivandrum and Bangalore, scheduling a routine 45-minute re-bonding and conditioning service every 3 to 4 weeks ensures that adhesive residue is safely dissolved, natural hair underneath is neatly trimmed, and deep hydration treatments preserve the virgin hair follicles.",
      "Daily Best Practices for Longevity: Use wide-tooth detangling combs, wash with sulfate-free organic shampoos, apply leave-in silicone or argan serum to hair ends, and pat dry with microfiber towels rather than rough friction drying."
    ]
  },
  {
    id: "blog-3",
    slug: "hair-patch-care-in-humid-climate",
    title: "Hair Patch Care in Humid Climate: Kerala Scalp & Maintenance Guide [Draft]",
    category: "Maintenance Tips",
    author: "Scalp Care Specialist, ozzone Hair",
    date: "October 28, 2026",
    updatedDate: "November 14, 2026",
    isDraft: true,
    readTime: "4 min read",
    image: "/images/blog/hair-patch-lifestyle-swimming-gym.jpg",
    summary: "Practical tips to protect your hair patch adhesive and base from coastal moisture, sweat, and sea salt in Trivandrum and coastal Kerala.",
    content: [
      "Thiruvananthapuram's coastal location brings high humidity, monsoons, and tropical warmth. Clients often ask whether sweating, rain, or humidity will weaken their hair patch.",
      "Waterproof Medical Bonding Explained: With dermatologically tested, medical-grade polymers such as Ultra Hold and Ghost Bond, perspiration does not break down the chemical bond. The adhesive remains water-impermeable even during strenuous exercise or heavy sweating.",
      "Combating Scalp Moisture and Odor: High humidity requires disciplined scalp hygiene. We recommend washing the hair system twice a week with pH-balanced, tea-tree or antimicrobial cleansers that keep the scalp fresh, prevent bacterial buildup, and eliminate itching.",
      "Post-Swim and Workout Routine: Always rinse thoroughly with fresh tap water after swimming in Kovalam or Varkala beaches to remove salt crystals. Pat dry gently and allow airflow through the breathable lace perimeter."
    ]
  },
  {
    id: "blog-4",
    slug: "hair-fixing-cost-in-trivandrum",
    title: "Hair Fixing Cost in Trivandrum: 2026 Price Breakdown & Packages [Draft]",
    category: "Pricing Guide",
    author: "ozzone Hair Consultation Desk",
    date: "September 18, 2026",
    updatedDate: "November 14, 2026",
    isDraft: true,
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    summary: "Complete transparency on hair fixing costs in Thiruvananthapuram: starting prices, base materials, custom hair grades, and monthly servicing fees.",
    content: [
      "Transparent Pricing for Non-Surgical Hair Fixing: Hair patch prices in Thiruvananthapuram vary based on the base construction (Swiss Lace, French Lace, Silk Top, or Poly Skin), hair quality grade, and custom scalp area coverage.",
      "Detailed Price Tiers: Standard clip-on crown units start from ₹8,500 to ₹12,000. Premium medical bonding systems with undetectable front Swiss lace range from ₹14,000 to ₹22,000. Full scalp replacement units for extensive Norwood scale 6-7 loss range from ₹22,000 to ₹32,000.",
      "Monthly Maintenance and Servicing Costs: Routine monthly servicing in Trivandrum costs between ₹1,000 and ₹1,500. This includes adhesive removal, scalp detox, natural hair haircut, deep conditioning, and fresh waterproof bonding.",
      "Cost vs Surgical Transplant: A surgical hair transplant in Kerala costs between ₹80,000 and ₹2,00,000 with uncertain results. Hair fixing provides immediate guaranteed density at a fraction of the initial cost with zero downtime."
    ]
  },
  {
    id: "blog-5",
    slug: "is-hair-fixing-safe",
    title: "Is Hair Fixing Safe? Dermatological Facts & Scalp Health Guide [Draft]",
    category: "Safety & Health",
    author: "ozzone Hair Clinical Advisor",
    date: "November 13, 2026",
    updatedDate: "November 14, 2026",
    isDraft: true,
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    summary: "A medical and dermatological assessment of non-surgical hair fixing safety: hypoallergenic adhesives, scalp breathing, and biological impact on natural hair.",
    content: [
      "Is Non-Surgical Hair Fixing Safe for Your Scalp? Yes, hair fixing is 100% safe, non-invasive, and dermatologically approved when performed with medical-grade adhesives and breathable hair systems.",
      "Hypoallergenic Adhesives and Skin Testing: Modern hair bonding utilizes water-based and medical-grade acrylic polymers that are non-toxic, latex-free, and hypoallergenic. At ozzone Hair Studio, we conduct a preliminary skin patch test for sensitive clients to eliminate any risk of contact dermatitis.",
      "Does a Hair Patch Stop Remaining Hair Growth? No. Hair patches are attached only to the bald crown region or perimeter tracks. The micro-pores in Swiss lace and breathable poly bases allow natural oxygenation and sebum flow, permitting existing hair follicles to continue their natural growth cycle unimpeded.",
      "Zero Surgical Complications: Unlike surgical hair transplants which carry risks of scarring, nerve numbness, shock loss, and infection, non-surgical hair replacement is completely reversible, painless, and carries zero health risks."
    ]
  },
  {
    id: "blog-6",
    slug: "womens-hair-loss-solutions-thiruvananthapuram",
    title: "Discreet Hair Restoration Solutions for Women in Trivandrum",
    category: "Women's Health",
    author: "Senior Female Stylist, ozzone Hair",
    date: "September 30, 2026",
    updatedDate: "November 14, 2026",
    isDraft: false,
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    summary: "How silk crown toppers provide natural volume and partition coverage for women experiencing hormonal or stress-related hair thinning.",
    content: [
      "Hair loss in women is often accompanied by emotional stress and hesitance to seek help. Unlike men who experience receding hairlines, women typically experience diffuse thinning across the crown and widened parting lines.",
      "Our specialized Women's Silk Toppers clip effortlessly into your natural hair or are secured with semi-permanent micro-rings, blending invisibly with your hair color and texture.",
      "We provide private, confidential consulting rooms staffed by experienced female hair stylists at our Palayam studio in Thiruvananthapuram."
    ]
  },
  {
    id: "blog-7",
    slug: "swimming-gym-shower-with-hair-patch",
    title: "Can You Swim, Gym, and Shower with a Hair Patch? The Ultimate Lifestyle Guide",
    category: "Lifestyle",
    author: "ozzone Hair Specialist Team",
    date: "September 02, 2026",
    updatedDate: "November 14, 2026",
    isDraft: false,
    readTime: "4 min read",
    image: "/images/blog/hair-patch-lifestyle-swimming-gym.jpg",
    summary: "Live an unrestricted life: ride your bike without a helmet cap, dive into the pool, and wash your hair normally.",
    content: [
      "One of the biggest concerns for prospective clients in Trivandrum is whether a hair system will limit their active lifestyle.",
      "The answer is a resounding NO. Medical poly-adhesive creates a waterproof barrier that resists chlorine, ocean salt, and sweat.",
      "You can shower daily, style your hair with wax or gel, and ride your motorbike across Thiruvananthapuram with complete freedom."
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "What is non-surgical hair fixing and how does it work?",
    answer: "Non-surgical hair fixing is a modern, painless hair restoration procedure where a customized hair system made of 100% natural human hair is attached to the scalp using medical-grade adhesive (hair bonding) or micro-tracks (hair weaving). It seamlessly merges with your natural hair, restoring your hairline and full crown density instantly without surgery or incisions.",
    category: "General"
  },
  {
    question: "Can anyone notice that I am wearing a hair patch?",
    answer: "No. Our hair systems feature ultra-thin, breathable French/Swiss lace and micro-skin bases. Individual hairs are hand-knotted to replicate real follicles growing naturally from your scalp. The hairline is graduated and matched precisely to your hair texture, wave pattern, and color, making it virtually undetectable even from inches away.",
    category: "Appearance"
  },
  {
    question: "How long does a hair patch stay attached before maintenance?",
    answer: "Depending on your scalp oiliness, sweat levels, and lifestyle, a bonded hair system typically stays securely attached for 3 to 5 weeks. After this period, you visit our studio in Thiruvananthapuram for a routine 45-minute service where the unit is cleaned, deep conditioned, and re-secured.",
    category: "Maintenance"
  },
  {
    question: "Can I shower, shampoo, swim, and ride a bike with it?",
    answer: "Yes, 100%! Our medical-grade bonding adhesives are completely waterproof and sweat-resistant. You can take hot showers, swim in chlorinated pools or the sea, work out at the gym, and ride your bike with a helmet without any fear of detachment.",
    category: "Lifestyle"
  },
  {
    question: "Is the procedure painful or does it have side effects?",
    answer: "Hair fixing is completely non-invasive, 100% pain-free, and has zero side effects. We use hypoallergenic, FDA-approved dermatological bonding agents that are gentle on sensitive scalps.",
    category: "Safety"
  },
  {
    question: "What is the lifespan of a premium hair patch?",
    answer: "Depending on the base type and maintenance care, a high-quality human hair system lasts between 8 to 14 months. Ultra-thin skin bases last 4 to 6 months due to their delicate invisible perimeter, while fine monofilament systems can last up to 14 to 18 months.",
    category: "Durability"
  },
  {
    question: "How much does hair fixing cost in Thiruvananthapuram?",
    answer: "Our hair fixing packages in Trivandrum start from ₹8,999 for standard breathable systems up to ₹24,999 for ultra-premium HD Swiss lace systems. We provide transparent upfront pricing with zero hidden charges, including initial styling, haircut, and first wash.",
    category: "Cost"
  },
  {
    question: "Do you offer private consultation rooms in Trivandrum?",
    answer: "Yes, client privacy and comfort are our highest priorities. Our clinics at Statue Junction (MG Road) and Pattom feature private consultation suites for both male and female clients with dedicated styling specialists.",
    category: "Consultation"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential Breathable",
    subtitle: "Ideal for first-time clients seeking reliable daily density",
    price: "₹9,999",
    features: [
      "100% Natural Human Hair",
      "Fine Monofilament Breathable Base",
      "Dermatological Hair Bonding / Weaving",
      "Custom Haircut & Styling Included",
      "Anti-bacterial Scalp Cleansing",
      "30-day Free First Servicing Warranty",
      "Lifespan: 8 - 12 Months"
    ],
    bestFor: "Budget-conscious professionals & college students",
    ctaText: "Book Essential Plan"
  },
  {
    id: "premium-hd",
    name: "RonEx Royal HD Lace",
    subtitle: "Our most popular choice — undetectable front hairline",
    price: "₹15,999",
    popular: true,
    features: [
      "100% Virgin Remy Human Hair",
      "Ultra-Fine Swiss/French HD Lace Base",
      "Micro-bleached Knots for Zero Visible Grid",
      "Super-strength Waterproof Medical Bond",
      "Fully customized hairline contour",
      "Exclusive Scalp Serum Treatment",
      "2 Free Service & Re-Bonding Sessions",
      "Lifespan: 9 - 14 Months"
    ],
    bestFor: "Executives, wedding grooms, active lifestyles",
    ctaText: "Choose Royal HD Lace"
  },
  {
    id: "ultra-skin",
    name: "Crown Elite Poly-Skin",
    subtitle: "0.03mm second-skin technology for extreme realism",
    price: "₹22,999",
    features: [
      "Hand-selected Grade 11A Virgin Hair",
      "0.03mm Polyurethane Invisible Skin Base",
      "Featherlight 35g Total System Weight",
      "V-looped hair implantation mimics natural pores",
      "Multi-directional 360° parting flexibility",
      "VIP Private Studio Suite Styling",
      "3 Free Monthly Maintenance Sessions",
      "Dedicated Personal Stylist Support"
    ],
    bestFor: "Maximum realism, luxury styling, high-profile personalities",
    ctaText: "Book Elite Consultation"
  }
];

export const TESTIMONIALS = [
  {
    name: "Arun Kumar S.",
    role: "Senior Project Lead, Technopark Trivandrum",
    comment: "I was losing hair on my crown since age 25. After consulting ozzone Hair Fixing at Statue, my entire look transformed in just 90 minutes! My colleagues couldn't tell it wasn't my natural hair. The RonEx blue clinic environment was pristine and professional.",
    rating: 5,
    location: "Kazhakkoottam, Trivandrum"
  },
  {
    name: "Dr. Deepa Nair",
    role: "Assistant Professor, Medical College",
    comment: "The women's private consultation suite in Pattom gave me tremendous comfort. My silk crown topper feels so natural, light, and comfortable even during 8-hour hospital shifts.",
    rating: 5,
    location: "Pattom, Thiruvananthapuram"
  },
  {
    name: "Rahul Chandran",
    role: "Entrepreneur & Fitness Enthusiast",
    comment: "I swim 3 times a week at Jimmy George indoor pool. The medical bonding has never loosened. Unmatched service and very transparent pricing with no hidden charges.",
    rating: 5,
    location: "Kowdiar, Thiruvananthapuram"
  }
];

