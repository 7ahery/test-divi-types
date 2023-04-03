/* eslint-disable @typescript-eslint/naming-convention */
import { ShortcodeModuleField } from '../../field';


export interface ShortcodeModuleAdvancedFieldDefinitionMaxWidth {
  css?: {
    main?: string;
    max_width?: string;
    module_alignment?: string;
    width?: string;
  };
  extra?: {
    content?: {
      use_module_alignment?: boolean;
      css?: {
        main?: string;
      };
      options?: Record<string, ShortcodeModuleField>;
    };
    inner?: {
      css?: {
        main?: string[];
      };
      options?: Record<string, ShortcodeModuleField>;
    }
  }
  options?: Record<string, ShortcodeModuleField>;
  toggle_priority?: number;
  toggle_slug?: string;
  toggle_tittle?: string;
  prefix?: string;
  use_width?: boolean;
  use_max_width?: boolean;
  use_module_alignment?: boolean;
}

export interface ShortcodeModuleAdvancedFieldDefinitionHeight {
  css?: {
    max_width?: string;
    module_alignment?: string;
    width?: string;
  };
  extra?: {
    inner?: {
      css?: {
        main?: string[];
      };
      options?: Record<string, ShortcodeModuleField>;
    }
  }
  options?: Record<string, ShortcodeModuleField>;
  toggle_priority?: number;
  toggle_slug?: string;
  toggle_tittle?: string;
  prefix: string;
  use_min_height: boolean;
  use_height: boolean;
  use_max_height: boolean;
}
