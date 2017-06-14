import test from 'ava';
import {GirEnumeration,GirModule} from './main'

let emptyRepositoryXml = {
    repository: {
        namespace: {
            $: {
                name: "Test",
                version: "1.0"
            }
        }
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
});
