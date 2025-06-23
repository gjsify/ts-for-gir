import type { IntrospectedNamespace } from '../gir/namespace.ts'
import { GenerifiedTypeIdentifier } from '../gir.ts'

const metaTemplate = (version: string) => ({
    namespace: 'Meta',
    version,
    modifier: (namespace: IntrospectedNamespace, inferGenerics: boolean) => {
        if (!inferGenerics) {
            return
        }

        // Connect BackgroundActor to BackgroundContent

        const LayoutManager = namespace.assertInstalledImport('Clutter').assertClass('LayoutManager')

        const BackgroundContent = namespace.assertClass('BackgroundContent')
        const BackgroundActor = namespace.assertClass('BackgroundActor')

        const parent = BackgroundActor.superType

        if (parent) {
            BackgroundActor.superType = new GenerifiedTypeIdentifier(parent.name, parent.namespace, [
                LayoutManager.getType(),
                BackgroundContent.getType(),
            ])
        }
    },
})

export const meta10 = metaTemplate('10')
export const meta11 = metaTemplate('11')
export const meta12 = metaTemplate('12')
export const meta13 = metaTemplate('13')
export const meta14 = metaTemplate('14')
export const meta15 = metaTemplate('15')
export const meta16 = metaTemplate('16')
