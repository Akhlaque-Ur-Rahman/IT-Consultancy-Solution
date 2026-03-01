import { COMPANY_INFO } from "@/config/company";

// Mock data for IT Consulting Website

export const services = [
  {
    id: 'web-app-dev',
    slug: 'web-app-development',
    type: 'engineering',
    icon: 'Code',
    title: 'Web & App Development',
    description: 'Beautiful websites and mobile apps that work fast on every device.',
    category: 'development',
    features: ['React & Node.js', 'iOS & Android', 'Progressive Web Apps', 'API Development'],
    outcomeHeadline: 'Build a <span className="text-[#f59e0b]">Professional Website</span> That Works as Hard as You Do',
    keyBenefits: ['Fast & Easy to Use', 'Works on All Devices', 'Safe & Secure'],
    deliverables: [
      { title: 'Custom Websites', desc: 'Beautiful sites for any business', icon: 'Globe' },
      { title: 'Mobile Apps', desc: 'Your business in your customers pockets', icon: 'Smartphone' },
      { title: 'Smart Systems', desc: 'Tools that automate your work', icon: 'Server' }
    ],
    processSteps: [
      { title: 'Talking & Planning', desc: 'We listen to what your business needs' },
      { title: 'Designing', desc: 'Creating the look and feel you love' },
      { title: 'Building', desc: 'Real-time updates as we create your site' },
      { title: 'Launch', desc: 'Testing everything before you go live' }
    ],
    faqs: [
      { q: 'What tools do you use?', a: 'We use the latest technology like React and Next.js to make sure your website is super fast and ready for the future.' },
      { q: 'Can you help me after the site is live?', a: 'Yes, we stay with you to handle any updates, security, or changes you need.' },
      { q: 'Will it work on mobile phones?', a: 'Absolutely. Every website we build is "Mobile-First," meaning it looks great on any screen.' },
      { q: 'How do we track progress?', a: 'We give you a simple weekly report so you always know exactly what we are working on.' }
    ],
    typeSpecificData: {
      performance: 'Fastest Loading Speeds',
      security: 'Built-in Protection',
      stack: ['Next.js', 'React', 'Mobile Optimized']
    },
    results: [
      {
        label: "More Visitors",
        value: "2.5x",
        suffix: "Traffic Boost",
        desc: "Helped a local business double their daily website visitors."
      },
      {
        label: "Faster Launch",
        value: "-45%",
        suffix: "Time Saved",
        desc: "Got a new startup online in half the usual time."
      }
    ],
    testimonial: {
      quote: "EDUNEX made the whole process so simple. They didn't use confusing tech words and built exactly what I needed to grow my business.",
      author: "Founder, local startup"
    },
    resultsTitle: "Real Growth We've Delivered",
    ctaBadge: "Launch Your Website",
    ctaTitle: "Ready to Start Building?",
    ctaDescription: "Let's chat about your idea. No jargon, just a clear plan to get your business online."
  },
  {
    id: 'crm-erp',
    slug: 'crm-erp-solutions',
    type: 'engineering',
    icon: 'Database',
    title: 'CRM/ERP/Billing Solutions',
    description: 'Simple software to manage your office, billing, and staff without the paper mess.',
    category: 'solutions',
    features: ['Custom CRM', 'ERP Systems', 'Billing Automation', 'Office Management'],
    outcomeHeadline: 'Manage Your Whole Business in <span className="text-[#f59e0b]">One Simple Screen</span>',
    keyBenefits: ['Everything in One Place', 'No More Manual Errors', 'Save Hours Every Day'],
    deliverables: [
      { title: 'Customer Records', desc: 'Never lose a lead again', icon: 'Users' },
      { title: 'Office Software', desc: 'Built for how you work', icon: 'Database' },
      { title: 'Automatic Billing', desc: 'Invoices sent in seconds', icon: 'Receipt' }
    ],
    processSteps: [
      { title: 'Audit', desc: 'We study how you work today' },
      { title: 'Blueprint', desc: 'Designing a simpler system for you' },
      { title: 'Build', desc: 'Step-by-step creation with your feedback' },
      { title: 'Training', desc: 'We teach your team everything' }
    ],
    faqs: [
      { q: 'Can we use our old data?', a: 'Yes, we move all your old files and papers into the new digital system safely.' },
      { q: 'Can I check it from home?', a: 'Yes, as long as you have internet, you can manage your office from anywhere.' },
      { q: 'Is it hard to learn?', a: 'No, we design it to be very simple, just like using a basic app on your phone.' },
      { q: 'Can it connect to Tally?', a: 'Yes, it works perfectly with Tally, WhatsApp, and other tools you already use.' }
    ],
    typeSpecificData: {
      stack: ['Safe & Reliable Backend', 'Easy Frontend'],
      performance: 'Fast even with thousands of files',
      security: 'End-to-end Data Privacy',
      integrations: ['Tally', 'WhatsApp', 'Email']
    },
    results: [
      {
        label: "Time Saved",
        value: "35%",
        suffix: "Faster Work",
        desc: "Helped a local distributor handle billing in minutes instead of hours."
      },
      {
        label: "Accuracy",
        value: "100%",
        suffix: "No More Errors",
        desc: "Successfully moved over 5 lakh rows of paper data to digital."
      }
    ],
    testimonial: {
      quote: "The software they built for us is so easy. My staff learned it in a day, and we finally know exactly what's happening in our business.",
      author: "Manager, local warehouse"
    },
    resultsTitle: "Results from Better Management",
    ctaBadge: "Simplify Your Work",
    ctaTitle: "Tired of Paperwork?",
    ctaDescription: "Let's build a simpler system for your office. Tell us how you work, and we'll handle the rest."
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing-services',
    type: 'marketing',
    icon: 'TrendingUp',
    title: 'Digital & Social Media Marketing',
    description: 'Get more phone calls and sales with simple, effective local marketing.',
    category: 'marketing',
    features: ['SEO & SEM', 'Social Media Campaigns', 'Content Marketing', 'Analytics'],
    outcomeHeadline: 'Get More Customers and <span className="text-[#f59e0b]">Grow Your Sales</span> Every Month',
    keyBenefits: ['More Phone Calls', 'Higher Local Rankings', 'Clear Monthly Reports'],
    deliverables: [
      { title: 'Google Ranking', desc: 'Be the first thing people see', icon: 'Search' },
      { title: 'Facebook Ads', desc: 'Reach local people easily', icon: 'Target' },
      { title: 'Content Posts', desc: 'Tell your story simply', icon: 'PenTool' }
    ],
    processSteps: [
      { title: 'Research', desc: 'Seeing what your competitors do' },
      { title: 'Plan', desc: 'Choosing where to spend your budget' },
      { title: 'Action', desc: 'Running ads and posting content' },
      { title: 'Check', desc: 'Tuning for more leads every week' }
    ],
    faqs: [
      { q: 'How do I know if it is working?', a: 'We send you a simple report every month showing exactly how many new calls and leads you got.' },
      { q: 'Do you handle Facebook?', a: 'Yes, we manage your Facebook, Instagram, and Google accounts so you don&apos;t have to.' },
      { q: 'Is it expensive?', a: 'We work with your budget and focus on getting you the best value for every rupee spent.' },
      { q: 'Can it help a small shop?', a: 'Yes, we specialize in helping local businesses get noticed by people in their neighborhood.' }
    ],
    typeSpecificData: {
      channels: ['Facebook Ads', 'Google Search', 'Instagram'],
      reporting: 'Easy-to-Read Reports'
    },
    results: [
      {
        label: "New Leads",
        value: "4x",
        suffix: "More Enquiries",
        desc: "Helped a local client get 4 times more calls from their Google ads."
      },
      {
        label: "Cost Saved",
        value: "-22%",
        suffix: "Ad Efficiency",
        desc: "Reduced wasteful spending on ads that weren't bringing in customers."
      }
    ],
    testimonial: {
      quote: "We used to waste so much money on ads that didn't work. Now, we get regular enquiries from people who actually want to buy.",
      author: "Business Owner, local retail shop"
    },
    resultsTitle: "Growth We've Achieved",
    ctaBadge: "Grow Your Sales",
    ctaTitle: "Ready to Get More Customers?",
    ctaDescription: "Stop guessing and start growing with a simple marketing plan that works for your local area."
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    type: 'design',
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Professional designs that make your business look premium and trust-worthy.',
    category: 'design',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    outcomeHeadline: 'Design That Makes Your Customers Say <span className="text-[#f59e0b]">"Wow"</span>',
    keyBenefits: ['Easy to Use', 'Looks Premium', 'Keeps People Coming Back'],
    deliverables: [
      { title: 'Research', desc: 'Understanding what your customers like', icon: 'Users' },
      { title: 'App Design', desc: 'Beautiful screens that work perfectly', icon: 'Layout' },
      { title: 'Prototypes', desc: 'See how it works before we build it', icon: 'Play' }
    ],
    processSteps: [
      { title: 'Listening', desc: 'Learning about your brand' },
      { title: 'Sketching', desc: 'Drawing the first ideas' },
      { title: 'Designing', desc: 'Adding colors and style' },
      { title: 'Testing', desc: 'Making sure it is easy for everyone' }
    ],
    faqs: [
      { q: 'Which tools do you use?', a: 'We use professional tools like Figma and Adobe to create world-class designs.' },
      { q: 'Can you redesign my old app?', a: 'Yes, we can take your existing app and give it a modern, premium look.' },
      { q: 'How long does design take?', a: 'A full design usually takes 2-4 weeks depending on how many screens you need.' },
      { q: 'Do you help with logos?', a: 'Yes, we also design logos and brand styles to match your new look.' }
    ],
    typeSpecificData: {
      gallery: ['Modern Designs', 'Clean Layouts', 'Bold Colors'],
      philosophy: 'Simple & User-First'
    },
    resultsTitle: "Designs That Got People Talking",
    results: [
      {
        label: "Easy to Use",
        value: "+40%",
        suffix: "Happier Users",
        desc: "Redesigned a local app, making it much simpler for people to use every day."
      },
      {
        label: "Sales",
        value: "+25%",
        suffix: "More Orders",
        desc: "Simplified a checkout screen to help more people finish their purchase."
      }
    ],
    ctaTitle: "Want a Beautiful App?",
    ctaDescription: "Let's create a design that your customers will love using every day."
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-solutions',
    type: 'engineering',
    icon: 'ShoppingCart',
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores to sell your products across India easily.',
    category: 'development',
    features: ['Multi-vendor', 'Payment Gateway', 'Inventory Management', 'Analytics'],
    outcomeHeadline: 'Sell More Online with a <span className="text-[#f59e0b]">Powerful e-Commerce Store</span>',
    keyBenefits: ['Sell 24/7', 'Safe Payments', 'Easy to Manage Orders'],
    deliverables: [
      { title: 'Custom Stores', desc: 'Your own online shop', icon: 'ShoppingBag' },
      { title: 'Marketplaces', desc: 'Let others sell on your site', icon: 'Layout' },
      { title: 'Payments', desc: 'Safe & secure checkout', icon: 'CreditCard' }
    ],
    processSteps: [
      { title: 'Planning', desc: 'Organizing your products' },
      { title: 'Setup', desc: 'Building the cart and payments' },
      { title: 'Testing', desc: 'Checking taxes and shipping' },
      { title: 'Live', desc: 'Launching your store' }
    ],
    faqs: [
      { q: 'Can I move from Shopify?', a: 'Yes, we can move all your products and customers to a new, faster store.' },
      { q: 'Will it work on phones?', a: 'Yes, most people shop on phones, so we make sure it works perfectly there.' },
      { q: 'Which payments do you support?', a: 'We add Razorpay, Stripe, and even Cash on Delivery for your customers.' },
      { q: 'Can I manage it myself?', a: 'Yes, we give you a simple dashboard to add products and see your sales.' }
    ],
    typeSpecificData: {
      stack: ['Fast Storefront', 'Secure Payments'],
      performance: 'Handles thousands of shoppers',
      security: 'PCI-DSS Safe'
    },
    resultsTitle: "Selling Success Stories",
    results: [
      {
        label: "Online Sales",
        value: "+60%",
        suffix: "Sales Growth",
        desc: "Helped a local retail shop start selling across India successfully."
      },
      {
        label: "Payments",
        value: "Safe",
        suffix: "100% Secure",
        desc: "Simplified the payment process so customers feel safe buying online."
      }
    ],
    ctaTitle: "Ready to Start Selling?",
    ctaDescription: "Launch your own online store and reach customers across the country."
  },
  {
    id: 'lead-management',
    slug: 'lead-management-systems',
    type: 'engineering',
    icon: 'Users',
    title: 'Lead Management',
    description: 'Smart systems to track your customers and never miss a single new enquiry.',
    category: 'solutions',
    features: ['Lead Tracking', 'Automation', 'CRM Integration', 'Reporting'],
    outcomeHeadline: 'Never Lose a Customer Again with <span className="text-[#f59e0b]">Smart Lead Tracking</span>',
    keyBenefits: ['Instant Alerts', 'Automatic Follow-ups', 'Know Where Leads Come From'],
    deliverables: [
      { title: 'Lead Scoring', desc: 'Know which customers are ready to buy', icon: 'Target' },
      { title: 'Capture Hubs', desc: 'Get leads from FB, Google, and Web', icon: 'Inbound' },
      { title: 'Auto-Bots', desc: 'Reply to customers in seconds', icon: 'MessageSquare' }
    ],
    processSteps: [
      { title: 'Audit', desc: 'Finding where you lose customers today' },
      { title: 'Logic', desc: 'Setting up automatic replies' },
      { title: 'Sync', desc: 'Connecting to your phone & computer' },
      { title: 'Monitor', desc: 'Checking results every week' }
    ],
    faqs: [
      { q: 'Can it work with WhatsApp?', a: 'Yes, your team gets an instant WhatsApp alert whenever a new lead comes in.' },
      { q: 'Is it hard to use?', a: 'No, you get a simple list of people to call, and the app handles the rest.' },
      { q: 'Can I see reports?', a: 'Yes, you can see which ads are bringing you the most customers.' },
      { q: 'Does it send emails?', a: 'Yes, it can send automatic "Thank You" emails and follow-ups for you.' }
    ],
    typeSpecificData: {
      stack: ['Modern Tracking Tech'],
      performance: 'Leads delivered in < 5 mins',
      security: 'Safe & Private Data'
    },
    resultsTitle: "Winning More Customers",
    results: [
      {
        label: "Response Time",
        value: "-90%",
        suffix: "Faster Replies",
        desc: "Helped a business reply to customers in seconds instead of hours."
      },
      {
        label: "Conversions",
        value: "+50%",
        suffix: "More Sales",
        desc: "Ensured every single lead was followed up on, increasing total sales."
      }
    ],
    ctaTitle: "Stop Losing Good Leads.",
    ctaDescription: "Get a simple system to track and close more customers today."
  },
  {
    id: 'ivr',
    slug: 'ivr-calling-solutions',
    type: 'engineering',
    icon: 'Phone',
    title: 'IVR Solutions',
    description: 'Automatic business phone system that answers your customers 24/7.',
    category: 'solutions',
    features: ['Multi-language', 'Call Routing', 'Analytics', 'Integration'],
    outcomeHeadline: 'Professional <span className="text-[#f59e0b]">24/7 Phone Answering</span> for Your Business',
    keyBenefits: ['No Missed Calls', 'Professional Welcome', 'Hindi & English Support'],
    deliverables: [
      { title: 'Cloud Phone', desc: 'No hardware needed', icon: 'Cloud' },
      { title: 'Smart Menus', desc: "Press 1 for Sales, 2 for Support", icon: 'CallFlow' },
      { title: 'Recordings', desc: 'Listen to every call later', icon: 'Mic' }
    ],
    processSteps: [
      { title: 'Setup', desc: 'Choosing your new business number' },
      { title: 'Script', desc: 'Recording your welcome message' },
      { title: 'Test', desc: 'Making sure calls go to the right person' },
      { title: 'Live', desc: 'Your phone system is ready' }
    ],
    faqs: [
      { q: 'Do I need special phones?', a: 'No, everything works on your existing mobile phones using the cloud.' },
      { q: 'Can we have Hindi menus?', a: 'Yes, we can record messages in Hindi, English, and local languages.' },
      { q: 'Is it expensive?', a: 'No, it is very affordable and costs much less than a traditional office phone system.' },
      { q: 'Can I record calls?', a: 'Yes, all incoming and outgoing calls are recorded for you to check later.' }
    ],
    typeSpecificData: {
      stack: ['Reliable Cloud Calling'],
      performance: 'Handles 100+ calls at once',
      security: 'Safe Cloud Recording'
    },
    resultsTitle: "Professional Calling Results",
    results: [
      {
        label: "Missed Calls",
        value: "0",
        suffix: "Zero Lost Calls",
        desc: "Ensured no customer call was ever missed, day or night."
      },
      {
        label: "Brand Image",
        value: "Top",
        suffix: "Highly Professional",
        desc: "Gave a small office the professional phone system of a big company."
      }
    ],
    ctaTitle: "Want a Professional Number?",
    ctaDescription: "Get a business phone system that works 24/7 for you."
  },
  {
    id: 'hyperlocal',
    slug: 'hyperlocal-platform-dev',
    type: 'engineering',
    icon: 'MapPin',
    title: 'Hyperlocal Platforms',
    description: 'Apps to manage local deliveries and track your riders in real-time.',
    category: 'development',
    features: ['Geolocation', 'Real-time Tracking', 'Multi-vendor', 'Mobile Apps'],
    outcomeHeadline: 'Connect Your Business with <span className="text-[#f59e0b]">Local Customers</span> Instantly',
    keyBenefits: ['Real-time Tracking', 'Accept Orders Nearby', 'Easy for Delivery Boys'],
    deliverables: [
      { title: 'Driver App', desc: 'Real-time GPS for your team', icon: 'Navigation' },
      { title: 'Shop Panel', desc: 'Manage local orders easily', icon: 'Store' },
      { title: 'Heatmaps', desc: 'See where your orders come from', icon: 'Map' }
    ],
    processSteps: [
      { title: 'Mapping', desc: 'Defining your delivery zones' },
      { title: 'Building', desc: 'Creating the apps for you and your staff' },
      { title: 'Testing', desc: 'Field tests on real roads' },
      { title: 'Scale', desc: 'Expanding to more areas' }
    ],
    faqs: [
      { q: 'Can we use Google Maps?', a: 'Yes, we integrate with Google Maps so you can see exactly where your riders are.' },
      { q: 'Is there an app for riders?', a: 'Yes, we build a special app for your delivery team to see their tasks.' },
      { q: 'Can I set delivery areas?', a: 'Yes, you can choose exactly which neighborhoods you want to serve.' },
      { q: 'Do you support live tracking?', a: 'Yes, both you and your customers can see the live location of orders.' }
    ],
    typeSpecificData: {
      stack: ['Real-time Maps Tech'],
      performance: 'Smooth Live Tracking',
      security: 'Private Location Data'
    },
    resultsTitle: "Local Success Stories",
    results: [
      {
        label: "Delivery Speed",
        value: "-25%",
        suffix: "Faster Service",
        desc: "Optimized routes to help a local shop deliver items faster."
      },
      {
        label: "New Area",
        value: "3",
        suffix: "City Expansions",
        desc: "Helped a pharmacy expand its delivery to 3 new neighborhoods."
      }
    ],
    ctaTitle: "Want to Serve Your Neighborhood?",
    ctaDescription: "Build your own local delivery platform and reach more customers nearby."
  },
  {
    id: 'seo',
    slug: 'seo-optimization-expert',
    type: 'marketing',
    icon: 'Search',
    title: 'SEO & Website Optimization',
    description: 'Help people in your city find your business first when they search on Google.',
    category: 'marketing',
    features: ['On-page SEO', 'Technical SEO', 'Link Building', 'Performance'],
    outcomeHeadline: 'Be the <span className="text-[#f59e0b]">First Result</span> People See on Google',
    keyBenefits: ['More Free Traffic', 'Better Local Ranking', 'Stay Ahead of Competitors'],
    deliverables: [
      { title: 'Technical SEO', desc: 'Making your site super fast', icon: 'Tools' },
      { title: 'Content Engine', desc: 'Articles that attract customers', icon: 'FileText' },
      { title: 'Link Building', desc: 'Getting other sites to talk about you', icon: 'Link' }
    ],
    processSteps: [
      { title: 'Audit', desc: 'Checking why your site is hidden today' },
      { title: 'Keywords', desc: 'Finding what your customers search for' },
      { title: 'Update', desc: 'Making your pages Google-friendly' },
      { title: 'Report', desc: 'Monthly rankings and progress' }
    ],
    faqs: [
      { q: 'How long to rank #1?', a: 'SEO is a slow process, but you will usually start seeing growth in 3-6 months.' },
      { q: 'Do you handle technical stuff?', a: 'Yes, we fix all the behind-the-scenes errors that stop Google from showing your site.' },
      { q: 'Will it help local sales?', a: 'Yes, we focus on Local SEO to make sure people in your city find you first.' },
      { q: 'Do you provide reports?', a: 'Yes, we send a simple monthly report showing your new positions on Google.' }
    ],
    typeSpecificData: {
      channels: ['Google', 'Bing', 'Local Maps'],
      reporting: 'Monthly Ranking Checks'
    },
    resultsTitle: "SEO Growth Stories",
    results: [
      {
        label: "Free Traffic",
        value: "+150%",
        suffix: "Organic Growth",
        desc: "Helped a business get double the visitors without spending on ads."
      },
      {
        label: "Keywords",
        value: "Top 3",
        suffix: "Google Ranking",
        desc: "Got a local service provider to the first page for their primary keywords."
      }
    ],
    ctaTitle: "Want to Rank Higher?",
    ctaDescription: "Get more free customers with a professional SEO plan for your business."
  },
  {
    id: 'animation',
    slug: 'animation-graphics-design',
    type: 'design',
    icon: 'Sparkles',
    title: 'Animation & Graphics',
    description: 'Cool videos and animations that explain your business in 60 seconds.',
    category: 'design',
    features: ['Motion Graphics', '2D/3D Animation', 'Explainer Videos', 'Brand Assets'],
    outcomeHeadline: 'Tell Your Story with <span className="text-[#f59e0b]">Amazing Video & Animation</span>',
    keyBenefits: ['Grab Attention', 'Explain Ideas Easily', 'Premium Look'],
    deliverables: [
      { title: 'Explainers', desc: 'Videos that show how your product works', icon: 'Video' },
      { title: 'Animated Logos', desc: 'Make your brand feel alive', icon: 'Layers' },
      { title: 'Social Ads', desc: 'Eye-catching videos for Instagram', icon: 'Instagram' }
    ],
    processSteps: [
      { title: 'Script', desc: 'Writing the story' },
      { title: 'Style', desc: 'Choosing colors and characters' },
      { title: 'Animate', desc: 'Making the drawings move' },
      { title: 'Audio', desc: 'Adding music and voiceover' }
    ],
    faqs: [
      { q: 'Do you include voiceovers?', a: 'Yes, we provide professional voices in Hindi, English, and other languages.' },
      { q: 'How long does it take?', a: 'A simple video usually takes 2 weeks from start to finish.' },
      { q: 'Do I own the video?', a: 'Yes, you get full ownership and the original files for your business.' },
      { q: 'Can you animate my logo?', a: 'Yes, we can turn your static logo into a smooth, professional animation.' }
    ],
    typeSpecificData: {
      gallery: ['Latest Reels', 'Product Demos', 'Social Ads'],
      philosophy: 'Clear & Engaging Visuals'
    },
    resultsTitle: "Visual Success",
    results: [
      {
        label: "Views",
        value: "5x",
        suffix: "Engagement Boost",
        desc: "Helped a client get 5 times more views on their social media ads."
      },
      {
        label: "Clarity",
        value: "100%",
        suffix: "Better Understanding",
        desc: "Simplified a complex service so customers could understand it in 60 seconds."
      }
    ],
    ctaTitle: "Need a Video?",
    ctaDescription: "Let's create an animation that explains your business perfectly."
  },
  {
    id: 'compliance',
    slug: 'business-registration-compliance',
    type: 'compliance',
    icon: 'FileText',
    title: 'Business Registration & Compliance',
    description: 'Handling your firm registration, GST, and legal paperwork correctly.',
    category: 'compliance',
    features: ['Company Registration', 'GST & Tax', 'Trademark', 'Legal Contracts'],
    outcomeHeadline: 'We Handle Your <span className="text-[#f59e0b]">Taxes & Registration</span> So You Don&apos;t Have To',
    keyBenefits: ['100% Legal & Safe', 'No Late Fees', 'Honest Advice'],
    deliverables: [
      { title: 'New Firm', desc: 'Proprietor, LLP, or Pvt Ltd setup', icon: 'Briefcase' },
      { title: 'GST Filing', desc: 'Monthly taxes handled for you', icon: 'FileText' },
      { title: 'Trademark', desc: 'Protect your brand name', icon: 'Shield' }
    ],
    processSteps: [
      { title: 'Documents', desc: 'We tell you exactly what papers are needed' },
      { title: 'Filing', desc: 'We submit everything to the government' },
      { title: 'Progress', desc: 'We handle all questions and follow-ups' },
      { title: 'Handover', desc: 'You get your certificates and documents' }
    ],
    faqs: [
      { q: 'How long does it take?', a: 'Firm registration usually takes 7-15 days depending on the type.' },
      { q: 'Do you handle GST filing?', a: 'Yes, we can handle your monthly GST returns so you never miss a deadline.' },
      { q: 'What papers do I need?', a: 'Usually just PAN, Aadhaar, and address proof. We give you a simple checklist.' },
      { q: 'Do you help with ITR?', a: 'Yes, we also file Income Tax Returns for business owners and employees.' }
    ],
    typeSpecificData: {
      renewal: 'Automatic Reminders',
      consultancy: 'Free Legal Advice'
    },
    resultsTitle: "Compliance Results",
    results: [
      {
        label: "Businesses Setup",
        value: "200+",
        suffix: "New Firms",
        desc: "Successfully registered over 200 new businesses in the last year."
      },
      {
        label: "Penalties",
        value: "₹0",
        suffix: "Zero Lates",
        desc: "Ensured our clients never paid a single late fee for GST filing."
      }
    ],
    ctaTitle: "Need Business Help?",
    ctaDescription: "Let's get your business registered and compliant without any headache."
  },
];

export const caseStudies = [
  {
    id: 1,
    slug: "ecommerce-platform-optimization",
    title: "E-commerce Platform Optimization",
    client: "Patna Retail Mart",
    industry: "Retail",
    companyType: "Large Retailer",
    problemSolved: "Scaling during peak traffic",
    deploymentScale: "State-wide",
    image: "automated-warehouse-robotics-dark",
    challenge:
      "Legacy system struggled with performance during peak shopping hours",
    solution:
      "Implemented a responsive frontend and optimized database queries for faster catalog browsing",
    businessContext:
      "One of the largest retail chains in Patna with a growing catalog of 50,000+ products and a daily transacting user base of 5,000+ customers.",
    coreProblem:
      "During festive sales, the legacy platform experienced 40% downtime due to database lock contention, leading to direct revenue loss and customer frustration.",
    solutionApproach:
      "We migrated the frontend to Next.js for static generation and implemented Redis caching for the catalog. Database queries were refactored to eliminate N+1 issues.",
    implementationConfidence:
      "The migration was completed in 3 months with zero-downtime during the final handover. We provided 4 weeks of high-availability monitoring post-launch.",
    impact: {
      revenue: "+22%",
      uptime: "99.98%",
      loadTime: "-35%",
      conversion: "+18%",
    },
    techStack: ["React", "Node.js", "PostgreSQL", "Cloud Hosting"],
    timeline: "3 months",
    testimonial:
      "The team delivered a structured e-commerce solution that improved our online sales and load speeds significantly.",
    testimonialAuthor: "Sanjeev Singh",
    testimonialRole: "Operations Manager, Patna Retail Mart",
    downloadFeatures: [
      "Detailed implementation approach",
      "Architecture overview",
      "Lessons learned",
      "Business impact analysis",
    ],
  },
  {
    id: 2,
    slug: "healthcare-crm-implementation",
    title: "Healthcare CRM Implementation",
    client: "Bihar MediCare Center",
    industry: "Healthcare",
    companyType: "Multi-specialty Hospital",
    problemSolved: "Patient record digitization",
    deploymentScale: "In-house Infrastructure",
    image: "modern-hospital-laboratory-dark",
    challenge: "Manual patient records leading to tracking inefficiencies",
    solution:
      "Custom CRM with digital record management and automated appointment scheduling",
    businessContext:
      "A 200-bed multi-specialty hospital handling hundreds of patient registrations daily across 15+ specialized departments.",
    coreProblem:
      "Paper-based records caused significant delays in retrieving patient history, leading to an average 25-minute wait time for follow-up consultations.",
    solutionApproach:
      "Developed a custom HIPAA-compliant CRM focused on speed of entry. Integrated a real-time scheduling engine and SMS-based automated reminders.",
    implementationConfidence:
      "The system was deployed department-by-department to ensure minimal disruption to patient care. Staff training was completed in under 7 days per unit.",
    impact: {
      efficiency: "+28%",
      patientSatisfaction: "+24%",
      paperwork: "-32%",
      appointments: "+19%",
    },
    techStack: ["React", "PostgreSQL", "Docker"],
    timeline: "5 months",
    testimonial:
      "The CRM solution is aligned with our operational needs. Communication was clear and timelines were respected.",
    testimonialAuthor: "Dr. Ramesh Kumar",
    testimonialRole: "Director, Bihar MediCare Center",
    downloadFeatures: [
      "Compliance audit report",
      "Workflow mapping documentation",
      "Deployment strategy",
    ],
  },
  {
    id: 3,
    slug: "logistics-tracking-system",
    title: "Logistics Tracking System",
    client: "Ganga Logistics Services",
    industry: "Logistics",
    companyType: "Regional Distributor",
    problemSolved: "Real-time fleet monitoring",
    deploymentScale: "Pan-India Tracking",
    image: "logistics-delivery-truck-night",
    challenge: "Inconsistent delivery tracking for regional distribution",
    solution:
      "Integrated real-time tracking system with route monitoring capabilities",
    businessContext:
      "A regional logistics firm managing a fleet of 50+ vehicles across 12 Bihar districts, serving over 500 retail partners.",
    coreProblem:
      "Lack of real-time visibility led to an 18% discrepancy in estimated vs. actual delivery times, causing logistical bottlenecks and partner disputes.",
    solutionApproach:
      "Built a mobile-first tracking platform using React Native with low-bandwidth optimization. Integrated Google Maps API for real-time route optimization.",
    implementationConfidence:
      "We implemented a hybrid tracking logic that works even in low-connectivity rural areas, ensuring data integrity through offline-first synchronization.",
    impact: {
      deliveryTime: "-17%",
      operationalCost: "-14%",
      customerRating: "4.6/5",
      efficiency: "+21%",
    },
    techStack: ["React Native", "Node.js", "Google Maps API"],
    timeline: "4 months",
    testimonial:
      "A practical solution that helped us optimize our regional delivery routes and reduce delays.",
    testimonialAuthor: "Alok Verma",
    testimonialRole: "Manager, Ganga Logistics Services",
    downloadFeatures: [
      "Technical architecture",
      "Route optimization case",
      "IoT integration guide",
    ],
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
    id: "gst-registration",
    title: "GST Registration & Filing",
    description: "End-to-end GST management for retail shops, freelancers, and growing service businesses.",
    whoItIsFor: "For new entrepreneurs and existing shop owners starting legally.",
    keyBenefits: [
      "Avoid heavy penalties and legal notices",
      "Process 100% online – No office visits",
      "End-to-end handling by experts",
      "GST billing advice included"
    ],
    icon: "FileText",
    steps: ["Doc Collection", "ARN Generation", "Final Certificate"],
    timeline: "3-5 Working Days",
    price: "₹1,499",
    priceType: "Starting",
    confidenceStatement: "Handled by CA-vetted compliance professionals.",
    actionLabel: "Start GST Registration"
  },
  {
    id: "company-registration",
    title: "Company & Udhyam Setup",
    description: "Launch your private limited, LLP, or MSME with structured documentation and legal backing.",
    whoItIsFor: "For startup founders and SMEs looking for professional entity structure.",
    keyBenefits: [
      "Save 20+ hours of paperwork effort",
      "Legal backing for bank loans & tenders",
      "Udhyam registration for MSME benefits",
      "Professional entity status"
    ],
    icon: "Shield",
    steps: ["Name Approval", "DSC & DIN", "SpicE+ Filing"],
    timeline: "7-10 Working Days",
    price: "₹4,999",
    priceType: "Fixed",
    confidenceStatement: "Trusted by 50+ regional startups.",
    actionLabel: "Register Your Company"
  },
  {
    id: "fssai-license",
    title: "FSSAI & Trade License",
    description: "Mandatory food safety and municipal licenses for restaurants, cafes, and food retailers.",
    whoItIsFor: "For food business owners ensuring health and safety compliance.",
    keyBenefits: [
      "Stay compliant with food safety norms",
      "Build customer trust with FSSAI logo",
      "Avoid municipal sealing or fines",
      "Renewal reminders included"
    ],
    icon: "Check",
    steps: ["Site Inspection Prep", "Application", "License Issue"],
    timeline: "5-7 Working Days",
    price: "₹2,499",
    priceType: "Starting",
    confidenceStatement: "Regional expertise in Bihar municipal norms.",
    actionLabel: "Get Trade License"
  },
  {
    id: "tax-audit-filing",
    title: "Income Tax & Audit",
    description: "Structured tax planning and annual auditing for businesses, NGOs, and professionals.",
    whoItIsFor: "For professionals and businesses seeking accurate annual filings.",
    keyBenefits: [
      "Maximize tax savings legally",
      "Accurate filings to avoid IT notices",
      "Dedicated audit support",
      "Expert tax planning session"
    ],
    icon: "IndianRupee",
    steps: ["Data Gathering", "Tax Review", "Final E-Filing"],
    timeline: "Annual / Periodic",
    price: "₹3,000",
    priceType: "Starting",
    confidenceStatement: "CA-monitored processing.",
    actionLabel: "Request Tax Filing"
  },
];

export const complianceFAQs = [
  {
    question: "What documents are generally required for GST registration?",
    answer: "Typically, you need your PAN Card, Aadhaar Card, Proof of Business Address (like an electricity bill or rent agreement), and a Bank Account statement/cancelled cheque."
  },
  {
    question: "Do I need to visit any government office personally?",
    answer: "No. Our process is 100% digital. You provide the documents to us securely online, and we handle all filings and follow-ups with the departments."
  },
  {
    question: "Are government fees included in the service pricing shown?",
    answer: "The pricing mentioned covers our professional service fees. Government fees (if applicable) are paid directly to the department based on the specific registration type."
  },
  {
    question: "How long does it take to get the final certificate?",
    answer: "Most basic registrations like GST or Udhyam are completed within 3-5 working days. Company registrations can take 7-10 days depending on department approvals."
  },
  {
    question: "Do you provide ongoing support after the registration?",
    answer: "Yes, we provide end-to-end support including monthly GST filings, annual renewals, and consultation on any compliance notices you might receive."
  }
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
    slug: 'digital-growth-patna-2026',
    title: 'How Patna Businesses are Growing in 2026',
    category: 'Technology',
    date: 'January 5, 2026',
    readTime: '5 min read',
    excerpt: 'Simple steps to take your local shop or agency online. From choosing the right website to handling regional growth.',
    image: 'technology-abstract-digital-network-dark',
    author: COMPANY_INFO.team.ceo.name,
    authorRole: 'CEO',
    tags: ['Patna Business', 'Growth', 'Local SEO'],
    content: `
      <h2>The Shift in Bihar's Business Market</h2>
      <p>In 2026, every successful business in Patna—from retail shops on Boring Road to agencies in Kankarbagh—is using technology to find more customers. But you don't need a million-dollar system; you just need tools that work.</p>
      <h3>1. Why Local SEO Matters for You</h3>
      <p>When someone in Patna searches for "Best Hardware Shop" or "Top Consultant," your business should be the first one they see. We help you win the local search game.</p>
      <h3>2. WhatsApp: Your Best Sales Tool</h3>
      <p>Most of your customers are on WhatsApp. We show you how to connect your website directly to your phone so you never miss a sale.</p>
      <h3>3. Simple Over Complex</h3>
      <p>Don't get distracted by fancy tech words. Focus on a website that loads fast on poor mobile signals and looks great on every phone.</p>
    `,
  },
  {
    id: 2,
    slug: 'gst-filing-made-easy-bihar',
    title: 'Tax & GST: A Simple Guide for Bihar Businesses',
    category: 'Compliance',
    date: 'January 13, 2026',
    readTime: '8 min read',
    excerpt: 'Stop worrying about tax notices. Learn the basic GST rules every SME in Patna should know to stay safe and compliant.',
    image: 'business-paperwork-official-documents',
    author: 'Neha Kapoor',
    authorRole: 'Head of Compliance',
    tags: ['GST', 'Bihar Tax', 'SME'],
    content: `
      <h2>Stay Safe with Honest Compliance</h2>
      <p>We know that handling taxes can be scary for many business owners. In Bihar, staying 100% compliant isn't just about following the law—it's about building a stable foundation for your growth.</p>
      <h3>Understanding GST Registration</h3>
      <p>Do you actually need a GST number? We break down the limits and benefits for regional small businesses.</p>
      <h3>Monthly Filing Without the Stress</h3>
      <p>Learn how to keep your documents organized so that filing your monthly returns takes minutes, not days.</p>
      <h3>Avoiding Common Mistakes</h3>
      <p>We've seen local firms lose money due to simple filing errors. Here's how to make sure you're getting all your input tax credits correctly.</p>
    `,
  },
  {
    id: 3,
    slug: 'billing-software-success-patna-retail',
    title: 'Why Thousands of Patna Retailers are Moving to Custom Billing',
    category: 'Solutions',
    date: 'February 2, 2026',
    readTime: '6 min read',
    excerpt: 'Paper bills are slow and prone to errors. See how custom billing software is helping local shops manage stock and save time.',
    image: 'ecommerce-laptop-shopping-lifestyle',
    author: COMPANY_INFO.team.cto.name,
    authorRole: COMPANY_INFO.team.cto.role,
    tags: ['Billing Software', 'Retail', 'Patna'],
    content: `
      <h2>The End of the Paper Bill Era</h2>
      <p>Retailers across Patna are discovering that a computer bill doesn't just look professional—it saves hours of manual work every week.</p>
      <h3>Fast Checkout, Happy Customers</h3>
      <p>Reduce wait times at your counter with barcode scanning and instant QR payment links.</p>
      <h3>Know Your Stock in Real-Time</h3>
      <p>Never run out of your best-selling items again. Your software will tell you exactly what to reorder and when.</p>
      <h3>Manage Multiple Shops</h3>
      <p>Even if you're not at the shop, you can see every sale from your smartphone. Total control, anywhere in Bihar.</p>
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
    author: COMPANY_INFO.team.coFounder.name,
    authorRole: COMPANY_INFO.team.coFounder.role,
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
    name: COMPANY_INFO.team.ceo.name,
    role: COMPANY_INFO.team.ceo.role,
    bio: `${COMPANY_INFO.yearsOfExperience}+ years in enterprise software and digital transformation`,
    image: 'indian-man-ceo-portrait',
  },
  {
    id: 2,
    name: COMPANY_INFO.team.coFounder.name,
    role: COMPANY_INFO.team.coFounder.role,
    bio: 'Strategic leader focusing on scaling operations and ecosystem growth',
    image: 'portrait-man-business',
  },
  {
    id: 3,
    name: COMPANY_INFO.team.cto.name,
    role: COMPANY_INFO.team.cto.role,
    bio: 'Tech visionary specializing in cloud architecture and enterprise software',
    image: 'creative-professional-portrait',
  },
  {
    id: 4,
    name: 'Neha Kapoor',
    role: 'Head of Compliance',
    bio: `Chartered Accountant with ${COMPANY_INFO.yearsOfExperience}+ years in business compliance`,
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