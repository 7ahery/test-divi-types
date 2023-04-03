import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssGroupAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  IdClassesGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SizingGroupAttr,
  SpacingGroupAttr,
  StickyGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface MapAttr {
  lat?: number;
  lng?: number;
  address?: string;
  zoom?: number;
}

export interface GrayscaleFilterAttrs {
  enabled?: OnOff;
  amount?: string;
}

export interface MapAttrs extends InternalAttrs {

  // Mixed Tabs - everything that is applied to map element
  map?: {
    coordinates?: FormatAttr<MapAttr>;
    grayscaleFilter?: FormatAttr<GrayscaleFilterAttrs>;
    filter?: FiltersGroupAttr;
  }

  // Content tab.
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;
  googleAPIKey?: FormatAttr<string>;

  // Design tab.
  mouseWheel?: FormatAttr<OnOff>;
  mobileDragging?: FormatAttr<OnOff>;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: CssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  scroll?: ScrollGroupAttr;
  sticky?: StickyGroupAttr;
}
