import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentRoot = path.join(process.cwd(), 'content');

export function getMarkdownBySlug(folder, slug) {
  const fullPath = path.join(contentRoot, folder, `${slug}.md`);
  const file = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(file);
  return { frontmatter: data, content };
}

export async function getMarkdownHtml(folder, slug) {
  const { frontmatter, content } = getMarkdownBySlug(folder, slug);
  const processed = await remark().use(html).process(content);
  return {
    frontmatter,
    html: processed.toString()
  };
}

export function getCollection(folder) {
  const dir = path.join(contentRoot, folder);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(dir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data,
        content
      };
    })
    .sort((a, b) => {
      if (a.frontmatter.date && b.frontmatter.date) {
        return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
      }
      return 0;
    });
}

