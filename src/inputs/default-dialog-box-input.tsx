import { DialogBoxInput } from './dialog-box-input'
import { withBlurOnEnter } from './with-blur-on-enter'
import { withSaveOnBlurControlled } from './with-save-on-blur-controlled'

const DefaultDialogBoxInput = withSaveOnBlurControlled(
  withBlurOnEnter(
    DialogBoxInput,
  ),
)

export { DefaultDialogBoxInput }
