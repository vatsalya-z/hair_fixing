export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceKeyPoint {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSectionSubsection {
  heading: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface ServiceSection {
  id?: string;
  heading: string;
  paragraphs: string[];
  subsections?: ServiceSectionSubsection[];
  callout?: {
    title: string;
    text: string;
  };
}

export interface ServiceDetail {
  slug: string;
  legacyAnchor: string;
  title: string;
  shortDesc: string;
  category: string;
  heroBadge: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;

  // Section 2: Intro
  introHeading: string;
  introParagraphs: string[];
  introImage: string;
  introImageAlt: string;
  targetAudience: string[];

  // Section 3: Detailed Content
  sections: ServiceSection[];

  // Section 4: Supporting / in-article image
  inArticleImage: {
    src: string;
    alt: string;
    caption?: string;
  };

  // Section 5: Process / Key Info
  processHeading: string;
  processSubheading: string;
  processSteps: ServiceProcessStep[];
  keyHighlights: ServiceKeyPoint[];

  // Section 6: FAQs (4-6 per page)
  faqs: ServiceFAQ[];

  // Related Services (other 5 slugs)
  relatedSlugs: string[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'custom-hair-patching': {
    slug: 'custom-hair-patching',
    legacyAnchor: 'hair-patching',
    title: 'Custom Hair Patching System',
    shortDesc: 'Handcrafted natural human hair patch systems seamlessly matched to your scalp contours, hair texture, and natural hairline.',
    category: 'Hair Patch Systems',
    heroBadge: 'Precision Hair System',
    heroDescription: 'Experience instant density and an undetectable, age-appropriate hairline with custom-measured 100% natural human hair patches fitted by certified stylists in private suites.',
    heroImage: '/images/services/custom-hair-patching-hero.webp',
    heroImageAlt: 'Custom Hair Patching System - Undetectable Hairline and Natural Density',
    metaTitle: 'Custom Hair Patching System | Natural Hair Replacement',
    metaDescription: 'Discover custom hair patching systems tailored to your scalp contours. 100% natural human hair, breathable lace bases, and undetectable hairlines in private studio suites.',
    canonicalUrl: 'https://ozzonehair.com/services/custom-hair-patching/',

    introHeading: 'Precision-Engineered Hair Patching for Natural Confidence',
    introParagraphs: [
      'A custom hair patch system is a non-surgical, instant hair replacement method designed specifically for individuals experiencing localized hair loss, thinning crowns, or receding frontal hairlines. Unlike mass-manufactured, one-size-fits-all units, our custom patching systems are meticulously contoured to match the exact dimensions, curvature, and curvature of your thinning or bald area.',
      'Crafted from 100% genuine natural human hair, each hair follicle is hand-knotted onto an ultra-breathable micro-lace base. The result is a featherlight hair system that seamlessly integrates with your perimeter bio hair, matching your exact hair shade, wave pattern, and natural growth direction without surgery or recovery downtime.'
    ],
    introImage: '/images/services/custom-hair-patching-detail.webp',
    introImageAlt: 'Specialist inspecting breathable Swiss lace hair patch base mesh',
    targetAudience: [
      'Men with male pattern baldness (Norwood Stages 2–5)',
      'Individuals with crown thinning or visible scalp through hair',
      'Anyone seeking an immediate cosmetic transformation without surgical procedures',
      'Clients wanting an age-appropriate, realistic front hairline that can be styled freely'
    ],

    sections: [
      {
        id: 'system-construction',
        heading: 'Anatomy of a Custom Hair Patch System',
        paragraphs: [
          'The realism of any hair patch relies on two critical components: base membrane engineering and the quality of the hair strands used. We utilize premium Swiss and French micro-lace membranes alongside micro-thin monofilament polymers that allow natural scalp skin breathing and thermal regulation.',
          'Every strand of virgin human hair is selectively chosen for strand thickness, curl pattern, and color tone to harmonize with your existing side and rear hair.'
        ],
        subsections: [
          {
            heading: 'Breathable Base Materials',
            paragraphs: [
              'Our bases feature ultra-fine Swiss lace fronts that vanish completely against the scalp when placed. Micro-perforations across the base ensure moisture, air, and scalp sweat circulate freely, making the system comfortable even in warm or tropical climates.'
            ],
            bulletPoints: [
              'Ultra-thin Swiss lace front edge for an undetectable transition',
              'Reinforced monofilament center for everyday durability and resilience',
              'Skin-contour polyurethane perimeters for secure, flat adhesion',
              'Featherweight construction weighing under 40 grams total'
            ]
          },
          {
            heading: 'Multi-Directional Hair Injections & Knotting',
            paragraphs: [
              'Single-hair micro-knotting techniques replicate individual hair follicles sprouting naturally from the scalp. This allows you to part your hair on the left, right, or center, or brush it backward into modern pompadours and fades.'
            ]
          }
        ],
        callout: {
          title: 'Specialist Insight',
          text: 'Because natural human hair is used, your hair patch can be trimmed, blow-dried, and styled with water-based styling pomades just like your biological hair.'
        }
      },
      {
        id: 'lifestyle-adaptation',
        heading: 'Daily Life, Washing, and Durability',
        paragraphs: [
          'A properly fitted custom hair patch is engineered for daily life. Once secured using dermatological adhesives or tapes, the system moves naturally with your scalp during everyday work, driving, light exercise, and social gatherings.',
          'Washing and conditioning should be performed once or twice weekly using sulfate-free cleansing shampoos to preserve moisture within the hair strands. With consistent care and regular monthly studio check-ins, high-quality lace systems typically maintain optimal texture and appearance for 8 to 12 months.'
        ]
      }
    ],

    inArticleImage: {
      src: '/images/services/custom-hair-patching-detail.webp',
      alt: 'Close-up examination of Swiss lace hair patch construction and follicle knots',
      caption: 'Breathable Swiss micro-lace base showcasing hand-tied individual human hair knots for seamless scalp integration.'
    },

    processHeading: 'Our 4-Step Custom Patching Workflow',
    processSubheading: 'From private scalp analysis to your finished salon styling in a single visit.',
    processSteps: [
      {
        step: '01',
        title: 'Scalp Topography & Hair Matching',
        description: 'We assess your thinning zones, take precise contour measurements, and analyze your biological hair shade, density, and wave structure.'
      },
      {
        step: '02',
        title: 'Base Selection & Custom Sizing',
        description: 'We choose the ideal breathable base (Swiss lace, French lace, or hybrid skin perimeter) tailored to your lifestyle and scalp type.'
      },
      {
        step: '03',
        title: 'Precision Fitting & Secure Placement',
        description: 'The hair system is carefully positioned and secured along the verified hairline boundary with dermatologically tested bonding materials.'
      },
      {
        step: '04',
        title: 'Personalized Cut, Blend & Styling',
        description: 'Our senior salon stylist cuts and layers the hair patch into your natural hair, ensuring a seamless visual blend and your preferred hairstyle.'
      }
    ],

    keyHighlights: [
      {
        title: '100% Natural Human Hair',
        description: 'Soft, real human hair that moves, reacts, and reflects light naturally under sunlight and indoor studio bulbs.'
      },
      {
        title: 'Undetectable Front Hairline',
        description: 'Graduated hair density along the forehead edge ensures an invisible, natural-looking hairline transition.'
      },
      {
        title: 'Completely Non-Surgical',
        description: 'Instant transformation with zero surgical incisions, zero needles, zero scarring, and zero recovery downtime.'
      },
      {
        title: 'Confidential Private Suites',
        description: 'All consultations, fittings, and styling sessions are carried out in private, 100% confidential consultation rooms.'
      }
    ],

    faqs: [
      {
        question: 'What is a custom hair patch system?',
        answer: 'A custom hair patch is an advanced, non-surgical hair replacement system tailored to fit the exact contours of an individual\'s bald or thinning area. Made with 100% natural human hair on a breathable lace or skin base, it blends invisibly with your surrounding natural hair.'
      },
      {
        question: 'How long does a custom hair patch stay attached?',
        answer: 'When affixed with medical-grade dermatological adhesives or tapes, a hair patch typically remains securely attached for 3 to 5 weeks before requiring a routine re-bonding and scalp cleaning maintenance session.'
      },
      {
        question: 'Can I wash my hair normally with a hair patch on?',
        answer: 'Yes. You can wash and condition your hair system in the shower using gentle, sulfate-free shampoos. Your stylist will provide specific brushing and care instructions to maximize system longevity.'
      },
      {
        question: 'Is a custom hair patch noticeable to others?',
        answer: 'When professionally designed, matched to your biological hair texture, and blended by an experienced stylist, a custom hair patch is virtually indistinguishable from naturally growing hair, even upon close inspection.'
      },
      {
        question: 'How long does a hair patch unit last before needing replacement?',
        answer: 'With proper daily maintenance and regular monthly studio servicing, high-grade natural human hair systems typically last between 8 to 14 months depending on base delicate lace selection and personal wear habits.'
      }
    ],

    relatedSlugs: [
      'dermatological-hair-bonding',
      'non-surgical-hair-weaving',
      'full-scalp-non-surgical-replacement',
      'womens-crown-toppers-extensions',
      'hair-patch-servicing-scalp-spa'
    ]
  },

  'dermatological-hair-bonding': {
    slug: 'dermatological-hair-bonding',
    legacyAnchor: 'hair-bonding',
    title: 'Dermatological Hair Bonding',
    shortDesc: 'Secure, long-lasting hair system attachment using dermatologically tested, waterproof, hypoallergenic bonding adhesives.',
    category: 'Hair Bonding Methods',
    heroBadge: 'Active Lifestyle Bonding',
    heroDescription: 'Stay fully active with sweat-resistant, waterproof dermatological bonding engineered for sports, frequent showers, and tropical humidity.',
    heroImage: '/images/services/hair-bonding-hero.webp',
    heroImageAlt: 'Dermatological Hair Bonding - Waterproof and Sweat-Resistant System Attachment',
    metaTitle: 'Dermatological Hair Bonding | Waterproof Hair System Attachment',
    metaDescription: 'Learn about dermatological hair bonding using hypoallergenic, waterproof medical-grade adhesives. Ideal for active lifestyles, workouts, and tropical humidity.',
    canonicalUrl: 'https://ozzonehair.com/services/dermatological-hair-bonding/',

    introHeading: 'Worry-Free Stability for Dynamic, Active Lifestyles',
    introParagraphs: [
      'Dermatological hair bonding is an advanced non-surgical hair attachment technique that secures a custom hair system directly to the scalp using specialized, skin-safe polymeric adhesives. Developed specifically for individuals with demanding schedules, physical fitness routines, or high humidity environments, bonding creates an unbroken seal that holds firm 24/7.',
      'Unlike temporary clip-on pieces, a bonded hair system stays firmly anchored through daily showers, swimming, strenuous gym workouts, and sports. The adhesives used are hypoallergenic, dermatologically evaluated, and water-insoluble, ensuring scalp safety and comfort across several weeks of continuous wear.'
    ],
    introImage: '/images/services/hair-bonding-detail.webp',
    introImageAlt: 'Dermatological bonding preparation and skin barrier application',
    targetAudience: [
      'Athletes, gym-goers, swimmers, and outdoor sports enthusiasts',
      'Professionals living in warm or high-humidity coastal climates',
      'Individuals who prefer not removing their hair system on a daily basis',
      'Clients wanting dependable 3 to 5-week hold between studio servicing'
    ],

    sections: [
      {
        id: 'bonding-science',
        heading: 'The Chemistry and Safety of Dermatological Adhesives',
        paragraphs: [
          'The cornerstone of successful hair bonding lies in medical-grade copolymer formulations that create a flexible, moisture-resistant bond between the hair system base and the scalp epidermis.',
          'Before adhesive application, the scalp is treated with a specialized hypoallergenic scalp protector. This creates a micro-barrier that prevents skin oil and perspiration from degrading the bond prematurely while protecting the skin from direct contact with adhesives.'
        ],
        subsections: [
          {
            heading: 'Waterproof Acrylic & Silicone Polymer Adhesives',
            paragraphs: [
              'Modern bonding agents are water-resistant polymers that cure cleanly into an invisible, flexible film. They flex naturally with scalp movements without cracking, pulling, or creating uncomfortable stiffness.'
            ],
            bulletPoints: [
              'Resistant to sweat, freshwater, chlorinated pool water, and sea water',
              'Hypoallergenic formulation free from harsh industrial solvents',
              'Clear drying formula that leaves no visible residue along hairline edges',
              'Flexible elasticity that accommodates natural scalp tension'
            ]
          },
          {
            heading: 'Scalp Hygiene & Skin Respiration',
            paragraphs: [
              'Because the adhesive is applied in thin, uniform coats around verified perimeter anchors, the scalp retains the ability to breathe. Routine monthly servicing ensures the scalp is thoroughly exfoliated and cleansed to maintain ongoing dermal health.'
            ]
          }
        ],
        callout: {
          title: 'Durability Note',
          text: 'Adhesive hold duration varies naturally depending on individual skin oiliness, perspiration levels, and climate, typically averaging 3 to 5 weeks between servicing sessions.'
        }
      },
      {
        id: 'activities-and-care',
        heading: 'Living With a Bonded Hair System',
        paragraphs: [
          'With a professionally bonded system, you can carry on with everyday activities without anxiety. You can ride open vehicles, participate in outdoor athletics, shower immediately upon waking, and shampoo your hair on a routine basis.',
          'For optimal longevity, pat hair dry gently with a microfiber towel instead of aggressively rubbing, and avoid applying oil-based hair serums directly onto the perimeter bonding line, as oils can gradually break down the adhesive polymer.'
        ]
      }
    ],

    inArticleImage: {
      src: '/images/services/hair-bonding-detail.webp',
      alt: 'Application of hypoallergenic skin protector and bonding polymer in hair studio',
      caption: 'Careful application of dermatological scalp protector and waterproof adhesive for extended wear stability.'
    },

    processHeading: 'The Professional Bonding Procedure',
    processSubheading: 'A methodical 4-stage process ensuring absolute comfort, safety, and rock-solid hold.',
    processSteps: [
      {
        step: '01',
        title: 'Scalp Cleansing & Oil Extraction',
        description: 'The scalp area is cleansed with clarifying skin preparations to eliminate excess sebum, oils, and dead skin cells.'
      },
      {
        step: '02',
        title: 'Hypoallergenic Scalp Protector',
        description: 'A breathable skin-barrier film is applied to shield sensitive dermal layers and enhance adhesive grip.'
      },
      {
        step: '03',
        title: 'Adhesive Layering & Curing',
        description: 'Thin, uniform coats of medical-grade bonding copolymer are applied and allowed to cure to a clear, tacky state.'
      },
      {
        step: '04',
        title: 'Pressure Placement & Hairline Seal',
        description: 'The hair system is carefully aligned and pressed evenly into the adhesive, establishing a secure perimeter lock.'
      }
    ],

    keyHighlights: [
      {
        title: 'Waterproof & Sweat-Proof',
        description: 'Engineered to withstand intensive cardio sessions, humid tropical weather, and daily warm showers.'
      },
      {
        title: 'Continuous 24/7 Wear',
        description: 'Sleep, shower, exercise, and socialize without taking the system off every evening.'
      },
      {
        title: 'Dermatologically Tested',
        description: 'Skin-safe formulations designed to prevent irritation and maintain healthy scalp flora.'
      },
      {
        title: 'Natural Hair Movement',
        description: 'Flexible bond ensures the system moves fluidly with your facial expressions and scalp.'
      }
    ],

    faqs: [
      {
        question: 'Can I go swimming or workout after hair bonding?',
        answer: 'Yes. Once the bonding polymer has completely cured (typically 24 hours post-application), you can swim in pools, workout, run, and shower with total confidence that the bond will remain rock-solid.'
      },
      {
        question: 'Is dermatological hair bonding painful or invasive?',
        answer: 'Not at all. Hair bonding is 100% non-invasive, pain-free, and requires zero anesthesia, needles, or surgery. Adhesives are applied exclusively to the superficial epidermal layer of the scalp.'
      },
      {
        question: 'How often does a bonded hair system need maintenance?',
        answer: 'Most clients visit the studio every 3 to 5 weeks for a maintenance session, during which the system is removed using organic citrus solvents, the scalp is exfoliated and washed, and fresh adhesive is applied.'
      },
      {
        question: 'Will bonding adhesives damage my existing natural hair?',
        answer: 'When performed by trained professionals using approved medical solvents and techniques, the bonding process does not damage existing hair follicles or inhibit natural hair regrowth in unaffected zones.'
      },
      {
        question: 'What happens if I sweat heavily or have naturally oily skin?',
        answer: 'For clients with oily scalps or active perspiration, we use high-viscosity waterproof polymers and enhanced skin barrier primers specifically designed for tropical weather and high sweat resistance.'
      }
    ],

    relatedSlugs: [
      'custom-hair-patching',
      'non-surgical-hair-weaving',
      'full-scalp-non-surgical-replacement',
      'womens-crown-toppers-extensions',
      'hair-patch-servicing-scalp-spa'
    ]
  },

  'non-surgical-hair-weaving': {
    slug: 'non-surgical-hair-weaving',
    legacyAnchor: 'hair-weaving',
    title: 'Non-Surgical Hair Weaving',
    shortDesc: 'Adhesive-free tracking method interlocking your hair system with natural hair roots using micro-tracks or micro-rings.',
    category: 'Weaving Techniques',
    heroBadge: 'Adhesive-Free Method',
    heroDescription: 'An adhesive-free, mechanical anchoring technique ideal for sensitive scalps, allergies, and clients who prefer zero glues or liquid chemicals.',
    heroImage: '/images/services/hair-weaving-hero.webp',
    heroImageAlt: 'Non-Surgical Hair Weaving - Mechanical Micro-Track Integration',
    metaTitle: 'Non-Surgical Hair Weaving | Glue-Free Hair Fixing Technique',
    metaDescription: 'Discover non-surgical hair weaving using micro-rings and track systems. Completely glue-free, adhesive-free, and ideal for sensitive scalps and natural hair integration.',
    canonicalUrl: 'https://ozzonehair.com/services/non-surgical-hair-weaving/',

    introHeading: 'Mechanical Precision Without Glues, Resins, or Solvents',
    introParagraphs: [
      'Non-surgical hair weaving is a mechanical hair fixing method that anchors a natural human hair system to your existing biological hair without the use of chemical adhesives, liquid glues, or tapes. It is the premier choice for individuals with sensitive scalps, skin allergies, or a personal preference for a completely adhesive-free approach.',
      'During hair weaving, fine tracks or micro-rings with soft silicone interiors are placed along the perimeter of your thinning area, securely gripping small clusters of your biological hair roots. The custom hair replacement unit is then meticulously stitched or interlocked to these tracks, creating a stable, breathable, and mechanical attachment.'
    ],
    introImage: '/images/services/hair-weaving-detail.webp',
    introImageAlt: 'Stylist demonstrating micro-ring and track hair weaving technique',
    targetAudience: [
      'Individuals with dermal sensitivities, contact dermatitis, or adhesive allergies',
      'Clients who prefer mechanical anchoring without liquid chemicals or solvent removers',
      'People with adequate biological hair along the sides and back to support anchor tracks',
      'Men and women seeking a natural, comfortable hair integration method'
    ],

    sections: [
      {
        id: 'weaving-mechanism',
        heading: 'How Micro-Track Hair Weaving Operates',
        paragraphs: [
          'The core advantage of hair weaving is its mechanical nature. Rather than forming a surface bond against the epidermis, weaving relies on the structural tensile strength of your own hair strands acting as a reliable base anchor.',
          'Specially coated, hypoallergenic micro-threads and silicone-cushioned micro-cylinders are woven into natural hair tracks. This creates a secure boundary that holds the hair system flush with the scalp without pulling or stressing individual hair roots.'
        ],
        subsections: [
          {
            heading: 'Zero Chemical Contact with the Scalp',
            paragraphs: [
              'Because no glues or liquid resins are applied, your scalp skin remains completely bare and exposed beneath the hair patch mesh. This allows regular scalp breathing, effortless washing, and zero risk of chemical irritation.'
            ],
            bulletPoints: [
              '100% chemical-free attachment with zero liquid solvents',
              'Silicone-cushioned micro-rings protect natural hair strands from friction',
              'Direct scalp exposure facilitates natural circulation and shampooing',
              'Ideal for clients with psoriasis, eczema, or sensitive scalp tendencies'
            ]
          },
          {
            heading: 'Tensile Balancing & Root Health',
            paragraphs: [
              'Our technicians balance tension evenly across dozens of micro-anchor points. This prevents localized traction and ensures you feel no pulling sensation during sleep, brushing, or everyday head movements.'
            ]
          }
        ],
        callout: {
          title: 'Requirement Note',
          text: 'Hair weaving requires healthy biological hair along the crown perimeter to form the anchor tracks. Clients with total scalp hair loss are better suited to full-cranial systems.'
        }
      },
      {
        id: 'weaving-maintenance',
        heading: 'Maintenance Cycles in Hair Weaving',
        paragraphs: [
          'Because the anchor tracks are attached to your biological hair, the system will gradually loosen over 4 to 6 weeks as your natural hair grows outward from the scalp (typically 1 to 1.5 cm per month).',
          'During your routine maintenance visit, the unit is painlessly unthreaded, your natural hair is trimmed and washed, and the anchor tracks are re-tightened closer to the scalp roots.'
        ]
      }
    ],

    inArticleImage: {
      src: '/images/services/hair-weaving-detail.webp',
      alt: 'Close-up of micro-track anchoring and thread integration with natural hair',
      caption: 'Fine mechanical micro-tracks gently interlocking the hair replacement unit with biological hair roots without glue.'
    },

    processHeading: 'The 4-Step Hair Weaving Process',
    processSubheading: 'A gentle, chemical-free installation carried out by experienced weaving specialists.',
    processSteps: [
      {
        step: '01',
        title: 'Perimeter Boundary Mapping',
        description: 'We identify healthy perimeter hair sections where natural tension can be distributed safely and evenly.'
      },
      {
        step: '02',
        title: 'Micro-Track Anchor Creation',
        description: 'Micro-silicone cylinders or fine tracks are secured along the perimeter without heat or adhesive liquids.'
      },
      {
        step: '03',
        title: 'System Interlocking & Stitching',
        description: 'The custom hair patch is mechanically stitched onto the prepared tracks using specialized hypoallergenic surgical threads.'
      },
      {
        step: '04',
        title: 'Hair Blending & Styling',
        description: 'The woven unit is seamlessly integrated into your biological hair through custom layering and precision styling.'
      }
    ],

    keyHighlights: [
      {
        title: 'Zero Chemical Adhesives',
        description: 'No glues, no liquid tapes, and no chemical solvents touching your scalp at any point.'
      },
      {
        title: 'Optimal for Sensitive Skin',
        description: 'Completely eliminates the risk of contact dermatitis or adhesive allergy flare-ups.'
      },
      {
        title: 'Scalp Direct Washability',
        description: 'Water and shampoo flow directly through the mesh onto the scalp for a clean, fresh feeling.'
      },
      {
        title: 'Secure Mechanical Anchor',
        description: 'Firmly anchored to multiple hair root clusters, holding steadily during daily wear.'
      }
    ],

    faqs: [
      {
        question: 'Does hair weaving hurt or pull my natural hair?',
        answer: 'No. When executed properly by certified specialists, the tension is distributed evenly across multiple hair groups. You will feel comfortable and free from pulling or headaches.'
      },
      {
        question: 'How often does a woven hair system need to be re-tightened?',
        answer: 'As your biological hair grows naturally, the system will gradually loosen. We recommend a quick 45-minute re-tracking maintenance visit every 4 to 6 weeks to reset the tracks close to the roots.'
      },
      {
        question: 'Can I shampoo and shower normally with woven hair?',
        answer: 'Yes. Because no glue is used, you can shampoo your scalp and hair freely in the shower. Water drains naturally through the breathable base, and the tracks dry normally.'
      },
      {
        question: 'What is the difference between hair bonding and hair weaving?',
        answer: 'Hair bonding uses dermatological liquid adhesives or tapes applied directly to the scalp surface, whereas hair weaving uses mechanical micro-tracks or micro-rings anchored to your existing hair strands with zero glue.'
      },
      {
        question: 'Can I switch from hair bonding to hair weaving later?',
        answer: 'Yes, absolutely. Many clients switch between bonding and weaving depending on personal preference, lifestyle changes, or seasonal weather conditions.'
      }
    ],

    relatedSlugs: [
      'custom-hair-patching',
      'dermatological-hair-bonding',
      'full-scalp-non-surgical-replacement',
      'womens-crown-toppers-extensions',
      'hair-patch-servicing-scalp-spa'
    ]
  },

  'full-scalp-non-surgical-replacement': {
    slug: 'full-scalp-non-surgical-replacement',
    legacyAnchor: 'non-surgical-replacement',
    title: 'Full Scalp Non-Surgical Replacement',
    shortDesc: 'Comprehensive cranial prosthesis restoration for advanced alopecia, extensive hair loss, and high-grade baldness without surgery.',
    category: 'Full Cranial Systems',
    heroBadge: 'Full Coverage Solution',
    heroDescription: 'Complete cranial hair restoration engineered for extensive hair loss, Alopecia Totalis, and Norwood Stage 5–7 baldness with natural styling flexibility.',
    heroImage: '/images/services/full-scalp-replacement-hero.webp',
    heroImageAlt: 'Full Scalp Non-Surgical Replacement - Complete Cranial Hair Restoration',
    metaTitle: 'Full Scalp Non-Surgical Replacement | Cranial Prosthesis Systems',
    metaDescription: 'Complete non-surgical full scalp hair replacement for advanced hair loss and alopecia. Custom-molded cranial prosthetics with multi-directional styling and full coverage.',
    canonicalUrl: 'https://ozzonehair.com/services/full-scalp-non-surgical-replacement/',

    introHeading: 'Complete Cranial Prosthetic Engineering for Total Hair Loss',
    introParagraphs: [
      'Full scalp non-surgical hair replacement is a comprehensive cranial hair restoration solution designed for individuals experiencing extensive hair loss, Norwood Stages 5 to 7, Alopecia Areata, Alopecia Totalis, or hair loss resulting from medical circumstances. Where standard localized hair patches cover only the crown, a full cranial system provides full-head coverage from the forehead hairline down to the nape of the neck.',
      'Each full cranial prosthesis is crafted from a 3D mold of the client\'s unique skull contours. Ultra-thin, medical-grade polyurethane skin membranes and breathable micro-mesh are utilized to replicate natural scalp flesh, enabling 360-degree hair styling, realistic partings, and total freedom of movement without surgical procedures.'
    ],
    introImage: '/images/services/full-scalp-replacement-detail.webp',
    introImageAlt: 'Specialist crafting multi-directional full cranial prosthesis unit',
    targetAudience: [
      'Individuals with advanced male pattern baldness (Norwood Scale 5, 6, or 7)',
      'Men and women diagnosed with Alopecia Areata, Totalis, or Universalis',
      'Clients who have undergone medical treatments leading to extensive hair loss',
      'Individuals seeking complete, voluminous full-head hair restoration without surgical grafts'
    ],

    sections: [
      {
        id: 'cranial-engineering',
        heading: '3D Cranial Contouring & Multi-Density Implantation',
        paragraphs: [
          'A full scalp replacement must conform perfectly to the complex curves of the skull—including temporal depressions, crown apex, and the occipital bone at the rear. Any loose pocket would feel unnatural, which is why a precision 3D cast is created for every client.',
          'Hair density is intentionally varied across different zones: lighter along the front hairline and temples, transitioning to rich density through the mid-scalp and crown, and tapering naturally at the neck nape.'
        ],
        subsections: [
          {
            heading: 'Ultra-Thin Skin Polyurethane & Silk Top Hybrids',
            paragraphs: [
              'The cranial base combines 0.03mm micro-skin polyurethane along perimeter borders for secure contouring with silk-top monofilament across the crown for natural scalp illusion.'
            ],
            bulletPoints: [
              'Full 360-degree coverage encompassing frontal, parietal, crown, and occipital regions',
              'V-looped hair implantation mimics natural follicle emergence without visible knots',
              'Multi-directional parting allows combing backward, center-parted, or side-swept',
              'Breathable crown vent zones ensure internal thermal comfort and airflow'
            ]
          },
          {
            heading: 'Secure Cranial Attachment Options',
            paragraphs: [
              'Depending on whether the client has sensitive skin, medical hair loss, or partial perimeter hair, the system can be secured using extended-wear perimeter medical bonding, hypoallergenic perimeter tapes, or custom vacuum-suction micro-silicone fits.'
            ]
          }
        ],
        callout: {
          title: 'Realistic Appearance',
          text: 'Because density is graduated naturally, the finished look avoids the dense, unnatural "wig" appearance, providing realistic movement that looks authentic in all lighting conditions.'
        }
      },
      {
        id: 'lifestyle-freedom',
        heading: 'Confidence, Social Life, and Ongoing Care',
        paragraphs: [
          'Clients wearing full cranial prostheses regain complete freedom in their social and professional lives. The system stays firmly in place during daily activities, allowing you to wear hats, swim, exercise, and style your hair with confidence.',
          'Due to the larger surface area, studio maintenance is recommended every 3 to 4 weeks for deep sanitization, conditioning of the hair strands, and refreshing the perimeter attachment.'
        ]
      }
    ],

    inArticleImage: {
      src: '/images/services/full-scalp-replacement-detail.webp',
      alt: 'Full cranial prosthesis on styling block showing multi-directional hair distribution',
      caption: 'Custom-molded full cranial replacement unit engineered for comprehensive scalp coverage and natural density.'
    },

    processHeading: 'The Full Cranial Custom Journey',
    processSubheading: 'A detailed 4-stage engineering pathway ensuring complete comfort and natural realism.',
    processSteps: [
      {
        step: '01',
        title: '3D Head Casting & Scalp Mapping',
        description: 'We take precise anatomical contour casts of your skull to capture every curvature and bone landmark.'
      },
      {
        step: '02',
        title: 'Hair Specification & Base Architecture',
        description: 'We curate 100% virgin human hair matching your preferred color, age-appropriate grey percentage, and texture.'
      },
      {
        step: '03',
        title: 'Trial Fitting & Perimeter Alignment',
        description: 'The unit is fitted on your scalp to verify zero air pockets, balanced perimeter tension, and natural hairline placement.'
      },
      {
        step: '04',
        title: 'Couture Haircut & Multi-Angle Styling',
        description: 'Our senior salon director sculpts, feathers, and styles the full hair system into your ideal signature haircut.'
      }
    ],

    keyHighlights: [
      {
        title: 'Complete 360° Coverage',
        description: 'Comprehensive restoration for extensive hair loss from frontal forehead down to the neck nape.'
      },
      {
        title: 'Custom Anatomical 3D Fit',
        description: 'Molded precisely to your skull structure for a comfortable, glove-like fit without slipping.'
      },
      {
        title: 'Graduated Natural Density',
        description: 'Lighter hairlines and fuller crowns replicate authentic biological hair growth patterns.'
      },
      {
        title: 'Styling Versatility',
        description: 'Comb, blow-dry, part, and style your hair in any direction with complete confidence.'
      }
    ],

    faqs: [
      {
        question: 'How is a full scalp replacement different from a regular hair patch?',
        answer: 'A standard hair patch covers localized thinning areas (such as the crown or frontal hairline), whereas a full scalp replacement provides complete coverage for the entire head, including front, top, sides, and nape, making it ideal for advanced hair loss or alopecia.'
      },
      {
        question: 'Will a full cranial system feel hot or heavy on my head?',
        answer: 'Modern cranial systems use micro-perforated skin membranes and breathable lace zones weighing less than 70 grams. They allow heat dissipation and airflow, ensuring comfort throughout the day.'
      },
      {
        question: 'Can someone pull the hair system off accidentally?',
        answer: 'No. When secured with professional perimeter bonding or medical adhesives, the system cannot be dislodged by wind, pulling, or sports. It requires specific organic solvent removers to release.'
      },
      {
        question: 'Is this suitable for clients with Alopecia Areata or Totalis?',
        answer: 'Yes. Full cranial prostheses are widely recognized as the gold standard cosmetic solution for individuals with Alopecia Areata, Totalis, or Universalis, restoring full hair appearance without medications.'
      },
      {
        question: 'How often does a full scalp system need professional servicing?',
        answer: 'We recommend visiting our studio every 3 to 4 weeks for professional removal, deep scalp conditioning, system sanitization, and re-securing.'
      }
    ],

    relatedSlugs: [
      'custom-hair-patching',
      'dermatological-hair-bonding',
      'non-surgical-hair-weaving',
      'womens-crown-toppers-extensions',
      'hair-patch-servicing-scalp-spa'
    ]
  },

  'womens-crown-toppers-extensions': {
    slug: 'womens-crown-toppers-extensions',
    legacyAnchor: 'womens-hair-extensions',
    title: "Women's Crown Toppers & Extensions",
    shortDesc: 'Discreet volumizing crown pieces and natural silk-base toppers designed exclusively for female hair thinning and widening partings.',
    category: "Women's Hair Systems",
    heroBadge: 'Exclusive Female Hair Solutions',
    heroDescription: 'Restore youthful crown volume and a seamless natural parting with ultra-lightweight silk toppers designed specifically for female pattern thinning.',
    heroImage: '/images/services/womens-crown-toppers-hero.webp',
    heroImageAlt: "Women's Crown Toppers & Extensions - Natural Parting and Crown Volume",
    metaTitle: "Women's Crown Toppers & Extensions | Silk-Base Hair Systems",
    metaDescription: "Explore natural silk-base crown toppers and extensions for women experiencing thinning hair or widening partings. Discreet, lightweight, and styled in private suites.",
    canonicalUrl: 'https://ozzonehair.com/services/womens-crown-toppers-extensions/',

    introHeading: 'Discreet, Natural Volumizing Designed Exclusively for Women',
    introParagraphs: [
      'Female hair loss typically presents differently from male pattern baldness, often manifesting as diffuse thinning across the top of the scalp, widening of the central parting line, or reduction in overall ponytail volume. Our Women\'s Crown Toppers and hair integration extensions are tailored specifically to address these patterns with absolute discretion.',
      'Featuring ultra-lightweight silk-top bases where hair strands are injected into silk fabric, our toppers create the visual illusion of real scalp skin at the parting line. Each unit clips comfortably or bonds semi-permanently into your existing hair, adding instant crown volume, bounce, and coverage without requiring shaving or invasive procedures.'
    ],
    introImage: '/images/services/womens-crown-toppers-detail.webp',
    introImageAlt: 'Stylist blending silk-top crown topper into female client hair',
    targetAudience: [
      'Women experiencing diffuse hair thinning across the crown or top of the head',
      'Individuals with a noticeably widening partition line or visible scalp',
      'Women coping with hormonal, post-pregnancy, or stress-related hair thinning',
      'Clients desiring immediate hair volume, length, and density for social or daily wear'
    ],

    sections: [
      {
        id: 'silk-base-technology',
        heading: 'Silk-Top Illusion: The Gold Standard for Female Hair Systems',
        paragraphs: [
          'The greatest concern for women considering a hair topper is whether the parting will look artificial under bright indoor lighting or sunlight. Our silk-top toppers resolve this completely through a multi-layered membrane technique.',
          'Hair strands are knotted between an inner lace layer and an outer silk layer, with individual hairs pulled through the silk fabric. The knots remain completely hidden beneath the silk, creating an authentic visual mimicry of natural scalp pores.'
        ],
        subsections: [
          {
            heading: 'Clip-In Freedom vs. Semi-Permanent Integration',
            paragraphs: [
              'We offer two versatile attachment options depending on your daily routine and personal preference:'
            ],
            bulletPoints: [
              'Ultra-lightweight pressure-sensitive silicone clips for daily wear (put on and remove in under 2 minutes at home)',
              'Micro-ring integration for semi-permanent wear (stays secure through showers and sleep for 4 to 6 weeks)',
              '100% natural virgin Remy human hair that can be straightened, curled, and blow-dried',
              'Featherweight breathable base that leaves natural perimeter hair completely free'
            ]
          },
          {
            heading: 'Private Female Consultation Suites',
            paragraphs: [
              'We understand that hair loss can be deeply personal. All consultations, try-ons, and styling sessions are conducted in 100% private, soundproof female styling chambers with licensed female hair stylists.'
            ]
          }
        ],
        callout: {
          title: 'Heat Styling Friendly',
          text: 'Because our toppers are crafted from 100% natural human hair, you can use curling irons, hair dryers, and straighteners with heat protectant just as you would with your natural hair.'
        }
      },
      {
        id: 'blending-and-maintenance',
        heading: 'Seamless Hair Blending & Home Care',
        paragraphs: [
          'During your session, our stylist custom cuts the topper while you are wearing it, layering it directly into your biological hair. We match the exact root shadow, highlights, strand thickness, and length so the topper integrates flawlessly.',
          'Home care is straightforward: gently detangle with a wide-tooth comb and wash every 10–14 days using moisture-rich, sulfate-free shampoos.'
        ]
      }
    ],

    inArticleImage: {
      src: '/images/services/womens-crown-toppers-detail.webp',
      alt: 'Close-up of silk-top hair partition showing undetectable scalp illusion',
      caption: 'Silk-base crown topper creating an undetectable scalp parting line and natural volume integration.'
    },

    processHeading: 'Our 4-Stage Female Volumizing Service',
    processSubheading: 'Conducted in private suites with experienced female hair replacement specialists.',
    processSteps: [
      {
        step: '01',
        title: 'Private Density & Scalp Assessment',
        description: 'In a confidential private suite, we analyze your thinning pattern, parting preference, and hair texture.'
      },
      {
        step: '02',
        title: 'Silk Base Selection & Sizing',
        description: 'We select the ideal topper dimensions (e.g. 5x5, 6x6, or 7x7 inches) to cover the thinning area comfortably.'
      },
      {
        step: '03',
        title: 'Attachment Customization',
        description: 'Choose between daily clip-in convenience or semi-permanent micro-ring tracking tailored to your lifestyle.'
      },
      {
        step: '04',
        title: 'Integration Cut, Layering & Style',
        description: 'Our specialist blends the topper into your natural hair with customized face-framing layers and styling.'
      }
    ],

    keyHighlights: [
      {
        title: 'Natural Silk-Top Parting',
        description: 'Knots remain completely hidden beneath silk fabric, mimicking genuine scalp skin from any angle.'
      },
      {
        title: 'No Shaving Required',
        description: 'Designed to integrate over your existing biological hair without shaving or cutting natural roots.'
      },
      {
        title: '100% Virgin Human Hair',
        description: 'Soft, lustrous hair that can be blow-dried, curled, or straightened freely with everyday tools.'
      },
      {
        title: '100% Private Female Suites',
        description: 'Comfortable, confidential consultation and styling rooms staffed by professional female stylists.'
      }
    ],

    faqs: [
      {
        question: 'Do I need to shave any of my hair to wear a crown topper?',
        answer: 'No, absolutely not. Women\'s crown toppers are specifically designed to sit over your existing hair without shaving or trimming your biological roots. They clip gently into your hair or attach via micro-rings.'
      },
      {
        question: 'Can someone tell I am wearing a hair topper from above?',
        answer: 'No. Our silk-base toppers feature an ultra-realistic scalp illusion where individual hair strands emerge from silk fabric, making the parting line appear completely natural even when someone looks from directly above.'
      },
      {
        question: 'Can I wash, curl, and straighten my hair topper?',
        answer: 'Yes. Because our toppers are crafted from 100% natural human hair, you can wash them, apply heat-styling tools like curling wands and straighteners, and style them as you normally would.'
      },
      {
        question: 'How do clip-in toppers stay secure on windy days?',
        answer: 'Our toppers use specialized lightweight, silicone-lined pressure clips that grip biological hair securely without slipping, pulling, or causing tension, even on windy days or during physical movement.'
      },
      {
        question: 'How long does a women\'s silk-base topper last?',
        answer: 'With proper daily maintenance and gentle washing every 10–14 days, a premium quality silk crown topper typically lasts between 10 to 18 months.'
      }
    ],

    relatedSlugs: [
      'custom-hair-patching',
      'dermatological-hair-bonding',
      'non-surgical-hair-weaving',
      'full-scalp-non-surgical-replacement',
      'hair-patch-servicing-scalp-spa'
    ]
  },

  'hair-patch-servicing-scalp-spa': {
    slug: 'hair-patch-servicing-scalp-spa',
    legacyAnchor: 'maintenance-servicing',
    title: 'Hair Patch Servicing & Scalp Spa',
    shortDesc: 'Professional monthly maintenance, safe system removal, ultrasonic base sanitization, scalp exfoliation, and fresh re-bonding.',
    category: 'Maintenance & Servicing',
    heroBadge: 'Monthly Maintenance Ritual',
    heroDescription: 'Keep your hair system in peak hygienic condition and your scalp refreshed with comprehensive monthly servicing, deep conditioning, and expert styling resets.',
    heroImage: '/images/services/hair-patch-servicing-hero.webp',
    heroImageAlt: 'Hair Patch Servicing & Scalp Spa - Professional Hair System Maintenance and Scalp Care',
    metaTitle: 'Hair Patch Servicing & Scalp Spa | Monthly Hair System Maintenance',
    metaDescription: 'Comprehensive monthly hair patch servicing and scalp spa treatments. Safe adhesive removal, ultrasonic base cleaning, scalp exfoliation, and fresh bonding.',
    canonicalUrl: 'https://ozzonehair.com/services/hair-patch-servicing-scalp-spa/',

    introHeading: 'Essential Monthly Care for System Longevity and Scalp Health',
    introParagraphs: [
      'A custom hair patch or replacement system is an investment in your personal style and daily confidence. Just like biological hair, hair replacement systems require routine professional maintenance to remain hygienic, vibrant, and securely anchored. Our Hair Patch Servicing and Scalp Spa is a comprehensive monthly care ritual designed to refresh both your hair system and your underlying scalp.',
      'Over 3 to 5 weeks of daily wear, biological scalp oils (sebum), natural perspiration, and environmental dust accumulate beneath the system base. Our certified technicians utilize organic citrus solvents to gently release the system without pulling, followed by deep ultrasonic base sanitization, scalp exfoliation, intensive keratin conditioning, and fresh medical adhesive application.'
    ],
    introImage: '/images/services/hair-patch-servicing-detail.webp',
    introImageAlt: 'Hair patch deep cleansing, conditioning, and scalp spa treatment in studio',
    targetAudience: [
      'Existing hair patch or hair system wearers due for their monthly service (every 3 to 5 weeks)',
      'Individuals noticing slight adhesive loosening, edge lifting, or scalp itchiness',
      'Clients wanting professional deep conditioning and keratin rejuvenation for their hair system',
      'Anyone who values pristine scalp hygiene and a fresh, secure re-bonding experience'
    ],

    sections: [
      {
        id: 'servicing-steps-detail',
        heading: 'The Clinical Hygiene Protocol Behind Our Servicing',
        paragraphs: [
          'Proper servicing is not merely re-gluing a patch; it is a thorough sanitary procedure that safeguards dermal health and restores the soft, natural drape of human hair strands.',
          'We use certified organic citrus-based release agents (such as C-22 solvent) that dissolve residual adhesives within 60 seconds without irritating the skin or pulling natural hair follicles.'
        ],
        subsections: [
          {
            heading: 'Dual-Stage Scalp Spa Treatment',
            paragraphs: [
              'While your hair system undergoes specialized ultrasonic cleansing, your scalp receives focused care to clear pores and stimulate circulation:'
            ],
            bulletPoints: [
              'Safe, painless detachment using skin-nourishing citrus solvents',
              'Deep scalp exfoliation to eliminate accumulated sebum and dead skin cells',
              'Anti-bacterial clarifying wash and soothing tea tree scalp massage',
              'Trim and edge refinement of your natural biological perimeter hair'
            ]
          },
          {
            heading: 'System Conditioning & Base Sanitization',
            paragraphs: [
              'Because human hair systems do not receive natural scalp sebum, they require periodic replenishment of moisture. We apply deep-penetrating keratin conditioners that restore silkiness and protect the hair strands against sun exposure and dryness.'
            ]
          }
        ],
        callout: {
          title: 'Timing Recommendation',
          text: 'Regular servicing every 3 to 4 weeks significantly extends system lifespan, prevents adhesive seepage into the lace mesh, and ensures ongoing scalp comfort.'
        }
      },
      {
        id: 'express-turnaround',
        heading: 'Express 45-Minute Studio Turnaround',
        paragraphs: [
          'We understand that our clients lead busy professional lives in Trivandrum and Bangalore. Our streamlined studio workflow ensures your complete service, scalp wash, re-bonding, and styling reset is completed smoothly in approximately 45 to 60 minutes.',
          'All appointments are conducted in private, air-conditioned consultation chambers with dedicated personal stylists.'
        ]
      }
    ],

    inArticleImage: {
      src: '/images/services/hair-patch-servicing-detail.webp',
      alt: 'Scalp cleansing and hair system deep conditioning at private studio basin',
      caption: 'Ultrasonic sanitization and keratin conditioning restoring natural softness and hygiene to hair systems.'
    },

    processHeading: 'The 5-Step Scalp Spa & Servicing Workflow',
    processSubheading: 'A relaxing, 45–60 minute professional maintenance ritual in private suites.',
    processSteps: [
      {
        step: '01',
        title: 'Painless Solvent Release',
        description: 'Organic citrus solvent is sprayed along the perimeter to dissolve adhesives gently without any tugging.'
      },
      {
        step: '02',
        title: 'Ultrasonic Base Sanitization',
        description: 'The hair unit is cleansed in specialized ultrasonic baths to remove all micro-residues and impurities.'
      },
      {
        step: '03',
        title: 'Scalp Exfoliation & Massage',
        description: 'Your scalp is treated to a refreshing exfoliating wash, clarifying shampoo, and soothing scalp massage.'
      },
      {
        step: '04',
        title: 'System Keratin Conditioning',
        description: 'Rich moisture masks and keratin serums are infused into the human hair strands to restore softness and shine.'
      },
      {
        step: '05',
        title: 'Fresh Re-Bonding & Style Reset',
        description: 'Fresh medical adhesive is applied, the patch is realigned with precision, and hair is blow-dried and styled.'
      }
    ],

    keyHighlights: [
      {
        title: 'Safe Solvent Removal',
        description: '100% painless release using organic citrus formulas that dissolve adhesives without skin irritation.'
      },
      {
        title: 'Scalp Health & Detox',
        description: 'Deep exfoliation clears pores, eliminates product buildup, and leaves your scalp refreshed.'
      },
      {
        title: 'Keratin Deep Conditioning',
        description: 'Replenishes moisture and softness in natural hair strands, prolonging overall system lifespan.'
      },
      {
        title: 'Fast 45-Min Express Service',
        description: 'Efficient turnaround in private suites designed to fit smoothly into busy work schedules.'
      }
    ],

    faqs: [
      {
        question: 'How often should I service my hair patch or hair system?',
        answer: 'We recommend scheduling a maintenance service every 3 to 5 weeks. This ensures the bonding remains strong, prevents adhesive residue accumulation, and maintains healthy scalp hygiene.'
      },
      {
        question: 'Does the removal process hurt or pull my biological hair?',
        answer: 'Not at all. We use specialized organic citrus-based solvents (like Walker Tape C-22) that break down the adhesive bond within seconds, allowing the system to slide off painlessly with zero tugging.'
      },
      {
        question: 'Can I do my hair patch servicing at home?',
        answer: 'While basic perimeter touch-ups can be performed at home with approved products, professional studio servicing is strongly recommended for deep ultrasonic base cleaning, proper scalp exfoliation, and accurate hairline alignment.'
      },
      {
        question: 'How long does a routine maintenance appointment take?',
        answer: 'A standard servicing and scalp spa session typically takes 45 to 60 minutes, including patch removal, system sanitization, scalp wash, hair conditioning, fresh bonding, and professional styling.'
      },
      {
        question: 'What happens if I delay my monthly servicing?',
        answer: 'Delaying servicing beyond 5 to 6 weeks can cause the adhesive to soften and seep into the lace mesh, making cleaning more difficult and potentially causing scalp itchiness from accumulated sweat and sebum.'
      }
    ],

    relatedSlugs: [
      'custom-hair-patching',
      'dermatological-hair-bonding',
      'non-surgical-hair-weaving',
      'full-scalp-non-surgical-replacement',
      'womens-crown-toppers-extensions'
    ]
  }
};
