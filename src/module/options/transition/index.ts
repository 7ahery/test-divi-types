export interface TransitionAttr {
  duration?: string;
  delay?: string;
  speedCurve?: string;
}

export interface TransitionGroupAttr {
  desktop?: {
    value?: TransitionAttr;
  }
}
