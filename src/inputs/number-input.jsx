import isEmpty from 'lodash/isEmpty'
import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { DefaultControlledTextField } from './default-controlled-text-field'

export const NumberInput = (props) => {
  const {
    originalValue: originalNumberValue,
    getValidationError,
    onSave,
    ...otherProps
  } = props
  const [controlledNumberValue, setControlledNumberValue] = useState(null)

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
        onSave(newNumberValue)
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

NumberInput.propTypes = {
  originalValue: PropTypes.number,
  onSave: PropTypes.func,
  getValidationError: PropTypes.func,
}

NumberInput.defaultProps = {
  originalValue: null,
  getValidationError: () => null,
  onSave: () => {},
}
