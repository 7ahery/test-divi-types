export interface UnsupportedAttrs extends Record<string, unknown> {
  builderVersion?: string;
  modulePreset?: string;
  nonconvertible?: string;
  innerHTML?: string;
  registeredShortcode?: string;
  shortcodeName?: string;
  originalName?: string;
}

export interface RenderedContent {
  html?: string;
  error?: string;
}
