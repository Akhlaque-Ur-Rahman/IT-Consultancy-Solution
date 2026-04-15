import { COMPANY_INFO } from "@/config/company";

// Website service catalog (list + detail slugs)

export const services = [
  {
    id: 'web-app-dev',
    slug: 'custom-software-bihar',
    heroImage: '/Services/web-app.webp',
    heroImageAlt: 'Custom apps and websites for Bihar shops and clinics',
    type: 'engineering',
    icon: 'Code',
    title: 'Custom apps & websites',
    description: 'Websites and phone apps built for shops, clinics, and small firms in Patna and Bihar. Less manual work at the counter.',
    category: 'development',
    features: ['Sites that load fast', 'Staff apps', 'Stock friendly tools', 'Plain training'],
    outcomeHeadline: 'Get <span class="text-[#f59e0b]">simple software</span> that fits your real daily work',
    keyBenefits: ['Priced for local owners', 'Easy screens for staff', 'We train at your place'],
    deliverables: [
      { title: 'Business apps', desc: 'Tools shaped around your shop or line', icon: 'Globe' },
      { title: 'Phone apps', desc: 'Staff and buyers stay connected', icon: 'Smartphone' },
      { title: 'Retail flow', desc: 'Billing steps that match your rush hours', icon: 'Server' }
    ],
    processSteps: [
      { title: 'Visit', desc: 'We meet in Patna or nearby and watch your flow' },
      { title: 'Sketch', desc: 'We draw simple screens your team approves' },
      { title: 'Build', desc: 'We ship features in steady weekly chunks' },
      { title: 'Train', desc: 'We stay on site until bills feel normal' }
    ],
    faqs: [
      { q: 'What does custom work cost in Bihar?', a: 'Less than big city shops charge. We quote upfront after we see your flow. No surprise line items.' },
      { q: 'Will you come to my godown or shop?', a: 'Yes. We prefer to sit where you work so we do not guess your pain.' },
      { q: 'Can my staff run it?', a: 'Yes. We keep layouts clean and repeat training until the counter feels calm.' },
      { q: 'How long before we go live?', a: 'Most builds land in three to six weeks. Simple sites can be faster.' }
    ],
    typeSpecificData: {
      performance: 'Works when the net is slow',
      security: 'Your data backed up and private',
      stack: ['Room to grow', 'Clear screens', 'Phones covered']
    },
    results: [
      {
        label: "Manual Work",
        value: "-60%",
        suffix: "Time saved",
        desc: "A Patna maker cut four hours of daily entry after one build."
      },
      {
        label: "Rollout",
        value: "3x",
        suffix: "Faster setup",
        desc: "A Muzaffarpur distributor moved stock online inside three weeks."
      }
    ],
    testimonial: {
      quote: "EDUNEX sat in our godown until they understood our mess. The tool fits our lane. Stock finally matches.",
      author: "Owner, Patna Wholesale Distributor"
    },
    resultsTitle: "Owners who gained calmer days",
    ctaBadge: "Start simple",
    ctaTitle: "Want software that matches your shop?",
    ctaDescription: "Call us. Tell us what breaks each week. We answer in plain words from Patna."
  },
  {
    id: 'crm-erp',
    slug: 'erp-billing-software',
    heroImage: '/Services/ERP.webp',
    heroImageAlt: 'Billing and stock system preview for godowns and shops',
    type: 'engineering',
    icon: 'Database',
    title: 'Billing & stock systems',
    description: 'Fewer bill mistakes. Clear stock. GST ready invoices from the same screen your staff uses every day.',
    category: 'solutions',
    features: ['GST ready bills', 'Godown counts', 'Staff roles', 'Tally friendly handoff'],
    outcomeHeadline: 'Run the shop from <span class="text-[#f59e0b]">your phone or desk</span> without the chaos',
    keyBenefits: ['One place for numbers', 'Fewer math slips', 'Hours back each week'],
    deliverables: [
      { title: 'Fast billing', desc: 'Print or WhatsApp a clean bill in seconds', icon: 'Receipt' },
      { title: 'Godown view', desc: 'See what moved in and out today', icon: 'Database' },
      { title: 'Party ledger', desc: 'Track dues without lost chits', icon: 'Users' }
    ],
    processSteps: [
      { title: 'Walkthrough', desc: 'We visit your shop or office in Bihar' },
      { title: 'Plan', desc: 'We map a lighter flow than today' },
      { title: 'Build', desc: 'We ship billing that matches your lanes' },
      { title: 'Coach', desc: 'We stand with staff until it feels normal' }
    ],
    faqs: [
      { q: 'Can a small shop afford this?', a: 'Yes. We price for counters and godowns, not corporate towers. You see the number before we build.' },
      { q: 'Can we bring old Tally or Excel data?', a: 'Yes. We move sheets and masters safely so you do not start from zero.' },
      { q: 'Can the owner check from home?', a: 'Yes. Sales and stock show on your phone when you allow it.' },
      { q: 'Are bills GST ready?', a: 'Yes. Tax lines match what you file. PDF goes straight to WhatsApp.' }
    ],
    typeSpecificData: {
      stack: ['Safe cloud copy', 'Simple phone view'],
      performance: 'Quick even with deep stock lists',
      security: 'Your books stay private',
      integrations: ['Tally', 'WhatsApp', 'Email']
    },
    results: [
      {
        label: "Counter time",
        value: "35%",
        suffix: "Faster bills",
        desc: "A transporter cut dispatch billing from hours to minutes."
      },
      {
        label: "Clean filing",
        value: "100%",
        suffix: "GST match",
        desc: "A retail shop left handwritten bills for steady digital lines."
      }
    ],
    testimonial: {
      quote: "My team learned it in one day. Stock finally matches the register. GST feels under control.",
      author: "Manager, Local Hardware Store"
    },
    resultsTitle: "Shops that stopped bleeding margin",
    ctaBadge: "Fix the counter",
    ctaTitle: "Still fighting Excel and loose sheets?",
    ctaDescription: "Tell us how bills flow today. We map a calmer setup you can afford."
  },
  {
    id: 'digital-marketing',
    slug: 'local-seo-marketing',
    heroImage: '/Services/DigitalMarketing.webp',
    heroImageAlt: 'Local reach and digital marketing for Patna and Bihar',
    type: 'marketing',
    icon: 'TrendingUp',
    title: 'Local reach & ads',
    description: 'More calls and visits from people near Patna and across Bihar. Maps, simple ads, and clear numbers each month.',
    category: 'marketing',
    features: ['Maps that show your shop', 'Facebook ads nearby', 'WhatsApp offers', 'Starter listing help'],
    outcomeHeadline: 'Help nearby buyers <span class="text-[#f59e0b]">find and call you</span>',
    keyBenefits: ['More real calls', 'Stronger map presence', 'Reports you can read'],
    deliverables: [
      { title: 'Map presence', desc: 'Show up when locals search your trade', icon: 'Search' },
      { title: 'Nearby ads', desc: 'Spend toward families close to you', icon: 'Target' },
      { title: 'WhatsApp nudges', desc: 'Share offers without spamming everyone', icon: 'MessageSquare' }
    ],
    processSteps: [
      { title: 'Look around', desc: 'We study what nearby rivals show online' },
      { title: 'Pick channels', desc: 'We agree budget and focus streets' },
      { title: 'Run', desc: 'We launch maps fixes and small ad sets' },
      { title: 'Review', desc: 'We share calls and leads each month' }
    ],
    faqs: [
      { q: 'How do I know it works?', a: 'You get a short monthly note with calls, clicks, and spend. No fluff charts.' },
      { q: 'Will this help a small clinic or shop?', a: 'Yes. We focus on people who live and work near you.' },
      { q: 'Is it costly?', a: 'We size spend to your comfort. We cut waste before we scale.' },
      { q: 'Do you fix my map listing?', a: 'Yes. Hours, photos, and categories get tuned so Google shows the right face.' }
    ],
    typeSpecificData: {
      channels: ['Facebook', 'Google Maps', 'WhatsApp'],
      reporting: 'Plain monthly scorecard'
    },
    results: [
      {
        label: "Calls",
        value: "4x",
        suffix: "More enquiries",
        desc: "A clinic saw four times the calls after map fixes."
      },
      {
        label: "Spend",
        value: "-22%",
        suffix: "Less waste",
        desc: "We turned off ads that never brought walk ins."
      }
    ],
    testimonial: {
      quote: "Newspaper ads burned cash. Now families find us on the phone map. Calls feel steady.",
      author: "Owner, Patna Retail Shop"
    },
    resultsTitle: "Stores that filled the lane",
    ctaBadge: "Bring footfall",
    ctaTitle: "Want more walk ins this month?",
    ctaDescription: "Share your trade and your area. We draft a simple plan you can afford."
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    heroImage: '/Services/UI_UX.webp',
    heroImageAlt: 'Screen design and easy layouts for staff and customers',
    type: 'design',
    icon: 'Palette',
    title: 'Screen design that feels easy',
    description: 'Layouts and flows that look clean and feel simple for buyers and staff. Less confusion at every tap.',
    category: 'design',
    features: ['Talks with your users', 'Clear wire frames', 'Clickable previews', 'Matching brand colors'],
    outcomeHeadline: 'Screens that feel <span class="text-[#f59e0b]">clear and calm</span> for your buyers',
    keyBenefits: ['Fewer wrong taps', 'Trust at first glance', 'Staff learn faster'],
    deliverables: [
      { title: 'Discovery', desc: 'We learn what buyers and staff need', icon: 'Users' },
      { title: 'Layouts', desc: 'Big buttons and short paths', icon: 'Layout' },
      { title: 'Preview', desc: 'Try flows before code starts', icon: 'Play' }
    ],
    processSteps: [
      { title: 'Listen', desc: 'We capture your brand voice' },
      { title: 'Sketch', desc: 'We draft quick paper style ideas' },
      { title: 'Polish', desc: 'We add color and type you approve' },
      { title: 'Check', desc: 'We test with real staff where possible' }
    ],
    faqs: [
      { q: 'Which tools do you use?', a: 'We design in Figma style tools so you can click through before build.' },
      { q: 'Can you refresh an old app?', a: 'Yes. We tidy screens without breaking what already works.' },
      { q: 'How long is design work?', a: 'Two to four weeks for most apps. More screens add a little time.' },
      { q: 'Do you handle logos?', a: 'Yes. We can pair a fresh mark with your new screens.' }
    ],
    typeSpecificData: {
      gallery: ['Clean layouts', 'Readable type', 'Warm color'],
      philosophy: 'Plain paths first'
    },
    resultsTitle: "Teams who felt the difference",
    results: [
      {
        label: "Ease",
        value: "+40%",
        suffix: "Happier users",
        desc: "A local app cut support calls after we simplified the home path."
      },
      {
        label: "Orders",
        value: "+25%",
        suffix: "More checkout wins",
        desc: "We shortened checkout so more buyers finished payment."
      }
    ],
    ctaBadge: "Refresh screens",
    ctaTitle: "Want an app people actually use?",
    ctaDescription: "Share your screens today. We show a cleaner path without fancy talk."
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-solutions',
    heroImage: '/Services/E-Commerce.webp',
    heroImageAlt: 'Online store and checkout preview for Bihar retailers',
    type: 'engineering',
    icon: 'ShoppingCart',
    title: 'Online store setup',
    description: 'Sell beyond your lane with a store that loads fast on phones. Safe pay and simple order tracking.',
    category: 'development',
    features: ['Multi seller ready', 'UPI and cards', 'Stock ties to godown', 'Sales snapshot'],
    outcomeHeadline: 'Sell online with a <span class="text-[#f59e0b]">store buyers trust</span>',
    keyBenefits: ['Open all day', 'Payments you can explain', 'Orders in one panel'],
    deliverables: [
      { title: 'Your storefront', desc: 'Catalog, cart, and brand feel', icon: 'ShoppingBag' },
      { title: 'Seller ready', desc: 'Invite more brands when you grow', icon: 'Layout' },
      { title: 'Checkout', desc: 'UPI, cards, and cash on delivery', icon: 'CreditCard' }
    ],
    processSteps: [
      { title: 'List', desc: 'We sort products, photos, and tax slabs' },
      { title: 'Wire', desc: 'We connect cart, tax, and pay gates' },
      { title: 'Test', desc: 'We run fake orders across devices' },
      { title: 'Go live', desc: 'We stay close for the first busy week' }
    ],
    faqs: [
      { q: 'Can we leave another platform?', a: 'Yes. We move products and buyers when the data allows.' },
      { q: 'Will phones work smoothly?', a: 'Yes. Most buyers tap on mobile first. We design for that.' },
      { q: 'Which pay modes?', a: 'Razorpay class tools plus cash on delivery when you need it.' },
      { q: 'Can I update stock myself?', a: 'Yes. We hand a simple panel for items and orders.' }
    ],
    typeSpecificData: {
      stack: ['Quick storefront', 'Trusted pay rails'],
      performance: 'Handles busy sale days',
      security: 'Checkout meets card rules'
    },
    resultsTitle: "Shops that opened new lanes",
    results: [
      {
        label: "Online sales",
        value: "+60%",
        suffix: "Lift",
        desc: "A Patna retailer added steady out of town orders."
      },
      {
        label: "Trust",
        value: "Safe",
        suffix: "Checkout",
        desc: "Buyers stopped dropping off at pay thanks to clear steps."
      }
    ],
    ctaBadge: "Sell wider",
    ctaTitle: "Ready to take orders online?",
    ctaDescription: "Tell us what you sell today. We map store scope and train your team."
  },
  {
    id: 'lead-management',
    slug: 'lead-management-systems',
    heroImage: '/Services/LMS.webp',
    heroImageAlt: 'Enquiry and lead tracking for sales teams',
    type: 'engineering',
    icon: 'Users',
    title: 'Enquiry tracking',
    description: 'See every call and form in one list. Know who to ring back first. Fewer slips between teams.',
    category: 'solutions',
    features: ['One inbox for leads', 'Quick WhatsApp ping', 'Works with your ads', 'Weekly score sheet'],
    outcomeHeadline: 'Stop losing enquiries in <span class="text-[#f59e0b]">chat threads</span>',
    keyBenefits: ['Fast alerts', 'Simple follow up lists', 'See which ad worked'],
    deliverables: [
      { title: 'Hot list', desc: 'Spot buyers who are ready now', icon: 'Target' },
      { title: 'Capture', desc: 'Pull forms from web and ads', icon: 'Inbound' },
      { title: 'Auto hello', desc: 'Send first reply in seconds', icon: 'MessageSquare' }
    ],
    processSteps: [
      { title: 'Spot leaks', desc: 'We find where enquiries die today' },
      { title: 'Rules', desc: 'We set who gets pinged first' },
      { title: 'Connect', desc: 'We tie phone, web, and desk' },
      { title: 'Review', desc: 'We check weekly close rates' }
    ],
    faqs: [
      { q: 'Can WhatsApp alert my team?', a: 'Yes. New leads can ping the right phone instantly.' },
      { q: 'Is the list hard to read?', a: 'No. It looks like a clean call sheet with status tags.' },
      { q: 'Can we see which ad worked?', a: 'Yes. Tags show the source for each name.' },
      { q: 'Do you send email too?', a: 'Yes. Thank you notes can go out without manual copy paste.' }
    ],
    typeSpecificData: {
      stack: ['Light tracking kit'],
      performance: 'New names land in minutes',
      security: 'Private customer data'
    },
    resultsTitle: "Teams who closed the loop",
    results: [
      {
        label: "Reply speed",
        value: "-90%",
        suffix: "Faster",
        desc: "Owners moved from hours late to minutes sharp."
      },
      {
        label: "Sales",
        value: "+50%",
        suffix: "More closes",
        desc: "Follow ups stopped slipping through cracks."
      }
    ],
    ctaBadge: "Catch every lead",
    ctaTitle: "Tired of lost enquiries?",
    ctaDescription: "We wire a simple list so your team knows who to call next."
  },
  {
    id: 'ivr',
    slug: 'ivr-calling-solutions',
    heroImage: '/Services/IVR.webp',
    heroImageAlt: 'Business phone menu and call routing preview',
    type: 'engineering',
    icon: 'Phone',
    title: 'Business phone menus',
    description: 'Greet every caller with a clear menu. Route calls to the right desk. Record when you need proof.',
    category: 'solutions',
    features: ['Hindi and English', 'Smart routing', 'Call logs', 'Works on mobiles'],
    outcomeHeadline: 'Answer like a <span class="text-[#f59e0b]">serious firm</span> even after hours',
    keyBenefits: ['Fewer dropped calls', 'Polite first voice', 'Staff know who called'],
    deliverables: [
      { title: 'Cloud line', desc: 'No big box on the wall', icon: 'Cloud' },
      { title: 'Menu tree', desc: 'Press one for sales, two for help', icon: 'CallFlow' },
      { title: 'Call log', desc: 'Replay when a deal needs proof', icon: 'Mic' }
    ],
    processSteps: [
      { title: 'Number', desc: 'We pick a line that fits your brand' },
      { title: 'Voice', desc: 'We record welcome lines you approve' },
      { title: 'Route', desc: 'We send calls to the right mobile' },
      { title: 'Go live', desc: 'We test peak hour load together' }
    ],
    faqs: [
      { q: 'Do I need new handsets?', a: 'No. Cloud routes to the phones you already carry.' },
      { q: 'Can menus be Hindi?', a: 'Yes. Hindi, English, or both in one tree.' },
      { q: 'Is monthly cost high?', a: 'No. It beats old PBX boxes on price and fuss.' },
      { q: 'Are calls stored?', a: 'Yes. You can replay key talks when needed.' }
    ],
    typeSpecificData: {
      stack: ['Stable cloud voice'],
      performance: 'Handles busy lunch rush',
      security: 'Recordings stay private'
    },
    resultsTitle: "Lines that felt calmer",
    results: [
      {
        label: "Missed calls",
        value: "0",
        suffix: "Target",
        desc: "Night shift enquiries finally reached a live person."
      },
      {
        label: "Image",
        value: "Pro",
        suffix: "First touch",
        desc: "Small offices sounded like large brands on ring one."
      }
    ],
    ctaBadge: "Sound pro",
    ctaTitle: "Want a clean business greeting?",
    ctaDescription: "Share call volume and languages. We script a menu that fits."
  },
  {
    id: 'hyperlocal',
    slug: 'hyperlocal-platform-dev',
    heroImage: '/Services/web-app.webp',
    heroImageAlt: 'Local delivery and rider app preview',
    type: 'engineering',
    icon: 'MapPin',
    title: 'Local delivery apps',
    description: 'Track riders on the map. Accept nearby orders. Give buyers a clear ETA without phone chaos.',
    category: 'development',
    features: ['Live rider map', 'Zone control', 'Multi outlet ready', 'Rider friendly app'],
    outcomeHeadline: 'Serve nearby buyers with <span class="text-[#f59e0b]">clear ETAs</span>',
    keyBenefits: ['See riders live', 'Set street limits', 'Boys get simple tasks'],
    deliverables: [
      { title: 'Rider app', desc: 'Tasks and map in one pocket view', icon: 'Navigation' },
      { title: 'Shop board', desc: 'Accept or pause orders fast', icon: 'Store' },
      { title: 'Heat view', desc: 'Learn which blocks order most', icon: 'Map' }
    ],
    processSteps: [
      { title: 'Zones', desc: 'We draw streets you can serve well' },
      { title: 'Build', desc: 'We ship rider and buyer apps' },
      { title: 'Road test', desc: 'We ride along for real loads' },
      { title: 'Grow', desc: 'We add areas when you are ready' }
    ],
    faqs: [
      { q: 'Do maps show live riders?', a: 'Yes. You see movement like the big apps, sized for you.' },
      { q: 'Is there a rider phone app?', a: 'Yes. Tasks, map, and proof of drop stay in one place.' },
      { q: 'Can we limit areas?', a: 'Yes. Draw zones so bikes do not wander too far.' },
      { q: 'Can buyers track orders?', a: 'Yes. They see status without calling your desk.' }
    ],
    typeSpecificData: {
      stack: ['Live map hooks'],
      performance: 'Smooth during peak dinner rush',
      security: 'Location data stays yours'
    },
    resultsTitle: "Neighborhood wins",
    results: [
      {
        label: "Trip time",
        value: "-25%",
        suffix: "Faster drops",
        desc: "Routes tightened so meals arrived hotter."
      },
      {
        label: "Reach",
        value: "3",
        suffix: "New blocks",
        desc: "A pharmacy opened three fresh lanes when ops felt steady."
      }
    ],
    ctaBadge: "Own your zone",
    ctaTitle: "Delivering nearby without the mess?",
    ctaDescription: "Tell us your radius and order style. We shape apps that fit."
  },
  {
    id: 'seo',
    slug: 'seo-optimization-expert',
    heroImage: '/Services/SEO.webp',
    heroImageAlt: 'Search and website tuning for local visibility',
    type: 'marketing',
    icon: 'Search',
    title: 'Search tuning for your site',
    description: 'Help buyers in your city find you on Google without only burning ad money. Faster pages and clearer topics.',
    category: 'marketing',
    features: ['Page clean up', 'Speed fixes', 'Trusted links', 'Monthly rank note'],
    outcomeHeadline: 'Show up when locals <span class="text-[#f59e0b]">type what you sell</span>',
    keyBenefits: ['More free visits', 'Stronger city rank', 'Stay ahead of lazy rivals'],
    deliverables: [
      { title: 'Site health', desc: 'Fix hidden errors that hide you', icon: 'Tools' },
      { title: 'Useful pages', desc: 'Write topics buyers actually search', icon: 'FileText' },
      { title: 'Trust links', desc: 'Earn mentions from real local sites', icon: 'Link' }
    ],
    processSteps: [
      { title: 'Check', desc: 'We see why Google ignores you now' },
      { title: 'Words', desc: 'We list phrases buyers use here' },
      { title: 'Fix', desc: 'We tune tags, text, and speed' },
      { title: 'Note', desc: 'We share rank shifts each month' }
    ],
    faqs: [
      { q: 'How fast is the lift?', a: 'Search gains need months. Most teams see early moves in three to six months.' },
      { q: 'Do you repair site errors?', a: 'Yes. Broken tags and slow loads get cleared so Google can read you.' },
      { q: 'Will shops nearby notice?', a: 'Yes. We aim city and neighborhood phrases you actually win.' },
      { q: 'Do I get a report?', a: 'Yes. A short note shows rank changes without jargon walls.' }
    ],
    typeSpecificData: {
      channels: ['Google search', 'Maps tie ins'],
      reporting: 'Monthly rank snapshot'
    },
    resultsTitle: "Sites that climbed step by step",
    results: [
      {
        label: "Visitors",
        value: "+150%",
        suffix: "Organic lift",
        desc: "A firm doubled unpaid visits after fixes."
      },
      {
        label: "Rank",
        value: "Top 3",
        suffix: "Key terms",
        desc: "A service desk reached page one for its main offer."
      }
    ],
    ctaBadge: "Grow free traffic",
    ctaTitle: "Want Google to notice you?",
    ctaDescription: "Send your site link. We audit gaps and set a steady monthly rhythm."
  },
  {
    id: 'animation',
    slug: 'animation-graphics-design',
    heroImage: '/Services/Animation_Graphics.webp',
    heroImageAlt: 'Video and motion graphics for your business story',
    type: 'design',
    icon: 'Sparkles',
    title: 'Video and motion art',
    description: 'Short clips that explain what you sell before the buyer gets bored. Social ready and easy to share.',
    category: 'design',
    features: ['Motion slides', '2D stories', 'Sixty second explainers', 'Brand bumpers'],
    outcomeHeadline: 'Show your offer in <span class="text-[#f59e0b]">one minute</span>',
    keyBenefits: ['Stops the scroll', 'Makes hard ideas simple', 'Looks sharp on phones'],
    deliverables: [
      { title: 'Explainer', desc: 'Walk through your product with calm voice', icon: 'Video' },
      { title: 'Logo motion', desc: 'Give your mark a living intro', icon: 'Layers' },
      { title: 'Social cut', desc: 'Square clips tuned for feeds', icon: 'Instagram' }
    ],
    processSteps: [
      { title: 'Script', desc: 'We agree one clear story arc' },
      { title: 'Look', desc: 'We lock colors and characters' },
      { title: 'Move', desc: 'We animate and sync sound' },
      { title: 'Handoff', desc: 'You get files ready to post' }
    ],
    faqs: [
      { q: 'Do you supply voice?', a: 'Yes. Hindi, English, or both with clean studio sound.' },
      { q: 'How long is production?', a: 'About two weeks for a simple explainer.' },
      { q: 'Who owns the file?', a: 'You do. We send masters you can reuse.' },
      { q: 'Can my logo move?', a: 'Yes. We can add a short intro sting for reels.' }
    ],
    typeSpecificData: {
      gallery: ['Reels', 'Product demos', 'Festive promos'],
      philosophy: 'Clear beats flashy'
    },
    resultsTitle: "Clips that carried the pitch",
    results: [
      {
        label: "Views",
        value: "5x",
        suffix: "More plays",
        desc: "A retail brand saw five times the plays on paid posts."
      },
      {
        label: "Clarity",
        value: "100%",
        suffix: "Understood",
        desc: "Buyers finally grasped a tricky service in one watch."
      }
    ],
    ctaBadge: "Show your story",
    ctaTitle: "Need a short video that sells?",
    ctaDescription: "Tell us the one point buyers miss. We script a clip around it."
  },
  {
    id: 'compliance',
    slug: 'gst-business-registration',
    heroImage: '/Services/GST.webp',
    heroImageAlt: 'GST registration and business paperwork support',
    type: 'compliance',
    icon: 'FileText',
    title: 'GST and business registration',
    description: 'Open right, file on time, and keep licenses current. We handle forms so you stay on the shop floor.',
    category: 'compliance',
    features: ['New firm setup', 'Monthly GST cycle', 'FSSAI help', 'Trade papers'],
    outcomeHeadline: 'Keep filings and licenses <span class="text-[#f59e0b]">on track</span> without stress',
    keyBenefits: ['Stay within rules', 'Skip late fees', 'Plain advice from Patna'],
    deliverables: [
      { title: 'Firm start', desc: 'Proprietor, LLP, or Pvt Ltd setup', icon: 'Briefcase' },
      { title: 'GST cycle', desc: 'Monthly returns filed on schedule', icon: 'FileText' },
      { title: 'Local permits', desc: 'FSSAI, trade, shop papers', icon: 'Shield' }
    ],
    processSteps: [
      { title: 'Papers', desc: 'We list exactly what to bring' },
      { title: 'Submit', desc: 'We file with Bihar portals for you' },
      { title: 'Follow up', desc: 'We answer officer queries' },
      { title: 'Proof', desc: 'You receive certs on WhatsApp' }
    ],
    faqs: [
      { q: 'How long for a new shop registration?', a: 'Most setups finish in seven to fifteen days once papers are ready.' },
      { q: 'Will you run monthly GST?', a: 'Yes. Timely filing so fines do not stack.' },
      { q: 'Opening a restaurant?', a: 'Yes. FSSAI plus local trade steps handled together.' },
      { q: 'Do you file income tax too?', a: 'Yes. Owners and staff returns stay in one lane.' }
    ],
    typeSpecificData: {
      renewal: 'WhatsApp reminders before due dates',
      consultancy: 'Straight talk on local rules'
    },
    resultsTitle: "Owners who slept better",
    results: [
      {
        label: "New firms",
        value: "200+",
        suffix: "Opened",
        desc: "Fresh registrations across Bihar with clear handovers."
      },
      {
        label: "Late fees",
        value: "₹0",
        suffix: "GST goal",
        desc: "Monthly filers avoided penalty stacks."
      }
    ],
    ctaBadge: "Stay compliant",
    ctaTitle: "Starting a shop or switching CA?",
    ctaDescription: "Share your trade type. We list forms, costs, and dates in plain words."
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

/** Homepage / solutions counters - trust facts for local owners. */
export const metrics = [
  {
    label: "Serving Bihar since",
    emphasis: "2018",
  },
  {
    label: "Local businesses served",
    value: 90,
    suffix: "+",
  },
  {
    label: "Clients who stay with us",
    value: 98,
    suffix: "%",
  },
  {
    label: "Face to face help in",
    emphasis: "Patna",
  },
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
    excerpt: 'Software Development Patna & Digital Marketing Bihar guide. Take your local shop online - website, Local SEO, GST registration. Practical guidance for regional SMEs.',
    image: 'technology-abstract-digital-network-dark',
    author: COMPANY_INFO.team.ceo.name,
    authorRole: 'CEO',
    tags: ['Software Development Patna', 'Digital Marketing Patna', 'Local SEO Bihar', 'Business Software Patna'],
    content: `
      <h2>The Shift in Bihar's Business Market</h2>
      <p>In 2026, every successful business in Patna - from retail shops on Boring Road to agencies in Kankarbagh - is using technology to find more customers. As a leading <strong>Software Development Company in Patna</strong>, we've seen local shops transform with the right IT tools.</p>
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
    excerpt: 'GST Registration Patna & Bihar made easy. Learn GST rules for SMEs, monthly filing tips, and avoid penalties. Expert compliance support in Patna since 2018.',
    image: 'business-paperwork-official-documents',
    author: 'Neha Kapoor',
    authorRole: 'Head of Compliance',
    tags: ['GST Registration Patna', 'GST Registration Bihar', 'Business Registration Bihar', 'Tax Compliance'],
    content: `
      <h2>Stay Safe with Honest Compliance in Bihar</h2>
      <p>We know that handling taxes can be scary for many business owners. In Bihar, staying 100% compliant isn't just about following the law - it's about building a stable foundation for your growth. <strong>GST Registration Patna</strong> and <strong>GST Registration Bihar</strong> are the first steps for most small businesses.</p>
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
      <p>Retailers across Patna - from Kankarbagh to Boring Road - are discovering that <strong>Billing Software Patna</strong> doesn't just look professional - it saves hours of manual work every week. Custom <strong>GST Billing Software</strong> eliminates errors and keeps you compliant.</p>
      <h3>Fast Checkout, Happy Customers</h3>
      <p>Reduce wait times at your counter with barcode scanning and instant QR payment links. Our <strong>Retail Billing Software Patna</strong> solutions work even on slow internet - common in many Bihar locations.</p>
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
    excerpt: 'CRM Patna & Lead Management Bihar. Custom CRM for SMEs - capture leads from Google, WhatsApp, phone. Trusted by Patna distributors and service businesses.',
    image: 'business-growth-analytics-dashboard',
    author: COMPANY_INFO.team.coFounder.name,
    authorRole: COMPANY_INFO.team.coFounder.role,
    tags: ['CRM Patna', 'Lead Management Bihar', 'Custom Software Patna', 'Sales Automation'],
    content: `
      <h2>Tailored CRM for Patna & Bihar Businesses</h2>
      <p>Generic CRM solutions often come with bloated features that SMEs don't need. A <strong>custom CRM Patna</strong> focuses on your specific sales funnel - whether you're a distributor, clinic, or service business in Bihar.</p>
      <h3>Improving Lead Management in Bihar</h3>
      <p>Capture and track leads from multiple sources - Google ads, WhatsApp, phone calls - in one unified dashboard. <strong>Lead Management Bihar</strong> systems that alert your team instantly so you never miss a follow-up.</p>
      <h3>Enhanced Sales Productivity for Patna Teams</h3>
      <p>Automating repetitive tasks allows your sales team to focus on building relationships and closing deals. Our <strong>Custom Software Patna</strong> integrates with your existing tools - no expensive enterprise licenses required.</p>
    `,
  },
];

export const teamMembers = [
  {
    id: 1,
    name: COMPANY_INFO.team.ceo.name,
    role: COMPANY_INFO.team.ceo.role,
    bio: `${COMPANY_INFO.yearsOfExperience}+ years in enterprise software and digital transformation`,
  },
  {
    id: 2,
    name: COMPANY_INFO.team.coFounder.name,
    role: COMPANY_INFO.team.coFounder.role,
    bio: "Strategic leader focusing on scaling operations and ecosystem growth",
  },
  {
    id: 3,
    name: COMPANY_INFO.team.cto.name,
    role: COMPANY_INFO.team.cto.role,
    bio: "Tech visionary specializing in cloud architecture and enterprise software",
  },
];

export const faqs = [
  {
    question: "How much does a simple billing or stock system cost?",
    answer:
      "We price for small shops and clinics, not big brand budgets. A basic billing setup or site starts low. Bigger godown or factory work follows a clear list of features. You get an upfront quote before we start.",
  },
  {
    question: "How long before we can use it every day?",
    answer:
      "Most shop systems go live in three to six weeks. Simple sites or GST setup often take five to seven days. We give one timeline in writing before work begins.",
  },
  {
    question: "Can you visit my shop or godown in Patna?",
    answer:
      "Yes. We sit in Patna and work across Bihar. If the counter breaks or staff need training, we can come to your shop, clinic, or godown.",
  },
  {
    question: "Is my billing and customer data safe?",
    answer:
      "Yes. We store backups on trusted cloud hosts. Your bills, stock, and customer list stay off one fragile PC. Daily backup means a stolen PC does not erase your year.",
  },
  {
    question: "Do you handle GST filing and the billing tool together?",
    answer:
      "Yes. We connect the bill flow with filing so you are not stuck between two vendors. One team owns the full loop.",
  },
  {
    question: "What if my staff are not strong on computers?",
    answer:
      "We keep screens clean and train on site in Hindi or English until your team runs daily work with confidence.",
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
    text: 'EDUNEX automated our godown billing. Now my staff makes zero mistakes with GST. Best local support in Patna.',
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