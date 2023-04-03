import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontAttr } from '../../../icon';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
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


export interface ToggleIcon {
  color?: string;
  useSize?: OnOff;
  size?: string;
  icon?: IconFontAttr;
}
export interface ToggleGroupAttr {
  background?: BackgroundGroupAttr;
  icon?: FormatAttr<ToggleIcon>;
}

export interface OpenToggleGroupAttr extends ToggleGroupAttr {
  textColor?: FormatAttr<string>;
}

export interface ToggleCssAttr extends CssAttr {
  openToggle?: string;
  toggleTitle?: string;
  toggleIcon?: string;
  toggleContent?: string;
}

export type ToggleCssGroupAttr = FormatAttr<ToggleCssAttr>;

export interface ToggleAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  open?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  openToggle?: OpenToggleGroupAttr;
  closedToggle?: ToggleGroupAttr;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  closedTitleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: ToggleCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
