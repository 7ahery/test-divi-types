import { FormatAttr } from '../../../format-attr';


export type DividerSide = 'top' | 'bottom';

export type DividerStyle = 'none' |
  'arrow' |
  'arrow2' |
  'arrow3' |
  'asymmetric' |
  'asymmetric2' |
  'asymmetric3' |
  'asymmetric4' |
  'clouds' |
  'clouds2' |
  'curve' |
  'curve2' |
  'graph' |
  'graph2' |
  'graph3' |
  'graph4' |
  'mountains' |
  'mountains2' |
  'ramp' |
  'ramp2' |
  'slant' |
  'slant2' |
  'triangle' |
  'wave' |
  'wave2' |
  'waves' |
  'waves2';


export interface DividersAttr {
  style?: DividerStyle;
  color?: string;
  height?: string;
  repeat?: string;
  flip?: 'horizontal' | 'vertical';
  arrangement?: 'above' | 'below';
}

export type DividersGroupAttr = Partial<Record<DividerSide, FormatAttr<DividersAttr>>>;
