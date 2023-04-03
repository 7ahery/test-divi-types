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


export interface AccordionToggleIcon extends IconFontAttr {
  color?: string;
  useSize?: OnOff;
  size?: string;
}

export interface AccordionCssAttr extends CssAttr {
  toggle?: string;
  openToggle?: string;
  toggleTitle?: string;
  toggleIcon?: string;
  toggleContent?: string;
}

export type AccordionCssGroupAttr = FormatAttr<AccordionCssAttr>;

export interface AccordionAttrs extends InternalAttrs {

  // Content tab.
  toggleIcon?: FormatAttr<AccordionToggleIcon>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design Tab
  openToggleBackground?: BackgroundGroupAttr;
  closedToggleBackground?: BackgroundGroupAttr;
  text?: TextGroupAttr;
  openToggleTextColor?: FormatAttr<string>;
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
  css?: AccordionCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
