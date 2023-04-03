import { FormatAttr } from '../../../format-attr';


export interface FiltersAttr {
  hueRotate?: string;
  saturate?: string;
  brightness?: string;
  contrast?: string;
  invert?: string;
  sepia?: string;
  opacity?: string;
  blur?: string;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
}

export type FiltersGroupAttr = FormatAttr<FiltersAttr>;
