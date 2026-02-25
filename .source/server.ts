// @ts-nocheck
import { default as __fd_glob_20 } from "../content/docs/attributes/meta.json?collection=meta"
import { default as __fd_glob_19 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_18 from "../content/docs/attributes/ui.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/attributes/relationships.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/attributes/index.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/attributes/general.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/attributes/code-generation.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/validation.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/translation.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/set-up-telegram-notifications.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/set-up-google-authentication.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/set-up-emailing.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/relationships.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/getting-started.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/frontend-customization.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/exceptions.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/backend-customization.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/authorization.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/architecture.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/add-new-entity.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"add-new-entity.mdx": __fd_glob_0, "architecture.mdx": __fd_glob_1, "authorization.mdx": __fd_glob_2, "backend-customization.mdx": __fd_glob_3, "exceptions.mdx": __fd_glob_4, "frontend-customization.mdx": __fd_glob_5, "getting-started.mdx": __fd_glob_6, "index.mdx": __fd_glob_7, "relationships.mdx": __fd_glob_8, "set-up-emailing.mdx": __fd_glob_9, "set-up-google-authentication.mdx": __fd_glob_10, "set-up-telegram-notifications.mdx": __fd_glob_11, "translation.mdx": __fd_glob_12, "validation.mdx": __fd_glob_13, "attributes/code-generation.mdx": __fd_glob_14, "attributes/general.mdx": __fd_glob_15, "attributes/index.mdx": __fd_glob_16, "attributes/relationships.mdx": __fd_glob_17, "attributes/ui.mdx": __fd_glob_18, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_19, "attributes/meta.json": __fd_glob_20, });