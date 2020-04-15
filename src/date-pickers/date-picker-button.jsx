import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/styles'

import { DatePicker } from './date-picker'

const useStyles = makeStyles(() => ({
  root: {},
  datePicker: {
    display: 'none',
  },
}))

const DatePickerButton = ({
  onSelectDate,
  renderButton,
  pickerProps,
  className,
}) => {
  const classes = useStyles()
  const [datePickerVisible, setDatePickerVisible] = useState(false)

  const hidePicker = useCallback(
    () => { setDatePickerVisible(false) },
    [setDatePickerVisible],
  )

  const handleSelect = useCallback(
    (newDate) => {
      setDatePickerVisible(false)
      onSelectDate(newDate)
      hidePicker()
    },
    [hidePicker, onSelectDate],
  )

  const showPicker = useCallback(
    () => { setDatePickerVisible(true) },
    [setDatePickerVisible],
  )

  return (
    <div className={classnames(classes.root, className)}>
      <DatePicker
        {...pickerProps}
        className={classes.datePicker}
        open={datePickerVisible}
        onClose={hidePicker}
        onChange={handleSelect}
        onAccept={hidePicker}
      />
      {
        renderButton(showPicker)
      }
    </div>
  )
}

DatePickerButton.propTypes = {
  renderButton: PropTypes.func.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  pickerProps: PropTypes.shape({}),
  className: PropTypes.string,
}

DatePickerButton.defaultProps = {
  className: undefined,
  pickerProps: undefined,
}

export { DatePickerButton }
