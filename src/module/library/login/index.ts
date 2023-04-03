import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  ButtonGroupAttr,
  CssGroupAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  FormFieldGroupAttr,
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


export interface LoginAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  currentPageRedirect?:  FormatAttr<OnOff>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  formField?: FormFieldGroupAttr
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
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
  css?: CssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
  sticky?: StickyGroupAttr;
  scroll?: ScrollGroupAttr;
}
