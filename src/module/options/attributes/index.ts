export type AttributeName = 'bookmark' | 'external' | 'nofollow' | 'noreferrer' | 'noopener';

export type AttributesAttr = AttributeName[];

export type AttributesGroupAttr = {
  desktop?: {
    value?: AttributesAttr;
  }
};
