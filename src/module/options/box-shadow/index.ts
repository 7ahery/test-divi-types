import { FormatAttr } from '../../../format-attr';


export interface BoxShadowAttr {
  style?: 'none' | 'preset1' | 'preset2' | 'preset3' | 'preset4' | 'preset5' | 'preset6' | 'preset7';
  horizontal?: string;
  vertical?: string;
  blur?: string;
  spread?: string;
  color?: string;
  position?: 'outer' | 'inner';
}

export type BoxShadowGroupAttr = FormatAttr<BoxShadowAttr>;
