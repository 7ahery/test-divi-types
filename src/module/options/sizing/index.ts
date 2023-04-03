import { FormatAttr } from '../../../format-attr';


export interface SizingAttr {
  width?: string;
  maxWidth?: string;
  alignment?: 'left' | 'center' | 'right';
  minHeight?: string;
  height?: string;
  maxHeight?: string;
}

export type SizingGroupAttr = FormatAttr<SizingAttr>;
