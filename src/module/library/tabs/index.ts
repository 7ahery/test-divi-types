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
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface TabsCssAttr extends CssAttr {
  tabsControls?: string;
  tab?: string;
  activeTab?: string;
  tabsContent?: string;
}

export type TabsCssGroupAttr = FormatAttr<TabsCssAttr>;

export interface TabsAttrs extends InternalAttrs {

  // Content tab.
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  bodyFont?: FontBodyGroupAttr;
  activeTab?: {
    background: BackgroundGroupAttr;
    textColor: FormatAttr<string>;
  };
  inactiveTab?: {
    background: BackgroundGroupAttr;
  };
  tabFont?: FontGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: TabsCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
