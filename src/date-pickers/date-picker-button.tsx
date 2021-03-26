import classnames from 'classnames'
import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { DatePicker, DatePickerProps } from './date-picker'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(() => ({
  root: {},
  datePicker: {
    display: 'none',
  },
}))

interface DatePickerButtonProps {
  renderButton: (showPicker: () => void) => React.ReactNode,
  onSelectDate: (date: Date | null) => void,
  pickerProps?: DatePickerProps,
  className?: string,
}

const DatePickerButton: React.FC<DatePickerButtonProps> = ({
  renderButton,
  onSelectDate,
  pickerProps = {},
  className,
}) => {
  const classes = useStyles()
  const [datePickerVisible, setDatePickerVisible] = useState(false)

  const hidePicker = useCallback(
    () => { setDatePickerVisible(false) },
    [setDatePickerVisible],
  )

  const showPicker = useCallback(
    () => { setDatePickerVisible(true) },
    [setDatePickerVisible],
  )

  return (
    <div className={classnames(classes.root, className)}>
      <DatePicker
        {...pickerProps}
        value={pickerProps?.value || undefined}
        className={classes.datePicker}
        variant="dialog"
        open={datePickerVisible}
        onClose={hidePicker}
        onChange={onSelectDate}
        onAccept={hidePicker}
      />
      {
        renderButton(showPicker)
      }
    </div>
  )
}

export {
  DatePickerButton,
  DatePickerButtonProps,
}
