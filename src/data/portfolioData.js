// ─────────────────────────────────────────────────────────────────────────────
// portfolioData.js
// Edit this file to update all website content without touching components.
// ─────────────────────────────────────────────────────────────────────────────

// ── Personal Info ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Afnas",
  fullName: "Afnas",
  role: "Digital Marketing Specialist",
  tagline: "I help brands build stronger digital presence, attract the right audience, and turn attention into measurable growth.",
  bio: "I'm Afnas — a digital marketing specialist based in Kerala, India. I work with businesses to design and execute strategies across SEO, paid advertising, social media, and content marketing. My focus is on delivering real, measurable results — not just impressions.",
  email: "afnas@example.com",        // ← Replace with real email
  phone: "+91 XXXXX XXXXX",          // ← Replace with real phone
  whatsapp: "919778249640",          // country code + number, no +
  location: "Kerala, India",
  availability: "Available for Freelance Projects",
  resume: "/Afnas-CV.pdf",           // ← Place your PDF at public/Afnas-CV.pdf
};

// ── Social Links ──────────────────────────────────────────────────────────────
export const socialLinks = {
  linkedin:  "https://linkedin.com/in/afnas-pk-36b070389",
  instagram: "https://instagram.com/afnxs_",
  facebook:  "https://facebook.com/afnas.afna.718",
  twitter:   "",   // ← optional
};

// ── Rotating Hero Roles ───────────────────────────────────────────────────────
export const heroRoles = [
  "Socia Media Reels",
  "Wedding video Reels",
  "Social Media Marketer",
  "Content Strategist",
  "Meta Ads",
  "Color Grading",
  "Audio Enhancement",
  "Commercial Ads",
  "Motion Graphics",
  
  
];

// ── Stats ─────────────────────────────────────────────────────────────────────
// REPLACE with real numbers when ready
export const stats = [
  { value: "2+",  label: "Years Experience",  suffix: "" },
  { value: "25+", label: "Projects Completed", suffix: "" },
  { value: "15+", label: "Happy Clients",      suffix: "" },
  { value: "10+", label: "Certifications",     suffix: "" },
];

// ── Services ──────────────────────────────────────────────────────────────────
export const services = [
  {
    id: 1,
    icon: "Search",
    title: "Search Engine Optimization",
    description: "Technical SEO, on-page optimization, and link-building strategies that move your website up search rankings and drive consistent organic traffic.",
    tags: ["Technical SEO", "On-Page", "Link Building"],
  },
  {
    id: 2,
    icon: "Share2",
    title: "Social Media Marketing",
    description: "Platform-specific content strategies and community management that build brand awareness and drive engagement across Instagram, Facebook, LinkedIn and more.",
    tags: ["Content Strategy", "Community", "Growth"],
  },
  {
    id: 3,
    icon: "TrendingUp",
    title: "Google Ads / PPC",
    description: "Data-driven paid search campaigns on Google and Bing. Precise audience targeting, bid optimization, and continuous A/B testing to maximize ROI.",
    tags: ["Search Ads", "Display", "Shopping"],
  },
  {
    id: 4,
    icon: "Target",
    title: "Meta Ads",
    description: "High-converting Facebook and Instagram ad campaigns. From audience research and creative strategy to pixel tracking and retargeting funnels.",
    tags: ["Facebook", "Instagram", "Retargeting"],
  },
  {
    id: 5,
    icon: "FileText",
    title: "Content Marketing",
    description: "Strategic content creation — blog posts, landing pages, email sequences — crafted to attract, educate and convert your target audience.",
    tags: ["Copywriting", "Blog", "Email"],
  },
  {
    id: 6,
    icon: "BarChart2",
    title: "Marketing Analytics",
    description: "Setting up tracking, building dashboards, and extracting insights from GA4, Search Console, and ad platforms to guide smarter decisions.",
    tags: ["GA4", "Reporting", "Data Insights"],
  },
  {
    id: 7,
    icon: "Mail",
    title: "Email Marketing",
    description: "Automated drip campaigns, newsletters and re-engagement sequences designed to nurture leads and increase customer lifetime value.",
    tags: ["Automation", "Newsletters", "Sequences"],
  },
  {
    id: 8,
    icon: "Layers",
    title: "Brand Strategy",
    description: "Defining your brand voice, positioning and visual identity to create a consistent, memorable presence across every digital channel.",
    tags: ["Positioning", "Voice", "Identity"],
  },
];

// ── Skills / Tools ────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "SEO",
    skills: ["On-Page SEO", "Technical SEO", "Keyword Research", "Link Building", "Local SEO", "Schema Markup"],
  },
  {
    category: "Paid Advertising",
    skills: ["Google Ads", "Meta Ads", "Display Campaigns", "Retargeting", "Shopping Ads", "YouTube Ads"],
  },
  {
    category: "Social Media",
    skills: ["Instagram Marketing", "Facebook Marketing", "LinkedIn Marketing", "Content Calendar", "Community Management"],
  },
  {
    category: "Content & Copy",
    skills: ["SEO Copywriting", "Blog Writing", "Email Sequences", "Landing Pages", "Ad Copywriting"],
  },
  {
    category: "Analytics",
    skills: ["Google Analytics 4", "Search Console", "Meta Pixel", "Conversion Tracking", "A/B Testing", "Reporting"],
  },
  {
    category: "Tools",
    skills: ["SEMrush", "Ahrefs", "Canva", "Google Ads Manager", "Meta Business Suite", "Mailchimp", "WordPress", "HubSpot"],
  },
];

// ── Experience ────────────────────────────────────────────────────────────────
// REPLACE with real companies and responsibilities
export const experience = [
  {
    id: 1,
    role: "Digital Marketing Executive",
    company: "Company Name",           // ← Replace
    location: "Kerala, India",
    period: "2025 — Present",
    type: "Full-time",
    responsibilities: [
      "Led end-to-end SEO and PPC campaigns, achieving measurable organic growth.",
      "Managed Meta and Google Ads budgets, optimizing for cost-per-lead and ROAS.",
      "Created content strategies and managed brand social media presence.",
    ],
  },
  {
    id: 2,
    role: "Digital Marketing Intern",
    company: "Company Name",           // ← Replace
    location: "Kerala, India",
    period: "2024 — 2025",
    type: "Internship",
    responsibilities: [
      "Assisted in keyword research, content writing, and on-page SEO optimization.",
      "Supported paid ad campaign setup and performance monitoring.",
      "Prepared weekly analytics reports using Google Analytics and Search Console.",
    ],
  },
];

// ── Certifications ────────────────────────────────────────────────────────────
// REPLACE with real certifications and credential URLs
export const certifications = [
  {
    id: 1,
    title: "Google Ads Certification",
    issuer: "Google",
    year: "2024",
    credentialUrl: "#",              // ← Replace with real URL
    image: null,                     // ← Place at public/images/certificates/google-ads.jpg
    color: "#4285F4",
  },
  {
    id: 2,
    title: "Google Analytics (GA4)",
    issuer: "Google",
    year: "2024",
    credentialUrl: "#",
    image: null,
    color: "#FF8C00",
  },
  {
    id: 3,
    title: "Digital Marketing",
    issuer: "HubSpot Academy",
    year: "2024",
    credentialUrl: "#",
    image: null,
    color: "#FF7A59",
  },
  {
    id: 4,
    title: "Meta Digital Marketing",
    issuer: "Meta Blueprint",
    year: "2024",
    credentialUrl: "#",
    image: null,
    color: "#1877F2",
  },
  {
    id: 5,
    title: "SEO Fundamentals",
    issuer: "SEMrush Academy",
    year: "2024",
    credentialUrl: "#",
    image: null,
    color: "#FF642B",
  },
  {
    id: 6,
    title: "Content Marketing",
    issuer: "HubSpot Academy",
    year: "2023",
    credentialUrl: "#",
    image: null,
    color: "#00BFA5",
  },
];

// ── Portfolio Projects ────────────────────────────────────────────────────────
// REPLACE with real projects. Metrics marked [SAMPLE] are placeholders.
export const projects = [
  {
    id: 1,
    category: "SEO",
    title: "Organic Growth Campaign",
    description: "Comprehensive SEO overhaul for an e-commerce brand, targeting high-intent keywords and fixing technical issues.",
    image: null,                     // ← Place at public/images/projects/project-1.jpg
    services: ["Technical SEO", "Keyword Research", "Link Building", "Content"],
    metric: "+160% Organic Traffic",  // [SAMPLE]
    metricNote: "in 6 months",
    featured: true,
    caseStudy: {
      challenge: "The client had strong products but near-zero organic visibility, relying entirely on paid traffic with rising CPCs.",
      strategy: "Conducted a full technical audit, rebuilt site architecture, and created a targeted keyword cluster strategy around buyer-intent terms.",
      execution: "Fixed 200+ technical errors, published 30 optimized pages, and built 40 quality backlinks over 6 months.",
      tools: ["SEMrush", "Google Search Console", "Ahrefs", "WordPress"],
      results: [
        { metric: "+160%", label: "Organic Traffic" },   // [SAMPLE]
        { metric: "#1–3", label: "Rankings for 15 Keywords" }, // [SAMPLE]
        { metric: "-40%", label: "Paid Ad Spend" },       // [SAMPLE]
      ],
    },
  },
  {
    id: 2,
    category: "Google Ads",
    title: "Lead Generation Campaign",
    description: "Google Search campaign for a B2B services firm, focused on driving qualified leads at the lowest possible cost.",
    image: null,
    services: ["Google Ads", "Landing Page", "Conversion Tracking"],
    metric: "-35% Cost Per Lead",     // [SAMPLE]
    metricNote: "vs. previous agency",
    featured: true,
    caseStudy: {
      challenge: "High cost-per-lead from previous campaigns with poor targeting and no conversion tracking in place.",
      strategy: "Restructured campaign architecture, set up proper conversion tracking, and created dedicated landing pages per ad group.",
      execution: "Launched tightly themed ad groups with single keyword ad groups (SKAGs), A/B tested 3 landing page variants, and optimized bids weekly.",
      tools: ["Google Ads", "GA4", "Google Tag Manager", "Unbounce"],
      results: [
        { metric: "-35%", label: "Cost Per Lead" },       // [SAMPLE]
        { metric: "+80%", label: "Conversion Rate" },     // [SAMPLE]
        { metric: "4.2x", label: "Return on Ad Spend" },  // [SAMPLE]
      ],
    },
  },
  {
    id: 3,
    category: "Meta Ads",
    title: "Brand Awareness Campaign",
    description: "Facebook and Instagram awareness campaign for a local business, scaling reach while maintaining ad relevance.",
    image: null,
    services: ["Meta Ads", "Creative Strategy", "Audience Research"],
    metric: "2.8x ROAS",              // [SAMPLE]
    metricNote: "across 90-day period",
    featured: true,
    caseStudy: {
      challenge: "A local brand needed to scale beyond its existing customer base and build brand awareness in new geographic markets.",
      strategy: "Built a full-funnel Meta Ads strategy — awareness at the top, retargeting in the middle, conversion campaigns at the bottom.",
      execution: "Created 3 creative variants per audience, tested Lookalike audiences against interest stacks, and refined based on weekly ROAS data.",
      tools: ["Meta Ads Manager", "Canva", "Meta Pixel", "GA4"],
      results: [
        { metric: "2.8x", label: "ROAS" },                // [SAMPLE]
        { metric: "+120%", label: "Brand Reach" },        // [SAMPLE]
        { metric: "+65%", label: "New Customer Rate" },   // [SAMPLE]
      ],
    },
  },
  {
    id: 4,
    category: "Social Media",
    title: "Social Media Growth Strategy",
    description: "Content strategy and management for an Instagram brand account, growing engagement and follower quality.",
    image: null,
    services: ["Content Strategy", "Instagram", "Community Management"],
    metric: "+80% Engagement",        // [SAMPLE]
    metricNote: "over 3 months",
    featured: false,
    caseStudy: {
      challenge: "Stagnant Instagram growth with low engagement rate and inconsistent posting. Brand had no clear content direction.",
      strategy: "Defined brand voice, created a content pillar framework, and built a 30-day content calendar aligned with audience interests.",
      execution: "Produced 90 pieces of content over 3 months, implemented Reels strategy, and actively engaged with community and target accounts.",
      tools: ["Canva", "Meta Business Suite", "Later", "GA4"],
      results: [
        { metric: "+80%", label: "Engagement Rate" },     // [SAMPLE]
        { metric: "+2.4K", label: "New Followers" },      // [SAMPLE]
        { metric: "+3x", label: "Profile Visits" },       // [SAMPLE]
      ],
    },
  },
  {
    id: 5,
    category: "Content",
    title: "Content Marketing Strategy",
    description: "Full content marketing program for a SaaS company — blog, email sequences, and lead magnets aligned to the funnel.",
    image: null,
    services: ["Content Strategy", "SEO Copywriting", "Email Marketing"],
    metric: "+95% Blog Traffic",      // [SAMPLE]
    metricNote: "in 4 months",
    featured: false,
    caseStudy: {
      challenge: "The company had a blog but no strategy — random topics, no keyword targeting, and zero email nurturing for leads.",
      strategy: "Created a topic cluster strategy mapped to the buyer journey, with lead magnets at key funnel stages.",
      execution: "Published 24 optimized blog posts, set up a 7-email welcome sequence, and created 2 gated lead magnets.",
      tools: ["SEMrush", "WordPress", "Mailchimp", "GA4"],
      results: [
        { metric: "+95%", label: "Blog Traffic" },        // [SAMPLE]
        { metric: "340+", label: "Email Subscribers" },   // [SAMPLE]
        { metric: "+55%", label: "Lead Magnet Downloads" }, // [SAMPLE]
      ],
    },
  },
  {
    id: 6,
    category: "SEO",
    title: "Local SEO Campaign",
    description: "Google Business Profile optimization and local SEO for a multi-location service business.",
    image: null,
    services: ["Local SEO", "Google Business Profile", "Citation Building"],
    metric: "+200% Map Views",        // [SAMPLE]
    metricNote: "over 2 months",
    featured: false,
    caseStudy: {
      challenge: "Service business was invisible in local map pack results, losing customers to competitors ranking in the top 3.",
      strategy: "Optimized Google Business Profiles, built consistent citations, and created locally-targeted landing pages.",
      execution: "Audited and fixed GBP issues for all locations, built 80+ citations, and published 10 location-specific pages.",
      tools: ["Google Business Profile", "BrightLocal", "Ahrefs", "WordPress"],
      results: [
        { metric: "+200%", label: "Google Map Views" },   // [SAMPLE]
        { metric: "Top 3", label: "Local Pack Ranking" }, // [SAMPLE]
        { metric: "+70%", label: "Direction Requests" },  // [SAMPLE]
      ],
    },
  },
];

// ── Testimonials ──────────────────────────────────────────────────────────────
// REPLACE with real testimonials when available
export const testimonials = [
  {
    id: 1,
    name: "Client Name",             // ← Replace
    role: "CEO, Company Name",       // ← Replace
    avatar: null,
    quote: "Replace this with a real testimonial from your client. Describe the results you achieved and how it impacted their business.",
  },
  {
    id: 2,
    name: "Client Name",             // ← Replace
    role: "Marketing Manager, Company Name",
    avatar: null,
    quote: "Replace this with a real testimonial from your client. Describe the results you achieved and how it impacted their business.",
  },
  {
    id: 3,
    name: "Client Name",             // ← Replace
    role: "Founder, Company Name",
    avatar: null,
    quote: "Replace this with a real testimonial from your client. Describe the results you achieved and how it impacted their business.",
  },
];

// ── Process Steps ─────────────────────────────────────────────────────────────
export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Deep-dive into your brand, audience, competitors and goals. Every strategy starts with understanding the full picture.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Build a custom marketing plan with clear objectives, channels, KPIs and a realistic timeline for results.",
    icon: "Map",
  },
  {
    number: "03",
    title: "Execute",
    description: "Launch campaigns, publish content and activate ads — with precision targeting and creative built to perform.",
    icon: "Zap",
  },
  {
    number: "04",
    title: "Analyze & Scale",
    description: "Track every metric that matters, report transparently, and continuously optimize to scale what's working.",
    icon: "BarChart2",
  },
];

// ── Why Work With Me ──────────────────────────────────────────────────────────
export const whyMe = [
  {
    icon: "LineChart",
    title: "Data-Driven Decisions",
    description: "Every recommendation is backed by real data — not guesswork. Tracking and analytics are built into every campaign.",
  },
  {
    icon: "Lightbulb",
    title: "Creative Strategy",
    description: "Marketing that stands out needs both analytical thinking and creative ideas. I bring both to every project.",
  },
  {
    icon: "Users",
    title: "Audience-First Approach",
    description: "Campaigns are built around your audience's behavior, not assumptions. The right message to the right person at the right time.",
  },
  {
    icon: "RefreshCw",
    title: "Continuous Optimization",
    description: "I don't set and forget. Campaigns are monitored, tested and refined regularly to keep improving performance.",
  },
];

// ═══════════════════════════════════════════════════════════════════════
// VIDEO & PHOTOGRAPHY SECTION DATA
// ═══════════════════════════════════════════════════════════════════════

// ── Creative Services ─────────────────────────────────────────────────
export const creativeServices = [
  {
    id: 1,
    icon: 'Film',
    title: 'Wedding Cinematography',
    description: 'Cinematic Kerala wedding films — from the muhurtham to the reception. Every frame crafted to feel timeless.',
    tags: ['Kerala Style', 'Cinematic', '4K'],
    accent: '#d4a843',
  },
  {
    id: 2,
    icon: 'Camera',
    title: 'Wedding Photography',
    description: 'Candid and portrait photography that captures real emotions — the laughter, tears, and in-between moments.',
    tags: ['Candid', 'Portrait', 'RAW'],
    accent: '#c8a96e',
  },
  {
    id: 3,
    icon: 'Scissors',
    title: 'Video Editing',
    description: 'Post-production editing with colour grading, sound design and motion graphics for weddings, reels and brand films.',
    tags: ['Color Grading', 'Sound Design', 'Reels'],
    accent: '#e8c57a',
  },
  {
    id: 4,
    icon: 'ImagePlay',
    title: 'Photo Editing & Retouching',
    description: 'Professional skin retouching, colour correction and album design — delivering photos that look as good as they felt.',
    tags: ['Retouching', 'Color Correction', 'Albums'],
    accent: '#d4a843',
  },
  {
    id: 5,
    icon: 'Clapperboard',
    title: 'Highlight Reels',
    description: 'Short-form wedding highlight films for social media — crafted to go viral while honouring every cherished moment.',
    tags: ['Short Film', 'Social Media', 'Reels'],
    accent: '#c8a96e',
  },
  {
    id: 6,
    icon: 'Sparkles',
    title: 'Pre / Post Wedding',
    description: 'Pre-wedding shoots, engagement sessions, and after-wedding portraits at Kerala\'s most scenic locations.',
    tags: ['Pre-Wedding', 'Engagement', 'Outdoor'],
    accent: '#e8c57a',
  },
];

// ── Creative Works / Portfolio ────────────────────────────────────────
// Replace image paths with real work under public/images/creative/
export const creativeWorks = [
  {
    id: 1,
    category: 'Wedding Film',
    title: 'A Kerala Muhurtham',
    location: 'Thrissur, Kerala',
    description: 'A cinematic short film documenting a traditional Kerala Hindu wedding from sunrise ceremonies to the evening reception.',
    type: 'video',
    thumbnail: '/images/creative/work-1.jpg',   // ← replace with real image
    duration: '4:32',
    tags: ['Hindu Wedding', 'Cinematic', 'Thrissur'],
    featured: true,
  },
  {
    id: 2,
    category: 'Photography',
    title: 'Golden Light Portraits',
    location: 'Munnar, Kerala',
    description: 'Pre-wedding portrait session shot in the golden hour across Munnar\'s tea estates.',
    type: 'photo',
    thumbnail: '/images/creative/work-2.jpg',
    tags: ['Pre-Wedding', 'Golden Hour', 'Munnar'],
    featured: true,
  },
  {
    id: 3,
    category: 'Highlight Reel',
    title: 'Muslim Wedding Highlights',
    location: 'Kozhikode, Kerala',
    description: '60-second social media highlight reel of a Malabar-style Nikah ceremony — crafted for Instagram and YouTube Shorts.',
    type: 'video',
    thumbnail: '/images/creative/work-3.jpg',
    duration: '1:02',
    tags: ['Nikah', 'Muslim Wedding', 'Reels'],
    featured: true,
  },
  {
    id: 4,
    category: 'Photography',
    title: 'Candid Moments',
    location: 'Kochi, Kerala',
    description: 'A collection of candid wedding photographs capturing unscripted emotions throughout the day.',
    type: 'photo',
    thumbnail: '/images/creative/work-4.jpg',
    tags: ['Candid', 'Emotions', 'Kochi'],
    featured: false,
  },
  {
    id: 5,
    category: 'Wedding Film',
    title: 'Christian Wedding Film',
    location: 'Kottayam, Kerala',
    description: 'Full-length cinematic film of a traditional Syrian Christian wedding at a historic Kottayam church.',
    type: 'video',
    thumbnail: '/images/creative/work-5.jpg',
    duration: '8:15',
    tags: ['Christian Wedding', 'Church', 'Kottayam'],
    featured: false,
  },
  {
    id: 6,
    category: 'Video Editing',
    title: 'Brand Film Edit',
    location: 'Remote',
    description: 'Post-production edit for a Kerala boutique brand — colour graded to a warm film look with custom motion titles.',
    type: 'video',
    thumbnail: '/images/creative/work-6.jpg',
    duration: '2:48',
    tags: ['Brand Film', 'Color Grade', 'Motion'],
    featured: false,
  },
];

// ── Creative Tools ────────────────────────────────────────────────────
export const creativeTools = [
  'Adobe Premiere Pro', 'After Effects', 'Lightroom', 'Photoshop',
  'DaVinci Resolve', 'Final Cut Pro', 'Capcut', 'Canva',
];

// ── Creative Stats ────────────────────────────────────────────────────
export const creativeStats = [
  { value: '50+',  label: 'Weddings Covered' },
  { value: '200+', label: 'Videos Edited' },
  { value: '1K+',  label: 'Photos Delivered' },
  { value: '4K',   label: 'Resolution' },
];

// ── Creative Process ──────────────────────────────────────────────────
export const creativeProcess = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We discuss your vision, wedding style, preferred locations and deliverables in detail.',
  },
  {
    number: '02',
    title: 'Shoot Day',
    description: 'Professional equipment, cinematic angles — we blend in with guests to capture every natural moment.',
  },
  {
    number: '03',
    title: 'Edit & Grade',
    description: 'Careful colour grading, sound design and storytelling edits that match your wedding\'s mood.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Full-resolution files, highlight reels and albums delivered digitally within the agreed timeline.',
  },
];
