import { ResolveThunks } from 'react-redux'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noop = async (...args: any[]) => {}

// This ensures that the inferred type of mapDispatchToProps matches the user-defined type.
// We don't use the inferred type directly, because we want to explicitly set default values via the
// user defined type.
export type AssertMapDispatchType<PropType, MapDispatchType> =
  ResolveThunks<MapDispatchType> extends PropType ? true : never
