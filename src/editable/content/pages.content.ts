import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press release publishing, and newsroom reach',
      description: 'Run media distribution campaigns, publish press releases, and grow newsroom visibility through a premium outreach platform.',
      openGraphTitle: 'Media distribution and press release publishing',
      openGraphDescription: 'Discover campaigns, distribution updates, newsroom stories, and publisher-ready announcements.',
      keywords: ['media distribution', 'press release publishing', 'news syndication', 'pr campaign platform'],
    },
    hero: {
      badge: 'Global media distribution platform',
      title: ['Distribute stories,', 'launch campaigns, and expand media reach.'],
      description: 'Publish press releases, syndicate brand news, and coordinate newsroom-ready campaigns across publisher networks, journalists, and digital channels.',
      primaryCta: { label: 'Explore media distribution', href: '/media-distribution' },
      secondaryCta: { label: 'Start a campaign', href: '/create' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and press releases',
      focusLabel: 'Focus',
      featureCardBadge: 'campaign spotlight',
      featureCardTitle: 'Every release should look ready for editors, publishers, and PR teams.',
      featureCardDescription: 'Lead with campaign context, distribution value, and newsroom confidence across the first screen.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for media distribution teams that need reach, clarity, and credibility.',
      paragraphs: [
        'The platform combines press release publishing, media outreach, campaign archives, and newsroom visibility into one connected frontend experience.',
        'Teams can move from flagship releases to supporting assets, industries, and related campaigns without dropping context or losing momentum.',
        'Every page is designed to feel trustworthy to agencies, startups, publishers, and brand communications teams.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Premium campaign-led homepage with stronger publisher and reach signals.',
        'Connected archives for press releases, distribution updates, and supporting content.',
        'Cleaner discovery flow for brands, PR agencies, and newsroom teams.',
        'Performance-friendly interactions that respect reduced-motion preferences.',
      ],
      primaryLink: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryLink: { label: 'See search results', href: '/search' },
    },
    cta: {
      badge: 'Start your next release',
      title: 'Launch campaigns that feel ready for publishers, partners, and newsroom desks.',
      description: 'Move from campaign planning to public distribution with clearer messaging, stronger page hierarchy, and a more credible front-end presence.',
      primaryCta: { label: 'Launch Campaign', href: '/create' },
      secondaryCta: { label: 'Talk to Strategy', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the network',
    title: 'A media distribution platform designed for reach, trust, and campaign clarity.',
    description: `${slot4BrandConfig.siteName} helps brands, PR teams, and publishers move stories from launch-ready messaging to measurable public visibility.`,
    paragraphs: [
      'We build front-end publishing experiences that make media distribution feel organized, credible, and easy to scan for high-stakes campaigns.',
      'From press release publishing to newsroom updates and search-friendly archives, every touchpoint is tuned for clarity and momentum.',
    ],
    values: [
      {
        title: 'Campaign-ready presentation',
        description: 'We prioritize hierarchy, trust cues, and polished layouts so every release looks ready for journalists and publishing partners.',
      },
      {
        title: 'Connected distribution surfaces',
        description: 'Campaign pages, media archives, outreach CTAs, and supporting content stay connected so discovery feels seamless across the platform.',
      },
      {
        title: 'Measured visibility',
        description: 'We design for clear reach signals, stronger archive discovery, and the kind of confidence PR teams need when launching public stories.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to the team behind your next media push.',
    description: 'Share your release calendar, distribution goals, launch window, or newsroom challenge and we will route you to the right strategy lane.',
    formTitle: 'Request media support',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search campaigns, press releases, industries, publishers, and media updates across the site.',
    },
    hero: {
      badge: 'Search the distribution archive',
      title: 'Find campaigns, releases, publishers, and newsroom updates faster.',
      description: 'Use keywords, industries, and content types to locate distribution posts, press releases, and supporting media assets across the platform.',
      placeholder: 'Search by campaign, brand, industry, publisher, or keyword',
    },
    resultsTitle: 'Latest searchable distribution content',
  },
  create: {
    metadata: {
      title: 'Launch campaign',
      description: 'Create and submit new media distribution campaigns for the site.',
    },
    locked: {
      badge: 'Campaign access',
      title: 'Login to launch a new media distribution campaign.',
      description: 'Use your account to open the publishing workspace, prepare your release, and send a polished campaign through the active distribution surfaces.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Build a release package with newsroom-ready detail.',
      description: 'Choose the campaign type, add messaging, attach reach context, and prepare a polished entry with clear hierarchy for publishers and partners.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this media distribution platform.',
      badge: 'Client and team access',
      title: 'Return to your media distribution workspace.',
      description: 'Login to monitor releases, prepare campaign submissions, and manage the stories moving through your newsroom pipeline.',
      formTitle: 'Login',
      submitLabel: 'Enter workspace',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this media distribution platform.',
      badge: 'Start your newsroom account',
      title: 'Create your account and start launching campaigns.',
      description: 'Open a workspace for press release publishing, campaign submissions, and brand visibility management across the platform.',
      formTitle: 'Create account',
      submitLabel: 'Create workspace',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
