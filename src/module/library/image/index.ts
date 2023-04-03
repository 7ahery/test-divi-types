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
  SpacingAttr,
  StickyGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface ImageAttr {
  src?: string;
  alt?: string;
  titleText?: string;
}

export interface ImageLinkAttr {
  url?: string;
  target?: string;
}

export interface ImageSpacingAttr extends SpacingAttr {
  showBottomSpace?: OnOff;
}

export type ImageSpacingGroupAttr = FormatAttr<ImageSpacingAttr>;

export interface ImageAttrs extends InternalAttrs {

  // Content tab.
  image?: FormatAttr<ImageAttr>;
  showInLightbox?: FormatAttr<OnOff>;
  imageLink?: FormatAttr<ImageLinkAttr>;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  useOverlay?: FormatAttr<OnOff>;
  overlayIconColor?: FormatAttr<string>;
  hoverOverlayColor?: FormatAttr<string>;
  hoverIcon?: IconFontGroupAttr;
  align?: FormatAttr<string>;
  forceFullwidth?: FormatAttr<OnOff>;
  sizing?: SizingGroupAttr;
  spacing?: ImageSpacingGroupAttr;
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
