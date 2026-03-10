import { COMPANY_INFO } from "@/config/company";

// Mock data for IT Consulting Website

export const services = [
  {
    id: 'web-app-dev',
    slug: 'custom-software-bihar',
    type: 'engineering',
    icon: 'Code',
    title: 'Custom Software & Applications',
    description: 'Custom software, websites, and mobile apps built specifically for SMEs in Patna and across Bihar to automate your manual work.',
    category: 'development',
    features: ['Custom Web Portals', 'Mobile Apps for Staff', 'Inventory Systems', 'Local Business Solutions'],
    outcomeHeadline: 'Build <span className="text-[#f59e0b]">Custom Software</span> That Eliminates Your Daily Headaches',
    keyBenefits: ['Affordable for SMEs', 'Easy to Use for Staff', 'Full On-Site Training'],
    deliverables: [
      { title: 'Business Software', desc: 'Custom apps for your shop or factory', icon: 'Globe' },
      { title: 'Mobile Apps', desc: 'Connect with customers and staff', icon: 'Smartphone' },
      { title: 'Retail Systems', desc: 'Tools that automate your billing', icon: 'Server' }
    ],
    processSteps: [
      { title: 'Local Meeting', desc: 'We meet you in Patna or nearby to discuss' },
      { title: 'Designing', desc: 'Creating simple screens your staff can use' },
      { title: 'Building', desc: 'Developing the system step-by-step' },
      { title: 'Training', desc: 'We train your team on-site' }
    ],
    faqs: [
      { q: 'How much does custom software cost in Bihar?', a: 'It costs much less than metro-city agencies. We build affordable solutions crafted explicitly for the SME budget.' },
      { q: 'Do you provide on-site consultation in Patna?', a: 'Yes! We prefer to visit your office, shop, or factory to see exactly how your business works.' },
      { q: 'Will my staff be able to use it?', a: 'Absolutely. We design interfaces so intuitively that anyone can use them, removing technical barriers.' },
      { q: 'How long does deployment take?', a: 'Most SME projects in Bihar are deployed within 3 to 6 weeks, depending on the complexity of your manual processes.' }
    ],
    typeSpecificData: {
      performance: 'Works on Slow Internet',
      security: 'Data Kept Safe & Private',
      stack: ['Scalable Tech', 'Easy-to-use interfaces', 'Mobile Optimized']
    },
    results: [
      {
        label: "Manual Work",
        value: "-60%",
        suffix: "Time Saved",
        desc: "Helped a local Patna manufacturer save 4 hours a day on data entry."
      },
      {
        label: "Faster Process",
        value: "3x",
        suffix: "Speed Boost",
        desc: "Got a Muzaffarpur distributor's entire inventory online in 3 weeks."
      }
    ],
    testimonial: {
      quote: "The EDUNEX team actually came to our godown in Patna to understand our pain. The software they built is exactly what we needed to stop losing stock.",
      author: "Owner, Patna Wholesale Distributor"
    },
    resultsTitle: "Real Bihar Businesses We've Helped",
    ctaBadge: "Automate Your Work",
    ctaTitle: "Ready to Automate Your Shop or Factory?",
    ctaDescription: "Let's chat. We are based right here in Bihar and ready to help you grow without confusing tech jargon."
  },
  {
    id: 'crm-erp',
    slug: 'erp-billing-software',
    type: 'engineering',
    icon: 'Database',
    title: 'ERP & Billing Systems',
    description: 'Stop losing money to manual billing errors. Get a custom ERP system to manage inventory, staff, and GST billing effortlessly.',
    category: 'solutions',
    features: ['GST Billing Automation', 'Inventory Tracking', 'Staff Management', 'Tally Integration'],
    outcomeHeadline: 'Manage Your Entire Business from <span className="text-[#f59e0b]">Your Phone or PC</span>',
    keyBenefits: ['Everything in One Place', 'No More Calculation Errors', 'Save Hours Every Day'],
    deliverables: [
      { title: 'GST Billing', desc: 'Create accurate invoices in seconds', icon: 'Receipt' },
      { title: 'Godown Management', desc: 'Track exactly what comes in and out', icon: 'Database' },
      { title: 'Customer Records', desc: 'Never lose a lead or payment due again', icon: 'Users' }
    ],
    processSteps: [
      { title: 'Audit', desc: 'We visit your office or shop in Bihar' },
      { title: 'Blueprint', desc: 'Designing a simpler system for you' },
      { title: 'Build', desc: 'Building your billing software securely' },
      { title: 'Training', desc: 'We teach your staff how to use it' }
    ],
    faqs: [
      { q: 'Can small businesses afford ERP systems?', a: 'Yes. We do not charge massive enterprise fees. We built our systems specifically for the SME budgets of Bihar.' },
      { q: 'Can we use our old data from Tally or Excel?', a: 'Yes, we safely move all your old files and Excel sheets into the new digital system.' },
      { q: 'Can I check it from home?', a: 'Yes, the owner can manage the shop, check sales, and see inventory from their mobile phone anywhere.' },
      { q: 'Does it create GST-ready invoices?', a: 'Yes, it automatically calculates GST and creates compliant PDF invoices you can send via WhatsApp.' }
    ],
    typeSpecificData: {
      stack: ['Secure Cloud Database', 'Easy Mobile Interface'],
      performance: 'Fast even with thousands of stock items',
      security: 'End-to-end Data Privacy',
      integrations: ['Tally', 'WhatsApp', 'Email']
    },
    results: [
      {
        label: "Time Saved",
        value: "35%",
        suffix: "Faster Billing",
        desc: "Helped a local transporter handle dispatch billing in minutes instead of hours."
      },
      {
        label: "Accuracy",
        value: "100%",
        suffix: "GST Compliant",
        desc: "Upgraded an old retail shop from hand-written bills to secure GST digital billing."
      }
    ],
    testimonial: {
      quote: "The software they built for us is so easy. My staff learned it in a day, and we finally stopped making mistakes with our taxation and stock counting.",
      author: "Manager, Local Hardware Store"
    },
    resultsTitle: "Local Success Stories",
    ctaBadge: "Simplify Your Shop",
    ctaTitle: "Tired of Messy Excel Sheets?",
    ctaDescription: "Let's build a simpler system for your office. Tell us how you work, and we'll handle the rest."
  },
  {
    id: 'digital-marketing',
    slug: 'local-seo-marketing',
    type: 'marketing',
    icon: 'TrendingUp',
    title: 'Local SEO & Digital Marketing',
    description: 'Get more phone calls and foot traffic from local customers in Patna and across Bihar.',
    category: 'marketing',
    features: ['Google Maps SEO', 'Local Facebook Ads', 'WhatsApp Marketing', 'Business Registration'],
    outcomeHeadline: 'Get More Local Customers to <span className="text-[#f59e0b]">Call Your Business</span>',
    keyBenefits: ['More Phone Calls', 'Top Ranking in Your City', 'Clear Monthly Reports'],
    deliverables: [
      { title: 'Google Ranking', desc: 'Be the first shop people see nearby', icon: 'Search' },
      { title: 'Facebook Ads', desc: 'Reach local families instantly', icon: 'Target' },
      { title: 'WhatsApp Push', desc: 'Send offers directly to older customers', icon: 'MessageSquare' }
    ],
    processSteps: [
      { title: 'Research', desc: 'Seeing what other local shops do' },
      { title: 'Plan', desc: 'Choosing where to spend your budget' },
      { title: 'Action', desc: 'Running local ads and posting content' },
      { title: 'Check', desc: 'Bringing you more leads every week' }
    ],
    faqs: [
      { q: 'How do I know if it is working?', a: 'We send you a simple report every month showing exactly how many new calls and leads you got.' },
      { q: 'Can it help a small shop or clinic?', a: 'Yes, we specialize in helping local Bihar businesses get noticed by people in their immediate neighborhood.' },
      { q: 'Is it expensive?', a: 'We work with your exact budget and focus on getting you the best value for every rupee spent, unlike expensive national agencies.' },
      { q: 'Do you manage my Google Maps listing?', a: 'Yes, we optimize your Google My Business profile so you show up first when people search nearby.' }
    ],
    typeSpecificData: {
      channels: ['Facebook Ads', 'Google Maps', 'WhatsApp'],
      reporting: 'Easy-to-Read ROI Reports'
    },
    results: [
      {
        label: "New Leads",
        value: "4x",
        suffix: "More Enquiries",
        desc: "Helped a local clinic get 4 times more calls from their Google Maps profile."
      },
      {
        label: "Cost Saved",
        value: "-22%",
        suffix: "Ad Efficiency",
        desc: "Stopped a small local service from wasting money on ads that weren't bringing admissions."
      }
    ],
    testimonial: {
      quote: "We used to waste so much money giving ads in the newspaper. Now, we get regular enquiries from people finding us on their phones.",
      author: "Owner, Patna Retail Shop"
    },
    resultsTitle: "Real Traffic Growth",
    ctaBadge: "Grow Your Sales",
    ctaTitle: "Ready to Get More Walk-In Customers?",
    ctaDescription: "Stop guessing and start growing with a simple marketing plan that works specifically for your city."
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
    slug: 'gst-business-registration',
    type: 'compliance',
    icon: 'FileText',
    title: 'GST & Business Registration',
    description: 'Handling your firm registration, GST returns, and legal paperwork correctly so you can focus on running your business in Bihar.',
    category: 'compliance',
    features: ['Company Registration', 'Monthly GST Filing', 'Food License (FSSAI)', 'Trade License'],
    outcomeHeadline: 'We Handle Your <span className="text-[#f59e0b]">Taxes & Registration</span> So You Don&apos;t Have To',
    keyBenefits: ['100% Legal & Safe', 'No Late Fees or Penalties', 'Honest Local Advice'],
    deliverables: [
      { title: 'New Firm Setup', desc: 'Proprietor, LLP, or Pvt Ltd in Patna', icon: 'Briefcase' },
      { title: 'GST Filing', desc: 'Monthly taxes handled for your shop', icon: 'FileText' },
      { title: 'Local Licenses', desc: 'FSSAI, Trade, and Shop Establishment', icon: 'Shield' }
    ],
    processSteps: [
      { title: 'Documents', desc: 'We tell you exactly what papers are needed' },
      { title: 'Filing', desc: 'We submit everything to the Bihar government' },
      { title: 'Progress', desc: 'We handle all questions and follow-ups' },
      { title: 'Handover', desc: 'You get your certificates directly on WhatsApp' }
    ],
    faqs: [
      { q: 'How long does it take to register a shop in Patna?', a: 'Firm registration usually takes 7-15 days depending on the type of business.' },
      { q: 'Can you handle my monthly GST?', a: 'Yes! We file your monthly GST returns on time so you never pay a single rupee in late fees.' },
      { q: 'I want to open a restaurant. Can you help?', a: 'Yes, we help with Food Licenses (FSSAI) and local municipal trade licenses in Bihar.' },
      { q: 'Do you help with ITR?', a: 'Yes, we file Income Tax Returns for business owners, shopkeepers, and employees.' }
    ],
    typeSpecificData: {
      renewal: 'Automatic Reminders via WhatsApp',
      consultancy: 'Free Advice on Local Laws'
    },
    resultsTitle: "Local Businesses Protected",
    results: [
      {
        label: "Businesses Setup",
        value: "200+",
        suffix: "New Firms",
        desc: "Successfully registered over 200 new small businesses across Bihar last year."
      },
      {
        label: "Penalties",
        value: "₹0",
        suffix: "Zero Lates",
        desc: "Ensured our monthly clients never paid a single late fee for GST filing."
      }
    ],
    ctaTitle: "Need Help Starting Your Business?",
    ctaDescription: "Let's get your shop or company registered correctly without the runaround."
  },
];

export const caseStudies = [
  {
    id: 1,
    slug: "wholesale-billing-automation",
    title: "Wholesale Billing Automation",
    client: "Patna Wholesale Mart",
    industry: "Retail & Distribution",
    companyType: "Local Wholesale Distributor",
    problemSolved: "Eliminating manual billing errors",
    deploymentScale: "Single Godown (Patna)",
    image: "automated-warehouse-robotics-dark",
    challenge:
      "Handwritten bills resulted in heavy stock physical mismatch and delayed GST filing.",
    solution:
      "Installed a custom desktop billing software with automatic GST PDF generation and inventory deduction.",
    businessContext:
      "A prominent wholesale distributor in Patna matching 500+ daily orders using carbon-copy bill books.",
    coreProblem:
      "At the end of every month, their CA would find massive discrepancies between cash collected and stock sold due to human error in the rush hours.",
    solutionApproach:
      "We built a hyper-fast, keyboard-only billing interface that generates GST invoices in seconds. The system works completely offline during internet cuts and syncs data to the cloud automatically when the connection returns.",
    implementationConfidence:
      "We deployed the system over a weekend and spent 3 days at the godown training the billing staff to ensure they were comfortable before Monday morning rush.",
    impact: {
      revenue: "+12%",
      uptime: "100%",
      loadTime: "-90%",
      conversion: "+18%",
    },
    techStack: ["Desktop App", "Local Database", "Cloud Backup"],
    timeline: "3 weeks",
    testimonial:
      "EDUNEX actually sat in our godown to watch our boys work. The software they gave us is so fast, we don't have a crowd at the billing counter anymore.",
    testimonialAuthor: "Sanjeev Singh",
    testimonialRole: "Owner, Patna Wholesale Mart",
    downloadFeatures: [
      "Offline-first architecture details",
      "GST calculation rules",
      "Staff training plan",
      "Cost saving breakdown",
    ],
  },
  {
    id: 2,
    slug: "local-clinic-management",
    title: "Local Clinic Management",
    client: "Gaya Ortho Clinic",
    industry: "Healthcare",
    companyType: "Private Local Clinic",
    problemSolved: "Patient queue management",
    deploymentScale: "Single Clinic",
    image: "modern-hospital-laboratory-dark",
    challenge: "Overcrowded waiting rooms and lost patient history files.",
    solution:
      "Custom clinic software with digital prescriptions and token displays.",
    businessContext:
      "A busy private clinic in Gaya seeing 150+ patients daily in a very congested physical waiting area.",
    coreProblem:
      "Patients were constantly arguing over queue placement, and doctors were spending 10 minutes finding old paper files for returning patients.",
    solutionApproach:
      "Developed a custom clinic app where reception creates an instant digital profile. A smart TV in the waiting room acts as a token display, reducing noise and confusion.",
    implementationConfidence:
      "We set up the TV, computers, and software in one day. We stayed on-site for the first week to help the receptionist transition from her paper register.",
    impact: {
      efficiency: "+40%",
      patientSatisfaction: "+80%",
      paperwork: "-95%",
      appointments: "+20%",
    },
    techStack: ["Web App", "Secure Cloud", "SMS Gateway"],
    timeline: "4 weeks",
    testimonial:
      "My clinic is finally silent and peaceful. The patients wait patiently looking at the TV screen, and I can pull up patient history with a single click.",
    testimonialAuthor: "Dr. R.K. Verma",
    testimonialRole: "Head Doctor, Gaya Ortho Clinic",
    downloadFeatures: [
      "Queue logic design",
      "Prescription printing setup",
      "SMS alert system",
    ],
  },
  {
    id: 3,
    slug: "manufacturing-attendance-system",
    title: "Factory Attendance System",
    client: "Muzaffarpur Agrotech",
    industry: "Manufacturing",
    companyType: "Regional Factory",
    problemSolved: "Biometric attendance tracking",
    deploymentScale: "Factory Floor",
    image: "logistics-delivery-truck-night",
    challenge: "Fake attendances (buddy punching) costing the factory money.",
    solution:
      "Installed fingerprint biometric machines linked directly to payroll software.",
    businessContext:
      "A growing food processing factory in Muzaffarpur employing 300+ daily wage workers in 3 shifts.",
    coreProblem:
      "Supervisors were marking absent workers as present, leading to massive financial leakage in the monthly wage distribution.",
    solutionApproach:
      "Installed heavy-duty biometric devices at the factory gates. Built custom software to pull this data automatically and calculate exactly how many hours each worker spent inside.",
    implementationConfidence:
      "We tested the machines against dust and grease, which are common in factories, ensuring 99% read accuracy on difficult fingerprints.",
    impact: {
      deliveryTime: "-0%",
      operationalCost: "-14%",
      customerRating: "Perfect",
      efficiency: "+100%",
    },
    techStack: ["Hardware IoT", "Desktop Software", "Payroll Engine"],
    timeline: "2 weeks",
    testimonial:
      "This system paid for itself in the first month. We stopped losing money to fake attendances. Very practical work by the EDUNEX team.",
    testimonialAuthor: "Alok Sharma",
    testimonialRole: "Plant Manager, Muzaffarpur Agrotech",
    downloadFeatures: [
      "Hardware setup specs",
      "Shift calculation logic",
      "Payroll integration guide",
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
    title: 'Patna Business Growth 2026: Digital Marketing & Local SEO',
    category: 'Technology',
    date: 'January 5, 2026',
    readTime: '5 min read',
    excerpt: 'Software Development Patna & Digital Marketing Bihar guide. Take your local shop online—website, Local SEO, GST registration. Trusted by 90+ Patna businesses.',
    image: 'technology-abstract-digital-network-dark',
    author: COMPANY_INFO.team.ceo.name,
    authorRole: 'CEO',
    tags: ['Software Development Patna', 'Digital Marketing Patna', 'Local SEO Bihar', 'IT Company Patna'],
    content: `
      <h2>The Shift in Bihar's Business Market</h2>
      <p>In 2026, every successful business in Patna—from retail shops on Boring Road to agencies in Kankarbagh—is using technology to find more customers. As a leading <strong>Software Development Company in Patna</strong>, we've seen local shops transform with the right IT tools.</p>
      <h3>1. Why Local SEO Matters for Patna Businesses</h3>
      <p>When someone in Patna searches for "Billing Software Patna," "GST Registration Bihar," or "Best Hardware Shop," your business should be the first one they see. <strong>Local SEO Patna</strong> and Google Maps optimization help you win the local search game.</p>
      <h3>2. WhatsApp: Your Best Sales Tool in Bihar</h3>
      <p>Most of your customers in Bihar are on WhatsApp. We show you how to connect your website directly to your phone so you never miss a sale. Custom software can integrate billing and order alerts right into WhatsApp.</p>
      <h3>3. Simple Over Complex: Affordable IT for SMEs</h3>
      <p>Don't get distracted by fancy tech words. Focus on a website that loads fast on poor mobile signals and looks great on every phone. Our <strong>Custom Software Bihar</strong> solutions are built for real Patna business conditions.</p>
    `,
  },
  {
    id: 2,
    slug: 'gst-filing-made-easy-bihar',
    title: 'GST Registration Patna & Bihar: Guide for Small Businesses',
    category: 'Compliance',
    date: 'January 13, 2026',
    readTime: '8 min read',
    excerpt: 'GST Registration Patna & Bihar made easy. Learn GST rules for SMEs, monthly filing tips, and avoid penalties. Expert compliance support in Patna since 2012.',
    image: 'business-paperwork-official-documents',
    author: 'Neha Kapoor',
    authorRole: 'Head of Compliance',
    tags: ['GST Registration Patna', 'GST Registration Bihar', 'Business Registration Bihar', 'Tax Compliance'],
    content: `
      <h2>Stay Safe with Honest Compliance in Bihar</h2>
      <p>We know that handling taxes can be scary for many business owners. In Bihar, staying 100% compliant isn't just about following the law—it's about building a stable foundation for your growth. <strong>GST Registration Patna</strong> and <strong>GST Registration Bihar</strong> are the first steps for most small businesses.</p>
      <h3>Understanding GST Registration for Patna Businesses</h3>
      <p>Do you actually need a GST number? We break down the limits and benefits for regional small businesses. From Boring Road shops to Phulwari Sharif factories, we've helped 200+ firms get <strong>Business Registration Bihar</strong> and GST done correctly.</p>
      <h3>Monthly Filing Without the Stress</h3>
      <p>Learn how to keep your documents organized so that filing your monthly returns takes minutes, not days. Our billing software Patna clients get GST-ready invoices automatically.</p>
      <h3>Avoiding Common GST Mistakes in Bihar</h3>
      <p>We've seen local firms lose money due to simple filing errors. Here's how to make sure you're getting all your input tax credits correctly and avoiding late fees.</p>
    `,
  },
  {
    id: 3,
    slug: 'billing-software-success-patna-retail',
    title: 'Billing Software Patna: Why Retailers Go Digital',
    category: 'Solutions',
    date: 'February 2, 2026',
    readTime: '6 min read',
    excerpt: 'Billing Software Patna & Bihar: GST-compliant invoicing, inventory tracking, multi-shop management. See how Patna retailers save time and cut errors.',
    image: 'ecommerce-laptop-shopping-lifestyle',
    author: COMPANY_INFO.team.cto.name,
    authorRole: COMPANY_INFO.team.cto.role,
    tags: ['Billing Software Patna', 'Retail Billing Software Patna', 'ERP Software Bihar', 'GST Billing'],
    content: `
      <h2>The End of the Paper Bill Era in Patna</h2>
      <p>Retailers across Patna—from Kankarbagh to Boring Road—are discovering that <strong>Billing Software Patna</strong> doesn't just look professional—it saves hours of manual work every week. Custom <strong>GST Billing Software</strong> eliminates errors and keeps you compliant.</p>
      <h3>Fast Checkout, Happy Customers</h3>
      <p>Reduce wait times at your counter with barcode scanning and instant QR payment links. Our <strong>Retail Billing Software Patna</strong> solutions work even on slow internet—common in many Bihar locations.</p>
      <h3>Know Your Stock in Real-Time</h3>
      <p>Never run out of your best-selling items again. Your software will tell you exactly what to reorder and when. Ideal for godowns and wholesale distributors in Bihar.</p>
      <h3>Manage Multiple Shops from Anywhere</h3>
      <p>Even if you're not at the shop, you can see every sale from your smartphone. Total control, anywhere in Bihar. <strong>ERP Software Patna</strong> brings all your data into one dashboard.</p>
    `,
  },
  {
    id: 4,
    slug: 'custom-crm-benefits-growing-businesses',
    title: 'CRM Patna & Lead Management for Bihar Businesses',
    category: 'Solutions',
    date: 'February 12, 2026',
    readTime: '4 min read',
    excerpt: 'CRM Patna & Lead Management Bihar. Custom CRM for SMEs—capture leads from Google, WhatsApp, phone. Trusted by Patna distributors and service businesses.',
    image: 'business-growth-analytics-dashboard',
    author: COMPANY_INFO.team.coFounder.name,
    authorRole: COMPANY_INFO.team.coFounder.role,
    tags: ['CRM Patna', 'Lead Management Bihar', 'Custom Software Patna', 'Sales Automation'],
    content: `
      <h2>Tailored CRM for Patna & Bihar Businesses</h2>
      <p>Generic CRM solutions often come with bloated features that SMEs don't need. A <strong>custom CRM Patna</strong> focuses on your specific sales funnel—whether you're a distributor, clinic, or service business in Bihar.</p>
      <h3>Improving Lead Management in Bihar</h3>
      <p>Capture and track leads from multiple sources—Google ads, WhatsApp, phone calls—in one unified dashboard. <strong>Lead Management Bihar</strong> systems that alert your team instantly so you never miss a follow-up.</p>
      <h3>Enhanced Sales Productivity for Patna Teams</h3>
      <p>Automating repetitive tasks allows your sales team to focus on building relationships and closing deals. Our <strong>Custom Software Patna</strong> integrates with your existing tools—no expensive enterprise licenses required.</p>
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
];

export const faqs = [
  {
    question: 'How much does custom software cost in Bihar?',
    answer: 'Our pricing is built specifically for local SMEs. A basic billing system or website starts very affordably, while complete factory ERPs are priced based on the exact features you need. We do not charge massive corporate agency fees.',
  },
  {
    question: 'How long does it take to build and deploy?',
    answer: 'Most local business software is deployed within 3 to 6 weeks. Simple websites and GST setups take just 5-7 days. We give you a clear, fixed timeline before we start.',
  },
  {
    question: 'Do you provide local support in Patna and Bihar?',
    answer: 'Yes! Unlike agencies in Delhi or Bangalore, we are based right here. If your system goes down or your team needs training, we can send someone directly to your shop, clinic, or godown.',
  },
  {
    question: 'Is my business data safe with you?',
    answer: 'Absolutely. We use secure cloud servers (like AWS or Google) to ensure your customer data, billing history, and inventory are backed up daily and protected from local hardware failures or theft.',
  },
  {
    question: 'Can you handle both GST and our Billing Software?',
    answer: 'Yes, this is our specialty. We provide end-to-end service—giving you the software to generate GST-compliant bills and handling the actual filing of your monthly returns.',
  },
  {
    question: "What if my staff doesn't know how to use computers?",
    answer: "We design our software to be as simple as using WhatsApp. Plus, we provide detailed on-site training for your staff in Hindi or English until they are completely comfortable.",
  },
];

export const gmbReviews = [
  {
    id: 'r1',
    author: 'Sanjeev Kumar',
    company: 'Patna Wholesale Traders',
    rating: 5,
    avatar: 'portrait-man-business',
    date: '3 weeks ago',
    text: 'EDUNEX automated our godown billing. Now my staff makes zero mistakes with GST. Best IT support in Patna.',
  },
  {
    id: 'r2',
    author: 'Dr. Manish Sharma',
    company: 'Gaya Ortho Clinic',
    rating: 5,
    avatar: 'male-doctor-portrait',
    date: '1 month ago',
    text: 'They built a brilliant queue management software for my clinic. Patients are happier, and the clinic is silent. Highly recommended.',
  },
  {
    id: 'r3',
    author: 'Alok Patel',
    company: 'Magadh Distributors',
    rating: 5,
    avatar: 'professional-man-smiling',
    date: '2 months ago',
    text: 'We tried Delhi agencies before, but EDUNEX understood our local Bihar market better. The tracking app they built is super fast.',
  },
  {
    id: 'r4',
    author: 'Sneha Kumari',
    company: 'Boring Road Boutique',
    rating: 5,
    avatar: 'professional-woman-portrait',
    date: '2 months ago',
    text: 'They handled my GST registration and built my e-commerce site. So easy to work with and very affordable for small shops.',
  },
];