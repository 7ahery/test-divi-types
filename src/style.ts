import { FormatAttr } from './format-attr';


export type FormatStyleImportant<TCssProperties extends string> = FormatAttr<Partial<Record<TCssProperties, boolean>>>;
