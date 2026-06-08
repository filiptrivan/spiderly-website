import { source } from '@/lib/source';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions';
import { notFound } from 'next/navigation';

const GITHUB_DOCS_BASE = 'https://github.com/filiptrivan/spiderly-website/blob/master/content/docs';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = `${page.url}.mdx`;
  const githubUrl = `${GITHUB_DOCS_BASE}/${page.path}`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{ enabled: true, single: true }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="mb-4 flex flex-row flex-wrap items-center gap-2 border-b border-border pb-4">
        <LLMCopyButton markdownUrl={markdownUrl} />
        <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const path = `/docs${params.slug ? `/${params.slug.join('/')}` : ''}`;

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      url: `https://www.spiderly.dev${path}`,
      title: page.data.title,
      description: page.data.description,
    },
  };
}
