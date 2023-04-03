// Internal dependencies.

import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontAttr } from '../../../icon';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  ButtonGroupAttr,
  CssAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  IdClassesGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SizingGroupAttr,
  SpacingGroupAttr,
  StickyGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface FullwidthHeaderCssAttr extends CssAttr {
  headerContainer?: string;
  headerImage?: string;
  logo?: string;
  title?: string;
  content?: string;
  subtitle?: string;
  button1?: string;
  button2?: string;
  scrollButton?: string;
}

export type FullwidthHeaderCssGroupAttr = FormatAttr<FullwidthHeaderCssAttr>;

export interface ScrollDown {
  show?: OnOff;
  icon?: IconFontAttr;
  color?: string;
  size?: string;
}

export type ScrollDownGroupAttr = FormatAttr<ScrollDown>;

export interface FullwidthHeaderImage {
  src?: string;
  alt?: string;
  title?: string;
}

export type FullwidthHeaderImageGroupAttr = FormatAttr<FullwidthHeaderImage>;

export interface FullwidthHeaderAttrs extends InternalAttrs {

  // Mixed tab.
  buttonOne?: ButtonGroupAttr;
  buttonTwo?: ButtonGroupAttr;
  headerImage?: FullwidthHeaderImageGroupAttr;
  logoImage?: FullwidthHeaderImageGroupAttr;

  // Content tab.
  title?: FormatAttr<string>;
  subhead?: FormatAttr<string>;
  content?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  headerFullscreen?: FormatAttr<OnOff>;
  scrollDown?: ScrollDownGroupAttr;
  image?: {
    orientation?: FormatAttr<'center' | 'bottom'>;
    border?: BorderGroupAttr;
    boxShadow?: BoxShadowGroupAttr;
    filter?: FiltersGroupAttr;
  };
  backgroundOverlayColor?: FormatAttr<string>;
  contentOrientation?: FormatAttr<'center' | 'bottom'>;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  subheadFont?:FontGroupAttr;
  contentMaxWidth?: FormatAttr<string>;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: FullwidthHeaderCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
