export interface LinkAttr {
  url?: string;
  target?: 'off' | 'on';
}

export interface LinkGroupAttr {
  desktop?: {
    value?: LinkAttr;
  }
}
