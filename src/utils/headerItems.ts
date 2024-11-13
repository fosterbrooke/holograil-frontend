export interface HeaderItem {
  name: string;
  link: string;
}

const headerItems: HeaderItem[] = [
  { name: 'About Us', link: '/' },
  { name: 'How It Works', link: '/how-it-works' },
  { name: 'Case Study', link: '/case-study' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Accessories', link: '/accessories' },
];

export { headerItems };
