import { getMarkdownHtml } from '@/lib/markdown';

export const dynamic = 'error';

export default async function AboutPage() {
  const { html } = await getMarkdownHtml('pages', 'about');
  return (
    <article className="card">
      <h2 className="text-xl font-semibold mb-2">关于我</h2>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

