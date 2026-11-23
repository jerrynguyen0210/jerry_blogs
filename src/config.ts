import { base, siteOrigin } from './site.config.mjs';

export const categories = ['Tech', 'Career', 'Life'] as const;
export type Category = (typeof categories)[number];

export const categoryBlurbs: Record<Category, string> = {
  Tech: 'Embedded systems, backend, and the tools I am learning.',
  Career: 'Work, the shift out of automotive, and what I pick up along the way.',
  Life: 'Adelaide, home, and everything that is not a commit.',
};

export const site = {
  title: 'Jerry Nguyen',
  name: 'Phuoc (Jerry) Nguyen',
  description:
    'A personal blog about tech, career, and life from Adelaide, South Australia.',
  location: 'Adelaide, South Australia',
  author: 'Phuoc (Jerry) Nguyen',
  // Replace these two placeholders with your real details.
  email: 'you@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  github: 'https://github.com/jerrynguyen0210',
  project: {
    name: 'Industrial Equipment Monitoring Platform',
    url: 'https://github.com/jerrynguyen0210/Industrial-Equipment-Monitoring-Platform',
  },
  origin: siteOrigin,
  base,
} as const;

export function isPlaceholderEmail(email: string): boolean {
  return email.endsWith('@example.com');
}

export function isPlaceholderLinkedIn(url: string): boolean {
  return url.includes('your-handle');
}
