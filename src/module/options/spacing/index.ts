import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';


export interface SidesVertical {
  top?: string;
  bottom?: string;
}

export interface SidesHorizontal {
  right?: string;
  left?: string;
}

export interface Syncs {
  syncHorizontal?: OnOff;
  syncVertical?: OnOff;
}

export type Sides = SidesHorizontal & SidesVertical;

export type SyncNames = keyof Syncs;

export type SpacingItem = Sides & Syncs;

export interface SpacingAttr {
  margin?: SpacingItem;
  padding?: SpacingItem;
}

export type SpacingGroupAttr = FormatAttr<SpacingAttr>;
