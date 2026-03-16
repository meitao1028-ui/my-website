import { getMarkdownHtml } from '@/lib/markdown';

export const dynamic = 'error';

export default async function ContactPage() {
  const { html } = await getMarkdownHtml('pages', 'contact');

  return (
    <article className="card">
      <h2 className="text-xl font-semibold mb-2">联系方式</h2>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

