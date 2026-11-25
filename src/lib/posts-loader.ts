import { readdir } from 'node:fs/promises';
import { glob, type Loader } from 'astro/loaders';

/**
 * Markdown posts in src/content/posts.
 * Astro's glob loader skips cleanup when the folder has no .md files, so a
 * deleted last post can linger in the content store. This clears those
 * entries and still registers the collection so an empty blog builds.
 */
export function markdownPosts(): Loader {
  const inner = glob({ base: './src/content/posts', pattern: '**/*.md' });

  return {
    name: 'markdown-posts',
    load: async (context) => {
      await inner.load(context);

      const files = await readdir(new URL('../content/posts/', import.meta.url));
      if (files.some((file) => file.endsWith('.md'))) return;

      for (const id of context.store.keys()) {
        context.store.delete(id);
      }

      context.store.set({ id: '_', data: {} });
      context.store.delete('_');
    },
  };
}
