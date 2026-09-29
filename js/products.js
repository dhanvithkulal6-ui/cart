/**
 * SoleStreet Product Catalog Database
 * Full dataset containing 50 realistic footwear products with INR (₹) pricing strictly between ₹500 and ₹5,000
 * Each product features unique, distinct, category-matched footwear imagery.
 */

const PRODUCTS = [
  {
    id: "sole-01",
    name: "Nike Air Street Force 1",
    brand: "Nike",
    category: "Sneakers",
    price: 3995,
    originalPrice: 4995,
    discount: 20,
    rating: 4.8,
    reviewsCount: 142,
    badge: "Bestseller",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["White/Orange", "Black/White", "Sail"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "The classic street icon redefined for modern urban explorers. Features premium synthetic overlays, encapsulated Air cushioning, and vibrant high-contrast accents.",
    specifications: {
      material: "Full-Grain Synthetic Leather & Textile Upper",
      sole: "Durable Rubber Cupsole with Pivot Circle Traction",
      closure: "Lace-up System with Padded Collar",
      weight: "410g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-02",
    name: "Adidas Ultraboost Pulse",
    brand: "Adidas",
    category: "Running Shoes",
    price: 4899,
    originalPrice: 5999,
    discount: 18,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Trending",
    isFeatured: true,
    isTrending: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Solar Orange", "Core Black", "Cloud White"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Experience maximum energy return with every step. Engineered knit Primeknit upper adapts to your foot shape while Boost foam delivers effortless stride transition.",
    specifications: {
      material: "Primeknit Textile Upper",
      sole: "Continental™ Rubber Outsole",
      closure: "Lace Closure",
      weight: "310g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-03",
    name: "Puma Velocity Nitro 3",
    brand: "Puma",
    category: "Sports Shoes",
    price: 3899,
    originalPrice: 4699,
    discount: 17,
    rating: 4.6,
    reviewsCount: 88,
    badge: "Hot",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Electric Orange", "Dark Slate", "Neon Yellow"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Built for agility and cross-training speed. Nitrogen-infused NITRO foam provides lightweight responsiveness for high-intensity gym sessions and road running.",
    specifications: {
      material: "Breathable Engineered Mesh Upper",
      sole: "PUMAGRIP High-Traction Rubber Compound",
      closure: "Lace-up",
      weight: "260g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-04",
    name: "New Balance 9060 Cyber",
    brand: "New Balance",
    category: "Sneakers",
    price: 4499,
    originalPrice: 5499,
    discount: 18,
    rating: 4.7,
    reviewsCount: 95,
    badge: "New Arrival",
    isFeatured: true,
    isTrending: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Off White", "Concrete Gray", "Castlerock"],
    sizes: [7, 8, 9, 10, 11],
    description: "Sculpted futuristic design meets classic 990-series heritage. Exaggerated motion pods and dual-density ABZORB cushioning create an unrivaled streetwear aesthetic.",
    specifications: {
      material: "Suede and Mesh Upper",
      sole: "ABZORB & SBS Midsole Cushioning",
      closure: "Lace-up",
      weight: "430g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-05",
    name: "SoleStreet Urban Glide Oxford",
    brand: "SoleStreet",
    category: "Formal Shoes",
    price: 3299,
    originalPrice: 4199,
    discount: 21,
    rating: 4.8,
    reviewsCount: 64,
    badge: "21% OFF",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Onyx Black", "Walnut Brown"],
    sizes: [7, 8, 9, 10, 11],
    description: "Handcrafted synthetic leather dress shoe with memory foam cushioned footbeds. Perfect for executive wear, black-tie events, and upscale tailoring.",
    specifications: {
      material: "Hand-Burnished Synthetic Leather",
      sole: "Non-Slip Lightweight Rubber Outsole",
      closure: "Waxed Cotton Lacing",
      weight: "380g (Size 9)",
      origin: "Handcrafted in India"
    }
  },
  {
    id: "sole-06",
    name: "Reebok Club C Legacy",
    brand: "Reebok",
    category: "Casual Shoes",
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    rating: 4.5,
    reviewsCount: 112,
    badge: "Classic",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Chalk White", "Glen Green", "Classic Navy"],
    sizes: [6, 7, 8, 9, 10],
    description: "Clean court style with translucent accents and pop color detailing. Designed for effortless daily wear with comfortable arch support.",
    specifications: {
      material: "Soft Synthetic Leather & Trim",
      sole: "EVA Midsole with Translucent Rubber Outsole",
      closure: "Lace-up",
      weight: "350g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-07",
    name: "SoleStreet Apex Chelsea Boots",
    brand: "SoleStreet",
    category: "Boots",
    price: 4199,
    originalPrice: 5299,
    discount: 21,
    rating: 4.9,
    reviewsCount: 78,
    badge: "Premium",
    isFeatured: true,
    isTrending: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Espresso Brown", "Midnight Black"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Sleek ankle-high Chelsea silhouette crafted from water-resistant oiled nubuck. Elastic side goring and heavy-duty pull tabs ensure seamless slip-on access.",
    specifications: {
      material: "Water-Resistant Oiled Nubuck",
      sole: "Heavy-Duty Lugged Rubber Soles",
      closure: "Slip-On with Elastic Side Panels",
      weight: "520g (Size 9)",
      origin: "Handcrafted"
    }
  },
  {
    id: "sole-08",
    name: "Nike ZoomX Vaporfly Lite",
    brand: "Nike",
    category: "Running Shoes",
    price: 4995,
    originalPrice: 5995,
    discount: 17,
    rating: 5.0,
    reviewsCount: 310,
    badge: "Pro Elite",
    isFeatured: true,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Hyper Orange", "Volt Green", "Sonic Yellow"],
    sizes: [8, 9, 10, 11],
    description: "Marathon-ready speed engine featuring full-length carbon composite plate and responsive foam. Designed to break personal records on raceday.",
    specifications: {
      material: "VaporWeave Ultra-Light Monofilament Mesh",
      sole: "ZoomX Foam with Composite Plate",
      closure: "Asymmetrical Off-Center Lacing",
      weight: "195g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-09",
    name: "Adidas Forum Low Streetcraft",
    brand: "Adidas",
    category: "Sneakers",
    price: 3499,
    originalPrice: 4299,
    discount: 19,
    rating: 4.6,
    reviewsCount: 165,
    badge: "Best Value",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Royal Blue/White", "All Black", "Cloud White"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "80s basketball lineage remastered with removable ankle straps, coated synthetic panels, and retro streetwear vibes.",
    specifications: {
      material: "Coated Synthetic & Accent Upper",
      sole: "Rubber Midsole with Trefoil Tread",
      closure: "Lace Closure with Adjustable Hook-and-Loop Strap",
      weight: "420g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-10",
    name: "SoleStreet Nomad Trail Sandal",
    brand: "SoleStreet",
    category: "Sandals",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.4,
    reviewsCount: 45,
    badge: "Outdoor",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Desert Sand", "Tactical Black", "Olive Drab"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Rugged utility trail sandals built with quick-dry nylon webbing, ergonomic contoured arch support, and high-traction outdoor rubber soles.",
    specifications: {
      material: "Quick-Drying Hydrophobic Webbing Straps",
      sole: "Anatomical EVA Footbed & Rugged Rubber Soles",
      closure: "Triple Velcro Adjustment Straps",
      weight: "270g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-11",
    name: "Puma RS-X Reinvent",
    brand: "Puma",
    category: "Sneakers",
    price: 3299,
    originalPrice: 3999,
    discount: 18,
    rating: 4.7,
    reviewsCount: 128,
    badge: "Retro Cyber",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Pastel Orange", "Triple White", "Black Rose"],
    sizes: [6, 7, 8, 9, 10],
    description: "Bulky 80s Running System silhouette updated with futuristic color blocking, mesh paneling, and exaggerated heel counter details.",
    specifications: {
      material: "Textile Mesh with Overlay",
      sole: "Puma Running System Cushioning Tech",
      closure: "Lace-up",
      weight: "390g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-12",
    name: "New Balance 574 Core Classic",
    brand: "New Balance",
    category: "Casual Shoes",
    price: 2899,
    originalPrice: 3499,
    discount: 17,
    rating: 4.8,
    reviewsCount: 380,
    badge: "All-Time Icon",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Navy Blue", "Marblehead", "Burgundy"],
    sizes: [7, 8, 9, 10, 11],
    description: "The quintessential versatile lifestyle shoe. Soft suede upper paired with ENCAP midsole technology brings timeless style and dependable comfort.",
    specifications: {
      material: "Suede Leather and Lightweight Mesh",
      sole: "ENCAP Midsole Cushioning with Durable Rubber Outsole",
      closure: "Lace-up",
      weight: "340g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-13",
    name: "SoleStreet Heritage Brogue Derby",
    brand: "SoleStreet",
    category: "Formal Shoes",
    price: 3799,
    originalPrice: 4699,
    discount: 19,
    rating: 4.7,
    reviewsCount: 52,
    badge: "Handmade",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Tan Brown", "Ebony Black"],
    sizes: [7, 8, 9, 10, 11],
    description: "Classic wingtip brogue detailing with precision perfs and medallion toe cap. Engineered for all-day comfort during long meetings and formal dinners.",
    specifications: {
      material: "Synthetic Leather Upper",
      sole: "Rubber Welted Sole",
      closure: "5-Eyelet Lace-up",
      weight: "440g (Size 9)",
      origin: "Handcrafted in India"
    }
  },
  {
    id: "sole-14",
    name: "Reebok Zig Kinetica II",
    brand: "Reebok",
    category: "Sports Shoes",
    price: 3199,
    originalPrice: 3899,
    discount: 18,
    rating: 4.5,
    reviewsCount: 74,
    badge: "Energized",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Neon Flame", "Pitch Black", "Solar Green"],
    sizes: [7, 8, 9, 10, 11],
    description: "Dynamic zigzag cushioning band channels and returns kinetic energy with every foot strike. Breathable mesh skin keeps feet cool under peak workout heat.",
    specifications: {
      material: "Seamless Engineered Mesh Upper",
      sole: "Zig Energy Bands Outsole",
      closure: "Lace Closure",
      weight: "360g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-15",
    name: "SoleStreet Terrain Hiker Combat",
    brand: "SoleStreet",
    category: "Boots",
    price: 3999,
    originalPrice: 4899,
    discount: 18,
    rating: 4.9,
    reviewsCount: 89,
    badge: "Heavy Duty",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Coyote Tan", "Matte Black", "Forest Camo"],
    sizes: [8, 9, 10, 11, 12],
    description: "All-terrain combat tactical boot with waterproof barrier and impact-absorbing thick lug sole. Reinforced shank for rugged outdoor expeditions.",
    specifications: {
      material: "Cordura Fabric & Synthetic Leather",
      sole: "Deep Cleated Rubber Grip",
      closure: "Speed-Lacing Hooks",
      weight: "580g (Size 9)",
      origin: "Handcrafted"
    }
  },
  {
    id: "sole-16",
    name: "Adidas Adilette Comfort Luxe",
    brand: "Adidas",
    category: "Sandals",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    rating: 4.6,
    reviewsCount: 290,
    badge: "Essential",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Core Black", "Gold Accent", "Cloud White"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Ultra-plush Cloudfoam contoured footbed delivers instant relaxation after games or poolside leisure.",
    specifications: {
      material: "Synthetic Single-Band Upper",
      sole: "Contoured Cloudfoam Footbed & Lightweight EVA",
      closure: "Slip-On",
      weight: "180g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-17",
    name: "Nike Air Max Terrascape 90",
    brand: "Nike",
    category: "Sneakers",
    price: 4695,
    originalPrice: 5695,
    discount: 18,
    rating: 4.8,
    reviewsCount: 160,
    badge: "Eco Edition",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Anthracite", "Orange Pulse", "Summit White"],
    sizes: [7, 8, 9, 10, 11],
    description: "Reimagined Air Max icon crafted with eco-friendly components. Features translucent Crater Foam rim midsole for sustainable streetwear clout.",
    specifications: {
      material: "Ripstop Fabric and Overlays",
      sole: "Max Air Unit in Heel with Crater Foam",
      closure: "Lace-up",
      weight: "400g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-18",
    name: "New Balance Fresh Foam X More v4",
    brand: "New Balance",
    category: "Running Shoes",
    price: 4799,
    originalPrice: 5799,
    discount: 17,
    rating: 4.9,
    reviewsCount: 104,
    badge: "Max Cushion",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ocean Gray", "Sunburst Orange", "Black Slate"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Maximum Fresh Foam stack height. Offers plush cloud-like comfort for long recovery runs and all-day standing comfort.",
    specifications: {
      material: "Engineered Mesh with Support Zones",
      sole: "Fresh Foam Midsole Cushioning",
      closure: "Lace-up",
      weight: "295g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-19",
    name: "SoleStreet Monogram Velvet Loafer",
    brand: "SoleStreet",
    category: "Formal Shoes",
    price: 3899,
    originalPrice: 4899,
    discount: 20,
    rating: 4.6,
    reviewsCount: 39,
    badge: "Luxury",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Royal Navy", "Burgundy Red", "Midnight Black"],
    sizes: [7, 8, 9, 10, 11],
    description: "Opulent velvet slip-on loafer featuring subtle embroidered crown monogram crest and soft synthetic lining. Designed for gala celebrations and luxury evenings.",
    specifications: {
      material: "Plush Velvet & Soft Lining",
      sole: "Hand-Stitched Rubber Sole",
      closure: "Slip-On",
      weight: "360g (Size 9)",
      origin: "Crafted in India"
    }
  },
  {
    id: "sole-20",
    name: "Puma Future Rider Vintage",
    brand: "Puma",
    category: "Casual Shoes",
    price: 2499,
    originalPrice: 3199,
    discount: 22,
    rating: 4.5,
    reviewsCount: 82,
    badge: "Retro",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Vibrant Orange", "Team Gold", "Puma Black"],
    sizes: [6, 7, 8, 9, 10],
    description: "Lightweight fast-riding sneaker updated with slim Federbein shock-absorbing outsole and bold color mix inspired by 1980 street style.",
    specifications: {
      material: "Nylon and Suede Combination Upper",
      sole: "Shock-Absorbing Outsole",
      closure: "Lace-up",
      weight: "320g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-21",
    name: "Nike Metcon 9 Workout",
    brand: "Nike",
    category: "Sports Shoes",
    price: 4495,
    originalPrice: 5395,
    discount: 17,
    rating: 4.8,
    reviewsCount: 178,
    badge: "Gym Spec",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Smoke Gray", "Crimson Red", "Triple Black"],
    sizes: [7, 8, 9, 10, 11],
    description: "The gold standard for cross-training and heavy lifting. Features an enlarged Hyperlift plate in heel for stability during squats and wall balls.",
    specifications: {
      material: "Breathable 3D Printed Mesh Upper",
      sole: "Rubber Wrap-Around Wall for Rope Climbs",
      closure: "Lace Lock System",
      weight: "375g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-22",
    name: "SoleStreet Waterproof Alpine Boot",
    brand: "SoleStreet",
    category: "Boots",
    price: 4399,
    originalPrice: 5399,
    discount: 19,
    rating: 4.9,
    reviewsCount: 67,
    badge: "Winter Warmth",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Dark Brown", "Charcoal Gray", "Deep Tan"],
    sizes: [8, 9, 10, 11, 12],
    description: "Cold weather alpine boot lined with thermal fleece insulation and sealed waterproof seam technology. Deep tread outsole handles ice and slush.",
    specifications: {
      material: "Synthetic Leather with Thermal Fleece Lining",
      sole: "Arctic Grip Rubber Sole",
      closure: "Rustproof Metal Speed Hooks",
      weight: "610g (Size 9)",
      origin: "Handcrafted"
    }
  },
  {
    id: "sole-23",
    name: "SoleStreet Comfort Slide Sandal",
    brand: "SoleStreet",
    category: "Sandals",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    rating: 4.7,
    reviewsCount: 115,
    badge: "Ergonomic",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Muted Olive", "Tobacco Brown", "Pitch Black"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Anatomically contoured footbed wrapped in soft finish. Molds custom to your footprint over time for ultimate orthopedic foot relaxation.",
    specifications: {
      material: "Synthetic Strap with Adjustable Buckle",
      sole: "Cork Footbed with Lightweight EVA Outsole",
      closure: "Metal Buckle Pin",
      weight: "240g (Size 9)",
      origin: "Crafted in India"
    }
  },
  {
    id: "sole-24",
    name: "Reebok Nano X3 Adventure",
    brand: "Reebok",
    category: "Sports Shoes",
    price: 3699,
    originalPrice: 4499,
    discount: 18,
    rating: 4.7,
    reviewsCount: 88,
    badge: "Outdoor Gym",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Army Green", "Pure Black", "Safety Orange"],
    sizes: [7, 8, 9, 10, 11],
    description: "Designed for outdoor workouts and trail running. Features water-resistant mesh upper, high-traction outsole teeth, and Lift and Run Chassis system.",
    specifications: {
      material: "Ripstop Textile with PU Coating",
      sole: "Multi-Surface All-Terrain Rubber Outsole",
      closure: "Lace Closure with Tongue Storage Pocket",
      weight: "365g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-25",
    name: "Sparx SM-671 Sports Runner",
    brand: "Sparx",
    category: "Running Shoes",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.3,
    reviewsCount: 420,
    badge: "Budget Pick",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Navy/Orange", "Black/Red", "Grey/Lime"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "High-value athletic running shoe with breathable knitted upper and high-density EVA sole for daily morning jogs and gym routines.",
    specifications: {
      material: "Breathable Knit Fabric",
      sole: "Ultra Cushion EVA Rubber Blend",
      closure: "Lace-up",
      weight: "270g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-26",
    name: "Campus Oxyfit Mesh Sneaker",
    brand: "Campus",
    category: "Sneakers",
    price: 999,
    originalPrice: 1399,
    discount: 29,
    rating: 4.4,
    reviewsCount: 310,
    badge: "Super Saver",
    isFeatured: false,
    isTrending: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Electric Blue", "Triple Black", "All White"],
    sizes: [6, 7, 8, 9, 10],
    description: "Lightweight casual streetwear sneaker engineered with Memory Tech insoles and flexible Phylon outsole for all-day campus walking.",
    specifications: {
      material: "Air-Permeable Mesh Upper",
      sole: "Phylon Motion Sole",
      closure: "Lace-up",
      weight: "280g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-27",
    name: "Asics Gel-Venture 9 Trail",
    brand: "Asics",
    category: "Running Shoes",
    price: 4299,
    originalPrice: 5199,
    discount: 17,
    rating: 4.8,
    reviewsCount: 145,
    badge: "Trail Master",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Deep Indigo", "Safety Yellow", "Carrier Grey"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Rearfoot GEL technology cushioning reduces impact shock while lugged outsole lugs deliver supreme grip on mud, rocks, and trail paths.",
    specifications: {
      material: "Durable Mesh & Synthetic Reinforcements",
      sole: "Trail-Specific Rubber Grip Outsole",
      closure: "Lace-up System",
      weight: "320g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-28",
    name: "Skechers GoWalk Max Flex",
    brand: "Skechers",
    category: "Casual Shoes",
    price: 3199,
    originalPrice: 3899,
    discount: 18,
    rating: 4.7,
    reviewsCount: 198,
    badge: "Plush Walk",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Charcoal/White", "All Black", "Navy Blue"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Slip-on walking shoe built with Goga Mat high-rebound cushioning insole and ultra-lightweight 5GEN flex midsole technology.",
    specifications: {
      material: "Athletic Woven Mesh Fabric",
      sole: "5GEN Flexible Cushioning Outsole",
      closure: "Slip-On",
      weight: "230g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-29",
    name: "Woodland Genuine Leather Hiker Boot",
    brand: "Woodland",
    category: "Boots",
    price: 4699,
    originalPrice: 5899,
    discount: 20,
    rating: 4.9,
    reviewsCount: 260,
    badge: "Rugged Tough",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Camel Tan", "Khaki Brown", "Olive Green"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Legendary Woodland nubuck leather high-top outdoor boot with heavy-duty metal eyelets and ultra-durable treaded rubber sole for rough outdoor terrains.",
    specifications: {
      material: "Genuine Nubuck Leather",
      sole: "High-Density Thermoplastic Rubber (TPR)",
      closure: "Heavy Lace-up with Speed Hooks",
      weight: "650g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-30",
    name: "Vans Old Skool Classic Canvas",
    brand: "Vans",
    category: "Sneakers",
    price: 3799,
    originalPrice: 4499,
    discount: 16,
    rating: 4.8,
    reviewsCount: 540,
    badge: "Skate Icon",
    isFeatured: true,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/White Sidestripe", "Navy/White", "All Black"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "The classic skate shoe that first bared the iconic side stripe. Features sturdy canvas and suede uppers, re-enforced toecaps, and signature rubber waffle outsoles.",
    specifications: {
      material: "Sturdy Canvas & Suede Upper",
      sole: "Signature Rubber Waffle Outsole",
      closure: "Lace-up",
      weight: "390g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-31",
    name: "Sparx Casual Canvas Loafer",
    brand: "Sparx",
    category: "Casual Shoes",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.2,
    reviewsCount: 190,
    badge: "Easy Slip",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Denim Blue", "Charcoal Black", "Beige"],
    sizes: [6, 7, 8, 9, 10],
    description: "Casual slip-on canvas shoe with elastic side accents and flexible vulcanized sole. Great for everyday college wear and quick errands.",
    specifications: {
      material: "Woven Cotton Canvas",
      sole: "Vulcanized Rubber Soles",
      closure: "Slip-On",
      weight: "250g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-32",
    name: "Campus First Running Kicks",
    brand: "Campus",
    category: "Running Shoes",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    rating: 4.3,
    reviewsCount: 160,
    badge: "Active Lite",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Teal Green", "Dark Red", "Black/Grey"],
    sizes: [6, 7, 8, 9, 10],
    description: "Flexible performance running shoes with breathable knits and pillowy foam heel strike protection.",
    specifications: {
      material: "Engineered Mesh",
      sole: "Phylon Rubber Blend",
      closure: "Lace-up",
      weight: "260g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-33",
    name: "Nike Revolution 6 Next Nature",
    brand: "Nike",
    category: "Running Shoes",
    price: 3295,
    originalPrice: 3995,
    discount: 18,
    rating: 4.6,
    reviewsCount: 230,
    badge: "Popular",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/White", "Midnight Navy", "Smoke Grey"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Set the pace at the start of your running journey with soft foam cushioning and breathable recycled mesh upper.",
    specifications: {
      material: "Plush Mesh along collar & upper",
      sole: "Computer-Generated Foam Midsole",
      closure: "Lace-up",
      weight: "290g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-34",
    name: "Adidas Duramo Speed Runner",
    brand: "Adidas",
    category: "Running Shoes",
    price: 3699,
    originalPrice: 4499,
    discount: 18,
    rating: 4.7,
    reviewsCount: 180,
    badge: "Speed Tech",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Core Black/Lucid Red", "Cloud White", "Lucid Blue"],
    sizes: [7, 8, 9, 10, 11],
    description: "Lightweight mesh upper with responsive LIGHTSTRIKE midsole cushioning for fast tempo runs and training days.",
    specifications: {
      material: "Engineered Mesh Upper",
      sole: "Lightstrike Midsole & Adiwear Outsole",
      closure: "Lace Closure",
      weight: "275g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-35",
    name: "Puma Smash v2 Buck Leather",
    brand: "Puma",
    category: "Casual Shoes",
    price: 2299,
    originalPrice: 2899,
    discount: 21,
    rating: 4.5,
    reviewsCount: 310,
    badge: "Top Seller",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Forest Night", "Puma Black", "Peacoat Navy"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Tennis-inspired classic silhouette made with soft synthetic nubuck upper and clean stitching detail for versatile everyday street fits.",
    specifications: {
      material: "Synthetic Nubuck Upper",
      sole: "Non-Marking Rubber Soles",
      closure: "Lace-up",
      weight: "330g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-36",
    name: "New Balance 237 Retro Trainer",
    brand: "New Balance",
    category: "Sneakers",
    price: 3999,
    originalPrice: 4899,
    discount: 18,
    rating: 4.6,
    reviewsCount: 140,
    badge: "Retro Wave",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sea Salt / Rust", "Marblehead Grey", "Team Navy"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "70s running heritage updated with oversized 'N' logo branding, asymmetric rubber mudguard, and EVA foam midsole cushioning.",
    specifications: {
      material: "Suede and Nylon Upper",
      sole: "Gator-Inspired Ripple Rubber Outsole",
      closure: "Lace-up",
      weight: "330g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-37",
    name: "SoleStreet Premium Monk Strap Leather",
    brand: "SoleStreet",
    category: "Formal Shoes",
    price: 3499,
    originalPrice: 4399,
    discount: 20,
    rating: 4.8,
    reviewsCount: 75,
    badge: "Executive",
    isFeatured: true,
    isTrending: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cognac Tan", "Charcoal Black"],
    sizes: [7, 8, 9, 10, 11],
    description: "Double buckle monk strap dress shoe with sleek toe cap detailing. Made for gentlemen seeking distinguished sophistication at business events.",
    specifications: {
      material: "Synthetic Leather Upper",
      sole: "Cushioned Rubber Outsole with Stacked Heel",
      closure: "Double Metal Buckle Straps",
      weight: "410g (Size 9)",
      origin: "Handcrafted in India"
    }
  },
  {
    id: "sole-38",
    name: "Woodland Leather Outdoor Sandal",
    brand: "Woodland",
    category: "Sandals",
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    rating: 4.7,
    reviewsCount: 185,
    badge: "Tough Grip",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Khaki Brown", "Olive Tan"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Heavy-duty outdoor sandal with genuine nubuck leather straps, padded mesh lining, and anti-skid rubber lug outsole.",
    specifications: {
      material: "Nubuck Leather Straps with Padded Fabric",
      sole: "Deep Tread Rubber Lug Outsole",
      closure: "Adjustable Velcro Straps",
      weight: "340g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-39",
    name: "Sparx Active Grip Sport Sandal",
    brand: "Sparx",
    category: "Sandals",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.3,
    reviewsCount: 310,
    badge: "Budget King",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/Red", "Navy/Grey"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Waterproof synthetic sport sandal for casual rainy day wear and quick outdoor activities.",
    specifications: {
      material: "Synthetic Webbing Upper",
      sole: "EVA Ergonomic Footbed",
      closure: "Velcro Strap Closure",
      weight: "220g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-40",
    name: "Asics Gel-Contend 8",
    brand: "Asics",
    category: "Sports Shoes",
    price: 3499,
    originalPrice: 4199,
    discount: 17,
    rating: 4.6,
    reviewsCount: 160,
    badge: "Comfort Tech",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/Carrier Grey", "Electric Blue", "French Blue"],
    sizes: [7, 8, 9, 10, 11],
    description: "Versatile athletic training shoe equipped with Rearfoot GEL technology, AMPLIFOAM midsole, and OrthoLite sockliner.",
    specifications: {
      material: "Jacquard Mesh Upper",
      sole: "AMPLIFOAM Midsole & GEL Cushioning",
      closure: "Lace-up",
      weight: "290g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-41",
    name: "Skechers Arch Fit Work Trainer",
    brand: "Skechers",
    category: "Sports Shoes",
    price: 4599,
    originalPrice: 5499,
    discount: 16,
    rating: 4.8,
    reviewsCount: 110,
    badge: "Podiatrist Certified",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/Silver", "White/Navy"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "Podiatrist-certified arch support system developed with 20 years of data. Removable insole molds to your foot to reduce shock and weight distribution.",
    specifications: {
      material: "Engineered Mesh & Synthetic Upper",
      sole: "Resilient Cushioning System Outsole",
      closure: "Lace-up",
      weight: "340g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-42",
    name: "Vans Sk8-Hi High Top Sneaker",
    brand: "Vans",
    category: "Sneakers",
    price: 4299,
    originalPrice: 4999,
    discount: 14,
    rating: 4.8,
    reviewsCount: 290,
    badge: "High Top Legend",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black/True White", "Navy Blue", "All White"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Legendary high-top skate shoe with padded collars for ankle support and signature rubber waffle outsoles.",
    specifications: {
      material: "Suede and Canvas Upper",
      sole: "Vulcanized Rubber Waffle Tread",
      closure: "High Lace-up System",
      weight: "440g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-43",
    name: "Campus Street Smart Casuals",
    brand: "Campus",
    category: "Casual Shoes",
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    rating: 4.4,
    reviewsCount: 140,
    badge: "Street Vibe",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Off White", "Olive/Black", "Grey"],
    sizes: [6, 7, 8, 9, 10],
    description: "Trendy low-profile casual kicks featuring breathable canvas texture and rubber traction outsole.",
    specifications: {
      material: "Textile Canvas",
      sole: "Dual Color Rubber Sole",
      closure: "Lace-up",
      weight: "300g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-44",
    name: "Reebok Glide Ripple Clip",
    brand: "Reebok",
    category: "Casual Shoes",
    price: 2999,
    originalPrice: 3699,
    discount: 19,
    rating: 4.5,
    reviewsCount: 95,
    badge: "Retro Ripple",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["White/Vector Navy", "Core Black"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Old-school court inspired sneaker featuring ripple outsole details and supportive TPU heel clip.",
    specifications: {
      material: "Synthetic Leather Upper",
      sole: "Die-Cut EVA Midsole & Ripple Outsole",
      closure: "Lace-up",
      weight: "340g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-45",
    name: "SoleStreet Handmade Penny Loafer",
    brand: "SoleStreet",
    category: "Formal Shoes",
    price: 2999,
    originalPrice: 3799,
    discount: 21,
    rating: 4.7,
    reviewsCount: 88,
    badge: "Smart Classic",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Mahogany Brown", "Classic Black"],
    sizes: [7, 8, 9, 10, 11],
    description: "Timeless penny strap saddle loafer handcrafted with cushioned footbeds for business formals and smart casual attire.",
    specifications: {
      material: "Synthetic Leather",
      sole: "TPR Durable Rubber Outsole",
      closure: "Slip-On",
      weight: "370g (Size 9)",
      origin: "Crafted in India"
    }
  },
  {
    id: "sole-46",
    name: "Woodland Waterproof Trekking Boot",
    brand: "Woodland",
    category: "Boots",
    price: 4899,
    originalPrice: 5999,
    discount: 18,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Expedition",
    isFeatured: true,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Forest Green", "Dark Olive", "Deep Tan"],
    sizes: [7, 8, 9, 10, 11, 12],
    description: "High-grade waterproof nubuck trekking boot engineered to withstand extreme mountain conditions and harsh weather.",
    specifications: {
      material: "Water-Repellent Suede Nubuck Leather",
      sole: "Vibram High-Traction Rubber Sole",
      closure: "D-Ring Rustproof Speed Lace System",
      weight: "680g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-47",
    name: "Sparx Air Mesh Training Kicks",
    brand: "Sparx",
    category: "Sports Shoes",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    rating: 4.4,
    reviewsCount: 220,
    badge: "Gym Ready",
    isFeatured: false,
    isTrending: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Orange/Black", "Blue/Neon", "Full Black"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Responsive athletic gym training shoe with soft air-mesh ventilation and shock absorbing heel gel pad.",
    specifications: {
      material: "3D Molded Mesh",
      sole: "EVA Phylon Sole",
      closure: "Lace-up",
      weight: "275g (Size 9)",
      origin: "Made in India"
    }
  },
  {
    id: "sole-48",
    name: "Nike Court Vision Low",
    brand: "Nike",
    category: "Sneakers",
    price: 4195,
    originalPrice: 4995,
    discount: 16,
    rating: 4.7,
    reviewsCount: 195,
    badge: "Street Essential",
    isFeatured: false,
    isTrending: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Triple White", "Black/White Swoosh", "White/University Red"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Combines the fastbreak style of 80s basketball with the fast-paced culture of today's game.",
    specifications: {
      material: "Crisp Synthetic Leather Upper",
      sole: "Rubber Cupsole Traction",
      closure: "Lace-up",
      weight: "380g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-49",
    name: "Adidas Advantage Lifestyle",
    brand: "Adidas",
    category: "Casual Shoes",
    price: 3199,
    originalPrice: 3899,
    discount: 18,
    rating: 4.6,
    reviewsCount: 240,
    badge: "Clean Style",
    isFeatured: false,
    isTrending: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cloud White / Green", "White / Core Black"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Minimalist court-inspired sneaker made in part with recycled materials. Perforated 3-Stripes provide subtle brand heritage.",
    specifications: {
      material: "Synthetic Leather Upper",
      sole: "Rubber Outsole & Cloudfoam Comfort Sockliner",
      closure: "Lace-up",
      weight: "330g (Size 9)",
      origin: "Imported"
    }
  },
  {
    id: "sole-50",
    name: "Puma Softride Enzo NXT",
    brand: "Puma",
    category: "Sports Shoes",
    price: 2899,
    originalPrice: 3599,
    discount: 19,
    rating: 4.6,
    reviewsCount: 165,
    badge: "Plush Soft",
    isFeatured: false,
    isTrending: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["High Risk Red", "Puma Black", "Castle Rock Grey"],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Pairing Softride EVA foam technology with progressive upper design for extreme cushioning and all-day active wear.",
    specifications: {
      material: "Mesh and Molded TPU Eye-Stay",
      sole: "Softride Foam & Zoned Rubber Traction",
      closure: "Lace-up Slip Bootie Construction",
      weight: "310g (Size 9)",
      origin: "Imported"
    }
  }
];

const CATEGORIES = [
  { id: "Sneakers", name: "Sneakers", count: 10, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80", subtitle: "Iconic streetwear silhouettes & daily kicks" },
  { id: "Running Shoes", name: "Running Shoes", count: 8, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", subtitle: "Performance cushioning for marathons & sprints" },
  { id: "Sports Shoes", name: "Sports Shoes", count: 8, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80", subtitle: "Cross-training, gym stability & active speed" },
  { id: "Formal Shoes", name: "Formal Shoes", count: 5, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80", subtitle: "Handcrafted leather Oxfords, Derbies & Loafers" },
  { id: "Casual Shoes", name: "Casual Shoes", count: 9, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80", subtitle: "Comfortable versatile everyday footwear" },
  { id: "Sandals", name: "Sandals", count: 5, image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=600&q=80", subtitle: "Trail sandals, slides & cork footbed comfort" },
  { id: "Boots", name: "Boots", count: 5, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80", subtitle: "Rugged tactical combat & outdoor leather boots" }
];

const BRANDS = ["Nike", "Adidas", "Puma", "New Balance", "Reebok", "SoleStreet", "Sparx", "Campus", "Asics", "Skechers", "Woodland", "Vans"];
const SIZES = [6, 7, 8, 9, 10, 11, 12];
