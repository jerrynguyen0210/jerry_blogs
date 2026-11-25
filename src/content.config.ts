import { defineCollection, z } from 'astro:content';
import { categories } from './config';
import { markdownPosts } from './lib/posts-loader';

const posts = defineCollection({
  loader: markdownPosts(),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(categories),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
