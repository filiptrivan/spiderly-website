import type { Plugin } from 'unified';
import type {
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
  Table,
  TableCell,
  TableRow,
} from 'mdast';
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import { SKIP, visit } from 'unist-util-visit';
import { buildTable, type Column } from './reference-table-data';

function tableCell(value: string, column: Column | undefined): TableCell {
  const children: PhrasingContent[] =
    value === '' ? [] : column?.code ? [{ type: 'inlineCode', value }] : [{ type: 'text', value }];
  return { type: 'tableCell', children };
}

function buildTableNodes(kind: string): RootContent[] {
  const { columns, rows, note } = buildTable(kind);

  const headerRow: TableRow = {
    type: 'tableRow',
    children: columns.map((c) => ({
      type: 'tableCell',
      children: [{ type: 'text', value: c.header }],
    })),
  };
  const bodyRows: TableRow[] = rows.map((row) => ({
    type: 'tableRow',
    children: row.map((value, i) => tableCell(value, columns[i])),
  }));

  const table: Table = {
    type: 'table',
    align: columns.map(() => null),
    children: [headerRow, ...bodyRows],
  };

  if (!note) return [table];

  const noteParagraph: Paragraph = { type: 'paragraph', children: [{ type: 'text', value: note }] };
  return [noteParagraph, table];
}

/**
 * Replaces `<ReferenceTable kind="..." />` JSX elements in MDX with real GFM tables built from
 * framework-metadata.json (via the shared buildTable). It runs before Fumadocs' remarkPostprocess, so the
 * generated tables appear in both the rendered docs page and the processed Markdown served at
 * /docs/<slug>.mdx and aggregated into /llms.txt and /llms-full.txt.
 */
export const remarkReferenceTable: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement, index, parent) => {
      if (node.name !== 'ReferenceTable' || !parent || index === undefined) return;

      const kindAttr = node.attributes.find(
        (attr) => attr.type === 'mdxJsxAttribute' && attr.name === 'kind',
      );
      const kind = kindAttr && typeof kindAttr.value === 'string' ? kindAttr.value : undefined;
      if (!kind) throw new Error('<ReferenceTable>: missing string "kind" attribute');

      const replacement = buildTableNodes(kind);
      parent.children.splice(index, 1, ...replacement);
      return [SKIP, index + replacement.length];
    });
  };
};

export default remarkReferenceTable;
