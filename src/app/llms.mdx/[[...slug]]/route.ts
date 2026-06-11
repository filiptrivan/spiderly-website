import { source } from '@/lib/source';
import { getLLMText } from '@/lib/get-llm-text';

export const revalidate = false;

// Serves the processed Markdown for a single docs page. Reached at the public URL /docs/<slug>.mdx via the
// rewrites in next.config.mjs; powers the "Copy Markdown" / "View as Markdown" page actions and gives AI
// agents a plain-Markdown view of each page.
export async function GET(_req: Request, props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) return new Response('Not found', { status: 404 });

  return new Response(await getLLMText(page), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
