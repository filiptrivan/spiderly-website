import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { remarkReferenceTable } from './src/lib/remark-reference-table';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

// remarkReferenceTable must live in the global mdxOptions (not the collection's): only the global path runs
// Fumadocs' applyMdxPreset, which keeps remarkGfm — and remarkGfm registers the toMarkdown extension that
// serializes the tables this plugin generates.
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkReferenceTable],
  },
});
