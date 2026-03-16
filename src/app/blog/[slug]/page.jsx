import { notFound } from 'next/navigation';
import { getCollection, getMarkdownHtml } from '@/lib/markdown';

export const dynamic = 'error';

export async function generateStaticParams() {
  const posts = getCollection('blog');
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const slug = params.slug;
  const posts = getCollection('blog');
  const exists = posts.find((p) => p.slug === slug);
  if (!exists) {
    notFound();
  }

  const { frontmatter, html } = await getMarkdownHtml('blog', slug);

  return (
    <article className="card">
      <h1 className="text-2xl font-semibold mb-2">{frontmatter.title || slug}</h1>
      {frontmatter.date && (
        <p className="text-xs text-slate-500 mb-4">
          {new Date(frontmatter.date).toLocaleDateString('zh-CN')}
        </p>
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

