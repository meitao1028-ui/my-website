import { getCollection } from '@/lib/markdown';

export const dynamic = 'error';

export default async function ProjectsPage() {
  const projects = getCollection('projects');

  return (
    <div className="space-y-6">
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">科研项目</h2>
        <p className="text-sm text-slate-600">
          在这里简要列出你的科研项目，可以按时间、主题或合作方分类。每个项目都是一个 Markdown 文件，便于后续补充与修改。
        </p>
      </section>
      <section className="space-y-3">
        {projects.map((proj) => (
          <article key={proj.slug} className="card">
            <h3 className="font-semibold text-lg mb-1">
              {proj.frontmatter.title || proj.slug}
            </h3>
            {proj.frontmatter.period && (
              <p className="text-xs text-slate-500 mb-1">{proj.frontmatter.period}</p>
            )}
            {proj.frontmatter.tags && (
              <p className="text-xs text-slate-500 mb-2">
                {proj.frontmatter.tags.join(' · ')}
              </p>
            )}
            <div className="prose" dangerouslySetInnerHTML={{ __html: proj.frontmatter.summary || '' }} />
          </article>
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-slate-500">
            目前还没有项目条目。请在 `content/projects` 中添加 Markdown 文件（下面会给出具体格式示例）。
          </p>
        )}
      </section>
    </div>
  );
}

