export interface HeaderItem {
  name: string;
  link: string;
  icon?: string;
}

export const headerItems: HeaderItem[] = [
  { name: 'About Us', link: '/' },
  { name: 'How It Works', link: '/how-it-works' },
  { name: 'Case Study', link: '/case-study' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Accessories', link: '/accessories' },
];

export const settingsHeaderItems: HeaderItem[] = [
  { name: 'Overview', link: '/accounts/overview', icon: 'overview.svg' },
  { name: 'Resources', link: '/accounts/resources', icon: 'resources.svg' },
  { name: 'Plans', link: '/accounts/plans', icon: 'plans.svg' },
  { name: 'Products', link: '/accounts/products', icon: 'products.svg' },
  { name: 'Settings', link: '/accounts/settings', icon: 'settings.svg' },
];
