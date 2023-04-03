import { OnOff } from '../../../attr';


export interface GutterAttr {
  enable?: OnOff;
  width?: string;
  makeEqual?: OnOff;
}

export interface GutterGroupAttr {
  desktop?: {
    value?: GutterAttr;
    hover?: {
      width?: GutterAttr['width'];
    }
  }
}
