import { FormatAttr } from '../../../format-attr';
import {
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  ButtonGroupAttr,
  CssGroupAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  IdClassesGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SpacingGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';
import { SocialMediaFollowIconAttrs } from '../social-media-follow';


export interface SocialMediaItemProps {
  label?: string;
  background?: string;
}

export interface SocialNetworkProps {
  [key: string]: SocialMediaItemProps
}

export interface SocialMediaFollowItemAttrs extends InternalAttrs {

  // Mixed
  defaultNetwork?: FormatAttr<string>;
  followButton?: FormatAttr<string>;
  backgroundColor?: FormatAttr<string>;

  // Content tab.
  socialNetwork?: FormatAttr<string>;
  content?: FormatAttr<string>;
  url?: FormatAttr<string>;
  skypeUrl?: FormatAttr<string>;
  skypeAction?: FormatAttr<string>;
  background?: BackgroundGroupAttr;

  // Design tab.
  networkIcon?: FormatAttr<SocialMediaFollowIconAttrs>;
  button?: ButtonGroupAttr;
  spacing?: SpacingGroupAttr;
  border?: BorderGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;

  // Advanced tab.
  module?: IdClassesGroupAttr;
  css?: CssGroupAttr;
  disabledOn?: DisabledOnGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  scroll?: ScrollGroupAttr;
}
