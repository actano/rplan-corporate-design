import { InputBase } from '@material-ui/core'

import { withBlurOnEnter } from './with-blur-on-enter'
import { withSaveOnBlurControlled } from './with-save-on-blur-controlled'

/*
  Instead of `value` takes `originalValue` as a property.
  Stores the currently typed-in value as an internal state (controlled input).
  Calls `onSave` handler if the input is blurred and the
  internal value differs from the `originalValue`.
  Also blurs on enter key.
 */
const DefaultControlledInput = withSaveOnBlurControlled(
  withBlurOnEnter(
    InputBase,
  ),
)

export { DefaultControlledInput }
