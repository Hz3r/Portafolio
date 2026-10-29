import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ id, data }) => data.draft !== true && id.startsWith('es/'));
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${site.name} · Blog`,
    description: 'Notas sobre vibecoding, desarrollo y cosas que voy aprendiendo.',
    site: context.site ?? 'https://portafolio.up.railway.app',
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id.replace(/^es\//, '')}/`,
    })),
    customData: '<language>es</language>',
  });
}
