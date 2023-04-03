import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
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


export interface CircleBackgroundAttrs {
  color?: string;
  opacity?: string;
}
export interface CircleAttrs {
  color?: FormatAttr<string>;
  background?: FormatAttr<CircleBackgroundAttrs>
}

export interface CircleCounterCssAttr extends CssAttr {
  percent?: string;
  circleCounterTitle?: string;
  percentText?: string;
}

export type CircleCounterCssGroupAttr = FormatAttr<CircleCounterCssAttr>;

export interface CircleCounterAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  number?: FormatAttr<string>;
  percentSign?: FormatAttr<OnOff>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  circle?: CircleAttrs;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  numberFont?: FontGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: CircleCounterCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
