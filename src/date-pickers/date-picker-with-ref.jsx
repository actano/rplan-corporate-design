import React from 'react'
import { DatePicker } from '@material-ui/pickers'

const DatePickerWithRef = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <DatePicker {...props} />
  </div>
))

export { DatePickerWithRef }
