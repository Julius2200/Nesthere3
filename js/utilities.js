//open content function
function openContent(slug) {
  const PAGES = {
    // ── RESOURCES ──
    "Stamp Duty Calculator": {
      category: "Resources",
      standfirst:
        "Work out how much stamp duty (SDLT) you\u2019ll pay when buying a home in England or Northern Ireland.",
      blocks: [
        {
          type: "lead",
          text: "Stamp Duty Land Tax is charged in bands, so you only pay each rate on the portion of the price within that band. Enter a price to see an estimate.",
        },
        { type: "calc", kind: "stamp" },
        {
          type: "faq",
          items: [
            {
              q: "When do I pay stamp duty?",
              a: "It\u2019s due within 14 days of completing your purchase. Your solicitor or conveyancer usually files the return and pays on your behalf.",
            },
            {
              q: "Do first-time buyers pay less?",
              a: "Yes. First-time buyers pay nothing up to \u00a3425,000 and a reduced rate up to \u00a3625,000. Above \u00a3625,000 the standard rates apply.",
            },
          ],
        },
      ],
    },
    "House Price Index": {
      category: "Resources",
      standfirst:
        "Track average asking prices across the UK and see how the market is moving.",
      blocks: [
        {
          type: "stats",
          items: [
            {
              v: "\u00a3371,958",
              l: "Average UK asking price",
              s: "This month",
            },
            { v: "+0.4%", l: "Monthly change", s: "vs last month" },
            { v: "+1.3%", l: "Annual change", s: "vs last year" },
          ],
        },
        {
          type: "bars",
          title: "Average asking price by region",
          items: [
            { label: "London", value: "\u00a3685,241", pct: 100 },
            { label: "South East", value: "\u00a3483,120", pct: 71 },
            { label: "East of England", value: "\u00a3421,880", pct: 62 },
            { label: "South West", value: "\u00a3389,450", pct: 57 },
            { label: "West Midlands", value: "\u00a3287,990", pct: 42 },
            { label: "North West", value: "\u00a3262,540", pct: 38 },
            { label: "Scotland", value: "\u00a3198,760", pct: 29 },
          ],
        },
        {
          type: "lead",
          text: "Figures are illustrative sample data for this prototype and don\u2019t reflect live market values.",
        },
      ],
    },
    "Property guides": hub(
      "Resources",
      "Whatever stage you\u2019re at, our guides walk you through buying, renting, selling and financing a home.",
      [
        {
          title: "Buying a home",
          blurb: "From your first viewing to picking up the keys.",
          tag: "Guide",
          action: "content:Buyer guides",
        },
        {
          title: "Renting a home",
          blurb: "Deposits, contracts and your rights as a tenant.",
          tag: "Guide",
          action: "content:Renter guides",
        },
        {
          title: "Selling a home",
          blurb: "Pricing, marketing and choosing an agent.",
          tag: "Guide",
          action: "content:Seller guides",
        },
        {
          title: "Mortgages",
          blurb: "How much you can borrow and what it costs.",
          tag: "Guide",
          action: "content:Mortgage guides",
        },
        {
          title: "Being a landlord",
          blurb: "Letting, compliance and managing tenancies.",
          tag: "Guide",
          action: "content:Landlord guides",
        },
      ],
    ),
    "Property news": {
      category: "Resources",
      standfirst: "The latest on the UK property market, mortgages and moving.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Asking prices edge up as the spring market warms",
              blurb:
                "New-seller pricing rises modestly as more homes come to market.",
              tag: "Market",
            },
            {
              title: "What the latest base rate means for your mortgage",
              blurb:
                "How recent moves are filtering through to monthly repayments.",
              tag: "Mortgages",
            },
            {
              title: "Where first-time buyers get most for their money",
              blurb: "The towns offering space and value right now.",
              tag: "Buying",
            },
            {
              title: "Renting trends shaping the year ahead",
              blurb: "Demand, supply and what tenants can expect.",
              tag: "Renting",
            },
          ],
        },
      ],
    },
    "Buyer guides": {
      category: "Resources",
      standfirst:
        "A step-by-step path from saving your deposit to collecting the keys.",
      blocks: [
        {
          type: "steps",
          title: "How buying works",
          items: [
            {
              title: "Set your budget",
              text: "Factor in deposit, stamp duty, legal fees and moving costs.",
            },
            {
              title: "Get a Mortgage in Principle",
              text: "It shows sellers you\u2019re serious and sets your price range.",
            },
            {
              title: "Search and view",
              text: "Save searches and book viewings for homes that fit.",
            },
            {
              title: "Make an offer",
              text: "Negotiate with the agent and agree a price.",
            },
            {
              title: "Conveyancing and survey",
              text: "Your solicitor handles searches and contracts; a survey checks the property.",
            },
            {
              title: "Exchange and complete",
              text: "Sign contracts, transfer funds and collect the keys.",
            },
          ],
        },
        {
          type: "cta",
          heading: "Ready to start looking?",
          buttons: [
            { label: "Browse homes for sale", action: "catalogue:buy" },
            {
              label: "Mortgage Calculator",
              action: "content:Mortgage Calculator",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Seller guides": {
      category: "Resources",
      standfirst:
        "Everything you need to sell for the right price, with less stress.",
      blocks: [
        {
          type: "steps",
          title: "How selling works",
          items: [
            {
              title: "Get a valuation",
              text: "Understand what your home is worth in the current market.",
            },
            {
              title: "Prepare and photograph",
              text: "Declutter, fix the small things and capture strong photos.",
            },
            {
              title: "List on NestHere",
              text: "Publish your listing and reach buyers across the UK.",
            },
            {
              title: "Handle viewings and offers",
              text: "Show the home and negotiate with interested buyers.",
            },
            {
              title: "Progress to completion",
              text: "Work with solicitors through to exchange and completion.",
            },
          ],
        },
        {
          type: "cta",
          heading: "List your property",
          text: "Create a listing with our step-by-step builder.",
          buttons: [{ label: "Add a new property", action: "addlisting" }],
        },
      ],
    },
    "Renter guides": {
      category: "Resources",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "renterguides" }],
    },
    "Landlord guides": {
      category: "Resources",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "landlordguides" }],
    },
    Removals: {
      category: "Resources",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "removals" }],
    },
    "Removal companies": {
      category: "Resources",
      standfirst:
        "Compare local, vetted removal companies and request a free quote.",
      blocks: [
        {
          type: "lead",
          text: "Every NestHere removal partner is vetted, fully insured and Ombudsman-backed. Browse companies covering your area and request a quote from as many as you like \u2014 they\u2019ll be in touch.",
        },
        { type: "removalagents" },
        {
          type: "cta",
          heading: "Planning the rest of your move?",
          buttons: [
            { label: "Track your move", action: "content:Track your move" },
            {
              label: "Removals guide",
              action: "content:Removals",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Energy efficiency": {
      category: "Resources",
      standfirst:
        "Understand EPC ratings and the upgrades that cut bills and carbon.",
      blocks: [
        {
          type: "lead",
          text: "Every home for sale or rent needs an Energy Performance Certificate (EPC), rated A (most efficient) to G. A better rating usually means lower running costs.",
        },
        {
          type: "features",
          title: "Improvements that move the needle",
          items: [
            "Loft and cavity wall insulation",
            "Double or triple glazing",
            "A modern condensing boiler or heat pump",
            "LED lighting throughout",
            "Smart thermostat and controls",
            "Solar panels where suitable",
          ],
        },
        {
          type: "cta",
          heading: "Check a property\u2019s EPC",
          text: "EPC ratings appear on every NestHere listing.",
          buttons: [
            { label: "Browse homes for sale", action: "catalogue:buy" },
          ],
        },
      ],
    },
    "Mortgage in Principle": {
      category: "Resources",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "mip" }],
    },
    "Mortgage Calculator": {
      category: "Resources",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "mortgagecalc" }],
    },
    "Mortgage guides": hub(
      "Resources",
      "Plain-English guides to getting a mortgage and keeping costs down.",
      [
        {
          title: "How much can I borrow?",
          blurb: "What lenders look at and how to improve your chances.",
          tag: "Guide",
        },
        {
          title: "Fixed vs variable rates",
          blurb: "The trade-offs between certainty and flexibility.",
          tag: "Guide",
        },
        {
          title: "Deposits explained",
          blurb: "How your deposit affects the rate you\u2019re offered.",
          tag: "Guide",
        },
        {
          title: "Remortgaging",
          blurb: "When and how to switch to a better deal.",
          tag: "Guide",
        },
      ],
      ["Mortgage Calculator", "Mortgage in Principle"],
    ),

    // ── NAV HUB ──
    Mortgages: {
      category: "Mortgages",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "mortgageshub" }],
    },

    // ── SEARCH (landing pages; direct-search items route to the catalogue) ──
    "Commercial for sale": {
      category: "Search",
      standfirst:
        "Offices, retail, industrial units and investment opportunities for sale.",
      blocks: [
        {
          type: "features",
          title: "Browse by type",
          items: [
            "Offices",
            "Retail and shops",
            "Industrial and warehouses",
            "Leisure and hospitality",
            "Land and development",
            "Investments",
          ],
        },
        {
          type: "cta",
          heading: "Search commercial property for sale",
          buttons: [{ label: "View listings", action: "catalogue:buy" }],
        },
      ],
    },
    "Commercial to rent": {
      category: "Search",
      standfirst: "Flexible offices, shops and units to let across the UK.",
      blocks: [
        {
          type: "features",
          title: "Browse by type",
          items: [
            "Serviced offices",
            "Retail units",
            "Workshops and studios",
            "Warehousing",
            "Restaurants and cafes",
            "Coworking",
          ],
        },
        {
          type: "cta",
          heading: "Search commercial property to rent",
          buttons: [{ label: "View listings", action: "catalogue:rent" }],
        },
      ],
    },
    "Overseas homes for sale": {
      category: "Search",
      standfirst:
        "Holiday homes and overseas property from popular destinations.",
      blocks: [
        {
          type: "cards",
          title: "Popular destinations",
          items: [
            {
              title: "Spain",
              blurb: "Costa del Sol, Alicante and the islands.",
            },
            {
              title: "France",
              blurb: "From rural retreats to city apartments.",
            },
            {
              title: "Portugal",
              blurb: "The Algarve, Lisbon and Silver Coast.",
            },
            { title: "Italy", blurb: "Tuscany, the lakes and the south." },
          ],
        },
        {
          type: "cta",
          heading: "Thinking of buying abroad?",
          text: "Read up before you commit.",
          buttons: [{ label: "Buyer guides", action: "content:Buyer guides" }],
        },
      ],
    },
    "Find an agent": {
      category: "Search",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "findagent" }],
    },
    "Student accommodation": {
      category: "Search",
      standfirst:
        "Halls, shared houses and studios near campuses across the UK.",
      blocks: [
        {
          type: "features",
          title: "What to look for",
          items: [
            "Distance to campus",
            "Bills included options",
            "Contract length and break clauses",
            "Deposit protection",
            "Broadband speed",
            "Houses of multiple occupation (HMO) licensing",
          ],
        },
        {
          type: "listings",
          mode: "rent",
          title: "Lettings to consider",
          limit: 3,
        },
        {
          type: "cta",
          heading: "Search student lets",
          buttons: [
            { label: "Browse homes to rent", action: "catalogue:rent" },
          ],
        },
      ],
    },
    "Retirement homes": {
      category: "Search",
      standfirst: "Age-exclusive and retirement living, for sale and to rent.",
      blocks: [
        {
          type: "features",
          title: "Typical features",
          items: [
            "Age-exclusive communities",
            "On-site managers",
            "Communal lounges and gardens",
            "Step-free access",
            "Emergency call systems",
            "Optional care packages",
          ],
        },
        {
          type: "cta",
          heading: "Explore retirement living",
          buttons: [
            { label: "Homes for sale", action: "catalogue:buy" },
            {
              label: "Homes to rent",
              action: "catalogue:rent",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "New homes": {
      category: "Search",
      standfirst:
        "Brand-new houses and apartments from developers across the UK.",
      blocks: [
        {
          type: "cards",
          title: "Why buy new",
          items: [
            {
              title: "Energy efficient",
              blurb: "Lower running costs and higher EPC ratings.",
            },
            {
              title: "Help to buy schemes",
              blurb: "Shared ownership and incentives where available.",
            },
            {
              title: "Chain-free",
              blurb: "No onward chain to slow your move.",
            },
            {
              title: "Warranties",
              blurb: "Typically covered for up to ten years.",
            },
          ],
        },
        {
          type: "listings",
          mode: "new",
          title: "New homes for sale",
          limit: 6,
        },
        {
          type: "cta",
          heading: "Find a new home",
          buttons: [{ label: "Browse new homes", action: "catalogue:buy" }],
        },
      ],
    },

    // ── MAJOR TOWNS AND CITIES ──
    London: locationPage("London", "\u00a3685,241", "+1.1%", "12,480", [
      "Camden",
      "Greenwich",
      "Richmond",
      "Shoreditch",
      "Clapham",
    ]),
    Cornwall: locationPage("Cornwall", "\u00a3361,090", "+0.6%", "2,140", [
      "Truro",
      "St Ives",
      "Falmouth",
      "Newquay",
      "Padstow",
    ]),
    Glasgow: locationPage("Glasgow", "\u00a3209,870", "+2.0%", "3,560", [
      "West End",
      "Shawlands",
      "Dennistoun",
      "Pollokshields",
      "Merchant City",
    ]),
    Cardiff: locationPage("Cardiff", "\u00a3289,430", "+1.4%", "1,920", [
      "Pontcanna",
      "Roath",
      "Penarth",
      "Cyncoed",
      "Cathays",
    ]),
    Edinburgh: locationPage("Edinburgh", "\u00a3331,760", "+1.7%", "2,780", [
      "Leith",
      "Stockbridge",
      "Morningside",
      "Bruntsfield",
      "Newington",
    ]),

    // ── ABOUT ──
    "Press centre": {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "press" }],
    },
    About: {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "about" }],
    },
    "Data Services": {
      category: "Professional",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "dataservices" }],
    },
    "Market Intelligence Centre": {
      category: "Data Services",
      standfirst:
        "Identify investment, land and building opportunities with 24/7 access to NestHere market data.",
      blocks: [
        {
          type: "lead",
          text: "A web-based platform giving property professionals on-demand access to NestHere\u2019s sales and rental data \u2014 supply, demand, pricing and time-on-market \u2014 down to local level.",
        },
        {
          type: "features",
          title: "What you get",
          items: [
            "24/7 access via a web-based platform",
            "Sales and rental supply, demand and pricing",
            "Local, regional and national views",
            "Historical trends and lead indicators",
            "Exportable charts and tables",
          ],
        },
        {
          type: "features",
          title: "Who it\u2019s for",
          items: [
            "Investors",
            "Consultants",
            "Local authorities",
            "New homes developers",
            "Housing associations",
            "Lenders",
          ],
        },
        {
          type: "cta",
          heading: "Talk to our data team",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Back to Data Services",
              action: "content:Data Services",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Bespoke Data Analysis": {
      category: "Data Services",
      standfirst:
        "Custom analysis to support property and investment decisions at any scale.",
      blocks: [
        {
          type: "lead",
          text: "When you need answers a standard report can\u2019t give, our specialist team builds a tailored analysis around your question, using the full NestHere dataset.",
        },
        {
          type: "features",
          title: "What you get",
          items: [
            "A custom report built by our specialist team",
            "Analysis tailored to your specific question",
            "Sales or rental focus, or both",
            "Clear methodology and source notes",
          ],
        },
        {
          type: "features",
          title: "Who it\u2019s for",
          items: [
            "Investors",
            "Consultants",
            "Local authorities",
            "New homes developers",
            "Housing associations",
          ],
        },
        {
          type: "cta",
          heading: "Discuss your requirements",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Back to Data Services",
              action: "content:Data Services",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Development Insight Report": {
      category: "Data Services",
      standfirst:
        "Support land acquisition and building decisions with a consistent, ready-made report.",
      blocks: [
        {
          type: "lead",
          text: "A standardised report that brings together local supply, demand and pricing signals to help you assess a site or scheme quickly and consistently.",
        },
        {
          type: "features",
          title: "What you get",
          items: [
            "A consistent report built by our team",
            "Local supply, demand and pricing",
            "New-build and second-hand context",
            "Useful for site appraisals and planning",
          ],
        },
        {
          type: "features",
          title: "Who it\u2019s for",
          items: [
            "Investors",
            "Consultants",
            "Local authorities",
            "New homes developers",
            "Housing associations",
          ],
        },
        {
          type: "cta",
          heading: "Request a report",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Back to Data Services",
              action: "content:Data Services",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Surveyors Comparable Tool": {
      category: "Data Services",
      standfirst: "Support full or desktop valuations supplied to lenders.",
      blocks: [
        {
          type: "lead",
          text: "A fast way to find and compare relevant comparable evidence, available through a web platform or API integration into your own workflow.",
        },
        {
          type: "features",
          title: "What you get",
          items: [
            "24/7 access via web platform or API",
            "Relevant sales and listing comparables",
            "Supports full and desktop valuations",
            "Audit-friendly evidence trail",
          ],
        },
        {
          type: "features",
          title: "Who it\u2019s for",
          items: ["Surveyors", "Lenders", "Local authorities"],
        },
        {
          type: "cta",
          heading: "See it in action",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Back to Data Services",
              action: "content:Data Services",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Automated Valuation Model": {
      category: "Data Services",
      standfirst:
        "Support lending decisions where a surveyor\u2019s report isn\u2019t required.",
      blocks: [
        {
          type: "lead",
          text: "An automated estimate of a property\u2019s value, powered by the NestHere dataset and available on demand via a web platform or API.",
        },
        {
          type: "features",
          title: "What you get",
          items: [
            "24/7 access via web platform or API",
            "Instant automated valuations",
            "Confidence scoring on each estimate",
            "Coverage across the UK",
          ],
        },
        {
          type: "features",
          title: "Who it\u2019s for",
          items: [
            "Investors",
            "Consultants",
            "Housing associations",
            "Surveyors",
            "Lenders",
          ],
        },
        {
          type: "cta",
          heading: "Integrate the AVM",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Back to Data Services",
              action: "content:Data Services",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Property Risk Alerts": {
      category: "Data Services",
      standfirst:
        "Understand potential underlying risk factors when assessing a property.",
      blocks: [
        {
          type: "lead",
          text: "Flag potential risk factors against a property so they can be reviewed as part of your assessment \u2014 via web platform or API.",
        },
        {
          type: "features",
          title: "What you get",
          items: [
            "24/7 access via web platform or API",
            "Indicators of potential underlying risk",
            "Integrates into your assessment workflow",
            "Helps prioritise further checks",
          ],
        },
        {
          type: "features",
          title: "Who it\u2019s for",
          items: ["Surveyors", "Lenders"],
        },
        {
          type: "cta",
          heading: "Find out more",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Back to Data Services",
              action: "content:Data Services",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Safety and Security": {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "safety" }],
    },
    "Investor relations": {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "investors" }],
    },
    "Contact us": {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "contactus" }],
    },
    Careers: {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "careers" }],
    },
    "Home Views": {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "homeviews" }],
    },

    // ── DATA SERVICES ──
    "Advertise on NestHere": {
      category: "Professional",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "advertise" }],
    },
    "Overseas agents and developers": {
      category: "Professional",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "oadvertise" }],
    },
    "Home and property related services": {
      category: "Professional",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "dadvertise" }],
    },
    "Advertise commercial property": {
      category: "Professional",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "cadvertise" }],
    },
    "Business Hub": {
      category: "Professional",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "businesshub" }],
    },

    // ── LEGAL ──
    "Privacy Policy": {
      category: "Legal",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "legal", doc: "Privacy Policy" }],
    },
    "Terms of Use": {
      category: "Legal",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "legal", doc: "Terms of Use" }],
    },
    "Cookie Policy": {
      category: "Legal",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "legal", doc: "Cookie Policy" }],
    },

    // ── HUBS (top-level sections) ──
    Inspire: hub(
      "Inspire",
      "Stories, guides and market insight to help you move with confidence.",
      [
        {
          title: "Property news",
          blurb: "What\u2019s happening across the UK market.",
          tag: "News",
          action: "content:Property news",
        },
        {
          title: "Housing trends",
          blurb: "The data behind prices, demand and supply.",
          tag: "Data",
          action: "content:Housing trends",
        },
        {
          title: "Moving stories",
          blurb: "Real moves from people who found their place.",
          tag: "Stories",
          action: "content:Moving stories",
        },
        {
          title: "Property guides",
          blurb: "Step-by-step help for every stage.",
          tag: "Guides",
          action: "content:Property guides",
        },
        {
          title: "Energy efficiency",
          blurb: "Greener homes and lower running costs.",
          tag: "Green",
          action: "content:Energy efficiency",
        },
        {
          title: "Mortgage guides",
          blurb: "Borrowing, rates and getting approved.",
          tag: "Money",
          action: "content:Mortgage guides",
        },
      ],
    ),
    Commercial: hub(
      "Commercial",
      "Offices, retail, industrial and investment property across the UK.",
      [
        {
          title: "Commercial for sale",
          blurb: "Buy premises or investment assets.",
          tag: "For sale",
          action: "content:Commercial for sale",
        },
        {
          title: "Commercial to rent",
          blurb: "Lease space that fits your business.",
          tag: "To rent",
          action: "content:Commercial to rent",
        },
        {
          title: "Advertise commercial property",
          blurb: "Reach buyers, tenants and investors.",
          tag: "For agents",
          action: "content:Advertise commercial property",
        },
      ],
    ),
    Overseas: hub(
      "Overseas",
      "Find a home in the sun, or sell to UK buyers searching from home.",
      [
        {
          title: "Property in Spain",
          blurb: "Costa, city and island homes.",
          tag: "Spain",
          action: "content:Property in Spain",
        },
        {
          title: "Property in France",
          blurb: "Paris apartments to rural retreats.",
          tag: "France",
          action: "content:Property in France",
        },
        {
          title: "Property in Portugal",
          blurb: "The Algarve, Lisbon and beyond.",
          tag: "Portugal",
          action: "content:Property in Portugal",
        },
        {
          title: "Property in Italy",
          blurb: "Tuscan villas to lakeside escapes.",
          tag: "Italy",
          action: "content:Property in Italy",
        },
        {
          title: "Property in Greece",
          blurb: "Island living and mainland gems.",
          tag: "Greece",
          action: "content:Property in Greece",
        },
        {
          title: "Currency converter",
          blurb: "See what your budget is worth abroad.",
          tag: "Tool",
          action: "content:Currency converter",
        },
        {
          title: "Sell overseas property",
          blurb: "Advertise to the UK\u2019s overseas buyers.",
          tag: "Sell",
          action: "content:Sell overseas property",
        },
      ],
    ),

    // ── FEATURE PAGES ──
    "Sold house prices": {
      category: "House Prices",
      standfirst:
        "See what homes actually sold for, then check how prices are moving in your area.",
      blocks: [
        {
          type: "lead",
          text: "Sold prices are a reliable guide to value because they reflect completed sales, not asking prices. Search a street or area to compare like with like.",
        },
        {
          type: "stats",
          items: [
            {
              v: "\u00a3371,958",
              l: "Average sold price (UK)",
              s: "Last 12 months",
            },
            {
              v: "48 days",
              l: "Average time to sell",
              s: "Offer to completion",
            },
            { v: "97.1%", l: "Sold vs asking price", s: "Average achieved" },
          ],
        },
        {
          type: "cta",
          heading: "Check sold prices near you",
          buttons: [
            { label: "Browse recently sold", action: "catalogue:sold" },
            {
              label: "House Price Index",
              action: "content:House Price Index",
              variant: "outline",
            },
          ],
        },
        {
          type: "related",
          items: ["House Price Index", "Property valuation", "Housing trends"],
        },
      ],
    },
    "Property valuation": {
      category: "Sell",
      standfirst:
        "Find out what your home could be worth, with a free, no-obligation valuation.",
      blocks: [
        {
          type: "steps",
          title: "How a valuation works",
          items: [
            {
              title: "Tell us about your home",
              text: "Address, property type, bedrooms and condition.",
            },
            {
              title: "Get an instant estimate",
              text: "We combine sold prices and local trends for a guide figure.",
            },
            {
              title: "Book an agent visit",
              text: "A local expert confirms the value in person, free of charge.",
            },
          ],
        },
        {
          type: "cta",
          heading: "Ready to find out?",
          text: "Most sellers start with an online estimate, then book an in-person valuation.",
          buttons: [
            { label: "Request a valuation", action: "content:Contact us" },
            {
              label: "List your property",
              action: "addlisting",
              variant: "outline",
            },
          ],
        },
        {
          type: "related",
          items: [
            "Sold house prices",
            "Seller guides",
            "Home and property related services",
          ],
        },
      ],
    },
    "Track your move": {
      category: "Resources",
      standfirst:
        "A simple timeline to keep your move on track, from offer to keys.",
      blocks: [
        {
          type: "steps",
          title: "Your moving timeline",
          items: [
            {
              title: "Offer accepted",
              text: "Instruct a solicitor and apply for your mortgage.",
            },
            {
              title: "Surveys and searches",
              text: "Book a survey and let conveyancing run the local searches.",
            },
            {
              title: "Exchange contracts",
              text: "Pay your deposit; the move becomes legally binding.",
            },
            {
              title: "Set up your home",
              text: "Arrange utilities, broadband, council tax and removals.",
            },
            {
              title: "Completion day",
              text: "Funds transfer and keys are released \u2014 you\u2019re in.",
            },
          ],
        },
        {
          type: "cta",
          heading: "Plan the practical bits",
          buttons: [
            { label: "Removals guidance", action: "content:Removals" },
            {
              label: "Energy efficiency",
              action: "content:Energy efficiency",
              variant: "outline",
            },
          ],
        },
      ],
    },
    "Currency converter": {
      category: "Overseas",
      standfirst:
        "A quick guide to what your budget is worth in popular overseas markets.",
      blocks: [
        { type: "calc", kind: "currency" },
        {
          type: "lead",
          text: "Rates shown are illustrative sample figures for this prototype, not live exchange rates.",
        },
        {
          type: "related",
          items: [
            "Property in Spain",
            "Property in France",
            "Sell overseas property",
          ],
        },
      ],
    },
    Glossary: {
      category: "Resources",
      standfirst:
        "Plain-English definitions of the property terms you\u2019ll come across.",
      blocks: [
        {
          type: "rich",
          html:
            '<dl class="c-glossary">' +
            "<dt>Asking price</dt><dd>The price a seller advertises a property for; offers can be above or below.</dd>" +
            "<dt>Chain</dt><dd>A sequence of linked sales where each purchase depends on the one before it completing.</dd>" +
            "<dt>Conveyancing</dt><dd>The legal process of transferring property ownership from seller to buyer.</dd>" +
            "<dt>EPC</dt><dd>Energy Performance Certificate, rating a home\u2019s energy efficiency from A to G.</dd>" +
            "<dt>Freehold</dt><dd>You own the property and the land it stands on outright.</dd>" +
            "<dt>Gazumping</dt><dd>When a seller accepts a higher offer after already accepting yours.</dd>" +
            "<dt>Leasehold</dt><dd>You own the property for a fixed term but not the land; ground rent may apply.</dd>" +
            "<dt>Loan to value (LTV)</dt><dd>The size of your mortgage as a percentage of the property price.</dd>" +
            "<dt>Stamp duty</dt><dd>A tax paid when buying property above certain price thresholds.</dd>" +
            "<dt>Under offer</dt><dd>An offer has been accepted but the sale has not yet completed.</dd>" +
            "</dl>",
        },
      ],
    },
    "Help Centre": {
      category: "About",
      hideHero: true,
      standfirst: "",
      blocks: [{ type: "helpcentre" }],
    },
    "Site map": {
      category: "About",
      standfirst:
        "Every NestHere page in one place \u2014 jump straight to property searches, guides, tools and more.",
      blocks: [{ type: "sitemap" }],
    },

    // ── INSPIRE EDITORIAL ──
    "Housing trends": {
      category: "Inspire",
      standfirst:
        "The numbers behind the headlines \u2014 prices, demand and supply.",
      blocks: [
        {
          type: "stats",
          items: [
            { v: "+1.3%", l: "Annual asking price growth", s: "UK average" },
            { v: "62", l: "Average days on market", s: "Down from 71" },
            { v: "1.8", l: "Buyers per new listing", s: "Demand index" },
          ],
        },
        {
          type: "cards",
          items: [
            {
              title: "Where demand is hottest",
              blurb: "The regions seeing the most buyer interest.",
              tag: "Demand",
            },
            {
              title: "First-time buyer affordability",
              blurb: "How deposits and rates are reshaping the ladder.",
              tag: "Affordability",
            },
            {
              title: "The flat vs house gap",
              blurb: "Why pricing is diverging by property type.",
              tag: "Prices",
            },
          ],
        },
        {
          type: "related",
          items: ["House Price Index", "Sold house prices", "Property news"],
        },
      ],
    },
    "Moving stories": {
      category: "Inspire",
      standfirst:
        "Real moves from people who found the right place at the right time.",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "From city flat to coastal cottage",
              blurb: "How one couple swapped the commute for the coast.",
              tag: "Relocation",
            },
            {
              title: "First home at 26",
              blurb: "Saving, scheme-hopping and finally getting the keys.",
              tag: "First-time buyer",
            },
            {
              title: "Downsizing without compromise",
              blurb:
                "Less house, more life \u2014 a retirement move done right.",
              tag: "Downsizing",
            },
            {
              title: "Renting that finally felt like home",
              blurb: "Finding a long-term let with a landlord who cares.",
              tag: "Renting",
            },
          ],
        },
        {
          type: "cta",
          heading: "Start your own move",
          buttons: [
            { label: "Browse homes for sale", action: "catalogue:buy" },
            {
              label: "Track your move",
              action: "content:Track your move",
              variant: "outline",
            },
          ],
        },
      ],
    },

    // ── OVERSEAS COUNTRY PAGES ──
    "Property in Spain": overseasPage(
      "Spain",
      "the Costa del Sol, Barcelona and the Balearics",
      "\u20ac295,000",
    ),
    "Property in France": overseasPage(
      "France",
      "Paris, the Riviera and rural Dordogne",
      "\u20ac340,000",
    ),
    "Property in Portugal": overseasPage(
      "Portugal",
      "the Algarve, Lisbon and Porto",
      "\u20ac260,000",
    ),
    "Property in Italy": overseasPage(
      "Italy",
      "Tuscany, the lakes and Puglia",
      "\u20ac285,000",
    ),
    "Property in Greece": overseasPage(
      "Greece",
      "the islands, Athens and the Peloponnese",
      "\u20ac210,000",
    ),
    "Sell overseas property": {
      category: "Overseas",
      standfirst:
        "Advertise your overseas property to the UK\u2019s large audience of international buyers.",
      blocks: [
        {
          type: "cards",
          title: "Why advertise with NestHere Overseas",
          items: [
            {
              title: "UK buyer reach",
              blurb: "Reach buyers who start their overseas search at home.",
              tag: "Audience",
            },
            {
              title: "Fast set-up",
              blurb: "Get listings live quickly with simple tools.",
              tag: "Easy",
            },
            {
              title: "Quality leads",
              blurb: "Enquiries from genuinely interested buyers.",
              tag: "Leads",
            },
          ],
        },
        {
          type: "cta",
          heading: "List your overseas property",
          buttons: [
            { label: "Get in touch", action: "content:Contact us" },
            {
              label: "Currency converter",
              action: "content:Currency converter",
              variant: "outline",
            },
          ],
        },
      ],
    },
  };
  const p = PAGES[slug] || {
    category: "NestHere",
    standfirst: "This page is coming soon.",
    blocks: [
      {
        type: "cta",
        heading: "Explore NestHere",
        buttons: [
          { label: "Browse homes for sale", action: "catalogue:buy" },
          {
            label: "Browse homes to rent",
            action: "catalogue:rent",
            variant: "outline",
          },
        ],
      },
    ],
  };
  document.getElementById("content-cat").textContent = p.category || "NestHere";
  document.getElementById("content-title").textContent = slug;
  document.getElementById("content-standfirst").textContent =
    p.standfirst || "";
  const hero = document.querySelector("#page-content .content-hero");
  if (hero) hero.style.display = p.hideHero ? "none" : "";
  document.getElementById("content-body").innerHTML = (p.blocks || [])
    .map(renderBlock)
    .join("");
  showPage("content");
  initCalcs();
}





function renderBlock(b) {
  switch (b.type) {
    case "lead":
      return `<p class="c-lead">${b.text}</p>`;
    case "stats":
      return `<div class="c-stats">${b.items.map((s) => `<div class="c-stat"><div class="v">${s.v}</div><div class="l">${s.l}</div>${s.s ? `<div class="s">${s.s}</div>` : ""}</div>`).join("")}</div>`;
    case "cards":
      return `<div class="c-section">${b.title ? `<h2 class="c-h">${b.title}</h2>` : ""}<div class="c-cards">${b.items.map((c) => `<div class="c-card${c.action ? " clickable" : ""}"${c.action ? ` onclick="runAction('${c.action}')"` : ""}>${c.tag ? `<span class="tag">${c.tag}</span>` : ""}<h4>${c.title}</h4>${c.blurb ? `<p>${c.blurb}</p>` : ""}</div>`).join("")}</div></div>`;
    case "features":
      return `<div class="c-section">${b.title ? `<h2 class="c-h">${b.title}</h2>` : ""}<ul class="feature-list">${b.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`;
    case "steps":
      return `<div class="c-section">${b.title ? `<h2 class="c-h">${b.title}</h2>` : ""}<div class="c-steps">${b.items.map((s) => `<div class="c-step"><div class="n"></div><div><h4>${s.title}</h4><p>${s.text}</p></div></div>`).join("")}</div></div>`;
    case "faq":
      return `<div class="c-section"><h2 class="c-h">${b.title || "Frequently asked questions"}</h2><div class="c-faq">${b.items.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join("")}</div></div>`;
    case "cta":
      return `<div class="c-cta"><h3>${b.heading}</h3>${b.text ? `<p>${b.text}</p>` : ""}<div class="c-cta-btns">${b.buttons.map((bt) => `<button class="btn btn-${bt.variant || "primary"}" onclick="runAction('${bt.action}')">${bt.label}</button>`).join("")}</div></div>`;
    case "bars":
      return `<div class="c-section">${b.title ? `<h2 class="c-h">${b.title}</h2>` : ""}<div class="c-bars">${b.items.map((x) => `<div class="c-bar"><span>${x.label}</span><div class="track"><div class="fill" style="width:${x.pct}%"></div></div><span class="bv">${x.value}</span></div>`).join("")}</div></div>`;
    case "jobs":
      return `<div class="c-section"><h2 class="c-h">${b.title || "Open roles"}</h2><div class="c-jobs">${b.items.map((j) => `<div class="c-job"><div><h4>${j.role}</h4><p>${j.team}</p></div><span class="tag">${j.location}</span></div>`).join("")}</div></div>`;
    case "contact":
      return `<div class="c-section"><div class="c-cards"><div class="c-card"><h4>General enquiries</h4><p>hello@nesthere.co.uk<br>0800 123 4567<br>Mon\u2013Fri, 9am\u20136pm</p></div><div class="c-card"><h4>Press</h4><p>press@nesthere.co.uk</p></div><div class="c-card"><h4>Head office</h4><p>NestHere, 1 Greenway,<br>London EC1A 1AA</p></div></div></div>`;
    case "related":
      return `<div class="c-section"><h2 class="c-h">Related</h2><div class="c-cards">${b.items.map((l) => `<div class="c-card clickable" onclick="runAction('content:${l}')"><h4>${l}</h4></div>`).join("")}</div></div>`;
    case "calc":
      return renderCalc(b.kind);
    case "rich":
      return `<div class="c-section c-rich">${b.html}</div>`;
    case "press":
      return renderPressGrid();
    case "renterguides":
      return renderRenterGuides();
    case "landlordguides":
      return renderLandlordGuides();
    case "findagent":
      return renderFindAgent();
    case "removals":
      return renderRemovals();
    case "removalagents":
      return `<div class="c-section"><div class="rm-firm-grid">${REMOVAL_FIRMS.map(rmFirmCard).join("")}</div></div>`;
    case "dataservices":
      return renderDataServices();
    case "sitemap":
      return renderSiteMap();
    case "advertise":
      return renderAdvertise();
    case "oadvertise":
      return renderOverseasAdvertise();
    case "dadvertise":
      return renderDisplayAdvertise();
    case "cadvertise":
      return renderCommercialAdvertise();
    case "businesshub":
      return renderBusinessHub();
    case "about":
      return renderAbout();
    case "investors":
      return renderInvestors();
    case "contactus":
      return renderContactUs();
    case "careers":
      return renderCareers();
    case "homeviews":
      return renderHomeViews();
    case "helpcentre":
      return renderHelpCentre();
    case "safety":
      return renderSafety();
    case "legal":
      return renderLegalDoc(b.doc);
    case "mip":
      return renderMortgageInPrinciple();
    case "mortgagecalc":
      return renderMortgageCalc();
    case "mortgageshub":
      return renderMortgagesHub();
    case "listings": {
      let list;
      if (b.mode === "rent")
        list = properties.filter((p) => p.badge === "rent");
      else if (b.mode === "sold")
        list = properties.filter((p) => p.badge === "sold");
      else if (b.mode === "new")
        list = properties.filter((p) => p.badge === "sale" && p.new);
      else list = properties.filter((p) => p.badge !== "sold");
      if (b.area) {
        const a = b.area.toLowerCase();
        const m = list.filter((p) => p.addr.toLowerCase().includes(a));
        if (m.length) list = m;
      }
      list = list.slice(0, b.limit || 3);
      if (!list.length) return "";
      return `<div class="c-section"><h2 class="c-h">${b.title || "Homes you might like"}</h2><div class="prop-grid">${list.map((p) => propCard(p, "detail")).join("")}</div></div>`;
    }
    default:
      return "";
  }
}



function calcStampDuty() {
  const price = Number(document.getElementById("sd-price").value) || 0;
  const ftb = document.getElementById("sd-ftb").checked;
  const bands =
    ftb && price <= 625000
      ? [
          [425000, 0],
          [625000, 0.05],
        ]
      : [
          [250000, 0],
          [925000, 0.05],
          [1500000, 0.1],
          [Infinity, 0.12],
        ];
  let tax = 0,
    lower = 0;
  for (const [upper, rate] of bands) {
    if (price > lower) {
      tax += (Math.min(price, upper) - lower) * rate;
      lower = upper;
    } else break;
  }
  const eff = price ? (tax / price) * 100 : 0;
  document.getElementById("sd-result").innerHTML =
    `<div class="calc-out-big">\u00a3${Math.round(tax).toLocaleString()}</div><div class="calc-out-sub">Estimated stamp duty${ftb ? " (first-time buyer)" : ""} \u00b7 effective rate ${eff.toFixed(2)}%</div>`;
}

function calcMortgage() {
  const price = Number(document.getElementById("mc-price").value) || 0;
  const deposit = Number(document.getElementById("mc-deposit").value) || 0;
  const monthlyRate =
    (Number(document.getElementById("mc-rate").value) || 0) / 100 / 12;
  const years = Number(document.getElementById("mc-term").value) || 0;
  const loan = Math.max(0, price - deposit);
  const n = years * 12;
  let monthly;
  if (monthlyRate > 0 && n > 0)
    monthly =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
  else monthly = n ? loan / n : 0;
  const total = monthly * n;
  document.getElementById("mc-result").innerHTML =
    `<div class="calc-out-big">\u00a3${Math.round(monthly).toLocaleString()}<span style="font-size:16px;font-weight:600;">/mo</span></div><div class="calc-out-sub">Loan \u00a3${Math.round(loan).toLocaleString()} \u00b7 total repayable \u00a3${Math.round(total).toLocaleString()} over ${years} yrs</div>`;
}

function calcCurrency() {
  const amt = Number(document.getElementById("cc-amount").value) || 0;
  const to = document.getElementById("cc-to").value;
  const rates = { EUR: [1.17, "\u20ac"], USD: [1.27, "$"], AUD: [1.92, "A$"] };
  const [rate, sym] = rates[to] || rates.EUR;
  document.getElementById("cc-result").innerHTML =
    `<div class="calc-out-big">${sym}${Math.round(amt * rate).toLocaleString()}</div><div class="calc-out-sub">\u00a3${amt.toLocaleString()} at a sample rate of ${rate} ${to} per \u00a31</div>`;
}

function initCalcs() {
  if (document.getElementById("sd-price")) calcStampDuty();
  if (document.getElementById("mc-price")) calcMortgage();
  if (document.getElementById("mca-price")) mcRecalc();
  if (document.getElementById("cc-amount")) calcCurrency();
}

// ══ PRESS CENTRE ══
const PRESS_IMG = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
];
const PRESS_RELEASES = [
  {
    id: 1,
    date: "18 June 2026",
    img: PRESS_IMG[0],
    title: "Property Passport adoption passes one million homes",
    summary:
      "NestHere\u2019s verified maintenance-history feature now covers more than a million UK properties, as sellers embrace greater transparency.",
    body: "<p>NestHere today announced that its Property Passport feature has passed one million homes, less than two years after launch. The Passport gives every listing a verified record of works, repairs and improvements, helping buyers make decisions with more confidence.</p><p>\u201cBuyers tell us the history of a home matters as much as the photos,\u201d a NestHere spokesperson said. \u201cThe Passport turns a pile of paperwork into a clear, trusted timeline.\u201d</p><p>Sellers and agents can add records directly from their NestHere account, attaching dates, costs and supporting photos.</p>",
  },
  {
    id: 2,
    date: "14 June 2026",
    img: PRESS_IMG[1],
    title: "Asking prices hold steady as summer listings rise",
    summary:
      "The latest NestHere data shows new-seller pricing broadly flat month on month, even as the number of homes coming to market climbs.",
    body: "<p>NestHere\u2019s monthly market read shows average new-seller asking prices little changed this month, while the volume of fresh listings rose as the summer market opened up.</p><p>More choice for buyers, combined with steadier pricing, points to a more balanced market heading into the second half of the year.</p><p>Figures are drawn from listings across the NestHere platform and are illustrative for this prototype.</p>",
  },
  {
    id: 3,
    date: "12 June 2026",
    img: PRESS_IMG[5],
    title: "Time Machine lets buyers explore a street\u2019s history",
    summary:
      "A new NestHere feature reveals how any neighbourhood has changed over the decades, from green space to new development.",
    body: "<p>NestHere has rolled out Time Machine, an interactive feature that lets buyers scroll through the history of a street or area \u2014 from the arrival of parks and transport links to major redevelopment.</p><p>\u201cWhere you live is also a story of how a place has grown,\u201d said a NestHere product lead. \u201cTime Machine puts that context right next to the listing.\u201d</p>",
  },
  {
    id: 4,
    date: "29 May 2026",
    img: PRESS_IMG[3],
    title: "Record numbers request a NestHere valuation",
    summary:
      "More homeowners are starting with an instant online estimate before booking an in-person valuation, new figures show.",
    body: "<p>Demand for NestHere\u2019s free valuation tool reached a new high last month, as homeowners tested the water before committing to a sale.</p><p>The tool blends recent sold prices with local trends to produce a guide figure, with the option to book a local agent for an in-person valuation.</p>",
  },
  {
    id: 5,
    date: "20 May 2026",
    img: PRESS_IMG[2],
    title: "AI search now understands plain-English home wishes",
    summary:
      "NestHere\u2019s search can interpret natural requests like \u201c3-bed near a good school with a garden under \u00a3400k\u201d.",
    body: "<p>NestHere has upgraded its search so buyers can describe what they want in everyday language rather than ticking boxes. A request such as \u201ctwo bedrooms, close to the station, pet-friendly\u201d is translated into the right filters automatically.</p><p>The feature is designed to make the first step of a property search faster and more human.</p>",
  },
  {
    id: 6,
    date: "18 May 2026",
    img: PRESS_IMG[4],
    title: "NestHere expands into commercial and overseas listings",
    summary:
      "The platform now covers business premises and homes abroad, alongside a currency tool for international buyers.",
    body: "<p>NestHere has broadened its marketplace beyond UK homes to include commercial property and overseas listings, giving buyers and businesses more to explore in one place.</p><p>A new currency converter helps international buyers understand what their budget is worth in popular markets.</p>",
  },
  {
    id: 7,
    date: "07 May 2026",
    brand: true,
    title: "NestHere launches \u201cFind your place\u201d campaign",
    summary:
      "A new brand campaign celebrates the moment a house finally feels like home, across TV, outdoor and social.",
    body: "<p>NestHere has launched \u201cFind your place\u201d, a brand campaign built around the feeling of finally landing somewhere that fits. The campaign runs across TV, out-of-home and social channels.</p><p>\u201cMoving is about more than a transaction,\u201d a NestHere marketing lead said. \u201cIt\u2019s about belonging.\u201d</p>",
  },
  {
    id: 8,
    date: "06 May 2026",
    brand: true,
    title: "Agent sign-ups double as listing tools expand",
    summary:
      "More agents are joining NestHere as new tools make it quicker to list, manage and showcase properties.",
    body: "<p>NestHere has seen agent sign-ups double over the past year, driven by a wave of new tools for listing and managing property \u2014 including the Property Passport and a streamlined listing flow.</p><p>The platform continues to invest in features that help agents reach engaged buyers and renters.</p>",
  },
  {
    id: 9,
    date: "05 May 2026",
    brand: true,
    title: "NestHere to host live Q&A on renting reforms",
    summary:
      "A free webinar will help renters and landlords understand what proposed reforms could mean for them.",
    body: "<p>NestHere will host a live Q&amp;A session to help renters and landlords get to grips with proposed changes to the rental market. The session will cover the practical implications and answer audience questions.</p><p>Details and sign-up will be shared through the NestHere Help Centre.</p>",
  },
];

function pressCard(r) {
  const q = (r.title + " " + r.summary).toLowerCase().replace(/[<>"']/g, "");
  const media = r.brand
    ? `<div class="press-img brand"><span class="press-logo">NestHere</span></div>`
    : `<div class="press-img" style="background-image:url('${r.img}')"></div>`;
  return `<article class="press-card" data-q="${q}" onclick="openPressRelease(${r.id})">
    ${media}
    <div class="press-body">
      <div class="press-date">${r.date}</div>
      <h3>${r.title}</h3>
      <p>${r.summary}</p>
      <span class="press-more">Read more</span>
    </div>
  </article>`;
}

function renderPressGrid() {
  return ``;
}

function filterPress(query) {
  const q = (query || "").toLowerCase().trim();
  let shown = 0;
  document.querySelectorAll("#press-grid .press-card").forEach((c) => {
    const match = !q || c.dataset.q.indexOf(q) !== -1;
    c.style.display = match ? "" : "none";
    if (match) shown++;
  });
  const empty = document.getElementById("press-empty");
  if (empty) empty.classList.toggle("hidden", shown > 0);
}

function openPressRelease(id) {
  const r = PRESS_RELEASES.find((x) => x.id === id);
  if (!r) {
    openContent("Press centre");
    return;
  }
  const hero = document.querySelector("#page-content .content-hero");
  if (hero) hero.style.display = "";
  document.getElementById("content-cat").textContent = "Press centre";
  document.getElementById("content-title").textContent = r.title;
  document.getElementById("content-standfirst").textContent =
    r.date + " \u00b7 NestHere press release";
  document.getElementById("content-body").innerHTML =
    `<div class="c-section"><div class="c-rich" style="max-width:760px;">${r.body}</div>` +
    `<div style="margin-top:24px;"><button class="btn btn-outline" onclick="openContent('Press centre')">\u2190 Back to press releases</button></div></div>`;
  showPage("content");
  window.scrollTo(0, 0);
}

// ══ RENTER GUIDES HUB ══
const GUIDE_ARTICLES = {
  "rra-guide": {
    title: "Your guide to the Renters\u2019 Rights Act (2026)",
    tag: "Renters\u2019 Rights Act",
    img: PI.b,
    body: "<p>The Renters\u2019 Rights Act brings the biggest shake-up to renting in England for a generation. This guide walks through what is changing, when, and what it means for you as a tenant.</p><p>Key themes include the move to periodic tenancies, clearer rules on rent increases, and stronger protections around how and when a landlord can ask you to leave. We\u2019ll keep this guide updated as the detail is confirmed.</p>",
  },
  pets: {
    title: "Renting with pets",
    tag: "Renters\u2019 Rights Act",
    img: PI.c,
    body: "<p>Renting with a pet is becoming easier, but it still pays to be prepared. Put together a simple \u201cpet CV\u201d covering your pet\u2019s age, temperament and any training, and offer references from a previous landlord where you can.</p><p>Under the incoming rules, landlords will not be able to unreasonably refuse a request to keep a pet \u2014 though they may ask you to hold suitable insurance.</p>",
  },
  tenancies: {
    title: "Rental tenancies: what\u2019s changing?",
    tag: "Renters\u2019 Rights Act",
    img: PI.f,
    body: "<p>Fixed-term assured shorthold tenancies are being replaced with a single system of periodic tenancies that roll on month to month. That gives renters more flexibility to move when they need to.</p><p>We explain what the change means for notice periods, deposits and renewals, and how to check where you stand.</p>",
  },
  "vid-rundown": {
    title: "A renter\u2019s rundown of the rule changes",
    tag: "Watch",
    img: PI.e,
    body: "<p>A short, plain-English run-through of the headline changes for renters and what to do next.</p>",
  },
  "vid-pets": {
    title: "Can landlords refuse pets in 2026?",
    tag: "Watch",
    img: PI.i,
    body: "<p>We look at the new approach to pets in rented homes and when a landlord can still say no.</p>",
  },
  "vid-deposit": {
    title: "What the changes mean for your deposit",
    tag: "Watch",
    img: PI.d,
    body: "<p>How deposit protection works and what is changing under the new rules.</p>",
  },
  "vid-notice": {
    title: "Notice periods, explained",
    tag: "Watch",
    img: PI.a,
    body: "<p>A quick guide to how much notice you and your landlord must give.</p>",
  },
  "first-home": {
    title: "Renting your first home: everything you need to know",
    tag: "Preparing to rent",
    img: PI.a,
    body: "<p>Renting for the first time? This guide covers the whole journey \u2014 budgeting, paperwork, viewings and move-in day \u2014 so there are no surprises.</p><p>We cover what referencing involves, what a guarantor is, and the up-front costs to budget for before you get the keys.</p>",
  },
  terms: {
    title: "Renting terms explained: a glossary for renters",
    tag: "Preparing to rent",
    img: PI.h,
    body: "<p>From \u201cassured tenancy\u201d to \u201czero-deposit scheme\u201d, the language of renting can be confusing. This A\u2013Z explains the terms you\u2019ll meet along the way in plain English.</p>",
  },
  refs: {
    title: "Getting ready for reference checks",
    tag: "Preparing to rent",
    img: PI.c,
    body: "<p>Most lettings need references. Have your employment details, recent payslips and a previous landlord\u2019s contact ready, and let your referees know to expect a request so nothing holds up your move.</p>",
  },
  afford: {
    title: "Knowing what rent you can afford",
    tag: "Preparing to rent",
    img: PI.g,
    body: "<p>A common guide is that rent should sit around a third of your take-home pay. Factor in bills, council tax and travel too, and use our calculators to sense-check the full monthly picture.</p>",
  },
  "how-to-find": {
    title: "How to find a place to rent",
    tag: "Finding a property to rent",
    img: PI.i,
    body: "<p>Set up alerts, be ready to view quickly and have your paperwork prepared \u2014 good rentals move fast. This guide shows how to search smart and stand out to landlords.</p><p>We also cover how to spot a well-run letting and the questions worth asking before you commit.</p>",
  },
  viewing: {
    title: "Things to check at a rental viewing",
    tag: "Finding a property to rent",
    img: PI.b,
    body: "<p>Check water pressure, signs of damp, mobile signal and how secure the doors and windows are. Ask about bills, the deposit scheme and how repairs are handled.</p>",
  },
  "let-agreed": {
    title: "What does \u201clet agreed\u201d mean?",
    tag: "Finding a property to rent",
    img: PI.f,
    body: "<p>\u201cLet agreed\u201d means a landlord has accepted an offer but the tenancy isn\u2019t signed yet. It is not always final, so it can be worth registering interest just in case.</p>",
  },
  "move-in": {
    title: "Moving in: your first-week checklist",
    tag: "When you\u2019ve found a property",
    img: PI.d,
    body: "<p>Photograph the inventory, take meter readings, set up bills and council tax, and test the smoke alarms. A little admin in week one saves headaches later.</p>",
  },
  agreement: {
    title: "Understanding your tenancy agreement",
    tag: "When you\u2019ve found a property",
    img: PI.h,
    body: "<p>Your tenancy agreement sets out the rent, the deposit, your responsibilities and the notice rules. Read it carefully and ask about anything that isn\u2019t clear before you sign.</p>",
  },
  "deposit-protect": {
    title: "How your deposit is protected",
    tag: "When you\u2019ve found a property",
    img: PI.e,
    body: "<p>In England, deposits must be held in a government-approved protection scheme. We explain how it works and how to get your money back at the end of a tenancy.</p>",
  },
};

const GH_SECTIONS = [
  {
    title: "Renters\u2019 Rights Act",
    sf: "Take a look at what the 2026 renting rule changes in England could mean for you.",
    featured: "rra-guide",
    chips: ["pets", "tenancies"],
    viewAll: "content:Property news",
    carousel: {
      title: "The Renters\u2019 Rights Act explained",
      items: ["vid-rundown", "vid-pets", "vid-deposit", "vid-notice"],
    },
  },
  {
    title: "Preparing to rent",
    sf: "If you\u2019re renting for the first time or want a refresher on how the process works, we\u2019ve got you covered.",
    featured: "first-home",
    chips: ["terms", "refs", "afford"],
    viewAll: "content:Property guides",
  },
  {
    title: "Finding a property to rent",
    sf: "Find the right home with smart property-search tips, from setting your budget to booking viewings and buying ahead.",
    featured: "how-to-find",
    chips: ["pets", "viewing", "let-agreed"],
    viewAll: "catalogue:rent",
  },
  {
    title: "When you\u2019ve found a property to rent",
    sf: "From offer to move-in day, here\u2019s how to get everything over the line with confidence.",
    featured: "move-in",
    chips: ["agreement", "deposit-protect"],
    viewAll: "content:Track your move",
  },
];

function ghData(slug) {
  return (slug && slug.replace(/[<>"]/g, "")).toLowerCase();
}
function ghFeatured(slug) {
  const a = GUIDE_ARTICLES[slug];
  if (!a) return "";
  return `<div class="gh-featured gh-q" data-gq="${(a.title + " " + a.tag).toLowerCase()}" onclick="openGuide('${slug}')">
    <div class="gh-fimg" style="background-image:url('${a.img}')"></div>
    <div class="gh-fbody"><h3>${a.title}</h3></div></div>`;
}
function ghChip(slug) {
  const a = GUIDE_ARTICLES[slug];
  if (!a) return "";
  return `<div class="gh-chip gh-q" data-gq="${a.title.toLowerCase()}" onclick="openGuide('${slug}')">${a.title}</div>`;
}
function ghVideo(slug) {
  const a = GUIDE_ARTICLES[slug];
  if (!a) return "";
  return `<div class="gh-vid gh-q" data-gq="${a.title.toLowerCase()}" onclick="openGuide('${slug}')">
    <div class="gh-vid-thumb" style="background-image:url('${a.img}')"></div><p>${a.title}</p></div>`;
}
function renderRenterGuides() {
  const sections = GH_SECTIONS.map((s, i) => {
    let car = "";
    if (s.carousel) {
      const tid = "gh-track-" + i;
      car = `<div class="gh-carousel">
        <div class="gh-carousel-head"><h3>${s.carousel.title}</h3>
          <div class="gh-cnav"><button onclick="ghScroll('${tid}',-1)" aria-label="Previous">\u2039</button><button onclick="ghScroll('${tid}',1)" aria-label="Next">\u203a</button></div>
        </div>
        <div class="gh-track" id="${tid}">${s.carousel.items.map(ghVideo).join("")}</div>
      </div>`;
    }
    return `<section class="gh-section">
      <h2>${s.title}</h2>
      <p class="gh-sf">${s.sf}</p>
      ${ghFeatured(s.featured)}
      <div class="gh-row">${s.chips.map(ghChip).join("")}<span class="gh-viewall" onclick="runAction('${s.viewAll}')">View all \u2192</span></div>
      ${car}
    </section>`;
  }).join("");

  const sidebar = ghSidebar();

  return ``;
}
function ghSidebar() {
  return `<aside class="gh-side">
    <select class="gh-allguides" onchange="if(this.value){runAction(this.value);}">
      <option value="">All guides</option>
      <option value="content:Buyer guides">Buyer guides</option>
      <option value="content:Seller guides">Seller guides</option>
      <option value="content:Renter guides">Renter guides</option>
      <option value="content:Landlord guides">Landlord guides</option>
      <option value="content:Mortgage guides">Mortgage guides</option>
      <option value="content:Property guides">Property guides</option>
    </select>
    <div class="gh-box gh-searchbox">
      <label>Search guides</label>
      <input id="gh-search" type="text" placeholder="Type here\u2026" oninput="filterGuides(this.value)" onkeydown="if(event.key==='Enter')filterGuides(this.value)">
      <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="filterGuides(document.getElementById('gh-search').value)">View results</button>
      <span class="gh-newslink" onclick="openContent('Property news')">Property news \u2192</span>
    </div>
    <div class="gh-box gh-promo">
      <h4>\ud83d\udca1 New: Property Passport</h4>
      <p>See a home\u2019s verified history before you book a viewing \u2014 only on NestHere.</p>
      <span class="gh-plink" onclick="showPage('passport')">Take a look \u2192</span>
    </div>
    <details class="gh-acc"><summary>Calculators &amp; tools</summary>
      <div class="gh-acc-body">
        <a onclick="runAction('content:Stamp Duty Calculator')">Stamp Duty Calculator</a>
        <a onclick="runAction('content:Mortgage Calculator')">Mortgage Calculator</a>
        <a onclick="runAction('content:Currency converter')">Currency converter</a>
        <a onclick="runAction('content:Mortgage in Principle')">Mortgage in Principle</a>
      </div></details>
    <details class="gh-acc"><summary>Helpful resources</summary>
      <div class="gh-acc-body">
        <a onclick="runAction('content:Glossary')">Glossary of property terms</a>
        <a onclick="runAction('content:Help Centre')">Help Centre</a>
        <a onclick="runAction('content:Track your move')">Track your move</a>
        <a onclick="runAction('content:Removals')">Removals</a>
      </div></details>
    <details class="gh-acc"><summary>Market information</summary>
      <div class="gh-acc-body">
        <a onclick="runAction('content:House Price Index')">House Price Index</a>
        <a onclick="runAction('content:Sold house prices')">Sold house prices</a>
        <a onclick="runAction('content:Housing trends')">Housing trends</a>
      </div></details>
    <div class="gh-promo-h">Do more with NestHere</div>
    <div class="gh-box gh-promo">
      <h4>Stay organised</h4>
      <p>Save homes, set up alerts and keep track of the enquiries you send.</p>
      <span class="gh-plink" onclick="showPage('dashboard')">Your saved homes \u2192</span>
    </div>
    <div class="gh-box gh-promo">
      <h4>How much is your home worth?</h4>
      <p>Get a free, no-obligation estimate from a local expert.</p>
      <span class="gh-plink" onclick="openContent('Property valuation')">Get an instant valuation \u2192</span>
    </div>
    <div class="gh-box gh-promo">
      <h4>Get our weekly newsletter</h4>
      <p>The latest market updates, straight to your inbox.</p>
      <span class="gh-plink" onclick="ghNewsletter()">Sign up for our newsletter \u2192</span>
    </div>
  </aside>`;
}
function ghScroll(id, dir) {
  const t = document.getElementById(id);
  if (t) t.scrollBy({ left: dir * 360, behavior: "smooth" });
}
function ghNewsletter() {
  showToast(
    "\u2713 Thanks \u2014 you\u2019re signed up to the NestHere newsletter",
  );
}
function filterGuides(query) {
  const q = (query || "").toLowerCase().trim();
  document.querySelectorAll("#gh-main .gh-q").forEach((el) => {
    const match = !q || (el.dataset.gq || "").indexOf(q) !== -1;
    el.style.display = match ? "" : "none";
  });
  let any = false;
  document.querySelectorAll("#gh-main .gh-section").forEach((sec) => {
    const vis = [...sec.querySelectorAll(".gh-q")].some(
      (el) => el.style.display !== "none",
    );
    sec.style.display = vis ? "" : "none";
    if (vis) any = true;
  });
  const empty = document.getElementById("gh-empty");
  if (empty) empty.style.display = any ? "none" : "block";
}
function openGuide(slug) {
  const a = GUIDE_ARTICLES[slug];
  if (!a) {
    openContent("Renter guides");
    return;
  }
  const hub = a.hub || "Renter guides";
  const hero = document.querySelector("#page-content .content-hero");
  if (hero) hero.style.display = "";
  document.getElementById("content-cat").textContent = hub;
  document.getElementById("content-title").textContent = a.title;
  document.getElementById("content-standfirst").textContent =
    a.tag || "NestHere guide";
  document.getElementById("content-body").innerHTML =
    `<div class="c-section"><div class="c-rich" style="max-width:760px;">${a.body}</div>` +
    `<div style="margin-top:24px;"><button class="btn btn-outline" onclick="openContent('${hub}')">\u2190 Back to ${hub}</button></div></div>`;
  showPage("content");
  window.scrollTo(0, 0);
}

function ghJump(id) {
  const e = document.getElementById(id);
  if (e && e.scrollIntoView)
    e.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ══ LANDLORD GUIDES ══
Object.assign(GUIDE_ARTICLES, {
  "btl-first": {
    hub: "Landlord guides",
    tag: "Buying property to let",
    img: PI.a,
    title: "First-time landlords: getting started",
    body: "<p>Becoming a landlord can be rewarding, but it pays to go in with your eyes open. This guide covers the basics \u2014 from setting a budget and understanding your responsibilities to the costs that come with letting a home.</p><p>We look at what makes a good rental investment, the paperwork you\u2019ll need, and how to decide whether to manage the property yourself or use an agent.</p>",
  },
  "btl-yield": {
    hub: "Landlord guides",
    tag: "Buying property to let",
    img: PI.e,
    title: "Rental yield and capital growth explained",
    body: "<p>Two numbers matter most to landlords: the income a property produces (yield) and how its value grows over time (capital growth). We explain how to calculate gross and net yield, and why the two often pull in different directions.</p>",
  },
  "btl-mortgage": {
    hub: "Landlord guides",
    tag: "Buying property to let",
    img: PI.h,
    title: "Buy-to-let mortgages explained",
    body: "<p>Buy-to-let mortgages work differently from residential ones \u2014 lenders look at the expected rent as well as your income, and deposits are usually larger. We walk through how they work and what affects the rate you\u2019re offered.</p>",
  },
  "btl-where": {
    hub: "Landlord guides",
    tag: "Buying property to let",
    img: PI.c,
    title: "When and where to buy a rental property",
    body: "<p>Location drives both demand and yield. This guide looks at how to weigh up rental demand, local amenities, transport and tenant type when deciding where to invest.</p>",
  },
  "la-benefits": {
    hub: "Landlord guides",
    tag: "Choosing a letting agent",
    img: PI.b,
    title: "The benefits of letting through an agent",
    body: "<p>A good letting agent can find and reference tenants, handle compliance, and manage the day-to-day so you don\u2019t have to. We weigh up the benefits against the cost so you can decide what\u2019s right for you.</p>",
  },
  "la-choose": {
    hub: "Landlord guides",
    tag: "Choosing a letting agent",
    img: PI.f,
    title: "How to choose a letting agent",
    body: "<p>Not all agents offer the same service. Compare fees, what\u2019s included (let-only vs full management), local knowledge and reviews before you instruct \u2014 and ask how they\u2019ll market your property.</p>",
  },
  "ft-marketing": {
    hub: "Landlord guides",
    tag: "Finding a tenant",
    img: PI.g,
    title: "Marketing and advertising your rental",
    body: "<p>Great photos, an accurate description and the right asking rent are what get quality enquiries. We share how to present your property so it stands out and lets quickly.</p>",
  },
  "ft-viewings": {
    hub: "Landlord guides",
    tag: "Finding a tenant",
    img: PI.i,
    title: "Viewings and negotiations",
    body: "<p>Viewings are your chance to find the right tenant, not just any tenant. We cover how to run viewings, what questions to ask, and how to handle offers and negotiations.</p>",
  },
  "ft-deposits": {
    hub: "Landlord guides",
    tag: "Finding a tenant",
    img: PI.d,
    title: "Deposits and tenancy agreements",
    body: "<p>Deposits must be protected in a government-approved scheme, and a clear tenancy agreement protects both sides. We explain what to include and the rules you need to follow.</p>",
  },
  "ft-referencing": {
    hub: "Landlord guides",
    tag: "Finding a tenant",
    img: PI.a,
    title: "Tenant referencing",
    body: "<p>Referencing checks a tenant\u2019s identity, affordability and rental history. We explain how it works, when a guarantor helps, and how to stay on the right side of the rules.</p>",
  },
  "mg-maintenance": {
    hub: "Landlord guides",
    tag: "Managing your property",
    img: PI.c,
    title: "Rental maintenance: a practical guide",
    body: "<p>Keeping a property safe and well-maintained protects your investment and your tenants. We cover your repairing obligations, safety checks, and how to plan for ongoing upkeep.</p>",
  },
  "mg-rra": {
    hub: "Landlord guides",
    tag: "Managing your property",
    img: PI.e,
    title: "The Renters\u2019 Rights Act: what it means for landlords",
    body: "<p>Reform is reshaping the rental market. This guide explains the headline changes \u2014 periodic tenancies, the approach to pets, and notice rules \u2014 and what landlords should do to prepare.</p>",
  },
  "mg-tax": {
    hub: "Landlord guides",
    tag: "Managing your property",
    img: PI.h,
    title: "Tax for landlords",
    body: "<p>Rental income is taxable, and the rules on mortgage interest, allowable expenses and capital gains can be complex. We give a plain-English overview \u2014 though it\u2019s always worth speaking to an accountant.</p>",
  },
  "mg-epc": {
    hub: "Landlord guides",
    tag: "Managing your property",
    img: PI.b,
    title: "EPC requirements for rental homes",
    body: "<p>Rental homes must meet minimum energy efficiency standards. We explain the current EPC requirements, what counts as a valid certificate, and the upgrades that lift a rating.</p>",
  },
  "mi-lettings": {
    hub: "Landlord guides",
    tag: "Market insight & legislation",
    img: PI.f,
    title: "The lettings market: a landlord\u2019s guide",
    body: "<p>Where are rents heading, and how is demand shifting? This guide rounds up the trends shaping the lettings market and what they mean for landlords planning their next move.</p>",
  },
  "mi-webinar": {
    hub: "Landlord guides",
    tag: "Market insight & legislation",
    img: PI.g,
    title: "Webinar: preparing for rental reform",
    body: "<p>Our panel breaks down what the latest reforms mean in practice and answers the questions landlords are asking most. A practical session for anyone letting a property.</p>",
  },
});

const LG_SECTIONS = [
  {
    title: "Buying property to let",
    sf: "Thinking of investing? Start here \u2014 from your first purchase to choosing where to buy.",
    featured: "btl-first",
    chips: ["btl-yield", "btl-mortgage", "btl-where"],
    viewAll: "content:Property guides",
  },
  {
    title: "Choosing a letting agent",
    sf: "Decide whether to let through an agent, and how to pick the right one.",
    featured: "la-benefits",
    chips: ["la-choose"],
    viewAll: "content:Find an agent",
  },
  {
    title: "Finding a tenant",
    sf: "Market your property, run viewings and reference tenants with confidence.",
    featured: "ft-marketing",
    chips: ["ft-viewings", "ft-deposits", "ft-referencing"],
    viewAll: "catalogue:rent",
  },
  {
    title: "Managing your property",
    sf: "Stay compliant and keep your property well looked after.",
    featured: "mg-maintenance",
    chips: ["mg-rra", "mg-tax", "mg-epc"],
    viewAll: "content:Energy efficiency",
  },
  {
    title: "Market insight & legislation",
    sf: "Keep up with the trends and rule changes shaping the rental market.",
    featured: "mi-lettings",
    chips: ["mi-webinar"],
    viewAll: "content:Housing trends",
  },
];

function renderLandlordGuides() {
  const secs = LG_SECTIONS.map((s, i) => {
    const id = "lg-sec-" + i;
    const count = 1 + s.chips.length;
    return `<section class="gh-section" id="${id}">
      <div class="gh-sec-head"><h2>${s.title}</h2><span class="gh-count">${count} guides</span></div>
      <p class="gh-sf">${s.sf}</p>
      ${ghFeatured(s.featured)}
      <div class="gh-row">${s.chips.map(ghChip).join("")}<span class="gh-viewall" onclick="runAction('${s.viewAll}')">View all \u2192</span></div>
    </section>`;
  }).join("");
  const quick = LG_SECTIONS.map(
    (s, i) =>
      `<span class="gh-ql" onclick="ghJump('lg-sec-${i}')">${s.title}</span>`,
  ).join("");

  return ``;
}

// ══ FIND AN AGENT ══
const FA_AGENTS = [
  {
    name: "Oakfield Residential",
    type: "both",
    area: "London & the South East",
    rating: 4.8,
    reviews: 212,
    listings: 48,
  },
  {
    name: "Harbour & Co",
    type: "sales",
    area: "Cornwall & the South West",
    rating: 4.7,
    reviews: 156,
    listings: 31,
  },
  {
    name: "City Living Lettings",
    type: "lettings",
    area: "Manchester & the North West",
    rating: 4.6,
    reviews: 189,
    listings: 54,
  },
  {
    name: "Greenline Estates",
    type: "both",
    area: "Edinburgh & Central Scotland",
    rating: 4.9,
    reviews: 98,
    listings: 22,
  },
  {
    name: "Bay & Bridge Property",
    type: "sales",
    area: "Cardiff & South Wales",
    rating: 4.5,
    reviews: 74,
    listings: 27,
  },
  {
    name: "Northgate Lettings",
    type: "lettings",
    area: "Leeds & Yorkshire",
    rating: 4.7,
    reviews: 131,
    listings: 39,
  },
];
function faStars(r) {
  const full = Math.round(r);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}
function faTypeLabel(t) {
  return t === "both"
    ? "Sales & lettings"
    : t === "sales"
      ? "Sales"
      : "Lettings";
}
function faAgentCard(a) {
  return `<div class="fa-agent">
    <h4>${a.name}</h4>
    <span class="fa-type-badge">${faTypeLabel(a.type)}</span>
    <div class="fa-meta">${a.area}</div>
    <div class="fa-meta"><span class="fa-stars">${faStars(a.rating)}</span> ${a.rating} (${a.reviews} reviews)</div>
    <div class="fa-meta">${a.listings} properties currently listed</div>
    <div class="fa-view" onclick="showToast('Agent profiles are illustrative in this prototype')">View agent \u2192</div>
  </div>`;
}
function findAgentSearch() {
  const loc = (
    document.getElementById("fa-loc")
      ? document.getElementById("fa-loc").value
      : ""
  ).trim();
  const sel = document.querySelector('input[name="fa-type"]:checked');
  const type = sel ? sel.value : "both";
  let list = FA_AGENTS.slice();
  if (type === "sales")
    list = list.filter((a) => a.type === "sales" || a.type === "both");
  else if (type === "lettings")
    list = list.filter((a) => a.type === "lettings" || a.type === "both");
  const res = document.getElementById("fa-results");
  if (res) {
    res.innerHTML =
      `<h3 class="fa-res-h">${list.length} agents${loc ? " covering " + loc : ""}</h3>` +
      `<div class="fa-agent-grid">${list.map(faAgentCard).join("")}</div>`;
    res.style.display = "block";
  }
  showToast("Showing agents" + (loc ? " in " + loc : ""));
}
function renderFindAgent() {
  const tools = [
    {
      img: PI.g,
      title: "Get property alerts",
      text: "Be first to know when the right home is listed.",
      link: "Set up alerts",
      action: "showModal('modal-alert')",
    },
    {
      img: PI.h,
      title: "Sold prices",
      text: "See what homes nearby actually sold for.",
      link: "Check sold prices",
      action: "runAction('content:Sold house prices')",
    },
    {
      img: PI.i,
      title: "Get a valuation",
      text: "Find out what your home could be worth.",
      link: "Request a valuation",
      action: "runAction('content:Property valuation')",
    },
  ]
    .map(
      (t) => `<div class="fa-tool" onclick="${t.action}">
      <div class="fa-tool-img" style="background-image:url('${t.img}')"></div>
      <div class="fa-tool-b"><h4>${t.title}</h4><p>${t.text}</p><span class="hc-link">${t.link} \u2192</span></div>
    </div>`,
    )
    .join("");

  return ``;
}

// ══ REMOVALS ══
const REMOVAL_FIRMS = [
  {
    name: "Swift & Sons Removals",
    area: "London & the South East",
    rating: 4.8,
    reviews: 340,
    from: "£420",
  },
  {
    name: "Coastline Movers",
    area: "South West & Cornwall",
    rating: 4.7,
    reviews: 212,
    from: "£380",
  },
  {
    name: "Northern Star Removals",
    area: "North West & Yorkshire",
    rating: 4.6,
    reviews: 288,
    from: "£360",
  },
  {
    name: "Capital Crate Removals",
    area: "London & nationwide",
    rating: 4.9,
    reviews: 401,
    from: "£460",
  },
  {
    name: "Thistle Move Co",
    area: "Scotland",
    rating: 4.8,
    reviews: 176,
    from: "£395",
  },
  {
    name: "Severn Valley Removals",
    area: "Wales & the Midlands",
    rating: 4.7,
    reviews: 154,
    from: "£370",
  },
];
function rmStars(r) {
  const f = Math.round(r);
  return "★★★★★".slice(0, f) + "☆☆☆☆☆".slice(0, 5 - f);
}
function rmFirmCard(f) {
  return `<div class="rm-firm">
    <h4>${f.name}</h4>
    <span class="rm-vet">Vetted &amp; insured</span>
    <div class="rm-meta">${f.area}</div>
    <div class="rm-meta"><span class="rm-stars">${rmStars(f.rating)}</span> ${f.rating} (${f.reviews})</div>
    <div class="rm-from">Quotes from ${f.from}</div>
    <div class="rm-get" onclick="showToast('Quote request sent to ${f.name.replace(/'/g, "")}')">Get a quote \u2192</div>
  </div>`;
}
function removalQuotes() {
  const res = document.getElementById("rm-results");
  if (res) {
    res.innerHTML = `<div class="rm-firm-grid">${REMOVAL_FIRMS.map(rmFirmCard).join("")}</div>`;
    res.style.display = "block";
  }
  showToast("Matching you with vetted removal companies\u2026");
}
function renderRemovals() {
  const van = `<svg class="rm-illus" viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="86" y="14" width="50" height="42" rx="4" fill="var(--copper-soft)" stroke="var(--ink)" stroke-width="3"/>
    <path d="M86 30 h50" stroke="var(--ink)" stroke-width="3"/>
    <rect x="104" y="20" width="12" height="9" rx="1" fill="var(--ink)"/>
    <rect x="20" y="70" width="118" height="56" rx="7" fill="var(--forest)"/>
    <rect x="32" y="82" width="42" height="15" rx="3" fill="rgba(255,255,255,0.18)"/>
    <path d="M138 88 h34 l26 22 v16 h-60 z" fill="var(--forest-soft)"/>
    <path d="M150 92 h20 l16 15 h-36 z" fill="var(--paper)"/>
    <rect x="14" y="126" width="190" height="8" rx="4" fill="var(--forest-mid)"/>
    <circle cx="62" cy="138" r="17" fill="var(--ink)"/><circle cx="62" cy="138" r="6" fill="var(--paper)"/>
    <circle cx="166" cy="138" r="17" fill="var(--ink)"/><circle cx="166" cy="138" r="6" fill="var(--paper)"/>
    <line x1="6" y1="160" x2="254" y2="160" stroke="var(--line)" stroke-width="3" stroke-linecap="round"/>
  </svg>`;

  const wave = `<svg class="rm-wave" viewBox="0 0 1440 46" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 L1440,0 L1440,16 C1100,52 760,4 360,26 C200,35 80,30 0,22 Z" fill="#fff"/></svg>`;

  return ``;
}

// ══ DATA SERVICES HUB ══
function renderDataServices() {
  const solutions = [
    {
      page: "Market Intelligence Centre",
      benefit: "Identify investment, land and building opportunities.",
      access: "24/7 web-based platform",
      tags: [
        "Investors",
        "Consultants",
        "Local authorities",
        "Developers",
        "Lenders",
      ],
    },
    {
      page: "Bespoke Data Analysis",
      benefit: "Support property and investment decisions at any scale.",
      access: "Custom report by our specialist team",
      tags: ["Investors", "Consultants", "Local authorities", "Developers"],
    },
    {
      page: "Development Insight Report",
      benefit: "Support land acquisition and building decisions.",
      access: "Consistent report by our team",
      tags: ["Investors", "Consultants", "Developers", "Housing assoc."],
    },
    {
      page: "Surveyors Comparable Tool",
      benefit: "Support full or desktop valuations supplied to lenders.",
      access: "24/7 web platform or API",
      tags: ["Surveyors", "Lenders", "Local authorities"],
    },
    {
      page: "Automated Valuation Model",
      benefit: "Support lending decisions where a survey isn\u2019t required.",
      access: "24/7 web platform or API",
      tags: ["Lenders", "Surveyors", "Investors"],
    },
    {
      page: "Property Risk Alerts",
      benefit: "Understand potential underlying risk factors on a property.",
      access: "24/7 web platform or API",
      tags: ["Surveyors", "Lenders"],
    },
  ];
  const solCards = solutions
    .map(
      (s) => `<div class="ds-sol" onclick="openContent('${s.page}')">
      <h3>${s.page}</h3>
      <div class="ds-benefit">${s.benefit}</div>
      <div class="ds-access">${s.access}</div>
      <div class="ds-tags">${s.tags.map((t) => `<span class="ds-tag">${t}</span>`).join("")}</div>
      <span class="ds-more">Learn more \u2192</span>
    </div>`,
    )
    .join("");

  const usage = [
    { num: "1,000+", lab: "organisations use NestHere data every month" },
    {
      num: "200k+",
      lab: "valuations supported by our comparable tool each month",
    },
    {
      num: "400k+",
      lab: "properties valued by our automated model each month",
    },
  ]
    .map(
      (u) =>
        `<div class="ds-use"><div class="num">${u.num}</div><div class="lab">${u.lab}</div></div>`,
    )
    .join("");

  const quotes = [
    {
      text: "NestHere\u2019s market intelligence is intuitive and more timely than other sources we\u2019ve used. It answers supply-and-demand questions we simply couldn\u2019t before.",
      cite: "Westshire Council",
      sub: "Strategic housing team",
    },
    {
      text: "The insight helps us decide where to invest in new homes and gives our board confidence that the decisions are robust. The data is user-friendly and hard to find elsewhere.",
      cite: "Northgate Housing",
      sub: "Development & investment",
    },
  ]
    .map(
      (q) =>
        `<div class="ds-quote"><p>\u201c${q.text}\u201d</p><div class="ds-cite">${q.cite}<span>${q.sub}</span></div></div>`,
    )
    .join("");

  const actions = [
    { label: "House Price Index", action: "content:House Price Index" },
    { label: "Housing trends", action: "content:Housing trends" },
    { label: "Sold house prices", action: "content:Sold house prices" },
    { label: "Press centre", action: "content:Press centre" },
    { label: "Property news", action: "content:Property news" },
  ]
    .map(
      (a) =>
        `<span class="ds-action" onclick="runAction('${a.action}')">${a.label}</span>`,
    )
    .join("");

  return ``;
}

// ══ ADVERTISE ON NESTHERE ══
const ADV_SEGMENTS = [
  {
    tag: "For agents",
    title: "Estate & letting agents",
    action: "content:Business Hub",
    cta: "View agency products",
    desc: "Operating in the UK housing market means balancing supply and demand while delivering great service and keeping up with changing rules. Our agency memberships give you the exposure, insight and tools to adapt.",
  },
  {
    tag: "For developers",
    title: "New homes developers",
    action: "content:Business Hub",
    cta: "View New Homes products",
    desc: "Reach a large home-buying audience and take a scheme from \u201ccoming soon\u201d to \u201csold\u201d \u2014 with tools and insight to support your acquisition, planning and pricing decisions along the way.",
  },
  {
    tag: "For operators",
    title: "Rental operators & Build to Rent",
    action: "content:Business Hub",
    cta: "View rental products",
    desc: "Combine exposure to a large renter audience with tools to differentiate your listings and build your brand \u2014 helping you maintain high occupancy from lease-up through to a stabilised portfolio.",
  },
  {
    tag: "For commercial",
    title: "Commercial",
    action: "content:Advertise commercial property",
    cta: "Visit commercial advertising",
    desc: "Our dedicated commercial team works with CRE agents, surveyors and landlords, giving you exposure to an engaged commercial audience plus market data to underpin your business strategy.",
  },
  {
    tag: "International",
    title: "Overseas",
    action: "content:Overseas agents and developers",
    cta: "Visit overseas advertising",
    desc: "Selling property outside the UK? Reach UK-based international buyers with dedicated overseas memberships, plus insight into how our audience engages with your local market.",
  },
  {
    tag: "For schools",
    title: "Schools",
    action: "content:Home and property related services",
    cta: "Visit schools advertising",
    desc: "Families come to NestHere to find the right home near the right school. Advertise your school to reach parents at the moment they\u2019re making those big decisions.",
  },
  {
    tag: "For brands",
    title: "Home products & services",
    action: "content:Home and property related services",
    cta: "Visit home services advertising",
    desc: "Moving home goes hand in hand with other buying decisions \u2014 for the home, garden and family. Build awareness of your brand with a large-scale audience while they\u2019re in a buying mindset.",
  },
  {
    tag: "For landlords",
    title: "Landlords",
    action: "content:Find an agent",
    cta: "Find an agent",
    consumer: true,
    desc: `You can choose any letting agent advertising on NestHere to market your property to let, so it\u2019s seen by a large home-moving audience. <a onclick="openContent('Find an agent')">Find an agent</a>, or read our tips on <a onclick="openGuide('ft-marketing')">marketing your rental</a>.`,
  },
  {
    tag: "For sellers",
    title: "Sellers",
    action: "content:Find an agent",
    cta: "Find an agent",
    consumer: true,
    desc: `You can choose any estate agent advertising on NestHere to sell your home. Find a local agent now, or get a sense of value first with a <a onclick="openContent('Property valuation')">property valuation</a>.`,
  },
];
const ADV_DOCS = [
  { label: "Membership Terms & Conditions", action: "content:Terms of Use" },
  { label: "Members Privacy Policy", action: "content:Privacy Policy" },
  { label: "Cookie Policy", action: "content:Cookie Policy" },
  {
    label: "Advertiser safety & guidelines",
    action: "content:Safety and Security",
  },
];
function renderAdvertise() {
  const segCards = ADV_SEGMENTS.map(
    (s) => `<div class="adv-seg${s.consumer ? " adv-consumer" : ""}">
      <div class="adv-tag">${s.tag}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <span class="adv-link" onclick="runAction('${s.action}')">${s.cta} \u2192</span>
    </div>`,
  ).join("");
  const docs = ADV_DOCS.map(
    (d) =>
      `<div class="adv-doc" onclick="runAction('${d.action}')"><span class="adv-doc-ic">PDF</span><span class="adv-doc-t">${d.label}</span></div>`,
  ).join("");
  return ``;
}
function advSetLoc(el) {
  document
    .querySelectorAll(".adv-loc")
    .forEach((x) => x.classList.remove("active"));
  el.classList.add("active");
}
function advContinue() {
  const sel = document.querySelector(".adv-loc.active");
  const loc = sel ? sel.textContent : "UK";
  showToast(
    "\u2713 Thanks \u2014 we\u2019ll be in touch about advertising (" +
      loc +
      ")",
  );
  openContent("Contact us");
}

// ══ OVERSEAS ADVERTISING ══
const OADV_TYPES = [
  {
    tag: "Estate agents",
    title: "Overseas estate agents",
    desc: "List your international properties and reach UK buyers searching for a home abroad, with tools to manage everything online.",
    cta: "View agent options",
    action: "content:Business Hub",
  },
  {
    tag: "Private sellers",
    title: "Selling your own place abroad",
    desc: "Advertise your overseas home directly to UK buyers \u2014 no commission, just a simple listing that gets seen.",
    cta: "Sell your property",
    action: "content:Sell overseas property",
  },
  {
    tag: "Developers",
    title: "New homes developers",
    desc: "Promote your development to a large audience of UK buyers, from launch through to sold out.",
    cta: "View developer options",
    action: "content:Business Hub",
  },
  {
    tag: "Other businesses",
    title: "Partners & services",
    desc: "Currency, legal, finance or other services for overseas buyers? Let\u2019s talk about reaching them.",
    cta: "Contact us",
    action: "content:Contact us",
  },
];
const OADV_BENEFITS = [
  "A trusted UK property brand",
  "Fast set-up, usually within 48 hours",
  "Manage your listings online, 24/7",
  "Exposure to a large audience of UK buyers",
  "No commission on a sale",
  "Extras like email campaigns and featured spots",
];
function renderOverseasAdvertise() {
  const types = OADV_TYPES.map(
    (t) => `<div class="adv-seg">
      <div class="adv-tag">${t.tag}</div><h3>${t.title}</h3><p>${t.desc}</p>
      <span class="adv-link" onclick="runAction('${t.action}')">${t.cta} \u2192</span>
    </div>`,
  ).join("");
  const benefits = OADV_BENEFITS.map(
    (b) =>
      `<div class="adv-benefit"><span class="adv-tick">\u2713</span><span>${b}</span></div>`,
  ).join("");
  const countries = [
    "Choose a market",
    "Spain",
    "France",
    "Portugal",
    "Italy",
    "Greece",
    "Other",
  ]
    .map((c) => `<option>${c}</option>`)
    .join("");
  return ``;
}
function oadvContinue() {
  showToast(
    "\u2713 Thanks \u2014 we\u2019ll be in touch about Overseas advertising",
  );
  openContent("Contact us");
}

