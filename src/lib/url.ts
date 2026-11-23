/** Path with the GitHub Pages base prefix. Files keep their extension; pages get a trailing slash. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleaned = path.replace(/^\//, '').replace(/\/$/, '');
  if (!cleaned) return `${base}/`;
  if (/\.[a-z0-9]+$/i.test(cleaned)) return `${base}/${cleaned}`;
  return `${base}/${cleaned}/`;
}

/** Absolute URL on the public site, including the base path. */
export function absoluteUrl(path = ''): string {
  const origin = import.meta.env.SITE || 'https://jerrynguyen0210.github.io';
  return new URL(url(path), origin).href;
}
