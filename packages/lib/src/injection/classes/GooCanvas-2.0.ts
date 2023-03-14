import type { InjectionClass } from '../../types/index.js'

// Since we handle pointers as nullable, this property conflicts with inheritance classes, see https://github.com/gjsify/ts-for-gir/issues/108
export const classesGooCanvas20All: InjectionClass[] = [
    {
        versions: ['2.0'],
        qualifiedName: 'GooCanvas.CanvasItem',
        properties: [
            {
                name: 'parent',
                type: [{ type: 'GooCanvas.CanvasItem', nullable: true }],
                girTypeName: 'property',
            },
        ],
    },
]
