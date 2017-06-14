import test from 'ava';
import {GirEnumeration,GirModule} from './main'

let emptyRepositoryXml = {
    repository: {
        namespace: [
            {
                $: {
                    name: "Test",
                    version: "1.0"
                }
            }
        ]
    }
}

test('enumeration', t => {
    let enum_: GirEnumeration = {
        $: {
            name: "MyEnum"
        },
        member: [
            {
                $: {
                    name: "member_1",
                    value: "0"
                }
            }
        ]
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.deepEqual(mod.exportEnumeration(enum_),
        [
            'export enum MyEnum {',
            '    MEMBER_1,',
            '}'
        ])
})

test('constant', t => {
    let var_ = {
        $: {
            name: "MY_CONST"
        },
        type: [
            {
                $: {
                    name: "MyType"
                }
            }
        ]
    }
    let arrVar = {
        $: { name: "MY_ARR" },
        array: {
            $: { length: "1" },
            type: [ { $: { name: "MyType" } } ]
        }
    }

    let symTable = {
        'Test.MyType': 1
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportConstant(var_),
        [ 'export const MY_CONST:MyType' ])
    t.deepEqual(mod.exportConstant(arrVar),
        [ 'export const MY_ARR:MyType[]' ])

    mod.symTable = {}

    t.deepEqual(mod.exportConstant(var_),
        [ 'export const MY_CONST:any' ])
})

test('function', t => {
    let func = {
        $: { name: "my_func" },
        parameters: [
            { parameter: { 
                $: { name: "arg1"},
                type: [ { $: { name: "MyType" } } ] } }
        ],
        "return-value": [
            {   $: { "transfer-ownership": "none" },
                type: [ { $: { name: "utf8" } } ] }
        ]
    }

    let symTable = {
        'Test.MyType': 1
    }

    let mod = new GirModule(emptyRepositoryXml)
    t.is(mod.name, "Test")

    mod.symTable = symTable

    t.deepEqual(mod.exportFunction(func),
        [ 'export function my_func(arg1: MyType): string' ])
})