import { GenerifiedTypeIdentifier } from "../gir.js";
import { IntrospectedNamespace } from "../gir/namespace.js";

export default {
  namespace: "Meta",
  modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => {
    if (!inferGenerics) {
      return;
    }

    // Connect BackgroundActor to BackgroundContent

    const LayoutManager = namespace.assertInstalledImport("Clutter").assertClass("LayoutManager");

    const BackgroundContent = namespace.assertClass("BackgroundContent");
    const BackgroundActor = namespace.assertClass("BackgroundActor");

    const parent = BackgroundActor.parent;

    if (parent) {
      BackgroundActor.parent = new GenerifiedTypeIdentifier(parent.name, parent.namespace, [
        LayoutManager.getType(),
        BackgroundContent.getType()
      ]);
    }
  }
};
