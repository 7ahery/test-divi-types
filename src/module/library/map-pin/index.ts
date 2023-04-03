// Local dependencies.
import { FormatAttr } from '../../../format-attr';
import { InternalAttrs } from '../internal';
import { MapAttr } from '../map';


export interface MapPinAttrs extends InternalAttrs {

  // Content tab.
  title?: FormatAttr<string>;
  content?: FormatAttr<string>;
  pin?: FormatAttr<MapAttr>;
}
