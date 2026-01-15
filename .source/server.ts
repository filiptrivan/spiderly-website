// @ts-nocheck
import { default as __fd_glob_10 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_9 from "../content/docs/validation.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/ui-customization.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/translation.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/set-up-google-authentication.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/set-up-emailing.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/getting-started.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/authorization.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/attributes.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/add-new-entity.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"add-new-entity.mdx": __fd_glob_0, "attributes.mdx": __fd_glob_1, "authorization.mdx": __fd_glob_2, "getting-started.mdx": __fd_glob_3, "index.mdx": __fd_glob_4, "set-up-emailing.mdx": __fd_glob_5, "set-up-google-authentication.mdx": __fd_glob_6, "translation.mdx": __fd_glob_7, "ui-customization.mdx": __fd_glob_8, "validation.mdx": __fd_glob_9, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_10, });