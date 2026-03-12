import type { Options, PageEvent, Reflection, Router } from "typedoc";
import { DefaultThemeRenderContext } from "typedoc";
import { giDocgenFooter } from "./partials/footer.ts";
import { giDocgenHeader } from "./partials/header.ts";
import { giDocgenLayout } from "./partials/layout.ts";
import { giDocgenNavigation } from "./partials/navigation.ts";
import { giDocgenPageNavigation } from "./partials/page-navigation.ts";
import { giDocgenPageSidebar } from "./partials/page-sidebar.ts";
import { giDocgenSidebar } from "./partials/sidebar.ts";
import { giDocgenToolbar } from "./partials/toolbar.ts";
import type { GiDocgenTheme } from "./theme.ts";

function bind<F, L extends unknown[], R>(fn: (f: F, ...a: L) => R, first: F) {
	return (...r: L) => fn(first, ...r);
}

export class GiDocgenThemeRenderContext extends DefaultThemeRenderContext {
	constructor(router: Router, theme: GiDocgenTheme, page: PageEvent<Reflection>, options: Options) {
		super(router, theme, page, options);

		this.defaultLayout = bind(giDocgenLayout, this);
		this.navigation = bind(giDocgenNavigation, this);
		this.sidebar = bind(giDocgenSidebar, this);
		this.toolbar = bind(giDocgenToolbar, this);
		this.footer = bind(giDocgenFooter, this);
		this.header = bind(giDocgenHeader, this);
		this.pageNavigation = bind(giDocgenPageNavigation, this);
		this.pageSidebar = bind(giDocgenPageSidebar, this);
	}
}
