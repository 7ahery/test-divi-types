export interface InternalAttrs {
  builderVersion?: string;

  // @todo once preset foundation exist, evaluate this because there is a plan to make multiple presets on
  // module level possible from D5i.
  modulePreset?: string;
  nonconvertible?: string;
}
