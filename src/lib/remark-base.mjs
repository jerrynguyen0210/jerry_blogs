import { base } from '../site.config.mjs';

/** Prefix root-relative post links and images with the GitHub Pages base path. */
export function withBase(url) {
  if (typeof url !== 'string' || !url.startsWith('/') || url.startsWith('//')) return url;
  const normalised = base.endsWith('/') ? base.slice(0, -1) : base;
  if (url === normalised || url.startsWith(`${normalised}/`)) return url;
  return `${normalised}${url}`;
}

export function remarkBaseLinks() {
  return (tree) => {
    walk(tree);
  };

  function walk(node) {
    if (!node || typeof node !== 'object') return;

    if (
      (node.type === 'link' || node.type === 'image' || node.type === 'definition') &&
      typeof node.url === 'string'
    ) {
      node.url = withBase(node.url);
    }

    if (node.type === 'html' && typeof node.value === 'string') {
      node.value = node.value.replace(
        /(href|src)=(["'])(\/(?!\/)[^"']*)\2/g,
        (_, attr, quote, path) => `${attr}=${quote}${withBase(path)}${quote}`,
      );
    }

    if (Array.isArray(node.children)) {
      for (const child of node.children) walk(child);
    }
  }
}
