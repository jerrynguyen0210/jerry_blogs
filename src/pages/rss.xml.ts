import rss from '@astrojs/rss';
import { site } from '../config';
import { getPosts } from '../lib/posts';
import { absoluteUrl } from '../lib/url';

export async function GET() {
  const posts = await getPosts();

  return rss({
    title: site.title,
    description: site.description,
    // The feed's channel link is taken from `site`. Pass the project URL so
    // it includes /jerry_blogs/, not just the github.io origin.
    site: absoluteUrl(),
    trailingSlash: true,
    customData: '<language>en-au</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: absoluteUrl(`posts/${post.id}`),
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
