/**
 * Central, editable content for Jimmy's Creative Hub.
 * Update contact details, services, portfolio items, testimonials and FAQ here —
 * every page reads from this file.
 */

export const site = {
  name: "Jimmy's Creative Hub",
  shortName: "JCH",
  tagline: "Where imagination meets innovation.",
  description:
    "Creative graphic design solutions that bring your ideas to life with stunning visuals. From branding to social media designs, we create impactful designs that make your business stand out.",
  established: 2019,
  location: "Ahmedabad, Gujarat, India",
  email: "jimmyscreativehub.jch957@gmail.com",
  phone: "+91 7737330072",
  phoneRaw: "+917737330072",
  whatsappNumber: "917737330072",
  instagram: "https://www.instagram.com/jimmys_creative_hub/",
  instagramHandle: "@jimmys_creative_hub",
} as const;

export const whatsappMessage =
  "Hello Jimmy's Creative Hub, I would like to discuss a design project.";

export function whatsappLink(message: string = whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mailtoLink = `mailto:${site.email}`;
export const telLink = `tel:${site.phoneRaw}`;

export type NavItem = { label: string; to: string };

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export type PricingTier = {
  name: "Basic" | "Standard" | "Premium";
  price: number;
  features: string[];
  popular?: boolean;
};

export type ServicePricing = {
  slug: string;
  service: string;
  description: string;
  tiers: PricingTier[];
};

export const servicePricing: ServicePricing[] = [
  {
    slug: "logo-design",
    service: "Logo Design",
    description: "Unique and memorable logos for your brand.",
    tiers: [
      { name: "Basic", price: 399, features: ["1 Logo Concept", "JPG + PNG", "1 Revision"] },
      {
        name: "Standard",
        price: 799,
        features: ["2 Concepts", "High Resolution Files", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1199,
        features: ["3 Concepts", "Source File (AI/PSD)", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "thumbnail-design",
    service: "Thumbnail Design",
    description: "Attention-grabbing thumbnails for YouTube and Shorts.",
    tiers: [
      {
        name: "Basic",
        price: 199,
        features: ["Simple Text + Image", "Standard Resolution", "1 Revision"],
      },
      {
        name: "Standard",
        price: 499,
        features: ["Eye-catching Layout", "High Quality Image", "2 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 999,
        features: ["CTR Focus Design", "Professional Typography", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "poster-design",
    service: "Poster Design",
    description: "Attractive posters for promotions, events and social media.",
    tiers: [
      { name: "Basic", price: 299, features: ["Simple Design", "Social Media Use", "1 Revision"] },
      {
        name: "Standard",
        price: 699,
        features: ["Creative Layout", "HD Quality", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1199,
        features: ["High Impact Design", "Print + Digital Ready", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "business-card-design",
    service: "Business Card Design",
    description: "Clean and professional business cards.",
    tiers: [
      { name: "Basic", price: 399, features: ["Single-Side Design", "Print Ready", "1 Revision"] },
      {
        name: "Standard",
        price: 799,
        features: ["Double-Side Design", "Modern Layout", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1199,
        features: ["Premium Style", "Mockup Preview", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "brochure-design",
    service: "Brochure Design",
    description: "Informative and visually appealing brochures.",
    tiers: [
      {
        name: "Basic",
        price: 599,
        features: ["1 Page / Folding Design", "Simple Layout", "1 Revision"],
      },
      {
        name: "Standard",
        price: 999,
        features: ["Professional Layout", "Print Ready", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1199,
        features: ["Attractive Visual Design", "High Quality Print Files", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "flyer-design",
    service: "Flyer Design",
    description: "Professional flyers for products, services and events.",
    tiers: [
      {
        name: "Basic",
        price: 299,
        features: ["Simple Promotional Design", "Web Use", "1 Revision"],
      },
      {
        name: "Standard",
        price: 699,
        features: ["Eye-catching Layout", "Print Ready", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1199,
        features: ["High Quality Design", "Digital + Print Use", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "social-media-design",
    service: "Social Media Design",
    description: "Branded social media creatives for consistent communication.",
    tiers: [
      { name: "Basic", price: 199, features: ["Simple Post", "JPG Format", "1 Revision"] },
      {
        name: "Standard",
        price: 499,
        features: ["Creative Design", "Brand Colors", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 999,
        features: ["Professional Branding", "High Engagement Design", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "banner-ad-creative",
    service: "Banner / Ad Creative",
    description: "Marketing-focused banners and advertising creatives.",
    tiers: [
      { name: "Basic", price: 399, features: ["Simple Banner", "Web Use", "1 Revision"] },
      {
        name: "Standard",
        price: 799,
        features: ["Promotional Design", "HD Quality", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1199,
        features: ["Marketing Focused", "Multiple Sizes", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "graphic-design",
    service: "Graphic Design",
    description: "Custom visual design solutions for business needs.",
    tiers: [
      { name: "Basic", price: 499, features: ["1 Creative Design", "JPG + PNG", "1 Revision"] },
      {
        name: "Standard",
        price: 999,
        features: ["2 Creative Designs", "HD Files", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1499,
        features: ["3 Creative Designs", "Source Files", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "branding",
    service: "Branding",
    description: "Complete visual identity solutions for your brand.",
    tiers: [
      {
        name: "Basic",
        price: 1499,
        features: ["Logo Design", "Basic Color Palette", "Typography Selection"],
      },
      {
        name: "Standard",
        price: 2999,
        features: ["Logo + Brand Colors", "Typography System", "Basic Brand Guidelines"],
        popular: true,
      },
      {
        name: "Premium",
        price: 4999,
        features: ["Complete Brand Identity", "Brand Guidelines", "Brand Applications"],
      },
    ],
  },
  {
    slug: "website-design",
    service: "Website Design & Development",
    description: "Modern responsive websites for your business.",
    tiers: [
      {
        name: "Basic",
        price: 4999,
        features: ["Landing Page", "Responsive Design", "Basic Contact Form"],
      },
      {
        name: "Standard",
        price: 9999,
        features: ["Up to 5 Pages", "Responsive Design", "Contact / Enquiry Integration"],
        popular: true,
      },
      {
        name: "Premium",
        price: 19999,
        features: ["Multi-page Website", "Advanced UI & Animations", "Custom Integrations"],
      },
    ],
  },
  {
    slug: "video-editing",
    service: "Video Editing",
    description: "Polished video content for social media and promotions.",
    tiers: [
      { name: "Basic", price: 499, features: ["Basic Cuts", "Text / Captions", "1 Revision"] },
      {
        name: "Standard",
        price: 999,
        features: ["Advanced Editing", "Transitions + Effects", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1999,
        features: ["Professional Edit", "Motion Graphics", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "packaging-design",
    service: "Packaging Design",
    description: "Product packaging designed for strong brand presence.",
    tiers: [
      {
        name: "Basic",
        price: 999,
        features: ["1 Packaging Concept", "Print-ready Artwork", "1 Revision"],
      },
      {
        name: "Standard",
        price: 1999,
        features: ["2 Concepts", "Mockup Preview", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 3999,
        features: ["3 Concepts", "Complete Packaging System", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "presentation-design",
    service: "Presentation / PPT Design",
    description: "Professional presentations with clear visual storytelling.",
    tiers: [
      { name: "Basic", price: 799, features: ["Up to 10 Slides", "Clean Layout", "1 Revision"] },
      {
        name: "Standard",
        price: 1499,
        features: ["Up to 20 Slides", "Custom Visual Design", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 2999,
        features: ["Up to 30 Slides", "Advanced Visual Storytelling", "Unlimited Revisions"],
      },
    ],
  },
  {
    slug: "digital-marketing",
    service: "Digital Marketing",
    description: "Creative digital marketing support for online campaigns.",
    tiers: [
      {
        name: "Basic",
        price: 2999,
        features: ["Campaign Creative Set", "Basic Content Support", "1 Revision Round"],
      },
      {
        name: "Standard",
        price: 5999,
        features: ["Campaign Creative Set", "Content Planning", "3 Revision Rounds"],
        popular: true,
      },
      {
        name: "Premium",
        price: 9999,
        features: ["Complete Campaign Creative", "Content Strategy", "Ongoing Optimization"],
      },
    ],
  },
  {
    slug: "and-more",
    service: "And More",
    description: "Custom creative solutions for specific project requirements.",
    tiers: [
      {
        name: "Basic",
        price: 499,
        features: ["Custom Creative Request", "Standard Delivery", "1 Revision"],
      },
      {
        name: "Standard",
        price: 999,
        features: ["Custom Creative Solution", "Priority Delivery", "3 Revisions"],
        popular: true,
      },
      {
        name: "Premium",
        price: 1999,
        features: ["Advanced Custom Solution", "Priority Support", "Unlimited Revisions"],
      },
    ],
  },
];

export const comboPackages = [
  {
    slug: "starter",
    name: "Starter",
    price: 999,
    features: ["1 Logo (Basic)", "1 Thumbnail", "1 Social Media Post"],
  },
  {
    slug: "creator",
    name: "Creator",
    price: 1499,
    features: ["1 Thumbnail (Premium)", "2 Social Media Posts", "1 Poster/Flyer"],
  },
  {
    slug: "business",
    name: "Business",
    price: 1999,
    features: ["Logo (Standard)", "Business Card", "2 Social Media Posts"],
  },
] as const;

export type Service = {
  slug: string;
  name: string;
  description: string;
  glyph: string;
  tone: "coral" | "cobalt" | "gold" | "ink";
  to?: string;
};

export const services: Service[] = [
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description:
      "Creative and visually engaging designs tailored to your brand and business needs.",
    glyph: "◧",
    tone: "coral",
    to: "/services/graphic-design",
  },
  {
    slug: "logo-design",
    name: "Logo Design",
    description: "Unique and memorable logos that give your brand a strong visual identity.",
    glyph: "◍",
    tone: "cobalt",
    to: "/services/branding",
  },
  {
    slug: "branding",
    name: "Branding",
    description:
      "Complete brand identity solutions that create a consistent and professional brand image.",
    glyph: "◗",
    tone: "coral",
    to: "/services/branding",
  },
  {
    slug: "social-media-design",
    name: "Social Media Design",
    description:
      "Eye-catching social media creatives that increase engagement and strengthen your online presence.",
    glyph: "◈",
    tone: "gold",
    to: "/services/social-media-design",
  },
  {
    slug: "website-design",
    name: "Website Design & Development",
    description:
      "Modern, responsive and user-friendly websites designed to represent your business professionally.",
    glyph: "▣",
    tone: "cobalt",
    to: "/services/website-design",
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    description:
      "Engaging and polished video content for social media, marketing, promotions and businesses.",
    glyph: "▷",
    tone: "coral",
    to: "/services/video-editing",
  },
  {
    slug: "poster-design",
    name: "Poster Design",
    description:
      "Attractive and impactful posters designed to grab attention and communicate your message clearly.",
    glyph: "▤",
    tone: "gold",
    to: "/services/poster-design",
  },
  {
    slug: "flyer-design",
    name: "Flyer Design",
    description:
      "Professional flyers that showcase your products, services, offers or events effectively.",
    glyph: "▥",
    tone: "cobalt",
    to: "/services/flyer-design",
  },
  {
    slug: "business-card-design",
    name: "Business Card Design",
    description: "Clean and professional business cards that leave a lasting impression.",
    glyph: "▭",
    tone: "coral",
    to: "/services/business-card-design",
  },
  {
    slug: "brochure-design",
    name: "Brochure Design",
    description:
      "Informative and visually appealing brochures that present your business and services effectively.",
    glyph: "▦",
    tone: "gold",
    to: "/services/brochure-design",
  },
  {
    slug: "thumbnail-design",
    name: "Thumbnail Design",
    description:
      "Attention-grabbing thumbnails designed to improve clicks and make your content stand out.",
    glyph: "▶",
    tone: "cobalt",
    to: "/services/thumbnail-design",
  },
  {
    slug: "packaging-design",
    name: "Packaging Design",
    description:
      "Creative packaging designs that make your products look attractive and strengthen brand recognition.",
    glyph: "◰",
    tone: "coral",
    to: "/services/packaging-design",
  },
  {
    slug: "presentation-design",
    name: "Presentation / PPT Design",
    description:
      "Professional and engaging presentations that turn information into visually compelling slides.",
    glyph: "▧",
    tone: "gold",
    to: "/services/presentation-design",
  },
  {
    slug: "and-more",
    name: "And More",
    description:
      "Custom creative design solutions based on specific business and project requirements.",
    glyph: "✳",
    tone: "ink",
    to: "/services/and-more",
  },
];

/** The six disciplines featured on the home page. */
export const featuredServiceSlugs = [
  "graphic-design",
  "branding",
  "social-media-design",
  "website-design",
  "video-editing",
  "and-more",
] as const;

export const stats = [
  { value: "2019", label: "Established in Ahmedabad", highlight: true },
  { value: "13+", label: "Creative services" },
  { value: "100%", label: "Custom design approach" },
  { value: "24/7", label: "Project communication" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    detail: "Understand the brand, business and requirements.",
  },
  {
    step: "02",
    title: "Strategize",
    detail: "Develop the creative direction and visual approach.",
  },
  {
    step: "03",
    title: "Design",
    detail: "Create polished and impactful visual solutions.",
  },
  {
    step: "04",
    title: "Refine",
    detail: "Review, improve and finalize the design.",
  },
  {
    step: "05",
    title: "Deliver",
    detail: "Provide the final creative solution, ready for use.",
  },
];

export const whyChooseUs = [
  {
    title: "Creative Thinking",
    detail:
      "Every brief starts with ideas, not templates — so the result looks like you and nobody else.",
  },
  {
    title: "Professional Design",
    detail:
      "Considered typography, colour and layout, built to print and publish cleanly everywhere.",
  },
  {
    title: "Brand-Focused Approach",
    detail: "Design decisions are tied back to your positioning, audience and business goals.",
  },
  {
    title: "Custom Solutions",
    detail: "Scope, format and timeline shaped around the specific project in front of us.",
  },
];

export const portfolioCategories = [
  "All",
  "Graphic Design",
  "Logo",
  "Branding",
  "Social Media",
  "Website",
  "Video",
  "Poster",
  "Packaging",
  "Presentation",
  "Digital Marketing",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  details?: string;
  image?: string;
  video?: string;
  span?: "tall" | "wide" | "normal";
};

/**
 * Portfolio projects.
 * Add the actual artwork to public/portfolio/ using the matching image path below.
 */
export const portfolioItems: PortfolioItem[] = [
  // ─────────────────────────────────────────────
  // GRAPHIC DESIGN — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "graphic-1",
    title: "Marketing Brochure",
    category: "Graphic Design",
    description: "Multi-page brochure layout designed to present services and pricing clearly.",
    details: "Graphic Design • Brochure",
    image: "/portfolio/graphic-design-1.jpg",
    span: "wide",
  },
  {
    id: "graphic-2",
    title: "Business Flyer",
    category: "Graphic Design",
    description: "Clean promotional flyer designed for a local business campaign.",
    details: "Graphic Design • Flyer",
    image: "/portfolio/graphic-design-2.jpg",
  },
  {
    id: "graphic-3",
    title: "Corporate Profile",
    category: "Graphic Design",
    description: "Professional company profile design with structured visual hierarchy.",
    details: "Graphic Design • Company Profile",
    image: "/portfolio/graphic-design-3.jpg",
  },
  {
    id: "graphic-4",
    title: "Restaurant Menu",
    category: "Graphic Design",
    description: "Modern menu layout combining food photography, typography and pricing.",
    details: "Graphic Design • Menu",
    image: "/portfolio/graphic-design-4.jpg",
  },
  {
    id: "graphic-5",
    title: "Promotional Creative",
    category: "Graphic Design",
    description: "Bold promotional artwork created for a seasonal marketing campaign.",
    details: "Graphic Design • Marketing Creative",
    image: "/portfolio/graphic-design-5.jpg",
  },
  {
    id: "graphic-6",
    title: "Business Stationery",
    category: "Graphic Design",
    description: "Coordinated stationery system including letterhead and supporting materials.",
    details: "Graphic Design • Stationery",
    image: "/portfolio/graphic-design-6.jpg",
  },
  {
    id: "graphic-7",
    title: "Product Catalogue",
    category: "Graphic Design",
    description: "Product catalogue designed for clear browsing and strong visual presentation.",
    details: "Graphic Design • Catalogue",
    image: "/portfolio/graphic-design-7.jpg",
  },
  {
    id: "graphic-8",
    title: "Creative Campaign Set",
    category: "Graphic Design",
    description: "A coordinated collection of campaign graphics built around one visual direction.",
    details: "Graphic Design • Campaign",
    image: "/portfolio/graphic-design-8.jpg",
    span: "tall",
  },

  // ─────────────────────────────────────────────
  // LOGO — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "logo-1",
    title: "Modern Monogram",
    category: "Logo",
    description: "Minimal monogram identity designed for a modern professional brand.",
    details: "Logo Design • Monogram",
    image: "/portfolio/logo-1.jpg",
  },
  {
    id: "logo-2",
    title: "Tech Brand Logo",
    category: "Logo",
    description: "Sharp and contemporary logo concept for a technology-focused business.",
    details: "Logo Design • Technology",
    image: "/portfolio/logo-2.jpg",
  },
  {
    id: "logo-3",
    title: "Food Brand Mark",
    category: "Logo",
    description: "Friendly visual mark created for a food and beverage brand.",
    details: "Logo Design • Food & Beverage",
    image: "/portfolio/logo-3.jpg",
  },
  {
    id: "logo-4",
    title: "Fashion Wordmark",
    category: "Logo",
    description: "Elegant typography-based wordmark for a fashion-focused brand.",
    details: "Logo Design • Fashion",
    image: "/portfolio/logo-4.jpg",
  },
  {
    id: "logo-5",
    title: "Creative Studio Mark",
    category: "Logo",
    description: "Distinctive identity mark designed for a creative studio.",
    details: "Logo Design • Creative Studio",
    image: "/portfolio/logo-5.jpg",
  },
  {
    id: "logo-6",
    title: "Premium Business Logo",
    category: "Logo",
    description: "Refined logo system created to communicate a premium business image.",
    details: "Logo Design • Business",
    image: "/portfolio/logo-6.jpg",
  },
  {
    id: "logo-7",
    title: "Initial Letter Logo",
    category: "Logo",
    description: "Memorable initial-based symbol with a clean and flexible visual style.",
    details: "Logo Design • Initial Mark",
    image: "/portfolio/logo-7.jpg",
  },
  {
    id: "logo-8",
    title: "Geometric Brand Mark",
    category: "Logo",
    description: "Geometric logo concept built from simple shapes and strong proportions.",
    details: "Logo Design • Geometric",
    image: "/portfolio/logo-8.jpg",
  },

  // ─────────────────────────────────────────────
  // BRANDING — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "branding-1",
    title: "Complete Brand Identity",
    category: "Branding",
    description: "Complete identity system covering logo, typography, colours and applications.",
    details: "Branding • Full Identity",
    image: "/portfolio/branding-1.jpg",
    span: "tall",
  },
  {
    id: "branding-2",
    title: "Cafe Brand System",
    category: "Branding",
    description: "Warm and memorable visual identity created for a modern cafe.",
    details: "Branding • Cafe",
    image: "/portfolio/branding-2.jpg",
  },
  {
    id: "branding-3",
    title: "Fashion Brand Identity",
    category: "Branding",
    description: "Premium identity direction for a contemporary fashion label.",
    details: "Branding • Fashion",
    image: "/portfolio/branding-3.jpg",
  },
  {
    id: "branding-4",
    title: "Startup Visual Identity",
    category: "Branding",
    description: "Flexible identity system designed for a growing startup.",
    details: "Branding • Startup",
    image: "/portfolio/branding-4.jpg",
  },
  {
    id: "branding-5",
    title: "Restaurant Identity",
    category: "Branding",
    description: "Complete restaurant branding across menus, packaging and social media.",
    details: "Branding • Restaurant",
    image: "/portfolio/branding-5.jpg",
  },
  {
    id: "branding-6",
    title: "Corporate Rebrand",
    category: "Branding",
    description: "Updated visual direction created to modernize an established business.",
    details: "Branding • Rebrand",
    image: "/portfolio/branding-6.jpg",
  },
  {
    id: "branding-7",
    title: "Personal Brand Kit",
    category: "Branding",
    description: "Personal branding system including visual language and social templates.",
    details: "Branding • Personal Brand",
    image: "/portfolio/branding-7.jpg",
  },
  {
    id: "branding-8",
    title: "Product Brand Identity",
    category: "Branding",
    description: "Product-focused identity designed for consistent digital and physical use.",
    details: "Branding • Product",
    image: "/portfolio/branding-8.jpg",
  },

  // ─────────────────────────────────────────────
  // SOCIAL MEDIA — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "social-1",
    title: "Instagram Feed Set",
    category: "Social Media",
    description: "Coordinated Instagram post and story templates for a monthly campaign.",
    details: "Social Media • Instagram",
    image: "/portfolio/social-media-1.jpg",
    span: "wide",
  },
  {
    id: "social-2",
    title: "Product Launch Campaign",
    category: "Social Media",
    description: "Launch creatives designed to build attention around a new product.",
    details: "Social Media • Product Launch",
    image: "/portfolio/social-media-2.jpg",
  },
  {
    id: "social-3",
    title: "Festival Campaign",
    category: "Social Media",
    description: "Festive social media artwork designed for high visual impact.",
    details: "Social Media • Festival",
    image: "/portfolio/social-media-3.jpg",
  },
  {
    id: "social-4",
    title: "Business Tips Series",
    category: "Social Media",
    description: "Educational carousel templates for sharing useful business insights.",
    details: "Social Media • Carousel",
    image: "/portfolio/social-media-4.jpg",
  },
  {
    id: "social-5",
    title: "Restaurant Social Set",
    category: "Social Media",
    description: "Food-focused social creatives for offers, products and announcements.",
    details: "Social Media • Restaurant",
    image: "/portfolio/social-media-5.jpg",
  },
  {
    id: "social-6",
    title: "Fashion Social Campaign",
    category: "Social Media",
    description: "Editorial-style social media visuals for a fashion collection.",
    details: "Social Media • Fashion",
    image: "/portfolio/social-media-6.jpg",
  },
  {
    id: "social-7",
    title: "Quote & Content Series",
    category: "Social Media",
    description: "Branded quote and content templates for consistent publishing.",
    details: "Social Media • Content Series",
    image: "/portfolio/social-media-7.jpg",
  },
  {
    id: "social-8",
    title: "Monthly Content Pack",
    category: "Social Media",
    description: "A complete monthly set of social creatives with a unified visual language.",
    details: "Social Media • Monthly Pack",
    image: "/portfolio/social-media-8.jpg",
  },

  // ─────────────────────────────────────────────
  // WEBSITE — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "website-1",
    title: "Business Website",
    category: "Website",
    description: "Responsive multi-page business website with a clear enquiry journey.",
    details: "Website • Business",
    image: "/portfolio/website-1.jpg",
  },
  {
    id: "website-2",
    title: "Creative Agency Website",
    category: "Website",
    description: "Bold portfolio-driven website created for a modern creative agency.",
    details: "Website • Creative Agency",
    image: "/portfolio/website-2.jpg",
    span: "wide",
  },
  {
    id: "website-3",
    title: "Restaurant Website",
    category: "Website",
    description: "Modern restaurant website featuring menu, story and contact sections.",
    details: "Website • Restaurant",
    image: "/portfolio/website-3.jpg",
  },
  {
    id: "website-4",
    title: "Portfolio Website",
    category: "Website",
    description: "Minimal portfolio website focused on presenting creative work.",
    details: "Website • Portfolio",
    image: "/portfolio/website-4.jpg",
  },
  {
    id: "website-5",
    title: "Landing Page",
    category: "Website",
    description: "Conversion-focused landing page designed around one clear call to action.",
    details: "Website • Landing Page",
    image: "/portfolio/website-5.jpg",
  },
  {
    id: "website-6",
    title: "E-Commerce Concept",
    category: "Website",
    description: "Product-first e-commerce interface with clean navigation and visual hierarchy.",
    details: "Website • E-Commerce",
    image: "/portfolio/website-6.jpg",
  },
  {
    id: "website-7",
    title: "Startup Website",
    category: "Website",
    description: "Modern startup website designed to explain the product and build trust.",
    details: "Website • Startup",
    image: "/portfolio/website-7.jpg",
  },
  {
    id: "website-8",
    title: "Service Business Website",
    category: "Website",
    description: "Professional service website designed around simple navigation and enquiries.",
    details: "Website • Service Business",
    image: "/portfolio/website-8.jpg",
  },

  // ─────────────────────────────────────────────
  // VIDEO — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "video-1",
    title: "Promo Video Edit",
    category: "Video",
    description: "Short-form promotional edit with titles, pacing and sound design.",
    details: "Video • Promotional",
    image: "/portfolio/video-1.mp4",
  },
  {
    id: "video-2",
    title: "Product Reel",
    category: "Video",
    description: "Fast-paced product reel designed for social media promotion.",
    details: "Video • Product Reel",
    image: "/portfolio/video-2.mp4",
  },
  {
    id: "video-3",
    title: "Brand Introduction",
    category: "Video",
    description: "Short brand introduction video combining motion, typography and visuals.",
    details: "Video • Brand Film",
    image: "/portfolio/video-3.mp4",
  },
  {
    id: "video-4",
    title: "Instagram Reel",
    category: "Video",
    description: "Vertical social media reel designed for quick audience engagement.",
    details: "Video • Instagram Reel",
    image: "/portfolio/video-4.mp4",
  },
  {
    id: "video-5",
    title: "Event Highlights",
    category: "Video",
    description: "Energetic event highlight edit built around memorable moments.",
    details: "Video • Event",
    image: "/portfolio/video-5.jpg",
  },
  {
    id: "video-6",
    title: "Product Advertisement",
    category: "Video",
    description: "Product-focused advertisement combining visual storytelling and motion.",
    details: "Video • Advertisement",
    image: "/portfolio/video-6.jpg",
  },
  {
    id: "video-7",
    title: "Social Campaign Video",
    category: "Video",
    description:
      "Campaign video designed to maintain consistent brand messaging across social platforms.",
    details: "Video • Social Campaign",
    image: "/portfolio/video-7.jpg",
  },
  {
    id: "video-8",
    title: "Corporate Video Edit",
    category: "Video",
    description:
      "Professional corporate edit with clean transitions, titles and supporting visuals.",
    details: "Video • Corporate",
    image: "/portfolio/video-8.jpg",
  },

  // ─────────────────────────────────────────────
  // POSTER — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "poster-1",
    title: "Event Poster Series",
    category: "Poster",
    description: "Bold typographic posters designed for print and digital promotion.",
    details: "Poster • Event",
    image: "/portfolio/poster-1.jpg",
  },
  {
    id: "poster-2",
    title: "Festival Poster",
    category: "Poster",
    description: "Eye-catching festival poster with strong typography and visual contrast.",
    details: "Poster • Festival",
    image: "/portfolio/poster-2.jpg",
  },
  {
    id: "poster-3",
    title: "Business Offer Poster",
    category: "Poster",
    description: "Promotional poster designed to communicate a limited-time business offer.",
    details: "Poster • Promotion",
    image: "/portfolio/poster-3.jpg",
  },
  {
    id: "poster-4",
    title: "Concert Poster",
    category: "Poster",
    description: "High-energy poster concept created for a music event.",
    details: "Poster • Concert",
    image: "/portfolio/poster-4.jpg",
  },
  {
    id: "poster-5",
    title: "Restaurant Poster",
    category: "Poster",
    description: "Food-focused promotional poster for a restaurant campaign.",
    details: "Poster • Restaurant",
    image: "/portfolio/poster-5.jpg",
  },
  {
    id: "poster-6",
    title: "Corporate Poster",
    category: "Poster",
    description: "Clean corporate poster designed for a professional announcement.",
    details: "Poster • Corporate",
    image: "/portfolio/poster-6.jpg",
  },
  {
    id: "poster-7",
    title: "Sale Campaign Poster",
    category: "Poster",
    description: "Bold retail sale creative designed to highlight discounts and offers.",
    details: "Poster • Sale",
    image: "/portfolio/poster-7.jpg",
  },
  {
    id: "poster-8",
    title: "Awareness Poster",
    category: "Poster",
    description: "Message-driven awareness poster with clear visual communication.",
    details: "Poster • Awareness",
    image: "/portfolio/poster-8.jpg",
  },

  // ─────────────────────────────────────────────
  // PACKAGING — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "packaging-1",
    title: "Product Packaging",
    category: "Packaging",
    description: "Label and carton artwork designed around strong shelf visibility.",
    details: "Packaging • Product",
    image: "/portfolio/packaging-1.jpg",
    span: "tall",
  },
  {
    id: "packaging-2",
    title: "Coffee Packaging",
    category: "Packaging",
    description: "Premium coffee packaging system with a strong shelf presence.",
    details: "Packaging • Coffee",
    image: "/portfolio/packaging-2.jpg",
  },
  {
    id: "packaging-3",
    title: "Cosmetic Packaging",
    category: "Packaging",
    description: "Clean cosmetic packaging concept designed for a premium audience.",
    details: "Packaging • Cosmetics",
    image: "/portfolio/packaging-3.jpg",
  },
  {
    id: "packaging-4",
    title: "Food Box Design",
    category: "Packaging",
    description: "Food box packaging designed to combine practicality with brand appeal.",
    details: "Packaging • Food",
    image: "/portfolio/packaging-4.jpg",
  },
  {
    id: "packaging-5",
    title: "Bottle Label Design",
    category: "Packaging",
    description: "Distinctive bottle label created for clear product recognition.",
    details: "Packaging • Bottle",
    image: "/portfolio/packaging-5.jpg",
  },
  {
    id: "packaging-6",
    title: "Retail Box System",
    category: "Packaging",
    description: "Consistent retail box system created across a product range.",
    details: "Packaging • Retail",
    image: "/portfolio/packaging-6.jpg",
  },
  {
    id: "packaging-7",
    title: "Snack Packaging",
    category: "Packaging",
    description: "Bright and engaging snack packaging concept designed for retail shelves.",
    details: "Packaging • Snacks",
    image: "/portfolio/packaging-7.jpg",
  },
  {
    id: "packaging-8",
    title: "Premium Gift Box",
    category: "Packaging",
    description: "Elegant gift box packaging designed to create a premium unboxing experience.",
    details: "Packaging • Gift",
    image: "/portfolio/packaging-8.jpg",
  },

  // ─────────────────────────────────────────────
  // PRESENTATION — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "presentation-1",
    title: "Pitch Deck Design",
    category: "Presentation",
    description: "Slide system that turns dense information into clear visual storytelling.",
    details: "Presentation • Pitch Deck",
    image: "/portfolio/presentation-1.jpg",
  },
  {
    id: "presentation-2",
    title: "Business Presentation",
    category: "Presentation",
    description: "Professional business deck designed for meetings and client presentations.",
    details: "Presentation • Business",
    image: "/portfolio/presentation-2.jpg",
  },
  {
    id: "presentation-3",
    title: "Startup Investor Deck",
    category: "Presentation",
    description: "Structured investor presentation with a clear story and visual hierarchy.",
    details: "Presentation • Investor Deck",
    image: "/portfolio/presentation-3.jpg",
    span: "wide",
  },
  {
    id: "presentation-4",
    title: "Company Profile Deck",
    category: "Presentation",
    description:
      "Visual company profile presentation designed to communicate key information clearly.",
    details: "Presentation • Company Profile",
    image: "/portfolio/presentation-4.jpg",
  },
  {
    id: "presentation-5",
    title: "Marketing Presentation",
    category: "Presentation",
    description: "Marketing-focused deck combining campaign ideas, visuals and strategy.",
    details: "Presentation • Marketing",
    image: "/portfolio/presentation-5.jpg",
  },
  {
    id: "presentation-6",
    title: "Project Report Deck",
    category: "Presentation",
    description: "Clean report presentation designed to organize project information effectively.",
    details: "Presentation • Project Report",
    image: "/portfolio/presentation-6.jpg",
  },
  {
    id: "presentation-7",
    title: "Educational Presentation",
    category: "Presentation",
    description: "Easy-to-follow educational slide design with strong visual organization.",
    details: "Presentation • Education",
    image: "/portfolio/presentation-7.jpg",
  },
  {
    id: "presentation-8",
    title: "Portfolio Presentation",
    category: "Presentation",
    description: "Creative portfolio deck designed to showcase work in a polished format.",
    details: "Presentation • Portfolio",
    image: "/portfolio/presentation-8.jpg",
  },

  // ─────────────────────────────────────────────
  // DIGITAL MARKETING — 8 PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "digital-marketing-1",
    title: "Social Media Ad Campaign",
    category: "Digital Marketing",
    description:
      "High-impact digital ad creatives designed to promote products, services and offers.",
    details: "Digital Marketing • Social Media Ads",
    image: "/portfolio/digital-marketing-1.jpg",
  },
  {
    id: "digital-marketing-2",
    title: "Product Promotion Campaign",
    category: "Digital Marketing",
    description:
      "Eye-catching promotional creatives designed to increase product visibility and engagement.",
    details: "Digital Marketing • Product Promotion",
    image: "/portfolio/digital-marketing-2.jpg",
  },
  {
    id: "digital-marketing-3",
    title: "Brand Awareness Campaign",
    category: "Digital Marketing",
    description:
      "Creative campaign visuals designed to strengthen brand presence across digital platforms.",
    details: "Digital Marketing • Brand Awareness",
    image: "/portfolio/digital-marketing-3.jpg",
    span: "wide",
  },
  {
    id: "digital-marketing-4",
    title: "Performance Ad Creative",
    category: "Digital Marketing",
    description:
      "Conversion-focused advertising creatives created for digital marketing campaigns.",
    details: "Digital Marketing • Performance Ads",
    image: "/portfolio/digital-marketing-4.jpg",
  },
  {
    id: "digital-marketing-5",
    title: "Festival Marketing Campaign",
    category: "Digital Marketing",
    description:
      "Festive promotional creatives designed to capture attention and communicate special offers.",
    details: "Digital Marketing • Festival Campaign",
    image: "/portfolio/digital-marketing-5.jpg",
  },
  {
    id: "digital-marketing-6",
    title: "Lead Generation Campaign",
    category: "Digital Marketing",
    description:
      "Strategic digital creatives designed to attract potential customers and generate enquiries.",
    details: "Digital Marketing • Lead Generation",
    image: "/portfolio/digital-marketing-6.jpg",
    span: "tall",
  },
  {
    id: "digital-marketing-7",
    title: "Digital Product Campaign",
    category: "Digital Marketing",
    description:
      "Modern promotional visuals created to showcase products and drive online attention.",
    details: "Digital Marketing • Product Campaign",
    image: "/portfolio/digital-marketing-7.jpg",
  },
  {
    id: "digital-marketing-8",
    title: "Online Brand Campaign",
    category: "Digital Marketing",
    description:
      "A cohesive set of digital creatives built for consistent online brand communication.",
    details: "Digital Marketing • Online Campaign",
    image: "/portfolio/digital-marketing-8.jpg",
  },
];

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  quote: string;
  photo?: string;
};

/**
 * Placeholder testimonial slots — replace `name`, `company` and `quote`
 * with real client feedback once collected.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Client name",
    company: "Company / brand",
    quote: "Client testimonial will appear here.",
  },
  {
    id: "t2",
    name: "Client name",
    company: "Company / brand",
    quote: "Client testimonial will appear here.",
  },
  {
    id: "t3",
    name: "Client name",
    company: "Company / brand",
    quote: "Client testimonial will appear here.",
  },
];

export const faqs = [
  {
    q: "What services do you provide?",
    a: "Graphic design, logo design, branding, social media design, website design and development, video editing, posters, flyers, business cards, brochures, thumbnails, packaging and presentation design — plus custom requests.",
  },
  {
    q: "How can I start a project?",
    a: "Message us on WhatsApp or send the enquiry form on the contact page with a short brief. We'll reply with questions, scope and next steps.",
  },
  {
    q: "How long does a design project take?",
    a: "It depends on scope and the number of revisions. Smaller pieces such as posters or thumbnails move quickly; branding and websites take longer. A timeline is agreed before work starts.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Yes. Projects are scoped to the requirement, so both small one-off pieces and larger identity projects are welcome.",
  },
  {
    q: "Can I request custom design work?",
    a: "Yes. If a requirement isn't listed on the services page, describe it and we'll confirm whether we can take it on.",
  },
  {
    q: "How do I contact Jimmy's Creative Hub?",
    a: `WhatsApp or call ${site.phone}, email ${site.email}, or message us on Instagram at ${site.instagramHandle}.`,
  },
];

export const budgetRanges = [
  "Under ₹5,000",
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];
