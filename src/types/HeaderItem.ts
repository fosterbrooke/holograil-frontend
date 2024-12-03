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

export const accountsHeaderItems: HeaderItem[] = [
  { name: 'Overview', link: '/accounts/overview', icon: 'overview.svg' },
  { name: 'Resources', link: '/accounts/resources', icon: 'resources.svg' },
  { name: 'Plans', link: '/accounts/plans', icon: 'plans.svg' },
  { name: 'Products', link: '/accounts/products', icon: 'products.svg' },
  { name: 'Settings', link: '/accounts/settings', icon: 'settings.svg' },
];

export const settingsSubItems: HeaderItem[] = [
  {
    name: 'Subscriptions',
    link: '/accounts/settings/subscriptions',
    icon: 'subscriptions.svg',
  },
  { name: 'Invoice', link: '/accounts/settings/invoice', icon: 'invoice.svg' },
  {
    name: 'User Management',
    link: '/accounts/settings/user-management',
    icon: 'management.svg',
  },
];
