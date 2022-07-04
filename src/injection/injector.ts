import type {
    GirClassElement,
    GirRecordElement,
    GirUnionElement,
    GirInterfaceElement,
    Environment,
} from '../types/index.js'
import { Logger } from '../logger.js'

import { classesAll, classesGjs, classesNode } from './index.js'
import { GirFactory } from '../gir-factory.js'

/**
 * Inject additional methods, properties, etc
 */
export class Injector {
    girFactory = new GirFactory()
    log: Logger

    constructor(private readonly environment: Environment) {
        this.log = new Logger(environment, true, 'ConflictResolver')
    }

    /** Inject additional methods, properties, etc to a existing class */
    toClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass._tsData) {
            return
        }

        const classes = this.environment === 'gjs' ? [...classesAll, ...classesGjs] : [...classesAll, ...classesNode]

        const toClass = classes.find((cls) => {
            return (
                girClass._tsData &&
                cls.qualifiedName === girClass._tsData.qualifiedName &&
                cls.versions.includes(girClass._tsData.version)
            )
        })
        if (toClass) {
            if (toClass.staticFunctions) {
                girClass._tsData.staticFunctions.push(
                    ...this.girFactory.newGirFunctions(toClass.staticFunctions, { isInjected: true }),
                )
            }
            if (toClass.constructors) {
                girClass._tsData.constructors.push(
                    ...this.girFactory.newGirFunctions(toClass.constructors, { isInjected: true }),
                )
            }
            if (toClass.methods) {
                girClass._tsData.methods.push(...this.girFactory.newGirFunctions(toClass.methods, { isInjected: true }))
            }
            if (toClass.virtualMethods) {
                girClass._tsData.virtualMethods.push(
                    ...this.girFactory.newGirFunctions(toClass.virtualMethods, { isInjected: true }),
                )
            }
            if (toClass.propertySignalMethods) {
                for (const propertySignalMethod of toClass.propertySignalMethods) {
                    propertySignalMethod.isInjected = true
                    girClass._tsData.propertySignalMethods.push(propertySignalMethod)
                }
            }

            if (toClass.generics) {
                girClass._tsData.generics.push(...this.girFactory.newGenerics(toClass.generics))
            }
        }
    }
}
