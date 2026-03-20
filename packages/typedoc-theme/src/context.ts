import type { Options, PageEvent, ProjectReflection, Reflection, Router } from "typedoc";
import { DefaultThemeRenderContext, JSX } from "typedoc";
import { giDocgenFooter } from "./partials/footer.ts";
import { giDocgenHeader } from "./partials/header.ts";
import { giDocgenLayout } from "./partials/layout.ts";
import {
	giDocgenModuleMemberSummary,
	giDocgenModuleReflection,
	renderCategorizedProject,
} from "./partials/module-reflection.ts";
import { giDocgenNavigation } from "./partials/navigation.ts";
import { giDocgenPageNavigation } from "./partials/page-navigation.ts";
import { giDocgenPageSidebar } from "./partials/page-sidebar.ts";
import { giDocgenSidebar } from "./partials/sidebar.ts";
import { giDocgenToolbar } from "./partials/toolbar.ts";
import { giDocgenReflectionTemplate } from "./templates/reflection.ts";
import type { GiDocgenTheme } from "./theme.ts";
import { girMemberBadgesFromReflection } from "./utils.ts";

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
		this.reflectionTemplate = bind(giDocgenReflectionTemplate, this);

		// Override indexTemplate to render README + categorized module list on index.html
		this.indexTemplate = (props: PageEvent<ProjectReflection>) => {
			const children = props.model.children ?? [];
			return JSX.createElement(
				JSX.Fragment,
				null,
				// README content
				JSX.createElement(
					"div",
					{ class: "tsd-panel tsd-typography" },
					JSX.createElement(JSX.Raw, { html: this.markdown(props.model.readme || []) }),
				),
				// Categorized module sections
				renderCategorizedProject(this, props.model, children),
			);
		};

		// Remove kind icons (V, F, C, T, etc.) — not needed in the gi-docgen theme.
		this.reflectionIcon = () => JSX.createElement(JSX.Fragment, null);

		// Extend reflectionFlags to add GIR badges (signal, virtual, property flags, deprecated, since).
		// Only on the member heading, not on its signature (avoids duplicate badges).
		const parentFlags = this.reflectionFlags.bind(this);
		this.reflectionFlags = (props: Reflection) => {
			const base = parentFlags(props);
			if (props.isSignature()) return base;
			const badges = girMemberBadgesFromReflection(props);
			if (badges.length === 0) return base;
			return JSX.createElement(
				JSX.Fragment,
				null,
				base,
				...badges.map((b) =>
					JSX.createElement("code", { class: `tsd-tag tsd-tag-gir tsd-tag-gir-${b.cssModifier}` }, b.label),
				),
			);
		};
	}
}
