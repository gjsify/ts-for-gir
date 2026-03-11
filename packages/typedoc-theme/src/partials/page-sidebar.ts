import type { PageEvent, Reflection } from "typedoc";
import { JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";

/**
 * Right sidebar: only page navigation (TOC), no settings.
 * Settings are rendered in the left sidebar instead.
 */
export const giDocgenPageSidebar = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) =>
	JSX.createElement(JSX.Fragment, null, context.pageNavigation(props));
