// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"add-new-entity.mdx": () => import("../content/docs/add-new-entity.mdx?collection=docs"), "attributes.mdx": () => import("../content/docs/attributes.mdx?collection=docs"), "entity-authorization.mdx": () => import("../content/docs/entity-authorization.mdx?collection=docs"), "entity-validation.mdx": () => import("../content/docs/entity-validation.mdx?collection=docs"), "getting-started.mdx": () => import("../content/docs/getting-started.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "set-up-emailing.mdx": () => import("../content/docs/set-up-emailing.mdx?collection=docs"), "set-up-google-authentication.mdx": () => import("../content/docs/set-up-google-authentication.mdx?collection=docs"), "translate-spiderly-app.mdx": () => import("../content/docs/translate-spiderly-app.mdx?collection=docs"), "ui-customization.mdx": () => import("../content/docs/ui-customization.mdx?collection=docs"), }),
};
export default browserCollections;