import isEmpty from 'lodash/isEmpty'
import React, { useCallback, useEffect, useState } from 'react'

import { DefaultControlledTextField } from './default-controlled-text-field'

interface NumberInputProps {
  originalValue: number | null
  onSave: (n: number) => void
  getValidationError: (n: number | null) => any
}

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({
  originalValue: originalNumberValue = null,
  getValidationError = () => null,
  onSave = () => {},
  ...otherProps
}) => {
  const [controlledNumberValue, setControlledNumberValue] = useState(originalNumberValue)

  useEffect(
    () => {
      setControlledNumberValue(originalNumberValue)
    },
    [setControlledNumberValue, originalNumberValue],
  )

  const onChangeHandler = useCallback(
    (event) => {
      const stringValue = event.target.value
      if (stringValue) {
        setControlledNumberValue(parseInt(stringValue, 10))
      } else {
        setControlledNumberValue(null)
      }
    },
    [setControlledNumberValue],
  )

  const onSaveHandler = useCallback(
    (stringValue) => {
      const newNumberValue = isEmpty(stringValue) ? null : parseInt(stringValue, 10)
      if (getValidationError(newNumberValue) == null) {
        onSave(newNumberValue as number)
      }
    },
    [getValidationError, onSave],
  )

  const originalStringValue = originalNumberValue != null ? `${originalNumberValue}` : ''
  const validationError = getValidationError(controlledNumberValue)

  return (
    <DefaultControlledTextField
      {...otherProps}
      onChange={onChangeHandler}
      onSave={onSaveHandler}
      originalValue={originalStringValue}
      error={validationError != null}
      helperText={validationError}
      type="number"
    />
  )
}
