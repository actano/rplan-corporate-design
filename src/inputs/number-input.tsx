import isEmpty from 'lodash/isEmpty'
import React, { useCallback, useEffect, useState } from 'react'

import { DefaultControlledTextField } from './default-controlled-text-field'

interface NumberInputProps {
  originalValue: number | null
  onSave: (n: number) => void
  getValidationError: (n: number | null) => any
  supportFloat: boolean
}

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({
  originalValue: originalNumberValue = null,
  getValidationError = () => null,
  onSave = () => {},
  supportFloat = false,
  ...otherProps
}) => {
  const [controlledNumberValue, setControlledNumberValue] = useState(originalNumberValue)

  useEffect(
    () => {
      setControlledNumberValue(originalNumberValue)
    },
    [setControlledNumberValue, originalNumberValue],
  )

  const translateValueHandler = useCallback(stringValue => (supportFloat ? parseFloat(stringValue.replace(',', '.')) : parseInt(stringValue, 10)), [supportFloat])

  const onChangeHandler = useCallback(
    (event) => {
      const stringValue = event.target.value
      if (stringValue) {
        setControlledNumberValue(translateValueHandler(stringValue))
      } else {
        setControlledNumberValue(null)
      }
    },
    [translateValueHandler],
  )

  const onSaveHandler = useCallback(
    (stringValue) => {
      const newNumberValue = isEmpty(stringValue) ? null : translateValueHandler(stringValue)
      if (getValidationError(newNumberValue) == null) {
        onSave(newNumberValue as number)
      }
    },
    [getValidationError, onSave, translateValueHandler],
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
