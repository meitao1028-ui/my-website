import Link from 'next/link';
import { getCollection } from '@/lib/markdown';

export const dynamic = 'error';

export default async function ArchivePage() {
  const items = getCollection('archive');

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">资源存档</h2>
        <p className="text-sm text-slate-600">
          用于集中管理 slides、海报、教学资料、视频链接等。文件本身放在 `public/files`、`public/images` 或 `public/video`，这里用
          Markdown 做说明与跳转链接。
        </p>
      </section>
      <section className="space-y-3">
        {items.map((item) => (
          <article key={item.slug} className="card">
            <h3 className="font-semibold text-lg mb-1">
              {item.frontmatter.title || item.slug}
            </h3>
            {item.frontmatter.category && (
              <p className="text-xs text-slate-500 mb-1">{item.frontmatter.category}</p>
            )}
            {item.frontmatter.file && (
              <p className="text-xs mb-2">
                <Link
                  href={item.frontmatter.file}
                  target="_blank"
                  className="text-sky-600 hover:underline"
                >
                  打开相关文件
                </Link>
              </p>
            )}
            <div className="prose" dangerouslySetInnerHTML={{ __html: item.frontmatter.summary || '' }} />
          </article>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-slate-500">
            目前还没有存档条目。请在 `content/archive` 中添加 Markdown 文件。
          </p>
        )}
      </section>
    </div>
  );
}

