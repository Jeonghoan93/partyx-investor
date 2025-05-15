type FundUsage = {
  category: string
  percentage: number
  description: string
}

type RoadmapFocus = {
  phase: string
  description: string
  focusAreas: {
    area: string
    effort: string
  }[]
}

type MarketInsight = {
  icon: string
  title: string
  problem: string
  solution: string
}

export const missions = [
  {
    img: new URL('/assets/images/techno-nk.png', import.meta.url).href,
    title: 'Techno in Pyongyang',
    subtitle: 'We are not just ticket sellers — we are a movement.',
    body: 'Invite one million people to North Korea for festivals when they collapse, which will symbolise the peace. and we will lead the project.'
  },
  {
    img: new URL('/assets/images/techno.jpg', import.meta.url).href,
    title: 'The Only Answer',
    subtitle: 'To where is the party?',
    body: 'Every organizer, every raver, every city asks the same question: where’s the party? Soon, no one will need to ask — the answer will always be us.'
  },
  {
    img: new URL('/assets/images/office2.jpg', import.meta.url).href,
    title: 'Number One in the EU',
    subtitle: 'The most valuable company by market cap.',
    body: 'We will surpass Hermès International within five years, reaching a valuation of over half a trillion euros.'
  }
]

export const marketInsights: MarketInsight[] = [
  {
    icon: 'mdi-account-multiple',
    title: 'Find Your People, Not Just Parties',
    problem: 'Other apps list events. They don’t help you find who to go with.',
    solution:
      'PartyX connects you with others heading to the same vibe. Go together. Meet after. Build your tribe.'
  },
  {
    icon: 'mdi-map-marker-path',
    title: '7AM: What’s Next?',
    problem: 'The party ends. Everyone’s scattered. The energy dies.',
    solution:
      'We show what’s still alive — next parties, sunrise spas, chill zones. We guide the flow, not just the entry.'
  },
  {
    icon: 'mdi-forum',
    title: 'Every City Has a Pulse',
    problem:
      'There’s no public space for event energy to live outside tickets.',
    solution:
      'Each city has a forum. Announce flash events. Ask questions. Share afterparty locations. It’s alive.'
  },
  {
    icon: 'mdi-chat',
    title: 'Live Event Chat',
    problem: 'Platforms feel dead. You can’t feel the crowd.',
    solution:
      'PartyX events have live chat. You see who’s going, what’s the vibe, and how the night’s unfolding in real time.'
  },
  {
    icon: 'mdi-microphone-message',
    title: 'AI-Powered Party Search',
    problem: 'Filter-based search doesn’t get human desire.',
    solution:
      'Say it or type it: “I want dark techno in an old factory with open-minded people.” We fetch it instantly. Our AI speaks nightlife.'
  },
  {
    icon: 'mdi-currency-eur-off',
    title: '0% Commission Until No One’s Left',
    problem: 'Legacy platforms overcharge because they can.',
    solution:
      'We remove the fee. Kill the middleman. Out-design, out-support, out-care — until no one remembers the old names.'
  },
  {
    icon: 'mdi-shield-check',
    title: 'We Stay With You',
    problem: 'They vanish once the ticket is sold. You’re on your own.',
    solution:
      'PartyX sends mid-party check-ins, safety tips, and support options. It’s your companion, not just a checkout page.'
  },
  {
    icon: 'mdi-rocket-launch',
    title: 'Built for the UBI Era',
    problem: 'Old platforms assume work is life. They’re blind to the shift.',
    solution:
      'In a post-job world, people search for meaning. PartyX becomes the compass — for experience, expression, and connection.'
  },
  {
    icon: 'mdi-trophy',
    title: 'Engineered to Overthrow',
    problem: 'You can’t disrupt a monopoly by being polite.',
    solution:
      'We’ll build a product that’s undeniably better, then go loud. A platform launch like a city-wide party. Everyone hears it.'
  }
]

export const roadmapFocus: RoadmapFocus[] = [
  {
    phase: 'Months 1-3: Foundation & Launch',
    description:
      'Intense focus on core tech refinement, initial strategic hires, and Berlin market launch.',
    focusAreas: [
      // Example: Proportional focus
      { area: 'Product Dev/Tech', effort: 'High (~60%)' }, // Added approx %
      { area: 'Team Building', effort: 'Medium (~30%)' },
      { area: 'Go-to-Market (Berlin)', effort: 'Low (~5%)' },
      { area: 'Strategy/Funding Prep', effort: 'Low (~5%)' }
    ]
  },
  {
    phase: 'Months 4-6: Traction & Scaling',
    description:
      'Emphasis shifts to user acquisition, community building, and scaling infrastructure based on initial feedback.',
    focusAreas: [
      { area: 'Go-to-Market/Growth', effort: 'High (~40%)' },
      { area: 'Product Dev/Tech', effort: 'Medium (~30%)' },
      { area: 'Team Building', effort: 'Medium (~20%)' },
      { area: 'Strategy/Funding Prep', effort: 'Low (~10%)' }
    ]
  },
  {
    phase: 'Months 7-9: Revenue & Expansion Prep',
    description:
      'Focus on enabling revenue streams, refining product based on deeper analytics, and preparing for wider expansion.',
    focusAreas: [
      { area: 'Revenue/Product', effort: 'High (~40%)' },
      { area: 'GTM/Growth', effort: 'Medium (~30%)' },
      { area: 'Strategy/Funding Prep', effort: 'Medium (~20%)' },
      { area: 'Team Building', effort: 'Low (~10%)' }
    ]
  },
  {
    phase: 'Months 10-12: Series A Readiness',
    description:
      'Consolidate metrics, demonstrate scalable model, finalize data room, and actively engage potential Series A investors.',
    focusAreas: [
      { area: 'Strategy/Funding Prep', effort: 'High (~40%)' },
      { area: 'Revenue/Growth', effort: 'Medium (~30%)' },
      { area: 'Product/Tech', effort: 'Low (~20%)' },
      { area: 'Team Building', effort: 'Low (~10%)' }
    ]
  }
]

export const focusIcons: {
  [key: string]: string
} = {
  'Product Dev/Tech': 'mdi-cogs',
  'Team Building': 'mdi-account-group-outline',
  'Go-to-Market (Berlin)': 'mdi-target-account',
  'Go-to-Market/Growth': 'mdi-trending-up',
  'Strategy/Funding Prep': 'mdi-chart-line',
  'Revenue/Product': 'mdi-currency-usd'
}

export const fundUsage: FundUsage[] = [
  {
    category: 'Team & Founder Focus', // Updated Category
    percentage: 45, // Updated Percentage
    description:
      'Secure key engineering talent (critical Backend/Infrastructure) & enable full-time founder dedication to drive product vision, strategy, and investor relations through the crucial first year.' // Updated Description
  },
  {
    category: 'Product Dev & Infrastructure', // Updated Category
    percentage: 20, // Updated Percentage
    description:
      'Fund cloud services (GCP stack: Cloud Run, Firebase, Kafka etc.), essential development tools, monitoring, and infrastructure scaling needed for reliability and rapid feature iteration.' // Updated Description
  },
  {
    category: 'Go-to-Market & Operations', // Updated Category
    percentage: 20, // Updated Percentage
    description:
      'Execute targeted Berlin launch strategy (community partnerships, micro-influencer seeding), establish lean operational base including flexible workspace, and fund initial user acquisition experiments.' // Updated Description
  },
  {
    category: 'Legal & Compliance', // Updated Category
    percentage: 10, // Updated Percentage
    description:
      'Cover company formation, robust Terms of Service/Privacy Policy creation, early partnership agreements, and ensure compliance with GDPR and local regulations.' // Updated Description
  },
  {
    category: 'Contingency', // Updated Category
    percentage: 5, // Updated Percentage
    description:
      'Operational buffer for unforeseen challenges, strategic opportunities, or slight overruns in other categories.' // Updated Description
  }
]
