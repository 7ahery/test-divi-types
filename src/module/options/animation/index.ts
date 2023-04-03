import { FormatAttr } from '../../../format-attr';


export type AnimationStyle = 'none' | 'fade' | 'slide' | 'bounce' | 'zoom' | 'flip' | 'fold' | 'roll';

export type AnimationDirection = 'center' | 'left' | 'right' | 'bottom' | 'top';

export type AnimationSpeedCurve = 'ease-in-out' | 'ease' | 'ease-in' | 'ease-out' | 'linear';

export type AnimationRepeat = 'once' | 'loop';

export interface AnimationAttr {
  style?: AnimationStyle;
  direction?: AnimationDirection;
  duration?: string;
  delay?: string;
  intensity?: {
    slide?: string;
    zoom?: string;
    flip?: string;
    fold?: string;
    roll?: string;
  };
  startingOpacity?: string;
  speedCurve?: AnimationSpeedCurve;
  repeat?: AnimationRepeat;
}

export type AnimationGroupAttr = FormatAttr<AnimationAttr>;
