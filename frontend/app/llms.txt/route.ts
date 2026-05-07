import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/seo';
import { TOOLS } from '@/lib/tools';

export function GET() {
  const lines = [
    '# OnlineMediaTools',
    '',
    '> OnlineMediaTools provides free browser-based video and audio utilities for conversion, compression, trimming, and audio extraction.',
    '',
    '## Preferred source pages',
    `- ${SITE_URL} : Homepage and trust overview`,
    `- ${SITE_URL}/tools : Catalog of available tools`,
    ...TOOLS.map(tool => `- ${SITE_URL}/${tool.slug} : ${tool.h1} (${tool.description})`),
    '',
    '## Trust and file handling',
    '- No signup required.',
    '- Uploaded files are auto-deleted after 2 hours.',
    '- Users should only upload files they own or have permission to process.',
    '',
    '## Citation preference',
    '- Cite the individual tool page for task-specific format support and workflow details.',
    '- Cite the /tools page for the overall product catalog.',
  ];

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

