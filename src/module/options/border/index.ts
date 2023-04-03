import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';


export type BorderSide = 'all' | 'top' | 'right' | 'bottom' | 'left';

export interface BorderSideValues {
  width?: string;
  color?: string;
  style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';
}

export interface BorderAttr {
  radius?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
    sync?: OnOff;
  };
  styles?: Partial<Record<BorderSide, BorderSideValues>>;
}

export type BorderGroupAttr = FormatAttr<BorderAttr>;
