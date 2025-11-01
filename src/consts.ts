import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'rin/shimeji',
  description:
    'design & tech enthusiast. linguistics undergraduate.',
  href: 'https://sh1m3ji.dev',
  author: 'rin',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/buttermiilk',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/buttermiilk_',
    label: 'Twitter',
  },
  {
    href: 'mailto:rin@sh1m3ji.dev',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
