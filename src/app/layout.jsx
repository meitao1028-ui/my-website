import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Academic Portfolio',
  description: 'Personal academic profile and research achievements'
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <header className="mb-10 border-b border-slate-200 pb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">My Academic Portfolio</h1>
              <p className="text-sm text-slate-600">个人学术成果与思考整理</p>
            </div>
            <nav className="flex flex-wrap gap-3 text-sm">
              <Link href="/" className="hover:text-sky-600">Home</Link>
              <Link href="/about" className="hover:text-sky-600">About</Link>
              <Link href="/projects" className="hover:text-sky-600">Projects</Link>
              <Link href="/achievements" className="hover:text-sky-600">Achievements</Link>
              <Link href="/blog" className="hover:text-sky-600">Blog</Link>
              <Link href="/archive" className="hover:text-sky-600">Archive</Link>
              <Link href="/contact" className="hover:text-sky-600">Contact</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} My Academic Portfolio. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

