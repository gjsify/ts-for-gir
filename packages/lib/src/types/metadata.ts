export interface Metadata {
    name: string
    package_version: string
    api_version: string
    imports: { [lib: string]: string }
}
