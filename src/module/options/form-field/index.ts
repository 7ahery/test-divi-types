import { OnOff } from '../../../attr';
import { FormatAttr } from '../../../format-attr';
import { BackgroundGroupAttr } from '../background';
import { BorderGroupAttr } from '../border';
import { BoxShadowGroupAttr } from '../box-shadow';
import { FontGroupAttr } from '../font';
import { SpacingGroupAttr } from '../spacing';


export interface FormFieldGroupAttr {
  background?: BackgroundGroupAttr;
  spacing?: SpacingGroupAttr;
  boxShadow?: BoxShadowGroupAttr;
  border?: BorderGroupAttr;
  font: FontGroupAttr;
  focus?: {
    background?: BackgroundGroupAttr;
    font?: FontGroupAttr;
    useFocusBorder?: FormatAttr<OnOff>;
    border?: BorderGroupAttr;
  },
  placeholder?: {
    font?: FontGroupAttr;
  }
}
