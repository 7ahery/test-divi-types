import { FormatAttr } from '../../../format-attr';


export interface TextShadowAttr {
  style?: 'none' | 'preset1' | 'preset2' | 'preset3' | 'preset4' | 'preset5';
  horizontal?: string;
  vertical?: string;
  blur?: string;
  color?: string;
}

export type TextShadowGroupAttr = FormatAttr<TextShadowAttr>
