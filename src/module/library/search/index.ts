import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
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
  FormFieldGroupAttr,
  IdClassesGroupAttr,
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

// Search Custom CSS Attr.
export interface SearchCssAttr extends CssAttr {
  inputField?: string;
  button?: string;
}

export type SearchCssGroupAttr = FormatAttr<SearchCssAttr>;

export interface SearchAttrs extends InternalAttrs {

  // Mixed tab.

  // Content tab.
  placeholder?: FormatAttr<string>;
  showButton?: FormatAttr<OnOff>;
  excludePages?: FormatAttr<OnOff>;
  excludePosts?: FormatAttr<OnOff>;
  excludedCategories?: FormatAttr<string[]>;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  formField?: FormFieldGroupAttr;
  text?: TextGroupAttr;
  button?: ButtonGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: SearchCssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
