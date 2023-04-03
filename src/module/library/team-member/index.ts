import { FormatAttr } from '../../../format-attr';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssGroupAttr,
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


export interface IconFont {
  useSize?: string;
  size?: string;
}

export interface TeamMemberImage {

  // Content tab.
  url?: FormatAttr<string>;

  // Design tab.
  border?: BorderGroupAttr,
  boxShadow?: BoxShadowGroupAttr,
  filter?: FiltersGroupAttr,
}

export interface TeamMemberAttrs extends InternalAttrs {

  // Mixed tab.
  image?: TeamMemberImage;

  // Content tab.
  name?: FormatAttr<string>;
  teamMemberPosition?: FormatAttr<string>;
  facebookUrl?: FormatAttr<string>;
  twitterUrl?: FormatAttr<string>;
  googleUrl?: FormatAttr<string>;
  linkedinUrl?: FormatAttr<string>;
  content?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design tab.
  iconColor?: FormatAttr<string>;
  iconFont?: FormatAttr<IconFont>;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  bodyFont?: FontBodyGroupAttr;
  excluded?: FontGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;
  animation?: AnimationGroupAttr;
  imageAnimation?: FormatAttr<string>;

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
