import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';


export type GradientStop = {
  position: string;
  color: string;
};

export interface BackgroundAttr {
  color?: string;
  enableColor?: OnOff; // Some modules have support for enabling and disabling background color: https://elegantthemes.slack.com/archives/C01CW343ZJ9/p1651717784463199
  gradient?: {
    enabled?: OnOff;
    start?: string;
    end?: string;
    type?: 'linear' | 'circular' | 'elliptical' | 'conic';
    direction?: string;
    directionRadial?: 'center' | 'top left' | 'top' | 'top right' | 'right' | 'bottom right' | 'bottom' | 'bottom left' | 'left';
    startPosition?: string;
    endPosition?: string;
    overlaysImage?: OnOff;
    repeat?: OnOff;
    length?: string;
    stops?: GradientStop[];
  };
  image?: {
    enabled?: OnOff; // Some modules have support for enabling and disabling background image: https://elegantthemes.slack.com/archives/C01CW343ZJ9/p1651717784463199
    url?: string;
    parallax?: {
      enabled?: OnOff;
      method?: 'on' | 'off';
    };
    size?: 'cover' | 'contain' | 'initial' | 'stretch' | 'custom';
    width?: string;
    height?: string;
    position?: 'left top' | 'center top' | 'right top' | 'left center' | 'center' | 'right center' | 'left bottom' | 'center bottom' | 'right bottom';
    horizontalOffset?: string;
    verticalOffset?: string;
    repeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y' | 'space' | 'round';
    blend?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
  };
  video?: {
    mp4?: string;
    webm?: string;
    width?: string;
    height?: string;
    allowPlayerPause?: OnOff;
    pauseOutsideViewport?: OnOff;
  }
  pattern?: {
    enabled?: OnOff;
    style?: string;
    color?: string;
    transform?: string[];
    size?: 'initial' | 'cover' | 'contain' | 'stretch' | 'custom';
    width?: string;
    height?: string;
    repeatOrigin?: 'left top' | 'center top' | 'right top' | 'left center' | 'center' | 'right center' | 'left bottom' | 'center bottom' | 'right bottom';
    horizontalOffset?: string;
    verticalOffset?: string;
    repeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'space' | 'round';
    blend?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
  };
  mask?: {
    enabled?: OnOff;
    style?: string;
    color?: string;
    transform?: string[];
    aspectRatio?: 'landscape' | 'square' | 'portrait';
    size?:  'stretch' | 'cover' | 'contain' | 'custom';
    width?: string;
    height?: string;
    position?: 'left top' | 'center top' | 'right top' | 'left center' | 'center' | 'right center' | 'left bottom' | 'center bottom' | 'right bottom';
    horizontalOffset?: string;
    verticalOffset?: string;
    blend?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
  };
}

export type BackgroundGroupAttr = FormatAttr<BackgroundAttr>;
