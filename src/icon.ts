import { FormatAttr } from './format-attr';

// Icon attribute.
export type IconFontAttr = {
  unicode?: string,
  type?: string,
  weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}

export type IconFontGroupAttr = FormatAttr<IconFontAttr>;
