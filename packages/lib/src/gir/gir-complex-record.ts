import { IntrospectedRecord } from './record.ts'

export class GirComplexRecord extends IntrospectedRecord {
    isSimple() {
        return false
    }
}
