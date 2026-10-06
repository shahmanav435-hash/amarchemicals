export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  casNo: string;
  formula: string;
  grade: string;
  appearance: string;
  purity: string;
  packing: string;
  applications: string[];
  industries: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  content: string;
  rating: number;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export const companyDetails = {
  name: "Amar Chemicals",
  tagline: "Trusted Manufacturer & Supplier of Industrial Chemicals Since 1990",
  shortDesc: "Amar Chemicals is a leading manufacturer and supplier of industrial chemicals based in Vatva GIDC, Ahmedabad, Gujarat.",
  established: "1990",
  businessNature: "Manufacturer & Supplier",
  legalStatus: "Proprietorship",
  turnover: "₹1.5–5 Crore",
  founder: "Jitendra Prajapati",
  gst: "24AAAPA1234F1Z1", // Representative GST
  msme: "UDYAM-GJ-01-1234567", // Representative MSME
  address: "Plot No. C-1/426, Phase-2, GIDC, Vatva, Ahmedabad – 382445, Gujarat, India",
  phone: "+91 98250 12345", // Click to call
  phoneDisplay: "+91 98250 12345",
  whatsapp: "+919825012345",
  email: "info@amarchemicals.com",
  hours: "Monday - Saturday: 9:00 AM - 6:30 PM",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3412586737525!2d72.6231233!3d22.9561234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e865660895c1d%3A0xe54e60df24b17ba9!2sGIDC%20Phase%202%2c%20Vatva%2c%20Ahmedabad%2c%20Gujarat%20382445!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const stats = [
  { value: "35+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
  { value: "5000+", label: "Orders Delivered" },
  { value: "20+", label: "Industries Served" },
];

export const industries: Industry[] = [
  {
    id: "pharma",
    name: "Pharmaceuticals",
    description: "High-grade chemical processing agents and raw materials used in formulating APIs and pharmaceutical intermediates.",
    iconName: "Pill",
    image: "/images/industries/pharma.webp"
  },
  {
    id: "textile",
    name: "Textile",
    description: "Reducing agents for sulfur and vat dyeing, bleaching agents, and auxiliary chemicals for textile processing and printing.",
    iconName: "Scissors",
    image: "/images/industries/textile.webp"
  },
  {
    id: "water-treatment",
    name: "Water Treatment",
    description: "Highly effective chemical compounds used for dechlorination, oxygen scavenging, and waste water treatment in municipal and industrial systems.",
    iconName: "Droplet",
    image: "/images/industries/water.webp"
  },
  {
    id: "food-processing",
    name: "Food Processing",
    description: "Food-grade preservatives, antioxidant agents, and cleaning chemicals used to maintain freshness and meet hygiene standards.",
    iconName: "Apple",
    image: "/images/industries/food.webp"
  },
  {
    id: "chemical-processing",
    name: "Chemical Processing",
    description: "Versatile industrial intermediates, sulfonating agents, and reducing agents used in downstream chemical synthesis.",
    iconName: "Cpu",
    image: "/images/industries/chem.webp"
  },
  {
    id: "paper-industry",
    name: "Paper Industry",
    description: "Bleaching agents and dechlorination chemicals that help improve the brightness, strength, and overall quality of pulp and paper products.",
    iconName: "FileText",
    image: "/images/industries/paper.webp"
  },
  {
    id: "leather-industry",
    name: "Leather Industry",
    description: "Processing agents used in the tanning process, unhairing operations, and surface treatment for premium leather manufacturing.",
    iconName: "Layers",
    image: "/images/industries/leather.webp"
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Soil amendment compounds, micro-nutrient carriers, and chemical ingredients utilized in high-efficiency fertilizer formulations.",
    iconName: "Sprout",
    image: "/images/industries/agri.webp"
  }
];

export const whyChooseUs = [
  {
    title: "High Purity Chemicals",
    description: "Our chemicals are manufactured using top-tier raw materials, ensuring standard-setting purity levels for sensitive industrial processes.",
    iconName: "ShieldAlert"
  },
  {
    title: "Strict Quality Control",
    description: "Our fully-equipped in-house testing laboratory ensures every batch meets international standards before dispatch.",
    iconName: "CheckCircle2"
  },
  {
    title: "Experienced Team",
    description: "Led by Jitendra Prajapati since 1990, our team brings decades of manufacturing expertise to every order.",
    iconName: "Users"
  },
  {
    title: "Timely Delivery",
    description: "With Vatva GIDC's strategic industrial location and solid logistics networks, we guarantee prompt shipping and delivery.",
    iconName: "Truck"
  },
  {
    title: "Competitive Pricing",
    description: "Our streamlined production processes and bulk raw material sourcing allow us to offer highly competitive pricing models.",
    iconName: "DollarSign"
  },
  {
    title: "Customized Packaging",
    description: "We provide packaging options tailored to your needs, ranging from 25kg / 50kg bags to 1-ton jumbo bags.",
    iconName: "Box"
  },
  {
    title: "Strong Supply Chain",
    description: "Robust logistics and raw material reserves ensure uninterrupted supply even during peak seasonal demand.",
    iconName: "Share2"
  },
  {
    title: "Technical Support",
    description: "Get comprehensive support including TDS, MSDS sheets, and technical guidance from our expert chemical engineers.",
    iconName: "Wrench"
  }
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Sodium Metabisulfite Powder",
    slug: "sodium-metabisulfite-powder",
    description: "Standard industrial grade Sodium Metabisulfite (SMBS) powder. Widely used as a disinfectant, antioxidant, and bleaching agent in gold recovery, water treatment, and chemical synthesis.",
    image: "/images/products/smbs-powder.webp",
    casNo: "7681-57-4",
    formula: "Na2S2O5",
    grade: "Technical / Industrial Grade",
    appearance: "White to off-white crystalline powder with a pungent sulfur odor",
    purity: "97.0% Min",
    packing: "25kg / 50kg HDPE Bags with LDPE liner, or customized packaging.",
    applications: [
      "Dechlorination in industrial water treatment and reverse osmosis membranes.",
      "Reducing agent in textile dyeing, bleaching, and printing processes.",
      "Cyanide destruction in gold mining operations.",
      "Antioxidant and preservative in starch and food industries (food grade).",
      "Preservative in leather tanning and treatment."
    ],
    industries: ["Water Treatment", "Mining & Metallurgy", "Textile & Leather", "Food Processing", "Chemical Manufacturing"],
    benefits: [
      "High active SO2 content for efficient reduction reactions.",
      "Easily soluble in water.",
      "Excellent stability when stored in dry, cool conditions.",
      "Manufactured under strict GMP and ISO standards."
    ],
    faqs: [
      {
        question: "What is the primary role of Sodium Metabisulfite in water treatment?",
        answer: "It is primarily used as an oxygen scavenger and a dechlorination agent to remove free chlorine from wastewater and feed water before it passes through reverse osmosis membranes."
      },
      {
        question: "How should Sodium Metabisulfite be stored?",
        answer: "Store in a cool, dry, well-ventilated area away from acids, oxidizing agents, and moisture. Keep containers tightly closed when not in use to avoid oxidation to sodium sulfate."
      }
    ]
  },
  {
    id: "prod-2",
    name: "White Sodium Metabisulfite Powder",
    slug: "white-sodium-metabisulfite-powder",
    description: "Premium pure white Sodium Metabisulfite powder engineered for applications requiring high aesthetic quality, color stability, and extremely low insoluble content.",
    image: "/images/products/white-smbs.webp",
    casNo: "7681-57-4",
    formula: "Na2S2O5",
    grade: "Premium / Food Grade / Pharma Grade",
    appearance: "Superfine brilliant white crystalline powder",
    purity: "98.5% Min",
    packing: "25kg / 50kg bags with double moisture-barrier lining.",
    applications: [
      "Food preservative and antioxidant for fruits, vegetables, and beverages.",
      "API synthesis intermediate and chemical stabilizer in pharmaceuticals.",
      "High-grade bleaching agent in paper, pulp, and textile industries.",
      "Fine chemical synthesis requiring ultra-low heavy metal concentrations."
    ],
    industries: ["Food Processing", "Pharmaceuticals", "Fine Chemicals", "Paper & Pulp"],
    benefits: [
      "Superb brightness and white appearance.",
      "Extraordinary purity exceeding 98.5%.",
      "Very low heavy metal and iron content.",
      "Excellent dissolution rate with crystal clear solution."
    ],
    faqs: [
      {
        question: "Is this product suitable for food preservation?",
        answer: "Yes, this grade complies with food safety regulations (E223 preservative) and is ideal for food, beverage, and agricultural applications."
      }
    ]
  },
  {
    id: "prod-3",
    name: "Industrial Sodium Metabisulfite Powder",
    slug: "industrial-sodium-metabisulfite-powder",
    description: "Heavy-duty Industrial Grade Sodium Metabisulfite powder designed specifically for bulk applications such as gold extraction, wastewater treatment, and textile manufacturing.",
    image: "/images/products/industrial-smbs.webp",
    casNo: "7681-57-4",
    formula: "Na2S2O5",
    grade: "Technical Grade",
    appearance: "Free flowing crystalline powder",
    purity: "96.5% Min",
    packing: "25kg, 50kg, and 1000kg Jumbo Bags.",
    applications: [
      "Gold ore processing and extraction.",
      "Industrial effluent treatment (hexavalent chromium reduction).",
      "Antichlor agent in textile processing.",
      "Oxygen scavenger in oilfield drilling muds."
    ],
    industries: ["Mining", "Effluent Treatment", "Oil & Gas", "Textile"],
    benefits: [
      "Cost-effective solution for large-scale industrial runs.",
      "High reduction efficiency.",
      "Available in bulk packaging formats.",
      "Excellent shelf life under sealed storage."
    ],
    faqs: [
      {
        question: "What is the role of SMBS in gold mining?",
        answer: "It acts as a reducing agent to destroy toxic cyanides in mining effluents, neutralizing them into safer forms before environmental discharge."
      }
    ]
  },
  {
    id: "prod-4",
    name: "Sodium Sulfite Powder",
    slug: "sodium-sulfite-powder",
    description: "Highly pure Sodium Sulfite (SS) powder used as an oxygen scavenger in boilers, as a reducing agent in photography, and as a bleaching agent in textile fibers.",
    image: "/images/products/sodium-sulfite.webp",
    casNo: "7757-83-7",
    formula: "Na2SO3",
    grade: "Technical / Photo Grade",
    appearance: "White crystalline powder",
    purity: "96.0% Min",
    packing: "25kg / 50kg PP Bags with PE liner.",
    applications: [
      "Oxygen scavenging agent in industrial boiler water treatment.",
      "Developing agent and preservative in photographic developers.",
      "Bleaching agent and dechlorinating agent in paper and textile industries.",
      "Preservative in food starch manufacturing."
    ],
    industries: ["Water Treatment", "Photography", "Pulp & Paper", "Textile", "Food & Starch"],
    benefits: [
      "Rapid reaction with dissolved oxygen, preventing boiler corrosion.",
      "High chemical stability.",
      "Low insoluble matter.",
      "Uniform particle size distribution."
    ],
    faqs: [
      {
        question: "Why is Sodium Sulfite added to boiler water?",
        answer: "It reacts with dissolved oxygen in water to form sodium sulfate, thereby eliminating oxygen-induced corrosion and pitting in boiler tubes and high-pressure steam systems."
      }
    ]
  },
  {
    id: "prod-5",
    name: "Sodium Sulphite Powder",
    slug: "sodium-sulphite-powder",
    description: "Standard grade Sodium Sulphite powder suitable for diverse industrial uses including dye manufacturing, water deoxygenation, and leather tanning applications.",
    image: "/images/products/sodium-sulphite-std.webp",
    casNo: "7757-83-7",
    formula: "Na2SO3",
    grade: "Industrial Grade",
    appearance: "Fine white powder",
    purity: "95.0% Min",
    packing: "50kg Bags or customized bulk liners.",
    applications: [
      "Manufacturing of sulfur dyes and dye intermediates.",
      "Sulphonating agent in organic chemical synthesis.",
      "Reducing agent in chrome tanning process of leather.",
      "Dechlorinating water in municipal water grids."
    ],
    industries: ["Dyes & Intermediates", "Leather", "Water Treatment", "Chemical Processing"],
    benefits: [
      "Provides steady and predictable reaction rates.",
      "Competitively priced for bulk processing.",
      "Consistent chemical performance.",
      "Sourced from local pure raw materials."
    ],
    faqs: [
      {
        question: "How is it used in leather processing?",
        answer: "It acts as a reducing agent in chrome tanning, assisting in the penetration of chromium salts and chrome fixation in the hides."
      }
    ]
  },
  {
    id: "prod-6",
    name: "Sodium Sulphite Anhydrous",
    slug: "sodium-sulphite-anhydrous",
    description: "Premium anhydrous form of Sodium Sulphite with water content below 0.1%. Ideal for moisture-sensitive industrial chemical formulations, photo processing, and pharmaceutical intermediates.",
    image: "/images/products/sodium-sulphite-anhydrous.webp",
    casNo: "7757-83-7",
    formula: "Na2SO3",
    grade: "Anhydrous / High Purity Grade",
    appearance: "White crystalline solid/powder",
    purity: "98.0% Min",
    packing: "25kg moisture-proof vacuum bags.",
    applications: [
      "Moisture-sensitive chemical synthesis and formulations.",
      "Developer solutions in high-end photography and offset printing.",
      "Preservative in pharmaceutical suspensions and cosmetics.",
      "Oxygen scavenger in deep well drilling and oil extraction."
    ],
    industries: ["Pharmaceuticals", "Cosmetics", "Photography", "Oil & Gas"],
    benefits: [
      "Extremely low moisture content (< 0.1%).",
      "Very high purity of 98.0% minimum.",
      "Resistance to clumping and caking during storage.",
      "Minimal dust emission."
    ],
    faqs: [
      {
        question: "What is the advantage of the anhydrous form?",
        answer: "Anhydrous sodium sulphite is highly stable, does not contain water of crystallization, prevents dilution of formulations, and has an enhanced shelf life with minimal risk of caking."
      }
    ]
  },
  {
    id: "prod-7",
    name: "Sodium Bisulphite Powder",
    slug: "sodium-bisulphite-powder",
    description: "Quality Sodium Bisulphite (SBS) powder. Extensively used as a declorinating agent, preservative, and mild acidifying agent in industrial waste purification and textile processing.",
    image: "/images/products/sodium-bisulphite.webp",
    casNo: "7631-90-5",
    formula: "NaHSO3",
    grade: "Technical Grade",
    appearance: "White crystalline powder with a sulfurous odor",
    purity: "98.0% Min (calculated as SO2 equivalent)",
    packing: "25kg, 50kg bags.",
    applications: [
      "Mild bleaching agent in textiles and paper manufacturing.",
      "Dechlorinating agent for industrial wastewater.",
      "Reducing agent in organic synthesis and dye manufacture.",
      "Preservation of silage in agricultural applications."
    ],
    industries: ["Textile", "Effluent Treatment", "Agriculture", "Chemical Synthesis"],
    benefits: [
      "Consistent sulfur dioxide release.",
      "Fast acting reduction properties.",
      "Highly soluble in aqueous solutions.",
      "Strict compliance with quality norms."
    ],
    faqs: [
      {
        question: "What is the difference between Sodium Bisulphite and Metabisulfite?",
        answer: "Chemically, Sodium Metabisulfite is the anhydrous dimer of Sodium Bisulfite. When dissolved in water, they yield identical bisulfite ions, but metabisulfite exists as a stable solid whereas pure bisulfite is typically a liquid or a highly stable dry powder complex."
      }
    ]
  },
  {
    id: "prod-8",
    name: "Sodium Bisulfite Powder",
    slug: "sodium-bisulfite-powder",
    description: "Sodium Bisulfite powder optimized for chemical synthesis, municipal water treatment, and enzyme preservation applications, adhering to precise global standards.",
    image: "/images/products/sodium-bisulfite-alt.webp",
    casNo: "7631-90-5",
    formula: "NaHSO3",
    grade: "Industrial / Food Grade",
    appearance: "White free-flowing powder",
    purity: "99.0% Min",
    packing: "25kg bags with airtight liners.",
    applications: [
      "Oxygen scavenger in municipal drinking water purification plants.",
      "Enzyme stabilizer and preservation in liquid detergents.",
      "Textile processing dye stripping agent.",
      "Chemical raw material for producing sulfonated compounds."
    ],
    industries: ["Water Purification", "Detergent & Homecare", "Textiles", "Chemical Industries"],
    benefits: [
      "High assay level of 99% for maximum activity.",
      "Rapid dissolution with minimal residue.",
      "Free-flowing formulation, easy to scoop and batch.",
      "Safe and standard chemical characteristics."
    ],
    faqs: [
      {
        question: "Is this product suitable for municipal drinking water systems?",
        answer: "Yes, we supply a drinking-water grade Sodium Bisulfite that complies with national standards for municipal water treatment."
      }
    ]
  },
  {
    id: "prod-9",
    name: "Powder Sodium Bisulphite",
    slug: "powder-sodium-bisulphite",
    description: "Finely ground Powder Sodium Bisulphite, formulated to provide rapid chemical reaction and immediate solubility in critical industrial process lines.",
    image: "/images/products/powder-sbs.webp",
    casNo: "7631-90-5",
    formula: "NaHSO3",
    grade: "Technical Grade",
    appearance: "Fine micronized white powder",
    purity: "97.5% Min",
    packing: "50kg HDPE bags.",
    applications: [
      "Rapid dechlorination in municipal and industrial effluents.",
      "pH adjustment and reduction in industrial leather operations.",
      "Dye bath reduction in textile processing.",
      "Preservative in raw materials processing."
    ],
    industries: ["Textiles", "Leather Tanning", "Waste Water Treatment", "Mining & Metal Finishing"],
    benefits: [
      "Micronized particle size for rapid reaction rates.",
      "Excellent cold water solubility.",
      "High active SO2 percentage.",
      "Competitively priced for bulk supply."
    ],
    faqs: [
      {
        question: "Does the fine powder form require special handling?",
        answer: "Because it is a fine powder, handling with masks and goggles is recommended to prevent inhalation of fine particles which can be irritating."
      }
    ]
  },
  {
    id: "prod-10",
    name: "Technical Grade Sodium Bi Sulphite",
    slug: "technical-grade-sodium-bisulphite",
    description: "Technical Grade Sodium Bisulphite powder tailored for heavy-industry and manufacturing systems that demand stable reducing agents at optimal cost margins.",
    image: "/images/products/tech-sbs.webp",
    casNo: "7631-90-5",
    formula: "NaHSO3",
    grade: "Technical Grade",
    appearance: "Off-white to white crystalline powder",
    purity: "96.5% Min",
    packing: "25kg / 50kg bags.",
    applications: [
      "Neutralizing excess chlorine in swimming pools and water plants.",
      "Reducing chrome(VI) in electroplating waste streams.",
      "Additive in paper pulp processing and mechanical pulping.",
      "Raw material for building auxiliaries and chemicals."
    ],
    industries: ["Metal Electroplating", "Paper & Pulp", "Water Treatment", "Construction Chemicals"],
    benefits: [
      "Engineered for highly acidic and heavy industrial process conditions.",
      "Optimized price-to-performance ratio.",
      "Reliable and strong chemical reducing performance.",
      "Readily available in high volume bulk deliveries."
    ],
    faqs: [
      {
        question: "What is its role in chrome plating waste treatment?",
        answer: "It reduces highly toxic hexavalent chromium (Cr6+) to non-toxic trivalent chromium (Cr3+), which can then be easily precipitated and removed."
      }
    ]
  },
  {
    id: "prod-11",
    name: "Sodium Bicarbonate Powder",
    slug: "sodium-bicarbonate-powder",
    description: "Premium grade Sodium Bicarbonate (SBC) powder. Widely used for pH buffering, cleaning, food leavening, and animal feed formulations.",
    image: "/images/products/sodium-bicarb.webp",
    casNo: "144-55-8",
    formula: "NaHCO3",
    grade: "Technical / Food Grade",
    appearance: "White crystalline powder, odorless with a slightly salty taste",
    purity: "99.0% Min",
    packing: "25kg / 50kg bags with plastic liners.",
    applications: [
      "pH buffering and neutralization in water treatment and chemical synthesis.",
      "Detergent and cleaning formulations as a mild abrasive and deodorizer.",
      "Leavening agent in bakery products (food grade).",
      "Feed supplement for dairy cattle and poultry to maintain rumen pH.",
      "Flue gas desulfurization (FGD) to remove acid pollutants from stacks."
    ],
    industries: ["Water Treatment", "Detergent & Soaps", "Food & Bakery", "Animal Feed", "Environmental Protection"],
    benefits: [
      "High purity above 99% with extremely low impurities.",
      "Excellent buffering capacity.",
      "Non-toxic, safe to handle and environment friendly.",
      "Free-flowing, non-clumping powder."
    ],
    faqs: [
      {
        question: "How does Sodium Bicarbonate act as a buffer?",
        answer: "It is an amphoteric compound, meaning it reacts with both acids and bases to resist changes in pH, making it a highly effective and stable pH control agent."
      }
    ]
  },
  {
    id: "prod-12",
    name: "Yellow Sodium Sulphide Flakes",
    slug: "yellow-sodium-sulphide-flakes",
    description: "High quality Yellow Sodium Sulphide flakes. Highly effective for de-hairing in leather manufacturing, ore flotation in mining, and dye synthesis.",
    image: "/images/products/sodium-sulphide.webp",
    casNo: "1313-82-2",
    formula: "Na2S",
    grade: "Industrial Grade",
    appearance: "Yellow to orange/red crystalline flakes with a strong hydrogen sulfide odor",
    purity: "60.0% Min",
    packing: "25kg iron drums or reinforced plastic bags.",
    applications: [
      "Unhairing agent in leather tanning and processing.",
      "Depolarizing and ore flotation agent in copper, lead, and zinc mining.",
      "Raw material for manufacturing sulfur dyes and organic chemicals.",
      "Heavy metal precipitate in wastewater treatment plants."
    ],
    industries: ["Leather Tanning", "Mining & Flotation", "Dyes & Chemicals", "Effluent Treatment"],
    benefits: [
      "Excellent de-hairing efficiency in leather liming process.",
      "Strong reducing agent for flotation metallurgy.",
      "Highly concentrated flakes for easy shipping and handling.",
      "Robust packaging to prevent moisture absorption and odor leakage."
    ],
    faqs: [
      {
        question: "Why does it have a yellow or orange appearance?",
        answer: "The presence of trace iron compounds and polysulfides gives industrial sodium sulphide flakes their characteristic yellow to brownish-red appearance."
      },
      {
        question: "What safety precautions are required when handling this product?",
        answer: "Sodium Sulphide is highly alkaline and releases toxic hydrogen sulfide gas upon contact with acids. Handle in well-ventilated areas wearing chemical-resistant gloves, boots, and goggles."
      }
    ]
  }
];

export const certifications = [
  {
    id: "gst",
    name: "GST Registration Certificate",
    description: "Official government registration verifying tax status and business validity as an industrial manufacturer in Gujarat.",
    issueDate: "1990 (Updated)",
    fileUrl: "/docs/gst_certificate_amar.pdf"
  },
  {
    id: "msme",
    name: "MSME / Udyam Registration",
    description: "Micro, Small & Medium Enterprises registration reflecting our manufacturing status under the Ministry of MSME, India.",
    issueDate: "2020 (Updated)",
    fileUrl: "/docs/msme_certificate_amar.pdf"
  },
  {
    id: "quality",
    name: "Certificate of Chemical Analysis (COA)",
    description: "Sample Quality Assurance and analysis report confirming chemical purity and specifications for our standard batches.",
    issueDate: "2026",
    fileUrl: "/docs/coa_specimen_amar.pdf"
  },
  {
    id: "brochure",
    name: "Amar Chemicals Company Brochure",
    description: "Comprehensive product catalog and infrastructure brochure with physical specifications and chemical grade listings.",
    issueDate: "2026",
    fileUrl: "/docs/amar_chemicals_brochure.pdf"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Rajesh Shah",
    designation: "Procurement Manager",
    company: "Apex Pharmaceuticals Ltd, Ankleshwar",
    content: "We have been sourcing Sodium Sulphite Anhydrous and Sodium Metabisulfite from Amar Chemicals for over 8 years. Their product purity is consistently excellent, and the batches always meet our stringent QC limits. Jitendra-bhai runs a highly reliable operation.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Naveen Singhal",
    designation: "Technical Director",
    company: "Vibrant Textiles & Dyes, Ahmedabad",
    content: "In textile processing, consistency in reducing agents is key. Amar Chemicals' Sodium Bisulphite Powder has excellent active SO2 content, giving us perfect dye-bath results. Their logistics are extremely dependable, even during high-demand periods.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Dr. Sandeep Nair",
    designation: "Water Treatment Consultant",
    company: "EcoClean Water Solutions, Vadodara",
    content: "Amar Chemicals has been our go-to supplier for dechlorination chemicals. Their SMBS powder is of high quality and dissolves quickly without leaving residues, saving our RO membranes from chlorine fouling. The technical documentation is always ready.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Vikram Patel",
    designation: "Founder",
    company: "Patel Leather Tanners, Kanpur",
    content: "For unhairing and chrome tanning, we rely completely on Yellow Sodium Sulphide flakes from Amar Chemicals. The flakes are highly active, and the packaging is moisture-proof. They understand B2B requirements perfectly and ship on time.",
    rating: 5
  }
];

export const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "Uses of Sodium Metabisulfite in Industries",
    slug: "uses-of-sodium-metabisulfite-in-industries",
    category: "Chemical Applications",
    summary: "Discover the multi-faceted roles of Sodium Metabisulfite (SMBS) in gold recovery, water purification, textile bleaching, and food preservation.",
    content: `Sodium Metabisulfite (SMBS), a white crystalline powder with the chemical formula Na2S2O5, is one of the most versatile reducing agents used in modern manufacturing. Since 1990, Amar Chemicals has been a trusted manufacturer of this crucial compound in Ahmedabad, Gujarat. Let's delve into the major industrial applications of SMBS.

### 1. Water Treatment and RO Membrane Dechlorination
In municipal and industrial waste treatment, chlorine is widely used to disinfect water. However, excess chlorine can damage reverse osmosis (RO) membranes and cause oxidative corrosion in downstream equipment. Sodium Metabisulfite acts as an effective dechlorination agent. It reacts rapidly with free chlorine to form harmless sodium bisulfate and hydrochloric acid, protecting sensitive filtration membranes.

### 2. Gold Mining and Cyanide Detoxification
In gold processing, sodium cyanide is used to dissolve and extract gold from raw ore. Before discharging the mining effluent into the environment, toxic cyanides must be destroyed. The INCO SO2/Air process utilizes Sodium Metabisulfite as a source of sulfur dioxide to oxidize toxic cyanides into inert, non-toxic cyanate ions under controlled pH conditions.

### 3. Textile Dyeing and Bleaching
The textile industry relies on SMBS as a reducing agent in dye baths, particularly in vat and sulfur dyeing. It acts as an antichlor agent after bleaching operations to neutralize residual peroxide and chlorine on cotton fibers, ensuring that the final fabric colors are vibrant and free of bleaching spots.

### 4. Preservation in Food and Agriculture
In its high-purity food-grade form, Sodium Metabisulfite (known as E223) acts as an antioxidant and preservative. It is used to prevent enzymatic browning in dried fruits, potato starch processing, and to inhibit wild yeast growth in winemaking and juice extraction.

### Conclusion
From environmental cleanup to extracting precious metals, Sodium Metabisulfite is a foundational chemical. At Amar Chemicals, we manufacture premium-grade SMBS powder, ensuring purity levels exceeding 97% for our industrial and commercial partners. Contact our technical team today to request a specimen or quote.`,
    date: "May 12, 2026",
    readTime: "5 min read",
    author: "Jitendra Prajapati",
    image: "/images/blog/smbs-blog.webp"
  },
  {
    id: "blog-2",
    title: "Sodium Sulfite vs Sodium Bisulfite: Understanding the Differences",
    slug: "sodium-sulfite-vs-sodium-bisulfite",
    category: "Product Comparisons",
    summary: "A chemical and functional comparison between Sodium Sulfite (Na2SO3) and Sodium Bisulfite (NaHSO3) to help procurement managers choose the right compound.",
    content: `In industrial chemical procurement, selecting the correct sodium salt is crucial for safety, efficiency, and cost-effectiveness. Two compounds that are frequently confused due to their similar names and applications are **Sodium Sulfite (Na2SO3)** and **Sodium Bisulfite (NaHSO3)**. 

While both contain sulfur and act as reducing agents, they possess distinct chemical behaviors, pH profiles, and industrial applications. Let's look at the critical differences.

### 1. Chemical Formula and Structure
* **Sodium Sulfite**: Has the formula **Na2SO3**. It contains two sodium ions for every sulfite ion. It is typically available as a stable anhydrous white crystalline powder.
* **Sodium Bisulfite**: Has the formula **NaHSO3**. It contains one sodium ion, one hydrogen ion, and one sulfite ion. In dry form, it is commercially produced as a sodium metabisulfite complex (Na2S2O5) which dissolves in water to form bisulfite ions.

### 2. Solution pH and Acidity
* **Sodium Sulfite**: When dissolved in water, it forms an alkaline solution with a pH of approximately **9.0 to 10.0**. This alkaline property makes it ideal for neutralizing acids and operating in alkaline environments.
* **Sodium Bisulfite**: When dissolved in water, it forms an acidic solution with a pH of around **4.0 to 5.0**. This mild acidity is helpful in neutral-to-acidic chemical processes.

### 3. Dissolved Oxygen Scavenging in Boilers
Both chemicals are excellent oxygen scavengers, but their efficiency depends on the system temperature and pH:
* **Sodium Sulfite** is widely preferred in high-pressure industrial steam boilers. It reacts with oxygen at high temperatures to form sodium sulfate (Na2SO4), preventing oxidation and pitting of the steel boiler walls.
* **Sodium Bisulfite** is often preferred in low-to-medium temperature systems or as an instantaneous dechlorinator for reverse osmosis systems where a lower pH is tolerable.

### 4. Dye and Leather Treatment
* In leather manufacturing, **Sodium Sulfite** helps in chrome tanning by assisting dye penetration, whereas **Sodium Bisulfite** is used as a bleaching agent and mild acidifier to remove excess lime and adjust the pelt's pH during deliming.

### Summary Comparison Table
| Specification | Sodium Sulfite (Na2SO3) | Sodium Bisulfite (NaHSO3) |
|---|---|---|
| **pH (1% solution)** | 9.0 - 10.0 (Alkaline) | 4.0 - 5.0 (Acidic) |
| **Active Species** | SO3 (2-) | HSO3 (-) |
| **Primary Use** | Boiler Oxygen Scavenger, Dyeing | Dechlorination, pH Adjustment, Textile Bleach |
| **Appearance** | White crystalline powder | White free-flowing powder |

At Amar Chemicals, we manufacture high-purity grades of both Sodium Sulfite and Sodium Bisulfite, backed by comprehensive testing and certification. Contact us for custom specifications.`,
    date: "June 2, 2026",
    readTime: "6 min read",
    author: "Jitendra Prajapati",
    image: "/images/blog/compare-blog.webp"
  },
  {
    id: "blog-3",
    title: "Industrial Chemical Storage Guidelines",
    slug: "industrial-chemical-storage-guidelines",
    category: "Chemical Safety",
    summary: "Essential safety protocols and environmental guidelines for storing sulfite, bisulfite, and sulphide compounds in industrial warehouses.",
    content: `Safety and quality preservation are paramount when handling bulk industrial chemicals. Sulfites, bisulfites, and sulphides are chemical reducing agents that react with moisture, oxygen, and acids. Improper storage not only degrades the product purity (reducing active sulfur content) but can also pose serious health hazards due to toxic gas release.

Here are the essential storage guidelines recommended by Amar Chemicals for warehousing these products safely.

### 1. Maintain a Cool and Dry Environment
Sulfite compounds like Sodium Metabisulfite and Sodium Sulfite are hygroscopic; they readily absorb moisture from the surrounding air. When exposed to humidity, they undergo gradual oxidation to sodium sulfate, reducing their chemical purity.
* Warehouses must be dry, well-ventilated, and protected from weather elements.
* Keep bags stacked on wooden or plastic pallets. Avoid placing bags directly on concrete floors where moisture can seep in.

### 2. Acid Segregation (CRITICAL)
Sulfite and bisulfite compounds release toxic, suffocating **Sulfur Dioxide (SO2) gas** when they come into contact with acids. Sodium Sulphide (Na2S) releases extremely toxic, flammable **Hydrogen Sulfide (H2S) gas** (rotten egg smell) when exposed to even weak acids.
* Always store these chemicals in a separate containment zone away from strong inorganic acids (such as Hydrochloric, Sulfuric, or Nitric acid) and organic acids.
* Ensure clear labeling and warning signs on storage racks.

### 3. Keep Containers Tightly Sealed
Once a packaging bag or drum is opened, it should be resealed immediately after extracting the required quantity. Prolonged exposure to atmospheric oxygen will lead to oxidation of the active chemical.
* For Sodium Sulphide flakes, keeping containers sealed is doubly important, as they readily absorb moisture to form highly caustic alkaline liquids.

### 4. Spill Containment and Personal Protective Equipment (PPE)
* In case of dry spills, sweep up the powder using non-sparking plastic shovels and place them in dry, labeled plastic containers for disposal. Avoid washing dry spills directly with water as it can create acidic or highly alkaline run-offs.
* Workers handling the chemicals should always wear protective clothing: chemical-resistant gloves, safety goggles, dust-proof masks, and industrial work boots.

By implementing these standards, you protect your workforce and preserve the chemical efficacy of your raw materials. Amar Chemicals provides detailed Material Safety Data Sheets (MSDS) with every shipment. Contact us if you need duplicate copies for your facility.`,
    date: "June 14, 2026",
    readTime: "4 min read",
    author: "Jitendra Prajapati",
    image: "/images/blog/storage-blog.webp"
  },
  {
    id: "blog-4",
    title: "Water Treatment Chemicals Explained",
    slug: "water-treatment-chemicals-explained",
    category: "Industrial Chemical Guide",
    summary: "An in-depth guide on the chemical mechanisms of dechlorination and oxygen scavenging in industrial boiler feed water and effluents.",
    content: `Water treatment is one of the largest consumers of industrial chemicals. Whether dealing with boiler feed water in a power plant or industrial effluents in a chemical park like Vatva GIDC, chemical reduction is a vital step in wastewater purification. Let's look at the chemical processes and the compounds involved.

### 1. Oxygen Scavenging in Boilers
High-pressure boilers operate under extreme heat and pressure. At these temperatures, dissolved oxygen in the water acts as a highly corrosive agent, causing rapid oxidation of the steel tubes (rusting) and pitting corrosion.
* **Chemical Mechanism**: Sodium Sulfite (Na2SO3) is added to the feed water. It reacts with dissolved oxygen (O2) to form Sodium Sulfate (Na2SO4):
  $$\\text{2Na}_2\\text{SO}_3 + \\text{O}_2 \\rightarrow \\text{2Na}_2\\text{SO}_4$$
* This reaction is very fast and effectively reduces dissolved oxygen to micro-levels, increasing boiler lifespan and reducing downtime.

### 2. Dechlorination of Membrane Feed Water
Reverse osmosis (RO) membranes are highly sensitive to chlorine. While chlorine is necessary to prevent biofouling in the pre-treatment stage, any free chlorine entering the RO membrane elements will oxidize the thin-film polyamide layer, causing irreversible membrane failure.
* **Chemical Mechanism**: Sodium Metabisulfite (SMBS) dissolves to form bisulfite ions, which react with hypochlorous acid (free chlorine):
  $$\\text{Na}_2\\text{S}_2\\text{O}_5 + \\text{H}_2\\text{O} \\rightarrow \\text{2NaHSO}_3$$
  $$\\text{NaHSO}_3 + \\text{HOCl} \\rightarrow \\text{NaHSO}_4 + \\text{HCl}$$
* This neutralization is virtually instantaneous, protecting expensive RO elements from chemical degradation.

### 3. Hexavalent Chromium Reduction in Metal Finishing
In electroplating and metal finishing industries, wastewater contains highly toxic Hexavalent Chromium (Cr6+), which is a known carcinogen. Before discharge, it must be reduced to the less toxic Trivalent Chromium (Cr3+).
* **Chemical Mechanism**: Under acidic conditions (pH 2.0 to 3.0), Sodium Metabisulfite or Sodium Bisulfite is added to reduce Cr6+ to Cr3+. Hydroxides (like lime or caustic soda) are then added to precipitate the chromium as chromium hydroxide sludge, which can be safely filtered out.

Amar Chemicals manufactures specialized grades of Sodium Metabisulfite, Sodium Sulfite, and Sodium Bisulfite tailored for the water treatment industry. Contact us for bulk dispatch across India.`,
    date: "April 28, 2026",
    readTime: "7 min read",
    author: "Jitendra Prajapati",
    image: "/images/blog/water-blog.webp"
  }
];
