import { GenericType, GenerifiedTypeIdentifier } from "../gir.js";
import { IntrospectedNamespace } from "../gir/namespace.js";

const stTemplate = (version: string) => ({
    namespace: "St",
    version,
    modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => {
        if (!inferGenerics) {
            return;
        }

        const Bin = namespace.assertClass("Bin");
        const Button = namespace.assertClass("Button");
        const ScrollView = namespace.assertClass("ScrollView");
        const ScrollBar = namespace.assertClass("ScrollBar");
        const Widget = namespace.assertClass("Widget");
        const Viewport = namespace.assertClass("Viewport");
        const StBoxLayout = namespace.assertClass("BoxLayout");

        const Clutter = namespace.assertInstalledImport("Clutter");

        const Actor = Clutter.assertClass("Actor");
        const Content = Clutter.assertClass("Content");
        const Container = Number(version) < 14 ? Clutter.assertClass("Container") : null;
        const LayoutManager = Clutter.assertClass("LayoutManager");
        const ClutterBoxLayout = Clutter.assertClass("BoxLayout");

        Widget.addGeneric({
            deriveFrom: Actor.getType(),
            default: LayoutManager.getType(),
            constraint: LayoutManager.getType()
        });

        Widget.addGeneric({
            deriveFrom: Actor.getType(),
            default: Content.getType(),
            constraint: Content.getType()
        });

        Widget.props
            .filter(p => p.name === "layout_manager")
            .forEach(prop => {
                prop.type = new GenericType("A", LayoutManager.getType());
            });

        Viewport.addGeneric({
            deriveFrom: Widget.getType(),
            default: LayoutManager.getType(),
            constraint: LayoutManager.getType()
        });

        Viewport.addGeneric({
            deriveFrom: Widget.getType(),
            default: Content.getType(),
            constraint: Content.getType()
        });

        if (Container) {
            Container.addGeneric({
                default: Actor.getType(),
                constraint: Actor.getType()
            });

            StBoxLayout.addGeneric({
                deriveFrom: Container.getType(),
                default: Actor.getType(),
                constraint: Actor.getType()
            });
        }

        if (StBoxLayout.superType) {
            StBoxLayout.superType = new GenerifiedTypeIdentifier(
                StBoxLayout.superType.name,
                StBoxLayout.superType.namespace,
                [ClutterBoxLayout.getType()]
            );
        }

        Bin.addGeneric({
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        Button.addGeneric({
            deriveFrom: Bin.getType(),
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        const get_hscroll_bar = ScrollView.members.find(member => member.name === "get_hscroll_bar");
        const get_vscroll_bar = ScrollView.members.find(member => member.name === "get_vscroll_bar");

        if (get_hscroll_bar) {
            const fixed_get_h = get_hscroll_bar?.copy({ returnType: ScrollBar.getType() });
            const index = ScrollView.members.indexOf(get_hscroll_bar);
            ScrollView.members.splice(index, 1, fixed_get_h);
        }

        if (get_vscroll_bar) {
            const fixed_get_v = get_vscroll_bar?.copy({ returnType: ScrollBar.getType() });
            const index = ScrollView.members.indexOf(get_vscroll_bar);
            ScrollView.members.splice(index, 1, fixed_get_v);
        }

        ScrollView.addGeneric({
            deriveFrom: Bin.getType(),
            default: Actor.getType(),
            constraint: Actor.getType()
        });

        Bin.props
            .filter(p => p.name === "child")
            .forEach(prop => {
                prop.type = new GenericType("A", Actor.getType());
            });
    }
});

export const st1 = stTemplate("1.0");
export const st12 = stTemplate("12");
export const st13 = stTemplate("13");
export const st14 = stTemplate("14");
export const st15 = stTemplate("15");
