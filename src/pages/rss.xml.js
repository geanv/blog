import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.draft !== true);
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const base = import.meta.env.BASE_URL;

  return rss({
    title: 'Guo Jian',
    description: 'Guo Jian — Software Engineer & Researcher. Thoughts on cloud, networking, and code.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${base}posts/${post.id}/`,
    })),
  });
}
