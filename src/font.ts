export type FontType = 'googleFonts' | 'customFonts';

export interface GoogleFont {
  /* eslint-disable-next-line @typescript-eslint/naming-convention */
  character_set: string;
  styles: string;
  type: string;
}

export interface LoadedGoogleFont extends GoogleFont {
  fontType: 'googleFonts';
}

export interface CustomFont {
  /* eslint-disable-next-line @typescript-eslint/naming-convention */
  font_file: {
    ttf?: string;
    otf?: string;
  },
  /* eslint-disable-next-line @typescript-eslint/naming-convention */
  font_url: {
    ttf?: string;
    otf?: string;
  },
  styles: string;
  type: string;
}

export interface LoadedCustomFont extends CustomFont {
  fontType: 'customFonts';
}

export type LoadedFont = LoadedGoogleFont | LoadedCustomFont;

export type CustomFonts = Record<string, CustomFont>;

export type GoogleFonts = Record<string, GoogleFont>;

export type LoadedFonts = Record<string, LoadedFont>;
