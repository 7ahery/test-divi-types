import { FormatAttr } from '../../../format-attr';


export interface ScrollEffectValue {
  enable?: string;
  viewport: {
    bottom: string | number;
    end: string | number;
    start: string | number;
    top: string | number;
  },
  offset: {
    start: string | number;
    mid: string | number;
    end: string | number;
  },
}

export interface ScrollAttr {
  verticalMotion?: ScrollEffectValue;
  horizontalMotion?: ScrollEffectValue;
  fade?: ScrollEffectValue;
  scaling?: ScrollEffectValue;
  rotating?: ScrollEffectValue;
  blur?: ScrollEffectValue;
  motionTriggerStart?: 'middle' | 'top' | 'bottom';
}

export type ScrollGroupAttr = FormatAttr<ScrollAttr>;
