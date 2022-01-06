/**
 * Vulkan-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';

export namespace Vulkan {

class Flags {
    static name: string
}
class Bool32 {
    static name: string
}
class DeviceSize {
    static name: string
}
class SampleMask {
    static name: string
}
class Instance {
    static name: string
}
class PhysicalDevice {
    static name: string
}
class Device {
    static name: string
}
class Queue {
    static name: string
}
class Semaphore {
    static name: string
}
class CommandBuffer {
    static name: string
}
class Fence {
    static name: string
}
class DeviceMemory {
    static name: string
}
class Buffer {
    static name: string
}
class Image {
    static name: string
}
class Event {
    static name: string
}
class QueryPool {
    static name: string
}
class BufferView {
    static name: string
}
class ImageView {
    static name: string
}
class ShaderModule {
    static name: string
}
class PipelineCache {
    static name: string
}
class PipelineLayout {
    static name: string
}
class RenderPass {
    static name: string
}
class Pipeline {
    static name: string
}
class DescriptorSetLayout {
    static name: string
}
class Sampler {
    static name: string
}
class DescriptorPool {
    static name: string
}
class DescriptorSet {
    static name: string
}
class Framebuffer {
    static name: string
}
class CommandPool {
    static name: string
}
class PipelineCacheHeaderVersion {
    static name: string
}
class Result {
    static name: string
}
class StructureType {
    static name: string
}
class SystemAllocationScope {
    static name: string
}
class InternalAllocationType {
    static name: string
}
class Format {
    static name: string
}
class ImageType {
    static name: string
}
class ImageTiling {
    static name: string
}
class PhysicalDeviceType {
    static name: string
}
class QueryType {
    static name: string
}
class SharingMode {
    static name: string
}
class ImageLayout {
    static name: string
}
class ImageViewType {
    static name: string
}
class ComponentSwizzle {
    static name: string
}
class VertexInputRate {
    static name: string
}
class PrimitiveTopology {
    static name: string
}
class PolygonMode {
    static name: string
}
class FrontFace {
    static name: string
}
class CompareOp {
    static name: string
}
class StencilOp {
    static name: string
}
class LogicOp {
    static name: string
}
class BlendFactor {
    static name: string
}
class BlendOp {
    static name: string
}
class DynamicState {
    static name: string
}
class Filter {
    static name: string
}
class SamplerMipmapMode {
    static name: string
}
class SamplerAddressMode {
    static name: string
}
class BorderColor {
    static name: string
}
class DescriptorType {
    static name: string
}
class AttachmentLoadOp {
    static name: string
}
class AttachmentStoreOp {
    static name: string
}
class PipelineBindPoint {
    static name: string
}
class CommandBufferLevel {
    static name: string
}
class IndexType {
    static name: string
}
class SubpassContents {
    static name: string
}
class ObjectType {
    static name: string
}
class VendorId {
    static name: string
}
class InstanceCreateFlags {
    static name: string
}
class FormatFeatureFlagBits {
    static name: string
}
class FormatFeatureFlags {
    static name: string
}
class ImageUsageFlagBits {
    static name: string
}
class ImageUsageFlags {
    static name: string
}
class ImageCreateFlagBits {
    static name: string
}
class ImageCreateFlags {
    static name: string
}
class SampleCountFlagBits {
    static name: string
}
class SampleCountFlags {
    static name: string
}
class QueueFlagBits {
    static name: string
}
class QueueFlags {
    static name: string
}
class MemoryPropertyFlagBits {
    static name: string
}
class MemoryPropertyFlags {
    static name: string
}
class MemoryHeapFlagBits {
    static name: string
}
class MemoryHeapFlags {
    static name: string
}
class DeviceCreateFlags {
    static name: string
}
class DeviceQueueCreateFlagBits {
    static name: string
}
class DeviceQueueCreateFlags {
    static name: string
}
class PipelineStageFlagBits {
    static name: string
}
class PipelineStageFlags {
    static name: string
}
class MemoryMapFlags {
    static name: string
}
class ImageAspectFlagBits {
    static name: string
}
class ImageAspectFlags {
    static name: string
}
class SparseImageFormatFlagBits {
    static name: string
}
class SparseImageFormatFlags {
    static name: string
}
class SparseMemoryBindFlagBits {
    static name: string
}
class SparseMemoryBindFlags {
    static name: string
}
class FenceCreateFlagBits {
    static name: string
}
class FenceCreateFlags {
    static name: string
}
class SemaphoreCreateFlags {
    static name: string
}
class EventCreateFlags {
    static name: string
}
class QueryPoolCreateFlags {
    static name: string
}
class QueryPipelineStatisticFlagBits {
    static name: string
}
class QueryPipelineStatisticFlags {
    static name: string
}
class QueryResultFlagBits {
    static name: string
}
class QueryResultFlags {
    static name: string
}
class BufferCreateFlagBits {
    static name: string
}
class BufferCreateFlags {
    static name: string
}
class BufferUsageFlagBits {
    static name: string
}
class BufferUsageFlags {
    static name: string
}
class BufferViewCreateFlags {
    static name: string
}
class ImageViewCreateFlagBits {
    static name: string
}
class ImageViewCreateFlags {
    static name: string
}
class ShaderModuleCreateFlags {
    static name: string
}
class PipelineCacheCreateFlags {
    static name: string
}
class PipelineCreateFlagBits {
    static name: string
}
class PipelineCreateFlags {
    static name: string
}
class PipelineShaderStageCreateFlags {
    static name: string
}
class ShaderStageFlagBits {
    static name: string
}
class PipelineVertexInputStateCreateFlags {
    static name: string
}
class PipelineInputAssemblyStateCreateFlags {
    static name: string
}
class PipelineTessellationStateCreateFlags {
    static name: string
}
class PipelineViewportStateCreateFlags {
    static name: string
}
class PipelineRasterizationStateCreateFlags {
    static name: string
}
class CullModeFlagBits {
    static name: string
}
class CullModeFlags {
    static name: string
}
class PipelineMultisampleStateCreateFlags {
    static name: string
}
class PipelineDepthStencilStateCreateFlags {
    static name: string
}
class PipelineColorBlendStateCreateFlags {
    static name: string
}
class ColorComponentFlagBits {
    static name: string
}
class ColorComponentFlags {
    static name: string
}
class PipelineDynamicStateCreateFlags {
    static name: string
}
class PipelineLayoutCreateFlags {
    static name: string
}
class ShaderStageFlags {
    static name: string
}
class SamplerCreateFlagBits {
    static name: string
}
class SamplerCreateFlags {
    static name: string
}
class DescriptorSetLayoutCreateFlagBits {
    static name: string
}
class DescriptorSetLayoutCreateFlags {
    static name: string
}
class DescriptorPoolCreateFlagBits {
    static name: string
}
class DescriptorPoolCreateFlags {
    static name: string
}
class DescriptorPoolResetFlags {
    static name: string
}
class FramebufferCreateFlags {
    static name: string
}
class RenderPassCreateFlags {
    static name: string
}
class AttachmentDescriptionFlagBits {
    static name: string
}
class AttachmentDescriptionFlags {
    static name: string
}
class SubpassDescriptionFlagBits {
    static name: string
}
class SubpassDescriptionFlags {
    static name: string
}
class AccessFlagBits {
    static name: string
}
class AccessFlags {
    static name: string
}
class DependencyFlagBits {
    static name: string
}
class DependencyFlags {
    static name: string
}
class CommandPoolCreateFlagBits {
    static name: string
}
class CommandPoolCreateFlags {
    static name: string
}
class CommandPoolResetFlagBits {
    static name: string
}
class CommandPoolResetFlags {
    static name: string
}
class CommandBufferUsageFlagBits {
    static name: string
}
class CommandBufferUsageFlags {
    static name: string
}
class QueryControlFlagBits {
    static name: string
}
class QueryControlFlags {
    static name: string
}
class CommandBufferResetFlagBits {
    static name: string
}
class CommandBufferResetFlags {
    static name: string
}
class StencilFaceFlagBits {
    static name: string
}
class StencilFaceFlags {
    static name: string
}
class ApplicationInfo {
    static name: string
}
class InstanceCreateInfo {
    static name: string
}
class AllocationCallbacks {
    static name: string
}
class PhysicalDeviceFeatures {
    static name: string
}
class FormatProperties {
    static name: string
}
class Extent3D {
    static name: string
}
class ImageFormatProperties {
    static name: string
}
class PhysicalDeviceLimits {
    static name: string
}
class PhysicalDeviceSparseProperties {
    static name: string
}
class PhysicalDeviceProperties {
    static name: string
}
class QueueFamilyProperties {
    static name: string
}
class MemoryType {
    static name: string
}
class MemoryHeap {
    static name: string
}
class PhysicalDeviceMemoryProperties {
    static name: string
}
class DeviceQueueCreateInfo {
    static name: string
}
class DeviceCreateInfo {
    static name: string
}
class ExtensionProperties {
    static name: string
}
class LayerProperties {
    static name: string
}
class SubmitInfo {
    static name: string
}
class MemoryAllocateInfo {
    static name: string
}
class MappedMemoryRange {
    static name: string
}
class MemoryRequirements {
    static name: string
}
class SparseImageFormatProperties {
    static name: string
}
class SparseImageMemoryRequirements {
    static name: string
}
class SparseMemoryBind {
    static name: string
}
class SparseBufferMemoryBindInfo {
    static name: string
}
class SparseImageOpaqueMemoryBindInfo {
    static name: string
}
class ImageSubresource {
    static name: string
}
class Offset3D {
    static name: string
}
class SparseImageMemoryBind {
    static name: string
}
class SparseImageMemoryBindInfo {
    static name: string
}
class BindSparseInfo {
    static name: string
}
class FenceCreateInfo {
    static name: string
}
class SemaphoreCreateInfo {
    static name: string
}
class EventCreateInfo {
    static name: string
}
class QueryPoolCreateInfo {
    static name: string
}
class BufferCreateInfo {
    static name: string
}
class BufferViewCreateInfo {
    static name: string
}
class ImageCreateInfo {
    static name: string
}
class SubresourceLayout {
    static name: string
}
class ComponentMapping {
    static name: string
}
class ImageSubresourceRange {
    static name: string
}
class ImageViewCreateInfo {
    static name: string
}
class ShaderModuleCreateInfo {
    static name: string
}
class PipelineCacheCreateInfo {
    static name: string
}
class SpecializationMapEntry {
    static name: string
}
class SpecializationInfo {
    static name: string
}
class PipelineShaderStageCreateInfo {
    static name: string
}
class VertexInputBindingDescription {
    static name: string
}
class VertexInputAttributeDescription {
    static name: string
}
class PipelineVertexInputStateCreateInfo {
    static name: string
}
class PipelineInputAssemblyStateCreateInfo {
    static name: string
}
class PipelineTessellationStateCreateInfo {
    static name: string
}
class Viewport {
    static name: string
}
class Offset2D {
    static name: string
}
class Extent2D {
    static name: string
}
class Rect2D {
    static name: string
}
class PipelineViewportStateCreateInfo {
    static name: string
}
class PipelineRasterizationStateCreateInfo {
    static name: string
}
class PipelineMultisampleStateCreateInfo {
    static name: string
}
class StencilOpState {
    static name: string
}
class PipelineDepthStencilStateCreateInfo {
    static name: string
}
class PipelineColorBlendAttachmentState {
    static name: string
}
class PipelineColorBlendStateCreateInfo {
    static name: string
}
class PipelineDynamicStateCreateInfo {
    static name: string
}
class GraphicsPipelineCreateInfo {
    static name: string
}
class ComputePipelineCreateInfo {
    static name: string
}
class PushConstantRange {
    static name: string
}
class PipelineLayoutCreateInfo {
    static name: string
}
class SamplerCreateInfo {
    static name: string
}
class DescriptorSetLayoutBinding {
    static name: string
}
class DescriptorSetLayoutCreateInfo {
    static name: string
}
class DescriptorPoolSize {
    static name: string
}
class DescriptorPoolCreateInfo {
    static name: string
}
class DescriptorSetAllocateInfo {
    static name: string
}
class DescriptorImageInfo {
    static name: string
}
class DescriptorBufferInfo {
    static name: string
}
class WriteDescriptorSet {
    static name: string
}
class CopyDescriptorSet {
    static name: string
}
class FramebufferCreateInfo {
    static name: string
}
class AttachmentDescription {
    static name: string
}
class AttachmentReference {
    static name: string
}
class SubpassDescription {
    static name: string
}
class SubpassDependency {
    static name: string
}
class RenderPassCreateInfo {
    static name: string
}
class CommandPoolCreateInfo {
    static name: string
}
class CommandBufferAllocateInfo {
    static name: string
}
class CommandBufferInheritanceInfo {
    static name: string
}
class CommandBufferBeginInfo {
    static name: string
}
class BufferCopy {
    static name: string
}
class ImageSubresourceLayers {
    static name: string
}
class ImageCopy {
    static name: string
}
class ImageBlit {
    static name: string
}
class BufferImageCopy {
    static name: string
}
class ClearColorValue {
    static name: string
}
class ClearDepthStencilValue {
    static name: string
}
class ClearValue {
    static name: string
}
class ClearAttachment {
    static name: string
}
class ClearRect {
    static name: string
}
class ImageResolve {
    static name: string
}
class MemoryBarrier {
    static name: string
}
class BufferMemoryBarrier {
    static name: string
}
class ImageMemoryBarrier {
    static name: string
}
class RenderPassBeginInfo {
    static name: string
}
class DispatchIndirectCommand {
    static name: string
}
class DrawIndexedIndirectCommand {
    static name: string
}
class DrawIndirectCommand {
    static name: string
}
class BaseOutStructure {
    static name: string
}
class BaseInStructure {
    static name: string
}
class SamplerYcbcrConversion {
    static name: string
}
class DescriptorUpdateTemplate {
    static name: string
}
class PointClippingBehavior {
    static name: string
}
class TessellationDomainOrigin {
    static name: string
}
class SamplerYcbcrModelConversion {
    static name: string
}
class SamplerYcbcrRange {
    static name: string
}
class ChromaLocation {
    static name: string
}
class DescriptorUpdateTemplateType {
    static name: string
}
class SubgroupFeatureFlagBits {
    static name: string
}
class SubgroupFeatureFlags {
    static name: string
}
class PeerMemoryFeatureFlagBits {
    static name: string
}
class PeerMemoryFeatureFlags {
    static name: string
}
class MemoryAllocateFlagBits {
    static name: string
}
class MemoryAllocateFlags {
    static name: string
}
class CommandPoolTrimFlags {
    static name: string
}
class DescriptorUpdateTemplateCreateFlags {
    static name: string
}
class ExternalMemoryHandleTypeFlagBits {
    static name: string
}
class ExternalMemoryHandleTypeFlags {
    static name: string
}
class ExternalMemoryFeatureFlagBits {
    static name: string
}
class ExternalMemoryFeatureFlags {
    static name: string
}
class ExternalFenceHandleTypeFlagBits {
    static name: string
}
class ExternalFenceHandleTypeFlags {
    static name: string
}
class ExternalFenceFeatureFlagBits {
    static name: string
}
class ExternalFenceFeatureFlags {
    static name: string
}
class FenceImportFlagBits {
    static name: string
}
class FenceImportFlags {
    static name: string
}
class SemaphoreImportFlagBits {
    static name: string
}
class SemaphoreImportFlags {
    static name: string
}
class ExternalSemaphoreHandleTypeFlagBits {
    static name: string
}
class ExternalSemaphoreHandleTypeFlags {
    static name: string
}
class ExternalSemaphoreFeatureFlagBits {
    static name: string
}
class ExternalSemaphoreFeatureFlags {
    static name: string
}
class PhysicalDeviceSubgroupProperties {
    static name: string
}
class BindBufferMemoryInfo {
    static name: string
}
class BindImageMemoryInfo {
    static name: string
}
class PhysicalDevice16BitStorageFeatures {
    static name: string
}
class MemoryDedicatedRequirements {
    static name: string
}
class MemoryDedicatedAllocateInfo {
    static name: string
}
class MemoryAllocateFlagsInfo {
    static name: string
}
class DeviceGroupRenderPassBeginInfo {
    static name: string
}
class DeviceGroupCommandBufferBeginInfo {
    static name: string
}
class DeviceGroupSubmitInfo {
    static name: string
}
class DeviceGroupBindSparseInfo {
    static name: string
}
class BindBufferMemoryDeviceGroupInfo {
    static name: string
}
class BindImageMemoryDeviceGroupInfo {
    static name: string
}
class PhysicalDeviceGroupProperties {
    static name: string
}
class DeviceGroupDeviceCreateInfo {
    static name: string
}
class BufferMemoryRequirementsInfo2 {
    static name: string
}
class ImageMemoryRequirementsInfo2 {
    static name: string
}
class ImageSparseMemoryRequirementsInfo2 {
    static name: string
}
class MemoryRequirements2 {
    static name: string
}
class MemoryRequirements2KHR {
    static name: string
}
class SparseImageMemoryRequirements2 {
    static name: string
}
class PhysicalDeviceFeatures2 {
    static name: string
}
class PhysicalDeviceProperties2 {
    static name: string
}
class FormatProperties2 {
    static name: string
}
class ImageFormatProperties2 {
    static name: string
}
class PhysicalDeviceImageFormatInfo2 {
    static name: string
}
class QueueFamilyProperties2 {
    static name: string
}
class PhysicalDeviceMemoryProperties2 {
    static name: string
}
class SparseImageFormatProperties2 {
    static name: string
}
class PhysicalDeviceSparseImageFormatInfo2 {
    static name: string
}
class PhysicalDevicePointClippingProperties {
    static name: string
}
class InputAttachmentAspectReference {
    static name: string
}
class RenderPassInputAttachmentAspectCreateInfo {
    static name: string
}
class ImageViewUsageCreateInfo {
    static name: string
}
class PipelineTessellationDomainOriginStateCreateInfo {
    static name: string
}
class RenderPassMultiviewCreateInfo {
    static name: string
}
class PhysicalDeviceMultiviewFeatures {
    static name: string
}
class PhysicalDeviceMultiviewProperties {
    static name: string
}
class PhysicalDeviceVariablePointersFeatures {
    static name: string
}
class PhysicalDeviceVariablePointerFeatures {
    static name: string
}
class PhysicalDeviceProtectedMemoryFeatures {
    static name: string
}
class PhysicalDeviceProtectedMemoryProperties {
    static name: string
}
class DeviceQueueInfo2 {
    static name: string
}
class ProtectedSubmitInfo {
    static name: string
}
class SamplerYcbcrConversionCreateInfo {
    static name: string
}
class SamplerYcbcrConversionInfo {
    static name: string
}
class BindImagePlaneMemoryInfo {
    static name: string
}
class ImagePlaneMemoryRequirementsInfo {
    static name: string
}
class PhysicalDeviceSamplerYcbcrConversionFeatures {
    static name: string
}
class SamplerYcbcrConversionImageFormatProperties {
    static name: string
}
class DescriptorUpdateTemplateEntry {
    static name: string
}
class DescriptorUpdateTemplateCreateInfo {
    static name: string
}
class ExternalMemoryProperties {
    static name: string
}
class PhysicalDeviceExternalImageFormatInfo {
    static name: string
}
class ExternalImageFormatProperties {
    static name: string
}
class PhysicalDeviceExternalBufferInfo {
    static name: string
}
class ExternalBufferProperties {
    static name: string
}
class PhysicalDeviceIDProperties {
    static name: string
}
class ExternalMemoryImageCreateInfo {
    static name: string
}
class ExternalMemoryBufferCreateInfo {
    static name: string
}
class ExportMemoryAllocateInfo {
    static name: string
}
class PhysicalDeviceExternalFenceInfo {
    static name: string
}
class ExternalFenceProperties {
    static name: string
}
class ExportFenceCreateInfo {
    static name: string
}
class ExportSemaphoreCreateInfo {
    static name: string
}
class PhysicalDeviceExternalSemaphoreInfo {
    static name: string
}
class ExternalSemaphoreProperties {
    static name: string
}
class PhysicalDeviceMaintenance3Properties {
    static name: string
}
class DescriptorSetLayoutSupport {
    static name: string
}
class PhysicalDeviceShaderDrawParametersFeatures {
    static name: string
}
class PhysicalDeviceShaderDrawParameterFeatures {
    static name: string
}
class SurfaceKHR {
    static name: string
}
class ColorSpaceKHR {
    static name: string
}
class PresentModeKHR {
    static name: string
}
class SurfaceTransformFlagBitsKHR {
    static name: string
}
class SurfaceTransformFlagsKHR {
    static name: string
}
class CompositeAlphaFlagBitsKHR {
    static name: string
}
class CompositeAlphaFlagsKHR {
    static name: string
}
class SurfaceCapabilitiesKHR {
    static name: string
}
class SurfaceFormatKHR {
    static name: string
}
class SwapchainKHR {
    static name: string
}
class SwapchainCreateFlagBitsKHR {
    static name: string
}
class SwapchainCreateFlagsKHR {
    static name: string
}
class DeviceGroupPresentModeFlagBitsKHR {
    static name: string
}
class DeviceGroupPresentModeFlagsKHR {
    static name: string
}
class SwapchainCreateInfoKHR {
    static name: string
}
class PresentInfoKHR {
    static name: string
}
class ImageSwapchainCreateInfoKHR {
    static name: string
}
class BindImageMemorySwapchainInfoKHR {
    static name: string
}
class AcquireNextImageInfoKHR {
    static name: string
}
class DeviceGroupPresentCapabilitiesKHR {
    static name: string
}
class DeviceGroupPresentInfoKHR {
    static name: string
}
class DeviceGroupSwapchainCreateInfoKHR {
    static name: string
}
class DisplayKHR {
    static name: string
}
class DisplayModeKHR {
    static name: string
}
class DisplayPlaneAlphaFlagBitsKHR {
    static name: string
}
class DisplayPlaneAlphaFlagsKHR {
    static name: string
}
class DisplayModeCreateFlagsKHR {
    static name: string
}
class DisplaySurfaceCreateFlagsKHR {
    static name: string
}
class DisplayPropertiesKHR {
    static name: string
}
class DisplayModeParametersKHR {
    static name: string
}
class DisplayModePropertiesKHR {
    static name: string
}
class DisplayModeCreateInfoKHR {
    static name: string
}
class DisplayPlaneCapabilitiesKHR {
    static name: string
}
class DisplayPlanePropertiesKHR {
    static name: string
}
class DisplaySurfaceCreateInfoKHR {
    static name: string
}
class DisplayPresentInfoKHR {
    static name: string
}
class RenderPassMultiviewCreateInfoKHR {
    static name: string
}
class PhysicalDeviceMultiviewFeaturesKHR {
    static name: string
}
class PhysicalDeviceMultiviewPropertiesKHR {
    static name: string
}
class PhysicalDeviceFeatures2KHR {
    static name: string
}
class PhysicalDeviceProperties2KHR {
    static name: string
}
class FormatProperties2KHR {
    static name: string
}
class ImageFormatProperties2KHR {
    static name: string
}
class PhysicalDeviceImageFormatInfo2KHR {
    static name: string
}
class QueueFamilyProperties2KHR {
    static name: string
}
class PhysicalDeviceMemoryProperties2KHR {
    static name: string
}
class SparseImageFormatProperties2KHR {
    static name: string
}
class PhysicalDeviceSparseImageFormatInfo2KHR {
    static name: string
}
class PeerMemoryFeatureFlagsKHR {
    static name: string
}
class PeerMemoryFeatureFlagBitsKHR {
    static name: string
}
class MemoryAllocateFlagsKHR {
    static name: string
}
class MemoryAllocateFlagBitsKHR {
    static name: string
}
class MemoryAllocateFlagsInfoKHR {
    static name: string
}
class DeviceGroupRenderPassBeginInfoKHR {
    static name: string
}
class DeviceGroupCommandBufferBeginInfoKHR {
    static name: string
}
class DeviceGroupSubmitInfoKHR {
    static name: string
}
class DeviceGroupBindSparseInfoKHR {
    static name: string
}
class BindBufferMemoryDeviceGroupInfoKHR {
    static name: string
}
class BindImageMemoryDeviceGroupInfoKHR {
    static name: string
}
class CommandPoolTrimFlagsKHR {
    static name: string
}
class PhysicalDeviceGroupPropertiesKHR {
    static name: string
}
class DeviceGroupDeviceCreateInfoKHR {
    static name: string
}
class ExternalMemoryHandleTypeFlagsKHR {
    static name: string
}
class ExternalMemoryHandleTypeFlagBitsKHR {
    static name: string
}
class ExternalMemoryFeatureFlagsKHR {
    static name: string
}
class ExternalMemoryFeatureFlagBitsKHR {
    static name: string
}
class ExternalMemoryPropertiesKHR {
    static name: string
}
class PhysicalDeviceExternalImageFormatInfoKHR {
    static name: string
}
class ExternalImageFormatPropertiesKHR {
    static name: string
}
class PhysicalDeviceExternalBufferInfoKHR {
    static name: string
}
class ExternalBufferPropertiesKHR {
    static name: string
}
class PhysicalDeviceIDPropertiesKHR {
    static name: string
}
class ExternalMemoryImageCreateInfoKHR {
    static name: string
}
class ExternalMemoryBufferCreateInfoKHR {
    static name: string
}
class ExportMemoryAllocateInfoKHR {
    static name: string
}
class ImportMemoryFdInfoKHR {
    static name: string
}
class MemoryFdPropertiesKHR {
    static name: string
}
class MemoryGetFdInfoKHR {
    static name: string
}
class ExternalSemaphoreHandleTypeFlagsKHR {
    static name: string
}
class ExternalSemaphoreHandleTypeFlagBitsKHR {
    static name: string
}
class ExternalSemaphoreFeatureFlagsKHR {
    static name: string
}
class ExternalSemaphoreFeatureFlagBitsKHR {
    static name: string
}
class PhysicalDeviceExternalSemaphoreInfoKHR {
    static name: string
}
class ExternalSemaphorePropertiesKHR {
    static name: string
}
class SemaphoreImportFlagsKHR {
    static name: string
}
class SemaphoreImportFlagBitsKHR {
    static name: string
}
class ExportSemaphoreCreateInfoKHR {
    static name: string
}
class ImportSemaphoreFdInfoKHR {
    static name: string
}
class SemaphoreGetFdInfoKHR {
    static name: string
}
class PhysicalDevicePushDescriptorPropertiesKHR {
    static name: string
}
class PhysicalDeviceFloat16Int8FeaturesKHR {
    static name: string
}
class PhysicalDevice16BitStorageFeaturesKHR {
    static name: string
}
class RectLayerKHR {
    static name: string
}
class PresentRegionKHR {
    static name: string
}
class PresentRegionsKHR {
    static name: string
}
class DescriptorUpdateTemplateKHR {
    static name: string
}
class DescriptorUpdateTemplateTypeKHR {
    static name: string
}
class DescriptorUpdateTemplateCreateFlagsKHR {
    static name: string
}
class DescriptorUpdateTemplateEntryKHR {
    static name: string
}
class DescriptorUpdateTemplateCreateInfoKHR {
    static name: string
}
class AttachmentDescription2KHR {
    static name: string
}
class AttachmentReference2KHR {
    static name: string
}
class SubpassDescription2KHR {
    static name: string
}
class SubpassDependency2KHR {
    static name: string
}
class RenderPassCreateInfo2KHR {
    static name: string
}
class SubpassBeginInfoKHR {
    static name: string
}
class SubpassEndInfoKHR {
    static name: string
}
class SharedPresentSurfaceCapabilitiesKHR {
    static name: string
}
class ExternalFenceHandleTypeFlagsKHR {
    static name: string
}
class ExternalFenceHandleTypeFlagBitsKHR {
    static name: string
}
class ExternalFenceFeatureFlagsKHR {
    static name: string
}
class ExternalFenceFeatureFlagBitsKHR {
    static name: string
}
class PhysicalDeviceExternalFenceInfoKHR {
    static name: string
}
class ExternalFencePropertiesKHR {
    static name: string
}
class FenceImportFlagsKHR {
    static name: string
}
class FenceImportFlagBitsKHR {
    static name: string
}
class ExportFenceCreateInfoKHR {
    static name: string
}
class ImportFenceFdInfoKHR {
    static name: string
}
class FenceGetFdInfoKHR {
    static name: string
}
class PointClippingBehaviorKHR {
    static name: string
}
class TessellationDomainOriginKHR {
    static name: string
}
class PhysicalDevicePointClippingPropertiesKHR {
    static name: string
}
class RenderPassInputAttachmentAspectCreateInfoKHR {
    static name: string
}
class InputAttachmentAspectReferenceKHR {
    static name: string
}
class ImageViewUsageCreateInfoKHR {
    static name: string
}
class PipelineTessellationDomainOriginStateCreateInfoKHR {
    static name: string
}
class PhysicalDeviceSurfaceInfo2KHR {
    static name: string
}
class SurfaceCapabilities2KHR {
    static name: string
}
class SurfaceFormat2KHR {
    static name: string
}
class PhysicalDeviceVariablePointerFeaturesKHR {
    static name: string
}
class PhysicalDeviceVariablePointersFeaturesKHR {
    static name: string
}
class DisplayProperties2KHR {
    static name: string
}
class DisplayPlaneProperties2KHR {
    static name: string
}
class DisplayModeProperties2KHR {
    static name: string
}
class DisplayPlaneInfo2KHR {
    static name: string
}
class DisplayPlaneCapabilities2KHR {
    static name: string
}
class MemoryDedicatedRequirementsKHR {
    static name: string
}
class MemoryDedicatedAllocateInfoKHR {
    static name: string
}
class BufferMemoryRequirementsInfo2KHR {
    static name: string
}
class ImageMemoryRequirementsInfo2KHR {
    static name: string
}
class ImageSparseMemoryRequirementsInfo2KHR {
    static name: string
}
class SparseImageMemoryRequirements2KHR {
    static name: string
}
class ImageFormatListCreateInfoKHR {
    static name: string
}
class SamplerYcbcrConversionKHR {
    static name: string
}
class SamplerYcbcrModelConversionKHR {
    static name: string
}
class SamplerYcbcrRangeKHR {
    static name: string
}
class ChromaLocationKHR {
    static name: string
}
class SamplerYcbcrConversionCreateInfoKHR {
    static name: string
}
class SamplerYcbcrConversionInfoKHR {
    static name: string
}
class BindImagePlaneMemoryInfoKHR {
    static name: string
}
class ImagePlaneMemoryRequirementsInfoKHR {
    static name: string
}
class PhysicalDeviceSamplerYcbcrConversionFeaturesKHR {
    static name: string
}
class SamplerYcbcrConversionImageFormatPropertiesKHR {
    static name: string
}
class BindBufferMemoryInfoKHR {
    static name: string
}
class BindImageMemoryInfoKHR {
    static name: string
}
class PhysicalDeviceMaintenance3PropertiesKHR {
    static name: string
}
class DescriptorSetLayoutSupportKHR {
    static name: string
}
class PhysicalDevice8BitStorageFeaturesKHR {
    static name: string
}
class PhysicalDeviceShaderAtomicInt64FeaturesKHR {
    static name: string
}
class DriverIdKHR {
    static name: string
}
class ConformanceVersionKHR {
    static name: string
}
class PhysicalDeviceDriverPropertiesKHR {
    static name: string
}
class PhysicalDeviceFloatControlsPropertiesKHR {
    static name: string
}
class ResolveModeFlagBitsKHR {
    static name: string
}
class ResolveModeFlagsKHR {
    static name: string
}
class SubpassDescriptionDepthStencilResolveKHR {
    static name: string
}
class PhysicalDeviceDepthStencilResolvePropertiesKHR {
    static name: string
}
class PhysicalDeviceVulkanMemoryModelFeaturesKHR {
    static name: string
}
class SurfaceProtectedCapabilitiesKHR {
    static name: string
}
class PhysicalDeviceUniformBufferStandardLayoutFeaturesKHR {
    static name: string
}
class DebugReportCallbackEXT {
    static name: string
}
class DebugReportObjectTypeEXT {
    static name: string
}
class DebugReportFlagBitsEXT {
    static name: string
}
class DebugReportFlagsEXT {
    static name: string
}
class DebugReportCallbackCreateInfoEXT {
    static name: string
}
class RasterizationOrderAMD {
    static name: string
}
class PipelineRasterizationStateRasterizationOrderAMD {
    static name: string
}
class DebugMarkerObjectNameInfoEXT {
    static name: string
}
class DebugMarkerObjectTagInfoEXT {
    static name: string
}
class DebugMarkerMarkerInfoEXT {
    static name: string
}
class DedicatedAllocationImageCreateInfoNV {
    static name: string
}
class DedicatedAllocationBufferCreateInfoNV {
    static name: string
}
class DedicatedAllocationMemoryAllocateInfoNV {
    static name: string
}
class PipelineRasterizationStateStreamCreateFlagsEXT {
    static name: string
}
class PhysicalDeviceTransformFeedbackFeaturesEXT {
    static name: string
}
class PhysicalDeviceTransformFeedbackPropertiesEXT {
    static name: string
}
class PipelineRasterizationStateStreamCreateInfoEXT {
    static name: string
}
class ImageViewHandleInfoNVX {
    static name: string
}
class TextureLODGatherFormatPropertiesAMD {
    static name: string
}
class ShaderInfoTypeAMD {
    static name: string
}
class ShaderResourceUsageAMD {
    static name: string
}
class ShaderStatisticsInfoAMD {
    static name: string
}
class PhysicalDeviceCornerSampledImageFeaturesNV {
    static name: string
}
class ExternalMemoryHandleTypeFlagBitsNV {
    static name: string
}
class ExternalMemoryHandleTypeFlagsNV {
    static name: string
}
class ExternalMemoryFeatureFlagBitsNV {
    static name: string
}
class ExternalMemoryFeatureFlagsNV {
    static name: string
}
class ExternalImageFormatPropertiesNV {
    static name: string
}
class ExternalMemoryImageCreateInfoNV {
    static name: string
}
class ExportMemoryAllocateInfoNV {
    static name: string
}
class ValidationCheckEXT {
    static name: string
}
class ValidationFlagsEXT {
    static name: string
}
class ImageViewASTCDecodeModeEXT {
    static name: string
}
class PhysicalDeviceASTCDecodeFeaturesEXT {
    static name: string
}
class ConditionalRenderingFlagBitsEXT {
    static name: string
}
class ConditionalRenderingFlagsEXT {
    static name: string
}
class ConditionalRenderingBeginInfoEXT {
    static name: string
}
class PhysicalDeviceConditionalRenderingFeaturesEXT {
    static name: string
}
class CommandBufferInheritanceConditionalRenderingInfoEXT {
    static name: string
}
class ObjectTableNVX {
    static name: string
}
class IndirectCommandsLayoutNVX {
    static name: string
}
class IndirectCommandsTokenTypeNVX {
    static name: string
}
class ObjectEntryTypeNVX {
    static name: string
}
class IndirectCommandsLayoutUsageFlagBitsNVX {
    static name: string
}
class IndirectCommandsLayoutUsageFlagsNVX {
    static name: string
}
class ObjectEntryUsageFlagBitsNVX {
    static name: string
}
class ObjectEntryUsageFlagsNVX {
    static name: string
}
class DeviceGeneratedCommandsFeaturesNVX {
    static name: string
}
class DeviceGeneratedCommandsLimitsNVX {
    static name: string
}
class IndirectCommandsTokenNVX {
    static name: string
}
class IndirectCommandsLayoutTokenNVX {
    static name: string
}
class IndirectCommandsLayoutCreateInfoNVX {
    static name: string
}
class CmdProcessCommandsInfoNVX {
    static name: string
}
class CmdReserveSpaceForCommandsInfoNVX {
    static name: string
}
class ObjectTableCreateInfoNVX {
    static name: string
}
class ObjectTableEntryNVX {
    static name: string
}
class ObjectTablePipelineEntryNVX {
    static name: string
}
class ObjectTableDescriptorSetEntryNVX {
    static name: string
}
class ObjectTableVertexBufferEntryNVX {
    static name: string
}
class ObjectTableIndexBufferEntryNVX {
    static name: string
}
class ObjectTablePushConstantEntryNVX {
    static name: string
}
class ViewportWScalingNV {
    static name: string
}
class PipelineViewportWScalingStateCreateInfoNV {
    static name: string
}
class SurfaceCounterFlagBitsEXT {
    static name: string
}
class SurfaceCounterFlagsEXT {
    static name: string
}
class SurfaceCapabilities2EXT {
    static name: string
}
class DisplayPowerStateEXT {
    static name: string
}
class DeviceEventTypeEXT {
    static name: string
}
class DisplayEventTypeEXT {
    static name: string
}
class DisplayPowerInfoEXT {
    static name: string
}
class DeviceEventInfoEXT {
    static name: string
}
class DisplayEventInfoEXT {
    static name: string
}
class SwapchainCounterCreateInfoEXT {
    static name: string
}
class RefreshCycleDurationGOOGLE {
    static name: string
}
class PastPresentationTimingGOOGLE {
    static name: string
}
class PresentTimeGOOGLE {
    static name: string
}
class PresentTimesInfoGOOGLE {
    static name: string
}
class PhysicalDeviceMultiviewPerViewAttributesPropertiesNVX {
    static name: string
}
class ViewportCoordinateSwizzleNV {
    static name: string
}
class PipelineViewportSwizzleStateCreateFlagsNV {
    static name: string
}
class ViewportSwizzleNV {
    static name: string
}
class PipelineViewportSwizzleStateCreateInfoNV {
    static name: string
}
class DiscardRectangleModeEXT {
    static name: string
}
class PipelineDiscardRectangleStateCreateFlagsEXT {
    static name: string
}
class PhysicalDeviceDiscardRectanglePropertiesEXT {
    static name: string
}
class PipelineDiscardRectangleStateCreateInfoEXT {
    static name: string
}
class ConservativeRasterizationModeEXT {
    static name: string
}
class PipelineRasterizationConservativeStateCreateFlagsEXT {
    static name: string
}
class PhysicalDeviceConservativeRasterizationPropertiesEXT {
    static name: string
}
class PipelineRasterizationConservativeStateCreateInfoEXT {
    static name: string
}
class PipelineRasterizationDepthClipStateCreateFlagsEXT {
    static name: string
}
class PhysicalDeviceDepthClipEnableFeaturesEXT {
    static name: string
}
class PipelineRasterizationDepthClipStateCreateInfoEXT {
    static name: string
}
class XYColorEXT {
    static name: string
}
class HdrMetadataEXT {
    static name: string
}
class DebugUtilsMessengerEXT {
    static name: string
}
class DebugUtilsMessengerCallbackDataFlagsEXT {
    static name: string
}
class DebugUtilsMessengerCreateFlagsEXT {
    static name: string
}
class DebugUtilsMessageSeverityFlagBitsEXT {
    static name: string
}
class DebugUtilsMessageSeverityFlagsEXT {
    static name: string
}
class DebugUtilsMessageTypeFlagBitsEXT {
    static name: string
}
class DebugUtilsMessageTypeFlagsEXT {
    static name: string
}
class DebugUtilsObjectNameInfoEXT {
    static name: string
}
class DebugUtilsObjectTagInfoEXT {
    static name: string
}
class DebugUtilsLabelEXT {
    static name: string
}
class DebugUtilsMessengerCallbackDataEXT {
    static name: string
}
class DebugUtilsMessengerCreateInfoEXT {
    static name: string
}
class SamplerReductionModeEXT {
    static name: string
}
class SamplerReductionModeCreateInfoEXT {
    static name: string
}
class PhysicalDeviceSamplerFilterMinmaxPropertiesEXT {
    static name: string
}
class PhysicalDeviceInlineUniformBlockFeaturesEXT {
    static name: string
}
class PhysicalDeviceInlineUniformBlockPropertiesEXT {
    static name: string
}
class WriteDescriptorSetInlineUniformBlockEXT {
    static name: string
}
class DescriptorPoolInlineUniformBlockCreateInfoEXT {
    static name: string
}
class SampleLocationEXT {
    static name: string
}
class SampleLocationsInfoEXT {
    static name: string
}
class AttachmentSampleLocationsEXT {
    static name: string
}
class SubpassSampleLocationsEXT {
    static name: string
}
class RenderPassSampleLocationsBeginInfoEXT {
    static name: string
}
class PipelineSampleLocationsStateCreateInfoEXT {
    static name: string
}
class PhysicalDeviceSampleLocationsPropertiesEXT {
    static name: string
}
class MultisamplePropertiesEXT {
    static name: string
}
class BlendOverlapEXT {
    static name: string
}
class PhysicalDeviceBlendOperationAdvancedFeaturesEXT {
    static name: string
}
class PhysicalDeviceBlendOperationAdvancedPropertiesEXT {
    static name: string
}
class PipelineColorBlendAdvancedStateCreateInfoEXT {
    static name: string
}
class PipelineCoverageToColorStateCreateFlagsNV {
    static name: string
}
class PipelineCoverageToColorStateCreateInfoNV {
    static name: string
}
class CoverageModulationModeNV {
    static name: string
}
class PipelineCoverageModulationStateCreateFlagsNV {
    static name: string
}
class PipelineCoverageModulationStateCreateInfoNV {
    static name: string
}
class DrmFormatModifierPropertiesEXT {
    static name: string
}
class DrmFormatModifierPropertiesListEXT {
    static name: string
}
class PhysicalDeviceImageDrmFormatModifierInfoEXT {
    static name: string
}
class ImageDrmFormatModifierListCreateInfoEXT {
    static name: string
}
class ImageDrmFormatModifierExplicitCreateInfoEXT {
    static name: string
}
class ImageDrmFormatModifierPropertiesEXT {
    static name: string
}
class ValidationCacheEXT {
    static name: string
}
class ValidationCacheHeaderVersionEXT {
    static name: string
}
class ValidationCacheCreateFlagsEXT {
    static name: string
}
class ValidationCacheCreateInfoEXT {
    static name: string
}
class ShaderModuleValidationCacheCreateInfoEXT {
    static name: string
}
class DescriptorBindingFlagBitsEXT {
    static name: string
}
class DescriptorBindingFlagsEXT {
    static name: string
}
class DescriptorSetLayoutBindingFlagsCreateInfoEXT {
    static name: string
}
class PhysicalDeviceDescriptorIndexingFeaturesEXT {
    static name: string
}
class PhysicalDeviceDescriptorIndexingPropertiesEXT {
    static name: string
}
class DescriptorSetVariableDescriptorCountAllocateInfoEXT {
    static name: string
}
class DescriptorSetVariableDescriptorCountLayoutSupportEXT {
    static name: string
}
class ShadingRatePaletteEntryNV {
    static name: string
}
class CoarseSampleOrderTypeNV {
    static name: string
}
class ShadingRatePaletteNV {
    static name: string
}
class PipelineViewportShadingRateImageStateCreateInfoNV {
    static name: string
}
class PhysicalDeviceShadingRateImageFeaturesNV {
    static name: string
}
class PhysicalDeviceShadingRateImagePropertiesNV {
    static name: string
}
class CoarseSampleLocationNV {
    static name: string
}
class CoarseSampleOrderCustomNV {
    static name: string
}
class PipelineViewportCoarseSampleOrderStateCreateInfoNV {
    static name: string
}
class AccelerationStructureNV {
    static name: string
}
class RayTracingShaderGroupTypeNV {
    static name: string
}
class GeometryTypeNV {
    static name: string
}
class AccelerationStructureTypeNV {
    static name: string
}
class CopyAccelerationStructureModeNV {
    static name: string
}
class AccelerationStructureMemoryRequirementsTypeNV {
    static name: string
}
class GeometryFlagBitsNV {
    static name: string
}
class GeometryFlagsNV {
    static name: string
}
class GeometryInstanceFlagBitsNV {
    static name: string
}
class GeometryInstanceFlagsNV {
    static name: string
}
class BuildAccelerationStructureFlagBitsNV {
    static name: string
}
class BuildAccelerationStructureFlagsNV {
    static name: string
}
class RayTracingShaderGroupCreateInfoNV {
    static name: string
}
class RayTracingPipelineCreateInfoNV {
    static name: string
}
class GeometryTrianglesNV {
    static name: string
}
class GeometryAABBNV {
    static name: string
}
class GeometryDataNV {
    static name: string
}
class GeometryNV {
    static name: string
}
class AccelerationStructureInfoNV {
    static name: string
}
class AccelerationStructureCreateInfoNV {
    static name: string
}
class BindAccelerationStructureMemoryInfoNV {
    static name: string
}
class WriteDescriptorSetAccelerationStructureNV {
    static name: string
}
class AccelerationStructureMemoryRequirementsInfoNV {
    static name: string
}
class PhysicalDeviceRayTracingPropertiesNV {
    static name: string
}
class PhysicalDeviceRepresentativeFragmentTestFeaturesNV {
    static name: string
}
class PipelineRepresentativeFragmentTestStateCreateInfoNV {
    static name: string
}
class PhysicalDeviceImageViewImageFormatInfoEXT {
    static name: string
}
class FilterCubicImageViewImageFormatPropertiesEXT {
    static name: string
}
class QueueGlobalPriorityEXT {
    static name: string
}
class DeviceQueueGlobalPriorityCreateInfoEXT {
    static name: string
}
class ImportMemoryHostPointerInfoEXT {
    static name: string
}
class MemoryHostPointerPropertiesEXT {
    static name: string
}
class PhysicalDeviceExternalMemoryHostPropertiesEXT {
    static name: string
}
class TimeDomainEXT {
    static name: string
}
class CalibratedTimestampInfoEXT {
    static name: string
}
class PhysicalDeviceShaderCorePropertiesAMD {
    static name: string
}
class MemoryOverallocationBehaviorAMD {
    static name: string
}
class DeviceMemoryOverallocationCreateInfoAMD {
    static name: string
}
class PhysicalDeviceVertexAttributeDivisorPropertiesEXT {
    static name: string
}
class VertexInputBindingDivisorDescriptionEXT {
    static name: string
}
class PipelineVertexInputDivisorStateCreateInfoEXT {
    static name: string
}
class PhysicalDeviceVertexAttributeDivisorFeaturesEXT {
    static name: string
}
class PipelineCreationFeedbackFlagBitsEXT {
    static name: string
}
class PipelineCreationFeedbackFlagsEXT {
    static name: string
}
class PipelineCreationFeedbackEXT {
    static name: string
}
class PipelineCreationFeedbackCreateInfoEXT {
    static name: string
}
class PhysicalDeviceComputeShaderDerivativesFeaturesNV {
    static name: string
}
class PhysicalDeviceMeshShaderFeaturesNV {
    static name: string
}
class PhysicalDeviceMeshShaderPropertiesNV {
    static name: string
}
class DrawMeshTasksIndirectCommandNV {
    static name: string
}
class PhysicalDeviceFragmentShaderBarycentricFeaturesNV {
    static name: string
}
class PhysicalDeviceShaderImageFootprintFeaturesNV {
    static name: string
}
class PipelineViewportExclusiveScissorStateCreateInfoNV {
    static name: string
}
class PhysicalDeviceExclusiveScissorFeaturesNV {
    static name: string
}
class QueueFamilyCheckpointPropertiesNV {
    static name: string
}
class CheckpointDataNV {
    static name: string
}
class PhysicalDevicePCIBusInfoPropertiesEXT {
    static name: string
}
class DisplayNativeHdrSurfaceCapabilitiesAMD {
    static name: string
}
class SwapchainDisplayNativeHdrCreateInfoAMD {
    static name: string
}
class PhysicalDeviceFragmentDensityMapFeaturesEXT {
    static name: string
}
class PhysicalDeviceFragmentDensityMapPropertiesEXT {
    static name: string
}
class RenderPassFragmentDensityMapCreateInfoEXT {
    static name: string
}
class PhysicalDeviceScalarBlockLayoutFeaturesEXT {
    static name: string
}
class PhysicalDeviceMemoryBudgetPropertiesEXT {
    static name: string
}
class PhysicalDeviceMemoryPriorityFeaturesEXT {
    static name: string
}
class MemoryPriorityAllocateInfoEXT {
    static name: string
}
class PhysicalDeviceDedicatedAllocationImageAliasingFeaturesNV {
    static name: string
}
class DeviceAddress {
    static name: string
}
class PhysicalDeviceBufferDeviceAddressFeaturesEXT {
    static name: string
}
class PhysicalDeviceBufferAddressFeaturesEXT {
    static name: string
}
class BufferDeviceAddressInfoEXT {
    static name: string
}
class BufferDeviceAddressCreateInfoEXT {
    static name: string
}
class ImageStencilUsageCreateInfoEXT {
    static name: string
}
class ValidationFeatureEnableEXT {
    static name: string
}
class ValidationFeatureDisableEXT {
    static name: string
}
class ValidationFeaturesEXT {
    static name: string
}
class ComponentTypeNV {
    static name: string
}
class ScopeNV {
    static name: string
}
class CooperativeMatrixPropertiesNV {
    static name: string
}
class PhysicalDeviceCooperativeMatrixFeaturesNV {
    static name: string
}
class PhysicalDeviceCooperativeMatrixPropertiesNV {
    static name: string
}
class CoverageReductionModeNV {
    static name: string
}
class PipelineCoverageReductionStateCreateFlagsNV {
    static name: string
}
class PhysicalDeviceCoverageReductionModeFeaturesNV {
    static name: string
}
class PipelineCoverageReductionStateCreateInfoNV {
    static name: string
}
class FramebufferMixedSamplesCombinationNV {
    static name: string
}
class PhysicalDeviceYcbcrImageArraysFeaturesEXT {
    static name: string
}
class HeadlessSurfaceCreateFlagsEXT {
    static name: string
}
class HeadlessSurfaceCreateInfoEXT {
    static name: string
}
class PhysicalDeviceHostQueryResetFeaturesEXT {
    static name: string
}
}
export default Vulkan