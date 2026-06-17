import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Press release distribution, newsroom visibility, and campaign reach',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Newsroom', href: '/press-release' },
      { label: 'Search', href: '/search' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Launch Campaign', href: '/create' },
      secondary: { label: 'Talk to Strategy', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Media distribution built for brands, agencies, and PR teams',
    description: 'Plan campaigns, publish press releases, extend newsroom reach, and keep every distribution touchpoint in one premium media operations surface.',
    columns: [
      {
        title: 'Distribution',
        links: [
          
          { label: 'Press Releases', href: '/updates?category=press-release' },
          
          { label: 'Recent Search Results', href: '/search' },
        ],
      },
      {
        title: 'Platform',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Create Campaign', href: '/create' },
          { label: 'Login', href: '/login' },
        ],
      },
    ],
    bottomNote: 'Trusted media outreach, press release publishing, and campaign visibility without backend changes.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
