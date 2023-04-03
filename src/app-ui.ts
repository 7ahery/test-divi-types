// ViewType need its own type and state because ViewType !== breakpoint. For example
// `wireframe`, `zoom`, and `desktop`, are different view but essentially `desktop` breakpoint.
// This three are attributes' breakpoint that are currently supported by the builder. Once
// Builder support custom breakpoint, this will need to be evaluated.
export type ModeType = 'hover' | 'click' | 'grid';
export type ViewType = 'wireframe' | 'zoom' | 'desktop' | 'tablet' | 'phone';
