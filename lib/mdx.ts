// Mark this file as server-only
'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

type ContentType = 'blog' | 'projects' | 'research';

export interface PostMetadata {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
  technologies?: string[];
  conference?: string;
  journal?: string;
}

export async function getContentDirectory(type: ContentType): Promise<string> {
  return path.join(process.cwd(), 'content', type);
}

export async function getAllContentIds(type: ContentType) {
  const contentDirectory = await getContentDirectory(type);
  const fileNames = fs.readdirSync(contentDirectory);
  
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getSortedContentData(type: ContentType) {
  const contentDirectory = await getContentDirectory(type);
  const fileNames = fs.readdirSync(contentDirectory);
  
  const allContentData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const matterResult = matter(fileContents);
    
    return {
      id,
      ...(matterResult.data as Omit<PostMetadata, 'id'>),
    };
  });
  
  return allContentData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getContentData(type: ContentType, id: string) {
  const contentDirectory = await getContentDirectory(type);
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const matterResult = matter(fileContents);
  
  // Process markdown content using remark and rehype pipeline
  // This is a more robust approach than the previous implementation
  const processedContent = await remark()
    .use(remarkMath) // Support math expressions
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to rehype with HTML passthrough
    .use(rehypeRaw) // Handle raw HTML in markdown
    .use(rehypeKatex) // Process math blocks with KaTeX
    .use(rehypeStringify) // Convert to HTML string
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();
  
  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<PostMetadata, 'id'>),
  };
}

export async function filterContentByTag(content: PostMetadata[], tag: string | null) {
  if (!tag) return content;
  return content.filter(item => item.tags && item.tags.includes(tag));
}

export async function filterContentBySearch(content: PostMetadata[], search: string | null) {
  if (!search) return content;
  const searchLower = search.toLowerCase();
  return content.filter(item => {
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower)
    );
  });
}

export async function getAllTags(content: PostMetadata[]) {
  const allTags = content.reduce((tags, item) => {
    if (item.tags) {
      item.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, [] as string[]);
  
  return allTags.sort();
}
