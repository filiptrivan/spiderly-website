import { source } from '@/lib/source';

const SITE_URL = 'https://www.spiderly.dev';

export const revalidate = false;

export function GET() {
  const pages = source.getPages();

  const entries = pages.map((page) => {
    const description = page.data.description ? `: ${page.data.description}` : '';
    return `- [${page.data.title}](${SITE_URL}${page.url})${description}`;
  });

  const content = `# Spiderly

> Spiderly is a code generator for .NET + Angular. It generates base classes (services, controllers, DTOs, mappers, validators) that hand-written code extends.

## Docs

${entries.join('\n')}
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
