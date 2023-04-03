import { FormatAttr } from '../../../format-attr';
import {
  BackgroundGroupAttr,
  CssGroupAttr,
  FiltersGroupAttr,
  FontBodyGroupAttr,
  FontGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  SpacingGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { InternalAttrs } from '../internal';


export interface TabAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;

  // Design tab.
  bodyFont?: FontBodyGroupAttr;
  tabFont?: FontGroupAttr;
  spacing?: SpacingGroupAttr;
  filter?: FiltersGroupAttr;
  transform?: TransformGroupAttr;

  // Advanced tab.
  css?: CssGroupAttr;
  overflow?: OverflowGroupAttr;
  transition?: TransitionGroupAttr;
  position?: PositionGroupAttr;
  zIndex?: ZIndexGroupAttr;
}
