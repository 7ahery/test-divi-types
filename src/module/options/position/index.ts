import { FormatAttr } from '../../../format-attr';


export interface PositionAttr {
  mode?: 'default' | 'relative' | 'absolute' | 'fixed';
  origin?: {
    relative?: 'top left' | 'top right' | 'bottom left' | 'bottom right';
    absolute?: 'top left' | 'top center' | 'top right' | 'center left' | 'center center' | 'center right' | 'bottom left' | 'bottom center' | 'bottom right';
    fixed?: 'top left' | 'top center' | 'top right' | 'center left' | 'center center' | 'center right' | 'bottom left' | 'bottom center' | 'bottom right';
  };
  offset?: {
    vertical?: string;
    horizontal?: string;
  }
}

export type PositionGroupAttr = FormatAttr<PositionAttr>;
