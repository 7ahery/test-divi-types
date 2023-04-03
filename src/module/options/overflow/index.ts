import { FormatAttr } from '../../../format-attr';


export type Overflow = 'default' | 'visible' | 'scroll' | 'hidden' | 'auto';

export interface OverflowAttr {
  x?: Overflow;
  y?: Overflow;
}

export type OverflowGroupAttr = FormatAttr<OverflowAttr>;
