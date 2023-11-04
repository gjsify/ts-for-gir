import { GenericType, GenerifiedTypeIdentifier } from "../gir.js";
import { GirNamespace } from "../gir/namespace.js";

export default {
  namespace: "St",
  version: "1.0",
  modifier: (namespace: GirNamespace, inferGenerics: boolean) => {
    if (!inferGenerics) {
      return;
    }

    const Bin = namespace.assertClass("Bin");
    const Button = namespace.assertClass("Button");
    const ScrollView = namespace.assertClass("ScrollView");
    const ScrollBar = namespace.assertClass("ScrollBar");
    const Widget = namespace.assertClass("Widget");
    // TODO: Create a way to propagate this generic to child classes.
    const Viewport = namespace.assertClass("Viewport");
    const StBoxLayout = namespace.assertClass("BoxLayout");

    const Clutter = namespace.assertInstalledImport("Clutter");

    const Actor = Clutter.assertClass("Actor");
    const Content = Clutter.assertClass("Content");
    const Container = Clutter.assertClass("Container");
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

    Container.addGeneric({
      default: Actor.getType(),
      constraint: Actor.getType()
    });

    StBoxLayout.addGeneric({
      deriveFrom: Container.getType(),
      default: Actor.getType(),
      constraint: Actor.getType()
    });

    if (StBoxLayout.parent) {
      StBoxLayout.parent = new GenerifiedTypeIdentifier(
        StBoxLayout.parent.name,
        StBoxLayout.parent.namespace,
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
        // TODO Automatically infer such changes.
        prop.type = new GenericType("A", Actor.getType());
      });
  }
};
