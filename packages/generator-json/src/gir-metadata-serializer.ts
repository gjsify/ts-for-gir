import {
	IntrospectedAlias,
	IntrospectedBaseClass,
	IntrospectedCallback,
	IntrospectedClass,
	IntrospectedClassFunction,
	IntrospectedConstant,
	IntrospectedConstructor,
	IntrospectedEnum,
	IntrospectedError,
	IntrospectedField,
	IntrospectedFunction,
	type IntrospectedFunctionParameter,
	IntrospectedProperty,
	IntrospectedRecord,
	IntrospectedSignal,
	IntrospectedStaticClassFunction,
	IntrospectedVirtualClassFunction,
} from "@ts-for-gir/lib";
import { DeclarationReflection, type SerializerComponent } from "typedoc";

import type { GirLookupIndex } from "./gir-metadata-index.ts";
import type {
	GirClassMetadata,
	GirElementKind,
	GirEnumMetadata,
	GirFunctionMetadata,
	GirRecordMetadata,
	GirReflectionMetadata,
} from "./gir-metadata-types.ts";

/**
 * TypeDoc serializer component that enriches JSON output with GIR-specific metadata.
 *
 * For each `DeclarationReflection`, it looks up the corresponding GIR introspected
 * object via the pre-built lookup index and adds a `girMetadata` field to the JSON.
 */
export class GirMetadataSerializer implements SerializerComponent<DeclarationReflection> {
	readonly priority = -1;

	constructor(private readonly index: GirLookupIndex) {}

	supports(item: unknown): boolean {
		return item instanceof DeclarationReflection;
	}

	toObject(item: DeclarationReflection, obj: Partial<Record<string, unknown>>): Partial<Record<string, unknown>> {
		const key = this.getLookupKey(item);
		const girObj = this.index.get(key);

		if (!girObj) return obj;

		const metadata = this.buildMetadata(girObj);
		if (metadata) {
			obj.girMetadata = metadata;
		}

		return obj;
	}

	private getLookupKey(reflection: DeclarationReflection): string {
		const fullName = reflection.getFullName(".");
		// Strip the namespace prefix (first segment, e.g. "freetype2" from "freetype2.Bitmap.$gtype")
		const dotIndex = fullName.indexOf(".");
		return dotIndex >= 0 ? fullName.substring(dotIndex + 1) : fullName;
	}

	private buildMetadata(girObj: unknown): GirReflectionMetadata | null {
		if (girObj instanceof IntrospectedRecord) {
			return this.buildRecordMetadata(girObj);
		}
		if (girObj instanceof IntrospectedClass) {
			return this.buildClassMetadata(girObj);
		}
		if (girObj instanceof IntrospectedBaseClass) {
			return this.buildBaseMetadata(girObj, "interface");
		}
		if (girObj instanceof IntrospectedError) {
			return this.buildEnumMetadata(girObj, true);
		}
		if (girObj instanceof IntrospectedEnum) {
			return this.buildEnumMetadata(girObj, false);
		}
		if (girObj instanceof IntrospectedConstructor) {
			return this.buildFunctionLikeMetadata(girObj, "constructor");
		}
		if (girObj instanceof IntrospectedVirtualClassFunction) {
			return this.buildFunctionLikeMetadata(girObj, "virtual-method", { isVirtual: true });
		}
		if (girObj instanceof IntrospectedStaticClassFunction) {
			return this.buildFunctionLikeMetadata(girObj, "static-method", { isStatic: true });
		}
		if (girObj instanceof IntrospectedClassFunction) {
			return this.buildFunctionLikeMetadata(girObj, "method");
		}
		if (girObj instanceof IntrospectedCallback) {
			return this.buildFunctionLikeMetadata(girObj, "callback");
		}
		if (girObj instanceof IntrospectedFunction) {
			return this.buildFunctionLikeMetadata(girObj, "function");
		}
		if (girObj instanceof IntrospectedProperty) {
			return this.buildPropertyMetadata(girObj);
		}
		if (girObj instanceof IntrospectedField) {
			return this.buildBaseMetadata(girObj, "field");
		}
		if (girObj instanceof IntrospectedSignal) {
			return this.buildSignalMetadata(girObj);
		}
		if (girObj instanceof IntrospectedConstant) {
			return this.buildBaseMetadata(girObj, "constant");
		}
		if (girObj instanceof IntrospectedAlias) {
			return this.buildBaseMetadata(girObj, "alias");
		}

		return null;
	}

	private buildBaseMetadata(
		girObj: {
			resolve_names?: string[];
			metadata?: {
				introducedVersion?: string;
				deprecated?: boolean;
				deprecatedVersion?: string;
				deprecatedDoc?: string;
			};
		},
		girKind: GirElementKind,
	): GirReflectionMetadata {
		const metadata: GirReflectionMetadata = { girKind };

		if (girObj.resolve_names && girObj.resolve_names.length > 0) {
			metadata.resolveNames = girObj.resolve_names;
		}

		const m = girObj.metadata;
		if (m) {
			if (m.introducedVersion) metadata.introducedVersion = m.introducedVersion;
			if (m.deprecated) metadata.deprecated = m.deprecated;
			if (m.deprecatedVersion) metadata.deprecatedVersion = m.deprecatedVersion;
			if (m.deprecatedDoc) metadata.deprecatedDoc = m.deprecatedDoc;
		}

		return metadata;
	}

	private buildClassMetadata(cls: IntrospectedClass): GirReflectionMetadata {
		const metadata = this.buildBaseMetadata(cls, "class");

		const classMetadata: GirClassMetadata = {};
		if (cls.isAbstract) classMetadata.isAbstract = true;
		if (cls.interfaces.length > 0) {
			classMetadata.interfaces = cls.interfaces.map((i) => `${i.namespace}.${i.name}`);
		}
		if (cls.signals.length > 0) {
			classMetadata.signalNames = cls.signals.map((s) => s.name);
		}

		if (Object.keys(classMetadata).length > 0) {
			metadata.classMetadata = classMetadata;
		}

		return metadata;
	}

	private buildRecordMetadata(record: IntrospectedRecord): GirReflectionMetadata {
		const metadata = this.buildBaseMetadata(record, "record");

		const recordMetadata: GirRecordMetadata = {
			isForeign: record.isForeign(),
			isSimple: record.isSimple(),
		};

		if (record.structFor) {
			recordMetadata.structFor = `${record.structFor.namespace}.${record.structFor.name}`;
		}

		metadata.recordMetadata = recordMetadata;

		return metadata;
	}

	private buildEnumMetadata(enumObj: IntrospectedEnum, isFlags: boolean): GirReflectionMetadata {
		const metadata = this.buildBaseMetadata(enumObj, isFlags ? "bitfield" : "enum");
		const enumMetadata: GirEnumMetadata = { isFlags };
		metadata.enumMetadata = enumMetadata;
		return metadata;
	}

	private extractFunctionParams(params: IntrospectedFunctionParameter[]): Partial<GirFunctionMetadata> {
		const result: Partial<GirFunctionMetadata> = {};

		const directions: Record<string, string> = {};
		const nullable: string[] = [];
		const optional: string[] = [];

		for (const p of params) {
			directions[p.name] = p.direction.toString();
			if (p.isNullable) nullable.push(p.name);
			if (p.isOptional) optional.push(p.name);
		}

		if (Object.keys(directions).length > 0) result.parameterDirections = directions;
		if (nullable.length > 0) result.nullableParams = nullable;
		if (optional.length > 0) result.optionalParams = optional;

		return result;
	}

	private buildFunctionLikeMetadata(
		fn: IntrospectedFunction | IntrospectedClassFunction | IntrospectedConstructor,
		girKind: GirElementKind,
		extra?: Partial<GirFunctionMetadata>,
	): GirReflectionMetadata {
		const metadata = this.buildBaseMetadata(fn, girKind);

		const fnMeta: GirFunctionMetadata = {
			...this.extractFunctionParams(fn.parameters),
			...extra,
		};

		if (Object.keys(fnMeta).length > 0) {
			metadata.functionMetadata = fnMeta;
		}

		return metadata;
	}

	private buildPropertyMetadata(prop: IntrospectedProperty): GirReflectionMetadata {
		const metadata = this.buildBaseMetadata(prop, "property");
		metadata.propertyMetadata = {
			readable: prop.readable,
			writable: prop.writable,
			constructOnly: prop.constructOnly,
		};
		return metadata;
	}

	private buildSignalMetadata(signal: IntrospectedSignal): GirReflectionMetadata {
		const metadata = this.buildBaseMetadata(signal, "signal");
		metadata.signalMetadata = {
			signalName: signal.name,
			detailed: signal.detailed,
		};
		return metadata;
	}
}
