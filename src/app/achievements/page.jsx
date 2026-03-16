import { getCollection } from '@/lib/markdown';

export const dynamic = 'error';

export default async function AchievementsPage() {
  const achievements = getCollection('achievements');

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">成果合集</h2>
        <p className="text-sm text-slate-600">
          用于整理论文、专利、获奖等正式成果。建议按年份与类型进行简单标注。
        </p>
      </section>
      <section className="space-y-3">
        {achievements.map((item) => (
          <article key={item.slug} className="card">
            <h3 className="font-semibold text-lg mb-1">
              {item.frontmatter.title || item.slug}
            </h3>
            {item.frontmatter.year && (
              <p className="text-xs text-slate-500 mb-1">{item.frontmatter.year}</p>
            )}
            {item.frontmatter.type && (
              <p className="text-xs text-slate-500 mb-1">{item.frontmatter.type}</p>
            )}
            <div className="prose" dangerouslySetInnerHTML={{ __html: item.frontmatter.summary || '' }} />
          </article>
        ))}
        {achievements.length === 0 && (
          <p className="text-sm text-slate-500">
            目前还没有成果条目。请在 `content/achievements` 中添加 Markdown 文件。
          </p>
        )}
      </section>
    </div>
  );
}

