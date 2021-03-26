import React, { useState, useCallback } from 'react'

import { InputWithLabel } from '../inputs/input-with-label'
import { DatePicker, DatePickerProps } from './date-picker'

interface ChangeOnAcceptDatePickerProps extends DatePickerProps {
  onSelectDate?: (date: Date | null) => void,
}

const ChangeOnAcceptDatePicker: React.FC<ChangeOnAcceptDatePickerProps> = ({
  value,
  label,
  onSelectDate = () => {},
  ...otherProps
}) => {
  const [date, setDate] = useState<Date | null>(null)

  const onChange = useCallback(
    (newDate: Date | null) => {
      setDate(newDate)
    },
    [setDate],
  )

  const onAccept = useCallback(
    (newDate: Date | null) => {
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
      />
    </InputWithLabel>
  )
}

export { ChangeOnAcceptDatePicker }
