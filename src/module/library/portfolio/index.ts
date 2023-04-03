import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { IconFontGroupAttr } from '../../../icon';
import {
  AdminLabelGroupAttr,
  AnimationGroupAttr,
  BackgroundGroupAttr,
  BorderGroupAttr,
  BoxShadowGroupAttr,
  CssGroupAttr,
  DisabledOnGroupAttr,
  FiltersGroupAttr,
  FontGroupAttr,
  IdClassesGroupAttr,
  LinkGroupAttr,
  OverflowGroupAttr,
  PositionGroupAttr,
  ScrollGroupAttr,
  SizingGroupAttr,
  StickyGroupAttr,
  TextGroupAttr,
  TransformGroupAttr,
  TransitionGroupAttr,
  ZIndexGroupAttr,
} from '../../options';
import { ImageSpacingGroupAttr } from '../image';
import { InternalAttrs } from '../internal';


export interface PortfolioCategory {
  id: number;
  label: string;
  permalink: string;
}

export interface PortfolioThumbnail {
  src: string;
  width: number;
  height: number;
}

export interface PortfolioPost {
  id: number;
  title: string;
  permalink: string;
  thumbnails: { grid: PortfolioThumbnail; fullwidth: PortfolioThumbnail; }
  categories: PortfolioCategory[];
  classNames: string[];
}

export interface PortfolioMetadata {
  maxNumPages?: number;
  nextPageButtonLabel?: string;
  prevPageButtonLabel?: string;
  wpPagenavi?: string | null;
}

export interface PortfolioImage {
  border?: BorderGroupAttr,
  boxShadow?: BoxShadowGroupAttr,
  filter?: FiltersGroupAttr,
}

export interface PortfolioAttrs extends InternalAttrs {

  // Content Tab.
  postsNumber?: FormatAttr<string>;
  includedCategories?: FormatAttr<string[]>;
  showTitle?: FormatAttr<OnOff>;
  showCategories?: FormatAttr<OnOff>;
  showPagination?: FormatAttr<OnOff>;
  link?: LinkGroupAttr;
  background?: BackgroundGroupAttr;
  adminLabel?: AdminLabelGroupAttr;

  // Design Tab.
  layout?: FormatAttr<'fullwidth' | 'grid'>;
  hoverIcon?: IconFontGroupAttr;
  image?: PortfolioImage;
  text?: TextGroupAttr;
  titleFont?: FontGroupAttr;
  metaFont?: FontGroupAttr;
  paginationFont?: FontGroupAttr;
  sizing?: SizingGroupAttr;
  spacing?: ImageSpacingGroupAttr;
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
