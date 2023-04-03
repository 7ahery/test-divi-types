import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontAttr } from '../../../icon';
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


export interface PlayIcon {
  useSize?: OnOff;
  size?: string;
  color?: string;
  icon?: IconFontAttr;
}

// Video Attr.
export interface VideoAttr {
  src?: string;
  webm?: string;
  thumbnail?: {
    src?: string;
    overlayColor?: string;
  }
}


export interface VideoAttrs extends InternalAttrs {

  // Mixed Tab
  video?: FormatAttr<VideoAttr>;

  // Content Tab.
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design Tab.
  playIcon?: FormatAttr<PlayIcon>;
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
