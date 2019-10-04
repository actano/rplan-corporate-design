import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { DatePicker } from '@material-ui/pickers'
import { makeStyles } from '@material-ui/styles'

import { datePickerDateTostring } from './date-picker-date-to-string'

const useStyles = makeStyles(() => ({
  root: {},
  datePicker: {
    display: 'none',
  },
}))

const DatePickerButton = ({
  onSelectDate,
  renderButton,
  className,
}) => {
  const classes = useStyles()
  const [datePickerVisible, setDatePickerVisible] = useState(false)

  const onChange = useCallback(
    async (newDateValue) => {
      const changedDueDate = datePickerDateTostring(newDateValue)

      onSelectDate(changedDueDate)
    },
    [onSelectDate],
  )

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
        className={classes.datePicker}
        variant="dialog"
        open={datePickerVisible}
        onClose={hidePicker}
        onChange={onChange}
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
  className: PropTypes.string,
}

DatePickerButton.defaultProps = {
  className: undefined,
}

export { DatePickerButton }
