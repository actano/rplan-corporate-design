import React from 'react'
import { InputBase } from '@material-ui/core'

import { withSaveOnBlurControlled } from '../../../../src/inputs/with-save-on-blur-controlled'
import { withBlurOnEnter } from '../../../../src/inputs/with-blur-on-enter'

const CustomInput = React.forwardRef((props, ref) => (
  <InputBase
    ref={ref}
    {...props}
  />
))

const CustomControlledInput = withSaveOnBlurControlled(withBlurOnEnter(CustomInput))

export { CustomControlledInput }
