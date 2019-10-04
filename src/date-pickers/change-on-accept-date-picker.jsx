import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from '@material-ui/pickers'

import { InputWithLabel } from '../inputs/input-with-label'

const ChangeOnAcceptDatePicker = (props) => {
  const {
    value, onSelectDate, label, ...otherProps
  } = props
  const [date, setDate] = useState(null)

  const onChange = useCallback(
    (newDate) => { setDate(newDate) },
    [setDate],
  )

  const onAccept = useCallback(
    (newDate) => {
      setDate(null)
      onSelectDate(newDate)
    },
    [setDate, onSelectDate],
  )

  const onClose = useCallback(
    () => { setDate(null) },
    [setDate],
  )

  return (
    <InputWithLabel label={label}>
      <DatePicker
        {...otherProps}
        onChange={onChange}
        onAccept={onAccept}
        onClose={onClose}
        value={date != null ? date : value}
        format="dd.MM.yyyy"
        minDate="1000-01-01"
        maxDate="2900-01-01"
      />
    </InputWithLabel>
  )
}

ChangeOnAcceptDatePicker.propTypes = {
  value: PropTypes.string,
  onSelectDate: PropTypes.func,
  label: PropTypes.string.isRequired,
}

ChangeOnAcceptDatePicker.defaultProps = {
  value: undefined,
  onSelectDate: () => {},
}

export { ChangeOnAcceptDatePicker }
