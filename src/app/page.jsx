import Link from 'next/link';
import { getMarkdownHtml } from '@/lib/markdown';

export const dynamic = 'error'; // fully static

export default async function HomePage() {
  const { html } = await getMarkdownHtml('pages', 'home');

  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">欢迎来到我的学术主页</h2>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </section>

      <section className="card">
        <h3 className="text-sm font-semibold text-slate-500 mb-3">快速入口</h3>
        <div className="card-list">
          <QuickLink href="/about" title="关于我" description="学术背景与研究兴趣概览。" />
          <QuickLink href="/projects" title="科研项目" description="正在进行与已完成的科研项目。" />
          <QuickLink href="/achievements" title="成果合集" description="论文、专利与获奖情况列表。" />
          <QuickLink href="/blog" title="博客心得" description="阶段性思考、读书笔记与研究随笔。" />
          <QuickLink href="/archive" title="资源存档" description="slides、海报、教学资料与其他文件。" />
          <QuickLink href="/contact" title="联系方式" description="电子邮箱、社交账号与其他联络方式。" />
        </div>
      </section>
    </div>
  );
}

function QuickLink({ href, title, description }) {
  return (
    <Link href={href} className="block group">
      <div className="border border-slate-200 group-hover:border-sky-400 transition-colors rounded-xl p-4 bg-white">
        <h4 className="font-semibold mb-1 group-hover:text-sky-600">{title}</h4>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </Link>
  );
}

