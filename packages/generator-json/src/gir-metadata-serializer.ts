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

	/**
	 * Dispatch table mapping GIR class constructors to their metadata builders.
	 * Order matters: subclasses must appear before superclasses (e.g.
	 * IntrospectedRecord before IntrospectedBaseClass, IntrospectedError before IntrospectedEnum).
	 */
	private static readonly METADATA_DISPATCH: Array<
		// biome-ignore lint/suspicious/noExplicitAny: heterogeneous constructors and handlers require any
		[abstract new (...args: any[]) => unknown, (self: GirMetadataSerializer, obj: any) => GirReflectionMetadata]
	> = [
		[IntrospectedRecord, (s, o) => s.buildRecordMetadata(o)],
		[IntrospectedClass, (s, o) => s.buildClassMetadata(o)],
		[IntrospectedBaseClass, (s, o) => s.buildBaseMetadata(o, "interface")],
		[IntrospectedError, (s, o) => s.buildEnumMetadata(o, true)],
		[IntrospectedEnum, (s, o) => s.buildEnumMetadata(o, false)],
		[IntrospectedConstructor, (s, o) => s.buildFunctionLikeMetadata(o, "constructor")],
		[IntrospectedVirtualClassFunction, (s, o) => s.buildFunctionLikeMetadata(o, "virtual-method", { isVirtual: true })],
		[IntrospectedStaticClassFunction, (s, o) => s.buildFunctionLikeMetadata(o, "static-method", { isStatic: true })],
		[IntrospectedClassFunction, (s, o) => s.buildFunctionLikeMetadata(o, "method")],
		[IntrospectedCallback, (s, o) => s.buildFunctionLikeMetadata(o, "callback")],
		[IntrospectedFunction, (s, o) => s.buildFunctionLikeMetadata(o, "function")],
		[IntrospectedProperty, (s, o) => s.buildPropertyMetadata(o)],
		[IntrospectedField, (s, o) => s.buildBaseMetadata(o, "field")],
		[IntrospectedSignal, (s, o) => s.buildSignalMetadata(o)],
		[IntrospectedConstant, (s, o) => s.buildBaseMetadata(o, "constant")],
		[IntrospectedAlias, (s, o) => s.buildBaseMetadata(o, "alias")],
	];

	private buildMetadata(girObj: unknown): GirReflectionMetadata | null {
		for (const [ctor, handler] of GirMetadataSerializer.METADATA_DISPATCH) {
			if (girObj instanceof ctor) {
				return handler(this, girObj);
			}
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
			...(signal.action ? { action: true } : {}),
			...(signal.noRecurse ? { noRecurse: true } : {}),
			...(signal.noHooks ? { noHooks: true } : {}),
			...(signal.when ? { when: signal.when } : {}),
		};
		return metadata;
	}
}
