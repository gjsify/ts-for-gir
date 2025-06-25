import type { IntrospectedNamespace } from "../gir/namespace.ts";
import { IntrospectedProperty } from "../gir/property.ts";

export default {
	namespace: "Gee",
	version: "0.8",
	modifier(namespace: IntrospectedNamespace) {
		const SortedMap = namespace.assertClass("SortedMap");
		const AbstractSortedMap = namespace.assertClass("AbstractSortedMap");

		if (SortedMap.props.some((prop) => prop.name === "readOnlyView"))
			AbstractSortedMap.props.push(
				new IntrospectedProperty({
					name: "readOnlyView",
					type: AbstractSortedMap.getType(),
					readable: true,
					writable: false,
					constructOnly: false,
					parent: AbstractSortedMap,
				}),
			);

		if (SortedMap.props.some((prop) => prop.name === "read_only_view"))
			AbstractSortedMap.props.push(
				new IntrospectedProperty({
					name: "read_only_view",
					type: AbstractSortedMap.getType(),
					readable: true,
					writable: false,
					constructOnly: false,
					parent: AbstractSortedMap,
				}),
			);

		const AbstractList = namespace.assertClass("AbstractList");
		const LinkedList = namespace.assertClass("LinkedList");

		if (AbstractList.props.some((prop) => prop.name === "readOnlyView"))
			LinkedList.props.push(
				new IntrospectedProperty({
					name: "readOnlyView",
					type: LinkedList.getType(),
					readable: true,
					writable: false,
					constructOnly: false,
					parent: LinkedList,
				}),
			);

		if (AbstractList.props.some((prop) => prop.name === "read_only_view"))
			LinkedList.props.push(
				new IntrospectedProperty({
					name: "read_only_view",
					type: LinkedList.getType(),
					readable: true,
					writable: false,
					constructOnly: false,
					parent: LinkedList,
				}),
			);

		const AbstractBidirList = namespace.assertClass("AbstractBidirList");
		const UnrolledLinkedList = namespace.assertClass("UnrolledLinkedList");

		if (AbstractBidirList.props.some((prop) => prop.name === "readOnlyView"))
			UnrolledLinkedList.props.push(
				new IntrospectedProperty({
					name: "readOnlyView",
					type: UnrolledLinkedList.getType(),
					readable: true,
					writable: false,
					constructOnly: false,
					parent: UnrolledLinkedList,
				}),
			);

		if (AbstractBidirList.props.some((prop) => prop.name === "read_only_view"))
			UnrolledLinkedList.props.push(
				new IntrospectedProperty({
					name: "read_only_view",
					type: UnrolledLinkedList.getType(),
					readable: true,
					writable: false,
					constructOnly: false,
					parent: UnrolledLinkedList,
				}),
			);
	},
};
