import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import { InputWithLabel } from '../inputs/input-with-label'
import { DatePicker } from './date-picker'

const ChangeOnAcceptDatePicker = (props) => {
  const {
    value, onSelectDate, label, minDate, maxDate, ...otherProps
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
        minDate={minDate}
        maxDate={maxDate}
      />
    </InputWithLabel>
  )
}

ChangeOnAcceptDatePicker.propTypes = {
  value: PropTypes.string,
  onSelectDate: PropTypes.func,
  label: PropTypes.string.isRequired,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
}

ChangeOnAcceptDatePicker.defaultProps = {
  value: undefined,
  onSelectDate: () => {},
  minDate: '1000-01-01',
  maxDate: '2900-01-01',
}

export { ChangeOnAcceptDatePicker }
