import { isNumber } from 'lodash'
import isEmpty from 'lodash/isEmpty'
import React, { useCallback, useEffect, useState } from 'react'

import { DefaultControlledTextField } from './default-controlled-text-field'

interface NumberInputProps {
  originalValue: number | null
  onSave: (n: number) => void
  getValidationError: (n: number | null) => any
  supportFloat?: boolean
  min?: number
  max?: number
}

export const NumberInput: React.FunctionComponent<NumberInputProps> = ({
  originalValue: originalNumberValue = null,
  getValidationError = () => null,
  onSave = () => {},
  supportFloat = false,
  min,
  max,
  ...otherProps
}) => {
  const [controlledStringValue, setControlledStringValue] = useState<string>('')

  useEffect(
    () => {
      const originalStringValue = originalNumberValue != null ? `${originalNumberValue}` : ''
      setControlledStringValue(originalStringValue)
    },
    [setControlledStringValue, originalNumberValue],
  )

  const translateValueHandler = useCallback(stringValue => (supportFloat ? parseFloat(stringValue.replace(',', '.')) : parseInt(stringValue, 10)), [supportFloat])

  const onChangeHandler = useCallback(
    (event) => {
      let stringValue = event.target.value
        .replace(supportFloat ? /[^0-9-.,]+/g : /[^0-9-]+/g, '') // allow to enter '.' ',' charecters if component support float values
        .replace(/^([^.]*\.)|\./g, '$1') // save only first dot after character
        .replace(/(?!^)-/g, '') // save only first minus after character

      if (!supportFloat) {
        stringValue = stringValue.replace(/^0+(?!$)/, '') // remove prefix zeros
      }

      setControlledStringValue(stringValue)
    },
    [supportFloat],
  )

  const onSaveHandler = useCallback(
    (stringValue) => {
      let newNumberValue = isEmpty(stringValue) ? 0 : translateValueHandler(stringValue)
      if (isNumber(min) && newNumberValue && newNumberValue <= min) {
        newNumberValue = min
        setControlledStringValue(`${newNumberValue}`)
      }
      if (isNumber(max) && newNumberValue && newNumberValue >= max) {
        newNumberValue = max
        setControlledStringValue(`${newNumberValue}`)
      }
      if (getValidationError(newNumberValue) == null) {
        onSave(newNumberValue as number)
      }
    },
    [getValidationError, max, min, onSave, translateValueHandler],
  )

  const validationError = getValidationError(translateValueHandler(controlledStringValue))

  return (
    <DefaultControlledTextField
      {...otherProps}
      onChange={onChangeHandler}
      onSave={onSaveHandler}
      error={validationError != null}
      helperText={validationError}
      value={controlledStringValue}
    />
  )
}
