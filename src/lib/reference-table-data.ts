import metadata from './framework-metadata.json';

// Single source of truth for the docs reference tables. The data is generated from the Spiderly codebase
// on each release (see that repo's docs/framework-metadata-ssot.md), so these tables can't drift. The
// build-time remark plugin (remark-reference-table.ts) consumes buildTable to render Markdown tables that
// feed both the rendered docs page and the copied / llms.txt markdown. Unknown kinds/names throw, so a typo
// in MDX fails the build rather than rendering an empty table.

type EnumMember = { name: string; value?: string; summary: string };
type EnumModel = { name: string; kind: string; summary?: string; members: EnumMember[] };
type Endpoint = { name: string; verb: string; auth: boolean; summary: string };
type Controller = { name: string; summary?: string; endpoints: Endpoint[] };
type AttributeModel = { name: string; target: string; summary: string };
type Signatured = { name: string; signature: string; description?: string };
type ControlComponent = { selector: string; component: string; inputs: string[] };

const md = metadata as unknown as {
  enums: EnumModel[];
  controllers: Controller[];
  attributes: AttributeModel[];
  helpers: Signatured[];
  validators: Signatured[];
  controls: { baseInputs: string[]; components: ControlComponent[] };
};

export type Column = { header: string; code?: boolean };
export type Table = { columns: Column[]; rows: string[][]; note?: string };

function enumByName(name: string): EnumModel {
  const found = md.enums.find((e) => e.name === name);
  if (!found)
    throw new Error(`<ReferenceTable>: enum "${name}" is missing from framework-metadata.json`);
  return found;
}

function constTable(name: string): Table {
  const model = enumByName(name);
  const hasValue = model.kind === 'constStringClass';
  return {
    columns: hasValue
      ? [{ header: 'Name', code: true }, { header: 'Value', code: true }, { header: 'Description' }]
      : [{ header: 'Name', code: true }, { header: 'Description' }],
    rows: model.members.map((m) =>
      hasValue ? [m.name, m.value ?? '', m.summary] : [m.name, m.summary],
    ),
  };
}

export function buildTable(kind: string): Table {
  switch (kind) {
    case 'apiErrorCodes':
      return constTable('ApiErrorCodes');
    case 'matchModes':
      return constTable('MatchModeCodes');
    case 'uiControlTypes':
      return constTable('UIControlTypeCodes');
    case 'attributes':
      return {
        columns: [
          { header: 'Attribute', code: true },
          { header: 'Target' },
          { header: 'Description' },
        ],
        rows: md.attributes.map((a) => [`[${a.name}]`, a.target, a.summary]),
      };
    case 'endpoints': {
      const name = 'SecurityBaseController';
      const controller = md.controllers.find((c) => c.name === name);
      if (!controller)
        throw new Error(
          `<ReferenceTable>: controller "${name}" is missing from framework-metadata.json`,
        );
      return {
        columns: [
          { header: 'Endpoint', code: true },
          { header: 'Method' },
          { header: 'Auth' },
          { header: 'Description' },
        ],
        rows: controller.endpoints.map((e) => [e.name, e.verb, e.auth ? 'Yes' : 'No', e.summary]),
      };
    }
    case 'helpers':
      return {
        columns: [{ header: 'Signature', code: true }, { header: 'Description' }],
        rows: md.helpers.map((h) => [h.signature, h.description ?? '']),
      };
    case 'validators':
      return {
        columns: [{ header: 'Validator', code: true }, { header: 'Description' }],
        rows: md.validators.map((v) => [v.signature, v.description ?? '']),
      };
    case 'controls':
      return {
        columns: [
          { header: 'Selector', code: true },
          { header: 'Component', code: true },
          { header: 'Control-specific inputs' },
        ],
        rows: md.controls.components.map((c) => [c.selector, c.component, c.inputs.join(', ')]),
        note: `Every control also accepts the shared BaseControl inputs: ${md.controls.baseInputs.join(', ')}.`,
      };
    default:
      throw new Error(`<ReferenceTable>: unknown kind "${kind}"`);
  }
}
