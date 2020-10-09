import * as GObject from './GObject-2.0';

const inheritanceTable: { [key: string]: string[] } = {
<%_ for (const key of inheritanceTableKeys) { _%>
    '<%= key %>': [
    <%_ for (const value of inheritanceTable[key]) { _%>
    '<%= value %>',
    <%_ } _%>
],
<%_ } _%>
}


interface StaticNamedClass<T> {
    new (...args: any[]): T
    name: string
}

/**
 * Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
export function giCast<T>(from_: GObject.Object, to_: StaticNamedClass<T>): T {
    const desc: string = from_.toString()
    let clsName: string|null = null
    for (const k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    const toName = to_.name.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        const parents = inheritanceTable[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}    
