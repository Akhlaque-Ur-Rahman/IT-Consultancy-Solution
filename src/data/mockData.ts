// Mock data for IT Consulting Website

export const services = [
  {
    id: 'web-app-dev',
    slug: 'web-app-development',
    type: 'engineering',
    icon: 'Code',
    title: 'Web & App Development',
    description: 'Custom web and mobile applications built with cutting-edge technologies.',
    category: 'development',
    features: ['React & Node.js', 'iOS & Android', 'Progressive Web Apps', 'API Development'],
    outcomeHeadline: 'Scalable Digital Solutions Built for the Modern Enterprise',
    keyBenefits: ['Enterprise-grade Security', 'Cloud-native Architecture', 'High Performance'],
    deliverables: [
      { title: 'Custom Web Apps', desc: 'React & Next.js powerhouses', icon: 'Globe' },
      { title: 'Mobile Solutions', desc: 'Native-feel cross-platform apps', icon: 'Smartphone' },
      { title: 'Back-end APIs', desc: 'Robust Node.js & Go services', icon: 'Server' }
    ],
    processSteps: [
      { title: 'Discovery', desc: 'Defining requirements and tech stack' },
      { title: 'Architecture', desc: 'Designing for scale and performance' },
      { title: 'Development', desc: 'Agile sprints with daily updates' },
      { title: 'QA & Launch', desc: 'Rigorous testing and deployment' }
    ],
    faqs: [
      { q: 'Which tech stack do you use?', a: 'We primarily use React, Next.js, Node.js, and PostgreSQL.' },
      { q: 'Do you provide maintenance?', a: 'Yes, we offer ongoing SLA-based support.' }
    ],
    typeSpecificData: {
      performance: '99.9% Uptime SLA',
      security: 'ISO 27001 Compliant',
      stack: ['Next.js', 'Supabase', 'Docker', 'AWS']
    },
    results: [
      {
        label: "Market Reach",
        value: "2.5x",
        suffix: "Growth in Traffic",
        desc: "Scaled their core platform to handle regional spikes during expansion phases."
      },
      {
        label: "Build Speed",
        value: "-45%",
        suffix: "Time-to-Market",
        desc: "Reduced deployment cycles through optimized CI/CD and atomic design."
      }
    ],
    testimonial: {
      quote: "EDUNEX didn't just write code; they transformed how we think about our digital product. The scalability we have now is exactly what we needed for our 2026 expansion.",
      author: "Founder, Patna TechHub"
    },
    resultsTitle: "Engineering Impact We've Delivered",
    ctaBadge: "Build Your Next Product",
    ctaTitle: "Ready to Ship Your Vision?",
    ctaDescription: "Let's connect to discuss your technical roadmap and how our engineering squad can accelerate your launch."
  },
  {
    id: 'crm-erp',
    slug: 'crm-erp-solutions',
    type: 'engineering',
    icon: 'Database',
    title: 'CRM/ERP/Billing Solutions',
    description: 'Enterprise-grade business management systems tailored to your workflow.',
    category: 'solutions',
    features: ['Custom CRM', 'ERP Systems', 'Billing Automation', 'Office Management'],
    outcomeHeadline: 'Unified Business Operations with Tailored ERP Systems',
    keyBenefits: ['Centralized Data', 'Automated Workflows', 'Business Intelligence'],
    deliverables: [
      { title: 'Custom CRM', desc: 'Sales pipeline management', icon: 'Users' },
      { title: 'ERP Suites', desc: 'Integrated resource planning', icon: 'Database' },
      { title: 'Billing Engines', desc: 'Automated invoicing & payments', icon: 'Receipt' }
    ],
    processSteps: [
      { title: 'Audit', desc: 'Mapping existing business workflows' },
      { title: 'Blueprint', desc: 'Defining module requirements' },
      { title: 'Build', desc: 'Iterative development & integration' },
      { title: 'Migration', desc: 'Safe data transition & training' }
    ],
    faqs: [
      { q: 'Can you migrate our old data?', a: 'Yes, we handle complex data migrations with high integrity.' }
    ],
    typeSpecificData: {
      stack: ['Java Spring', 'React', 'PostgreSQL', 'Redis'],
      performance: 'Elastic architecture supports millions of records',
      security: 'End-to-end Column-level Encryption',
      integrations: ['SAP', 'Tally', 'Quickbooks']
    },
    results: [
      {
        label: "Op Efficiency",
        value: "35%",
        suffix: "Faster Processing",
        desc: "Automated core billing cycles for a regional distributor, eliminating human error."
      },
      {
        label: "Data Accuracy",
        value: "100%",
        suffix: "Sanitized Records",
        desc: "Successfully migrated 500k+ legacy records to the new unified ERP system."
      }
    ],
    testimonial: {
      quote: "The custom ERP tailored specifically to our regional supply chain has been a game-changer. We finally have a single source of truth for our operations.",
      author: "Director, Bihar Agri-Trade"
    },
    resultsTitle: "Operational Excellence in Practice",
    ctaBadge: "Optimize Your Ops",
    ctaTitle: "Stop Fighting Your Tools.",
    ctaDescription: "Get a custom ERP assessment and see how we can unify your workflows into a single high-performance dashboard."
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-services',
    type: 'marketing',
    icon: 'TrendingUp',
    title: 'Digital & Social Media Marketing',
    description: 'Data-driven marketing strategies to amplify your brand presence.',
    category: 'marketing',
    features: ['SEO & SEM', 'Social Media Campaigns', 'Content Marketing', 'Analytics'],
    outcomeHeadline: 'Precision-Targeted Marketing for Exponential Growth',
    keyBenefits: ['Guaranteed ROI', 'Data-Driven Insights', 'Omnichannel Presence'],
    deliverables: [
      { title: 'Performance SEO', desc: 'Dominating search rankings', icon: 'Search' },
      { title: 'Paid Social', desc: 'Targeted lead generation', icon: 'Target' },
      { title: 'Brand Storytelling', desc: 'Compelling content creation', icon: 'PenTool' }
    ],
    processSteps: [
      { title: 'Analysis', desc: 'Competitor and market research' },
      { title: 'Strategy', desc: 'Defining channels and budgets' },
      { title: 'Execution', desc: 'Campaign launch and management' },
      { title: 'Optimization', desc: 'A/B testing and performance tuning' }
    ],
    faqs: [
      { q: 'How do you track ROI?', a: 'Via unified dashboards tracking every conversion point.' }
    ],
    typeSpecificData: {
      channels: ['Meta Ads', 'Google Search', 'LinkedIn'],
      reporting: 'Real-time interactive dashboards'
    },
    results: [
      {
        label: "Lead Volume",
        value: "4x",
        suffix: "Qualified Leads",
        desc: "Optimized regional search targeting to capture high-intent business queries."
      },
      {
        label: "Ad Spend",
        value: "-22%",
        suffix: "Cost per Acquisition",
        desc: "Refined audience segments to eliminate wasteful spend on low-converting demographics."
      }
    ],
    testimonial: {
      quote: "Our lead flow didn't just increase; the quality improved drastically. They understand the regional market nuances better than any national agency we've tried.",
      author: "Marketing Head, Magadh Retail"
    },
    resultsTitle: "Growth Metrics We've Achieved",
    ctaBadge: "Scale Your Revenue",
    ctaTitle: "Ready for Consistent Growth?",
    ctaDescription: "Stop guessing and start scaling with a data-driven marketing strategy tailored for the regional business landscape."
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    type: 'design',
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centric designs that drive engagement and conversion.',
    category: 'design',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    outcomeHeadline: 'High-Converting Experiences Designed for Humans',
    keyBenefits: ['Enhanced Engagement', 'Reduced Churn', 'Stronger Brand Affinity'],
    deliverables: [
      { title: 'User Research', desc: 'Data-backed design insights', icon: 'Users' },
      { title: 'Interface Design', desc: 'High-fidelity UI components', icon: 'Layout' },
      { title: 'Prototyping', desc: 'Interactive user flows', icon: 'Play' }
    ],
    processSteps: [
      { title: 'Empathize', desc: 'Understanding user needs' },
      { title: 'Ideate', desc: 'Rapid wireframing & conceptualization' },
      { title: 'Prototype', desc: 'Building high-fidelity mockups' },
      { title: 'Valdiate', desc: 'Usability testing & refinement' }
    ],
    faqs: [
      { q: 'Which tools do you use?', a: 'We primarily use Figma, Adobe CC, and Framer.' }
    ],
    typeSpecificData: {
      gallery: ['Project A', 'Project B', 'Project C'],
      philosophy: 'Minimalist & Content-First focus'
    }
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-solutions',
    type: 'engineering',
    icon: 'ShoppingCart',
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce platforms with payment integration and analytics.',
    category: 'development',
    features: ['Multi-vendor', 'Payment Gateway', 'Inventory Management', 'Analytics'],
    outcomeHeadline: 'Accelerated Online Sales with High-Performance Stores',
    keyBenefits: ['Conversion Optimization', 'Seamless Payments', 'Inventory Automation'],
    deliverables: [
      { title: 'Custom Stores', desc: 'Tailored shopping experiences', icon: 'ShoppingBag' },
      { title: 'Multi-vendor Hubs', desc: 'Marketplace platform builds', icon: 'Layout' },
      { title: 'Payment Gateways', desc: 'Secure checkout integrations', icon: 'CreditCard' }
    ],
    processSteps: [
      { title: 'Cataloging', desc: 'Defining product structures' },
      { title: 'Engine Build', desc: 'Complex cart & tax logic' },
      { title: 'Integration', desc: 'Linking ERP & Logistics' },
      { title: 'Hardening', desc: 'Security & load testing' }
    ],
    faqs: [
      { q: 'Do you support Shopify?', a: 'Yes, both custom and Shopify/WooCommerce.' }
    ],
    typeSpecificData: {
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      performance: 'Supports 10k+ concurrent checkouts',
      security: 'PCI-DSS Compliant builds'
    }
  },
  {
    id: 'lead-management',
    slug: 'lead-management-systems',
    type: 'engineering',
    icon: 'Users',
    title: 'Lead Management',
    description: 'Intelligent systems to capture, nurture, and convert leads efficiently.',
    category: 'solutions',
    features: ['Lead Tracking', 'Automation', 'CRM Integration', 'Reporting'],
    outcomeHeadline: 'Maximized Lead Conversion with Intelligent Automation',
    keyBenefits: ['0% Response Delay', 'Automated Nurturing', 'Attribution Tracking'],
    deliverables: [
      { title: 'Lead Scoring', desc: 'AI-driven priority systems', icon: 'Target' },
      { title: 'Capture Hubs', desc: 'Multi-channel entry points', icon: 'Inbound' },
      { title: 'Automation Bots', desc: 'Speed-to-lead responses', icon: 'MessageSquare' }
    ],
    processSteps: [
      { title: 'Flow Audit', desc: 'Auditing current lead leaks' },
      { title: 'Logic Build', desc: 'Setting up nurturing rules' },
      { title: 'Integration', desc: 'Syncing with CRM & Sales' },
      { title: 'Monitoring', desc: 'Weekly conversion tuning' }
    ],
    faqs: [
      { q: 'Can it integrate with WhatsApp?', a: 'Yes, full WhatsApp API integration included.' }
    ],
    typeSpecificData: {
      stack: ['Node.js', 'MongoDB', 'Redis', 'Twilio'],
      performance: 'Average < 5min speed-to-lead',
      security: 'ISO 27001 Data Handling'
    }
  },
  {
    id: 'ivr',
    slug: 'ivr-calling-solutions',
    type: 'engineering',
    icon: 'Phone',
    title: 'IVR Solutions',
    description: 'Interactive Voice Response systems for seamless customer communication.',
    category: 'solutions',
    features: ['Multi-language', 'Call Routing', 'Analytics', 'Integration'],
    outcomeHeadline: 'Professional 24/7 Voice Response systems',
    keyBenefits: ['Reduced Wait Times', 'Professional Brand Image', 'Multi-Language Support'],
    deliverables: [
      { title: 'Cloud PBX', desc: 'Enterprise-grade telephony', icon: 'Cloud' },
      { title: 'Smart Routing', desc: 'Intent-based call transfers', icon: 'CallFlow' },
      { title: 'Speech-to-Text', desc: 'Automated transcription', icon: 'Mic' }
    ],
    processSteps: [
      { title: 'Scripts', desc: 'Voice menu & text design' },
      { title: 'Cloud Setup', desc: 'SIP & Trunking configuration' },
      { title: 'Testing', desc: 'Load & stress voice testing' },
      { title: 'Live', desc: 'Controlled rollout & training' }
    ],
    faqs: [
      { q: 'Is it cloud-hosted?', a: 'Yes, 100% cloud-hosted with 99.9% availability.' }
    ],
    typeSpecificData: {
      stack: ['Python', 'Asterisk', 'WebRTC', 'AWS'],
      performance: '100+ concurrent calls',
      security: 'Automatic cloud call recording'
    }
  },
  {
    id: 'hyperlocal',
    slug: 'hyperlocal-platform-dev',
    type: 'engineering',
    icon: 'MapPin',
    title: 'Hyperlocal Platforms',
    description: 'Location-based services connecting businesses with local customers.',
    category: 'development',
    features: ['Geolocation', 'Real-time Tracking', 'Multi-vendor', 'Mobile Apps'],
    outcomeHeadline: 'Seamless Local Deliveries & Service Marketplaces',
    keyBenefits: ['GPS Accuracy', 'Vendor Management', 'Real-time Tracking'],
    deliverables: [
      { title: 'Driver Apps', desc: 'Real-time routing & tasks', icon: 'Navigation' },
      { title: 'Vendor Panels', desc: 'Local inventory management', icon: 'Store' },
      { title: 'Analytics', desc: 'Heatmaps & zone reporting', icon: 'Map' }
    ],
    processSteps: [
      { title: 'Zone Mapping', desc: 'Defining geo-fencing rules' },
      { title: 'Dev', desc: 'Real-time maps integration' },
      { title: 'Tests', desc: 'Outdoor field tracking tests' },
      { title: 'Scale', desc: 'Cluster-based deployment' }
    ],
    faqs: [
      { q: 'Can we use Google Maps?', a: 'Yes, we integrate with Google Maps or Mapbox.' }
    ],
    typeSpecificData: {
      stack: ['Flutter', 'Node.js', 'Google Maps', 'PostGIS'],
      performance: 'Real-time WS-based tracking',
      security: 'Geo-fencing & Polygon triggers'
    }
  },
  {
    id: 'seo',
    slug: 'seo-optimization-expert',
    type: 'marketing',
    icon: 'Search',
    title: 'SEO & Website Optimization',
    description: 'Rank higher on search engines with our proven SEO strategies.',
    category: 'marketing',
    features: ['On-page SEO', 'Technical SEO', 'Link Building', 'Performance'],
    outcomeHeadline: 'Sustained Organic Visibility & Traffic Authority',
    keyBenefits: ['Zero Ad Spend', 'Stable Monthly Growth', 'High-Trust Traffic'],
    deliverables: [
      { title: 'Technical SEO', desc: 'Fixing core web vitals', icon: 'Tools' },
      { title: 'Content Engine', desc: 'Keyword-targeted authority', icon: 'FileText' },
      { title: 'Backlink Ops', desc: 'High-authority PR links', icon: 'Link' }
    ],
    processSteps: [
      { title: 'Deep Audit', desc: 'Competitor gap analysis' },
      { title: 'Keyword Fix', desc: 'Mapping high-intent terms' },
      { title: 'Execution', desc: 'On-page & Off-page sprints' },
      { title: 'Review', desc: 'GSC & Rankings review' }
    ],
    faqs: [
       { q: 'When will I see results?', a: 'Typically 3-6 months for sustainable organic growth.' }
    ],
    typeSpecificData: {
      channels: ['Google Search', 'Bing', 'Local Directories'],
      reporting: 'Weekly keyword ranking & GSC audit reports',
      audit: '200+ point technical checklist'
    }
  },
  {
    id: 'animation',
    slug: 'animation-graphics-design',
    type: 'design',
    icon: 'Sparkles',
    title: 'Animation & Graphics',
    description: 'Stunning visual content that captures attention and tells your story.',
    category: 'design',
    features: ['Motion Graphics', '2D/3D Animation', 'Explainer Videos', 'Brand Assets'],
    outcomeHeadline: 'Cinematic Storytelling for Your Digital Brand',
    keyBenefits: ['Max Engagement', 'Complex Ideas Simplified', 'Premium Brand Perception'],
    deliverables: [
      { title: 'Explainer Videos', desc: '2D & 3D product stories', icon: 'Video' },
      { title: 'Motion Brand', desc: 'Animated identity assets', icon: 'Layers' },
      { title: 'Social Content', desc: 'Eye-catching social ads', icon: 'Instagram' }
    ],
    processSteps: [
      { title: 'Scripting', desc: 'Message & Narrative build' },
      { title: 'Storyboard', desc: 'Visual flow visualization' },
      { title: 'Animation', desc: 'The creative heavy lifting' },
      { title: 'VFX & Audio', desc: 'Polishing with final assets' }
    ],
    faqs: [
      { q: 'Do you provide VO?', a: 'Yes, we provide professional voiceover services.' }
    ],
    typeSpecificData: {
      gallery: ['Motion Reel 2025', 'Product Explainer A', 'Brand Animation B'],
      philosophy: 'Kinetic Storytelling focus',
      renders: '4K High-detail rendering'
    }
  },
  {
    id: 'compliance',
    slug: 'business-registration-compliance',
    type: 'compliance',
    icon: 'FileText',
    title: 'Business Registration & Compliance',
    description: 'Complete legal and compliance services for your business operations.',
    category: 'compliance',
    features: ['Company Registration', 'GST & Tax', 'Trademark', 'Legal Contracts'],
    outcomeHeadline: 'Hassle-Free Legal & Regulatory Foundation for Your SME',
    keyBenefits: ['100% Legal Safety', 'Zero Late Penalties', 'Expert Consulting'],
    deliverables: [
      { title: 'Incorporation', desc: 'LLP/Pvt Ltd/Firm registry', icon: 'Briefcase' },
      { title: 'Tax Compliance', desc: 'GST/TDS monthly filings', icon: 'FileText' },
      { title: 'IP Protection', desc: 'Trademarks & Copyrights', icon: 'Shield' }
    ],
    processSteps: [
      { title: 'Checklist', desc: 'Required document gathering' },
      { title: 'Filing', desc: 'Government portal submission' },
      { title: 'Support', desc: 'Handling queries & scrutiny' },
      { title: 'Handover', desc: 'Certificates & compliance kits' }
    ],
    faqs: [
      { q: 'How long does it take?', a: 'Typically 7-21 days depending on entity type.' }
    ],
    typeSpecificData: {
      renewal: 'Automatic compliance reminders',
      consultancy: 'Monthly regulatory updates'
    }
  },
];

export const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform Optimization',
    client: 'Patna Retail Mart',
    industry: 'Retail',
    image: 'automated-warehouse-robotics-dark',
    challenge: 'Legacy system struggled with performance during peak shopping hours',
    solution: 'Implemented a responsive frontend and optimized database queries for faster catalog browsing',
    impact: {
      revenue: '+22%',
      uptime: 'Reliable Infrastructure',
      loadTime: '-35%',
      conversion: '+18%',
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Cloud Hosting'],
    timeline: '3 months',
    testimonial: 'The team delivered a structured e-commerce solution that improved our online sales and load speeds significantly.',
    testimonialAuthor: 'Sanjeev Singh',
    testimonialRole: 'Operations Manager, Patna Retail Mart',
  },
  {
    id: 2,
    title: 'Healthcare CRM Implementation',
    client: 'Bihar MediCare Center',
    industry: 'Healthcare',
    image: 'modern-hospital-laboratory-dark',
    challenge: 'Manual patient records leading to tracking inefficiencies',
    solution: 'Custom CRM with digital record management and automated appointment scheduling',
    impact: {
      efficiency: '+28%',
      patientSatisfaction: '+24%',
      paperwork: '-32%',
      appointments: '+19%',
    },
    techStack: ['React', 'PostgreSQL', 'Docker'],
    timeline: '5 months',
    testimonial: 'The CRM solution is aligned with our operational needs. Communication was clear and timelines were respected.',
    testimonialAuthor: 'Dr. Ramesh Kumar',
    testimonialRole: 'Director, Bihar MediCare Center',
  },
  {
    id: 3,
    title: 'Logistics Tracking System',
    client: 'Ganga Logistics Services',
    industry: 'Logistics',
    image: 'logistics-delivery-truck-night',
    challenge: 'Inconsistent delivery tracking for regional distribution',
    solution: 'Integrated real-time tracking system with route monitoring capabilities',
    impact: {
      deliveryTime: '-17%',
      operationalCost: '-14%',
      customerRating: '4.6/5',
      efficiency: '+21%',
    },
    techStack: ['React Native', 'Node.js', 'Google Maps API'],
    timeline: '4 months',
    testimonial: 'A practical solution that helped us optimize our regional delivery routes and reduce delays.',
    testimonialAuthor: 'Alok Verma',
    testimonialRole: 'Manager, Ganga Logistics Services',
  },
];

export const metrics = [
  { label: 'Clients Served', value: 48, suffix: '+' },
  { label: 'Projects Delivered', value: 112, suffix: '+' },
  { label: 'Reliable Infrastructure', value: 99.9, suffix: '%' },
  { label: 'Average Growth ROI', value: 18.5, suffix: '%' },
];

export const testimonials = [
  {
    id: 1,
    quote: 'The team delivered a structured CRM solution aligned with our operational needs. Communication was clear and timelines were respected.',
    author: 'Vikram Singh',
    role: 'Director',
    company: 'Vaishali Agro Traders',
    image: 'indian-businessman-executive-portrait',
  },
  {
    id: 2,
    quote: 'Our digital presence is now much more professional. The e-commerce platform they built for our local chain is stable and easy to manage.',
    author: 'Anjali Mehta',
    role: 'Operations Head',
    company: 'Patna Retail Mart',
    image: 'indian-business-woman-professional',
  },
  {
    id: 3,
    quote: 'From business registration to the final website, the process was handled efficiently. A reliable partner for regional businesses.',
    author: 'Rohit Kapoor',
    role: 'Founder',
    company: 'Urban Realty Patna',
    image: 'young-entrepreneur-startup-office',
  },
];

export const clientLogos = [
  // Patna Retail Mart - Retail
  `<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#f59e0b" fill-opacity="0.1"/>
    <path d="M8 12H12L14 24H24L26 12H30" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="16" cy="28" r="2" fill="#f59e0b"/>
    <circle cx="24" cy="28" r="2" fill="#f59e0b"/>
    <text x="40" y="24" fill="white" font-family="Arial" font-size="14" font-weight="bold">PATNA RETAIL</text>
  </svg>`,
  // Bihar MediCare Center - Healthcare
  `<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="16" fill="#10b981" fill-opacity="0.1"/>
    <path d="M16 8V24M8 16H24" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <text x="40" y="24" fill="white" font-family="Arial" font-size="14" font-weight="bold">BIHAR MEDICARE</text>
  </svg>`,
  // Ganga Logistics Services - Logistics
  `<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#3b82f6" fill-opacity="0.1"/>
    <path d="M6 16H20M20 16L14 10M20 16L14 22M24 16H26" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="40" y="24" fill="white" font-family="Arial" font-size="14" font-weight="bold">GANGA LOGISTICS</text>
  </svg>`,
  // Magadh Manufacturing Works - Manufacturing
  `<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#64748b" fill-opacity="0.1"/>
    <path d="M16 8L19 11L22 8L25 11L22 14L25 17L22 20L19 17L16 20L13 17L10 14L13 11L10 8L13 5L16 8Z" fill="#64748b"/>
    <circle cx="16" cy="14" r="3" fill="black"/>
    <text x="40" y="24" fill="white" font-family="Arial" font-size="14" font-weight="bold">MAGADH MFG</text>
  </svg>`,
  // Vaishali Agro Traders - Agriculture
  `<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#84cc16" fill-opacity="0.1"/>
    <path d="M16 6C16 6 10 12 10 18C10 24 16 26 16 26C16 26 22 24 22 18C22 12 16 6 16 6Z" fill="#84cc16"/>
    <path d="M16 10V22" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <text x="40" y="24" fill="white" font-family="Arial" font-size="14" font-weight="bold">VAISHALI AGRO</text>
  </svg>`,
  // Urban Realty Patna - Real Estate
  `<svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#ec4899" fill-opacity="0.1"/>
    <path d="M8 24V14L16 8L24 14V24H8Z" stroke="#ec4899" stroke-width="2" stroke-linejoin="round"/>
    <rect x="14" y="18" width="4" height="6" fill="#ec4899"/>
    <text x="40" y="24" fill="white" font-family="Arial" font-size="14" font-weight="bold">URBAN REALTY</text>
  </svg>`,
];

export const complianceServices = [
  {
    id: 'firm-registration',
    title: 'Firm/Proprietor Registration',
    description: 'Complete business entity registration services',
    steps: ['Document Preparation', 'Government Filing', 'Certificate Issuance', 'Bank Account Setup'],
    timeline: '7-10 days',
    price: 'Starting ₹5,999',
  },
  {
    id: 'gst-compliance',
    title: 'GST & Tax Compliance',
    description: 'End-to-end GST registration and filing services',
    steps: ['GST Registration', 'Monthly Returns', 'Annual Filing', 'Tax Planning'],
    timeline: '3-5 days',
    price: 'Starting ₹2,999/month',
  },
  {
    id: 'trademark',
    title: 'Trademark Registration',
    description: 'Protect your brand with trademark registration',
    steps: ['Search & Analysis', 'Application Filing', 'Examination Support', 'Registration'],
    timeline: '8-12 months',
    price: 'Starting ₹8,999',
  },
  {
    id: 'contracts',
    title: 'Legal Contracts & Agreements',
    description: 'MOU, MOA, AOA, and custom contract drafting',
    steps: ['Requirement Analysis', 'Drafting', 'Legal Review', 'Execution Support'],
    timeline: '3-7 days',
    price: 'Starting ₹4,999',
  },
  {
    id: 'itr',
    title: 'Income Tax Returns (ITR)',
    description: 'Professional ITR filing services',
    steps: ['Document Collection', 'Return Preparation', 'Filing', 'Acknowledgment'],
    timeline: '2-3 days',
    price: 'Starting ₹999',
  },
];

export const pricingPlans = [
  {
    id: 'startup',
    name: 'Startup',
    price: '₹49,999',
    duration: 'one-time',
    description: 'Perfect for early-stage startups',
    features: [
      'Basic Website (5 pages)',
      'Mobile Responsive',
      'SEO Setup',
      'Business Registration',
      '3 months support',
      'Basic Analytics',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹1,49,999',
    duration: 'one-time',
    description: 'For growing businesses',
    features: [
      'Custom Web Application',
      'CRM/ERP Integration',
      'Mobile App (iOS/Android)',
      'Digital Marketing Setup',
      '6 months support',
      'Advanced Analytics',
      'Priority Support',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    duration: 'Contact us',
    description: 'For large organizations',
    features: [
      'Full-scale Digital Transformation',
      'Custom CRM/ERP/Billing',
      'Multi-platform Apps',
      'Dedicated Team',
      'Ongoing Support',
      'Compliance Management',
      'White-label Solutions',
      '24/7 Support',
    ],
    highlighted: false,
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: 'digital-transformation-trends-2026',
    title: 'Digital Transformation in 2026: Key Trends for Regional Businesses',
    category: 'Technology',
    date: 'January 5, 2026',
    readTime: '5 min read',
    excerpt: 'Explore the top technology trends shaping businesses in 2026, from AI-driven analytics to cloud-first strategies for regional enterprises.',
    image: 'technology-abstract-digital-network-dark',
    author: 'Arjun Malhotra',
    authorRole: 'CEO',
    tags: ['Digital Transformation', 'AI', 'Cloud', 'Business Strategy'],
    content: `
      <h2>The Shift Towards Digital Maturity</h2>
      <p>As we enter 2026, digital transformation is no longer a luxury but a necessity for regional businesses. Structured execution and scalable architecture are the foundations of modern enterprise growth.</p>
      <h3>1. AI-Driven Decision Making</h3>
      <p>Small and mid-sized enterprises (SMEs) are now leveraging AI to optimize supply chains and personalize customer experiences. Data accuracy is key to making informed decisions.</p>
      <h3>2. Cloud-First Infrastructure</h3>
      <p>Moving away from legacy systems to reliable cloud infrastructure ensures high availability and operational continuity.</p>
      <h3>3. Cybersecurity for Growing Firms</h3>
      <p>With increased digital presence comes the need for robust security protocols to protect sensitive business data.</p>
    `,
  },
  {
    id: 2,
    slug: 'gst-compliance-guide-sme',
    title: 'GST Compliance: A Complete Guide for Regional SMEs',
    category: 'Compliance',
    date: 'January 3, 2026',
    readTime: '8 min read',
    excerpt: 'Everything small and medium businesses need to know about GST registration, filing, and ongoing compliance management in the current regulatory landscape.',
    image: 'business-paperwork-official-documents',
    author: 'Neha Kapoor',
    authorRole: 'Head of Compliance',
    tags: ['GST', 'Compliance', 'Tax', 'SME'],
    content: `
      <h2>Navigating the GST Landscape</h2>
      <p>Compliance is the backbone of a stable business. For SMEs, staying compliant with GST regulations ensures smooth operations and builds trust with partners.</p>
      <h3>Understanding Registration Requirements</h3>
      <p>Regional businesses must identify their eligibility and maintain accurate documentation for a seamless registration process.</p>
      <h3>Monthly and Annual Filing</h3>
      <p>Timely filing of returns is crucial to avoid penalties and maintain a healthy compliance score.</p>
      <h3>Tax Planning and Ethics</h3>
      <p>Strategic tax planning within the legal framework helps in optimizing cash flows for growing enterprises.</p>
    `,
  },
  {
    id: 3,
    slug: 'scalable-ecommerce-platform-development',
    title: 'Building Scalable E-commerce Platforms for Regional Growth',
    category: 'Development',
    date: 'December 28, 2025',
    readTime: '6 min read',
    excerpt: 'Best practices for creating e-commerce platforms that scale with your business growth, focusing on performance, UX, and security.',
    image: 'ecommerce-laptop-shopping-lifestyle',
    author: 'Priya Desai',
    authorRole: 'CTO',
    tags: ['E-commerce', 'Web Development', 'React', 'Growth'],
    content: `
      <h2>The Foundation of Online Retail</h2>
      <p>A successful e-commerce platform requires more than just a storefront. It needs a scalable backend, intuitive UI, and secure payment processing.</p>
      <h3>Optimizing for Performance</h3>
      <p>Fast load times are critical for conversion. In the regional market, ensuring your site performs well even on slower connections is a competitive advantage.</p>
      <h3>Custom vs. Template Solutions</h3>
      <p>While templates offer a quick start, custom solutions provide the flexibility needed to match unique business workflows and branding.</p>
      <h3>Mobile-First Approach</h3>
      <p>With the majority of users shopping via mobile devices, responsive design and app integration are no longer optional.</p>
    `,
  },
  {
    id: 4,
    slug: 'custom-crm-benefits-growing-businesses',
    title: 'Why Growing Businesses Need a Custom CRM Solution',
    category: 'Solutions',
    date: 'February 12, 2026',
    readTime: '4 min read',
    excerpt: 'Discover how a tailored CRM can improve lead management, customer retention, and sales productivity for your enterprise.',
    image: 'business-growth-analytics-dashboard',
    author: 'Rahul Sharma',
    authorRole: 'Head of Design',
    tags: ['CRM', 'Business Growth', 'Lead Management'],
    content: `
      <h2>Tailored Relationships, Scalable Results</h2>
      <p>Generic CRM solutions often come with bloated features that SMEs don't need. A custom CRM focuses on your specific sales funnel and customer touchpoints.</p>
      <h3>Improving Lead Management</h3>
      <p>Capture and track leads from multiple sources in one unified dashboard. Never miss a follow-up again.</p>
      <h3>Enhanced Sales Productivity</h3>
      <p>Automating repetitive tasks allows your sales team to focus on building relationships and closing deals.</p>
    `,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: 'Arjun Malhotra',
    role: 'CEO & Founder',
    bio: '15+ years in enterprise software and digital transformation',
    image: 'indian-man-ceo-portrait',
  },
  {
    id: 2,
    name: 'Priya Desai',
    role: 'CTO',
    bio: 'Former Tech Lead at major tech firms, specializing in cloud architecture',
    image: 'professional-woman-office-tech',
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    role: 'Head of Design',
    bio: 'Award-winning designer with expertise in enterprise UX',
    image: 'creative-professional-portrait',
  },
  {
    id: 4,
    name: 'Neha Kapoor',
    role: 'Head of Compliance',
    bio: 'Chartered Accountant with 12+ years in business compliance',
    image: 'professional-woman-indian-office',
  },
];

export const faqs = [
  {
    question: 'What IT consulting services does EDUNEX provide?',
    answer: 'EDUNEX offers structured IT consulting services including web development, CRM/ERP implementation, digital marketing, and business compliance. We focus on delivering reliable technology solutions for businesses in Patna and the surrounding regional areas.',
  },
  {
    question: 'How long does a typical software development project take?',
    answer: 'Timeline depend on project complexity. A standard business website takes 3-4 weeks, while custom CRM/ERP systems typically require 3-6 months. We provide clear milestones and regular updates during the execution phase.',
  },
  {
    question: 'Do you provide ongoing support and maintenance after project delivery?',
    answer: 'Yes, we provide ongoing operational support and performance monitoring. All projects include a standard support period for technical reliability and maintenance.',
  },
  {
    question: 'What is the cost of developing a custom software solution?',
    answer: 'Pricing is based on specific project requirements. Basic business websites start from ₹45,000, while custom software solutions are quoted after a detailed need analysis. We focus on providing value-driven pricing for regional enterprises.',
  },
  {
    question: 'Can you help with business registration and legal compliance in India?',
    answer: 'Yes, we offer complete business setup services including firm registration (Proprietorship, LLP), GST registration, and ongoing compliance management focused on regional business regulations.',
  },
  {
    question: 'Which areas do you serve?',
    answer: 'EDUNEX primarily serves businesses in Patna, Bihar, and the Eastern India region. We focus on building long-term partnerships with local and mid-sized enterprises.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We utilize modern, stable technology stacks including React, Node.js, and PostgreSQL for web applications. Our focus is on building scalable architecture that ensures long-term operational reliability.',
  },
  {
    question: 'How do you ensure data security and confidentiality?',
    answer: 'We implement industry-standard security practices and performance monitoring. Our deployment architecture is designed for high availability and reliable infrastructure.',
  },
];

export const gmbReviews = [
  {
    id: 'r1',
    author: 'Sanjeev Kumar',
    company: 'Bihar Retail Mart',
    rating: 5,
    avatar: 'portrait-man-business',
    date: '3 weeks ago',
    text: 'The team delivered our CRM solution aligned with our operational needs. Communication was clear and timelines were respected.',
  },
  {
    id: 'r2',
    author: 'Dr. Manish Sharma',
    company: 'MediCare Center - Patna',
    rating: 5,
    avatar: 'male-doctor-portrait',
    date: '1 month ago',
    text: 'A reliable IT partner for regional businesses. They built our record management system with a focus on stability and ease of use.',
  },
  {
    id: 'r3',
    author: 'Alok Patel',
    company: 'Magadh Distributors',
    rating: 5,
    avatar: 'professional-man-smiling',
    date: '2 months ago',
    text: 'EDUNEX provided a structured approach to our software needs. The billing integration works seamlessly for our regional distribution.',
  },
  {
    id: 'r4',
    author: 'Sneha Kumari',
    company: 'Regional Coaching Institute',
    rating: 5,
    avatar: 'professional-woman-portrait',
    date: '2 months ago',
    text: 'Professional services with a focus on practical execution. They helped us modernize our student records platform efficiently.',
  },
];