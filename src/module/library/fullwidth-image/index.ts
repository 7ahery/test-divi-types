import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontGroupAttr } from '../../../icon';
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


export interface FullwidthImageAttr {
  src?: string;
  alt?: string;
  titleText?: string;
}

export interface FullwidthImageLinkAttr {
  url?: string;
  target?: string;
}

export interface FullwidthImageAttrs extends InternalAttrs {

  // Content tab.
  image?: FormatAttr<FullwidthImageAttr>;
  showInLightbox?: FormatAttr<OnOff>;
  imageLink?: FormatAttr<FullwidthImageLinkAttr>;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  useOverlay?: FormatAttr<OnOff>;
  overlayIconColor?: FormatAttr<string>;
  hoverOverlayColor?: FormatAttr<string>;
  hoverIcon?: IconFontGroupAttr;
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
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
