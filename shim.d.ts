declare module "*.vue" {
  import { defineComponent } from "vue"
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
declare module "*.png" {
  const value: string
  export = value
}
declare module "*.webp" {
  const value: string
  export = value
}
declare module "*.jpg" {
  const value: string
  export = value
}
declare module "*.md" {
  import { MarkdownFile } from "@factor/types"
  const value: MarkdownFile
  export = value
}

declare module "*.json"
declare module "*.svg"
declare module "*.css"
