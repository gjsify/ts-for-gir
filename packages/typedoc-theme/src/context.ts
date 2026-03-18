import type { Options, PageEvent, Reflection, Router } from "typedoc";
import { DefaultThemeRenderContext, JSX } from "typedoc";
import { giDocgenFooter } from "./partials/footer.ts";
import { giDocgenHeader } from "./partials/header.ts";
import { giDocgenLayout } from "./partials/layout.ts";
import { giDocgenModuleMemberSummary, giDocgenModuleReflection } from "./partials/module-reflection.ts";
import { giDocgenNavigation } from "./partials/navigation.ts";
import { giDocgenPageNavigation } from "./partials/page-navigation.ts";
import { giDocgenPageSidebar } from "./partials/page-sidebar.ts";
import { giDocgenSidebar } from "./partials/sidebar.ts";
import { giDocgenToolbar } from "./partials/toolbar.ts";
import type { GiDocgenTheme } from "./theme.ts";
import { girMemberBadgeFromComment } from "./utils.ts";

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
		this.moduleReflection = bind(giDocgenModuleReflection, this);
		this.moduleMemberSummary = bind(giDocgenModuleMemberSummary, this);

		// Remove kind icons (V, F, C, T, etc.) — not needed in the gi-docgen theme.
		this.reflectionIcon = () => JSX.createElement(JSX.Fragment, null);

		// Extend reflectionFlags to add GIR-kind badges for signals and virtual methods.
		// Only on the member heading, not on its signature (avoids duplicate badges).
		const parentFlags = this.reflectionFlags.bind(this);
		this.reflectionFlags = (props: Reflection) => {
			const base = parentFlags(props);
			if (props.isSignature()) return base;
			const badge = girMemberBadgeFromComment(props);
			if (!badge) return base;
			const cssClass = `tsd-tag tsd-tag-gir tsd-tag-gir-${badge.cssModifier}`;
			return JSX.createElement(JSX.Fragment, null, base, JSX.createElement("code", { class: cssClass }, badge.label));
		};
	}
}
