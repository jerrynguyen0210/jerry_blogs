import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, type Category } from '../config';

export type Post = CollectionEntry<'posts'>;

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Australia/Adelaide',
  }).format(date);
}

export function isoDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Australia/Adelaide',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function readingTime(text: string | undefined): string {
  const words = (text ?? '').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function countLabel(count: number): string {
  if (count === 0) return 'No posts yet';
  if (count === 1) return '1 post';
  return `${count} posts`;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => {
    return import.meta.env.DEV || data.draft !== true;
  });

  return posts.sort((a, b) => {
    const delta = b.data.date.valueOf() - a.data.date.valueOf();
    if (delta !== 0) return delta;
    return a.data.title.localeCompare(b.data.title, 'en-AU');
  });
}

export function isCategory(value: string): value is Category {
  return (categories as readonly string[]).includes(value);
}
