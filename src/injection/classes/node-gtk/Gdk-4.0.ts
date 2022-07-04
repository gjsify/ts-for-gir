import type { InjectionClass } from '../../../types/index.js'

export const classesGdk40Node: InjectionClass[] = [
    // See https://github.com/romgrk/node-gtk/blob/master/lib/overrides/Gdk-4.0.js
    {
        versions: ['4.0'],
        qualifiedName: 'Gdk.RGBA',
        constructors: [
            {
                girTypeName: 'constructor',
                isStatic: true,
                name: 'create',
                returnTypes: [{ type: 'Gdk.RGBA' }],
                inParams: [
                    {
                        name: 'value',
                        type: [{ type: 'string' }],
                    },
                ],
                doc: {
                    text: 'Creates a new color from the given string. Passes value to `GdkRGBA.parse()`',
                    tags: [
                        {
                            paramName: '',
                            tagName: 'param',
                            text: 'value',
                        },
                    ],
                },
            },
        ],
    },
]
