import { OnOff } from '../../../attr';


export type DisabledOnAttr = OnOff;

export interface DisabledOnGroupAttr {
  desktopAbove?: {
    value?: DisabledOnAttr;
  };
  tabletOnly?: {
    value?: DisabledOnAttr;
  };
  phone?: {
    value?: DisabledOnAttr;
  };
}
