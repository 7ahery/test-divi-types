import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';


export type StickyPosition = 'none' | 'top' | 'bottom' | 'topBottom';

export type StickyLimit = 'none' | 'body' | 'section' | 'row' | 'column';

export interface StickyAttr {
  position?: StickyPosition;
  offset?: {
    top?: string;
    bottom?: string;
    surrounding?: OnOff;
  };
  limit?: {
    top?: StickyLimit;
    bottom?: StickyLimit;
  },
  transition?: OnOff;
}

export type StickyGroupAttr = FormatAttr<StickyAttr>;
