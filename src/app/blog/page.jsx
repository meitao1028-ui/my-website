import { getCollection } from '@/lib/markdown';

export const dynamic = 'error';

export default async function BlogPage() {
  const posts = getCollection('blog');

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">博客心得</h2>
        <p className="text-sm text-slate-600">
          用于记录阶段性思考、读书笔记、研究随想。每篇文章是一个 Markdown 文件，可随时增删改。
        </p>
      </section>
      <section className="space-y-3">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <h3 className="font-semibold text-lg mb-1">
              {post.frontmatter.title || post.slug}
            </h3>
            {post.frontmatter.date && (
              <p className="text-xs text-slate-500 mb-1">
                {new Date(post.frontmatter.date).toLocaleDateString('zh-CN')}
              </p>
            )}
            {post.frontmatter.summary && (
              <p className="text-sm text-slate-600">{post.frontmatter.summary}</p>
            )}
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-slate-500">
            目前还没有博客文章。请在 `content/blog` 中添加 Markdown 文件。
          </p>
        )}
      </section>
    </div>
  );
}

