import React, {
  useCallback, useEffect, useRef, useState,
} from 'react'
import PropTypes from 'prop-types'

import { useForkRef } from '../utils/ref-helpers'

const withSaveOnBlurControlled = (Component, onlySaveChanges = true) => {
  const ComponentWithSaveOnBlur = React.forwardRef(({
    onSave, onBlur, onChange, originalValue, ...otherProps
  }, ref) => {
    const [controlledValue, setControlledValue] = useState(originalValue)
    const ownRef = useRef()
    const inputRef = useForkRef(ownRef, ref)

    useEffect(
      () => {
        setControlledValue(originalValue)
      },
      [originalValue],
    )

    const onChangeHandler = useCallback(
      (event) => {
        if ((document.activeElement !== event.target) && (event.target.focus)) {
          event.target.focus()
        }
        setControlledValue(event.target.value)
        onChange(event)
      },
      [onChange],
    )

    const onBlurHandler = useCallback(
      (event) => {
        const newValue = event.target.value
        const hasChanged = newValue !== originalValue
        if (!onlySaveChanges || hasChanged) {
          onSave(newValue)
        }
        onBlur(event)
      },
      [onBlur, onSave, originalValue],
    )

    return (
      <Component
        ref={inputRef}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={controlledValue}
        {...otherProps}
      />
    )
  })

  ComponentWithSaveOnBlur.propTypes = {
    onBlur: PropTypes.func,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    originalValue: PropTypes.string,
  }

  ComponentWithSaveOnBlur.defaultProps = {
    onBlur: () => {},
    onSave: () => {},
    onChange: () => {},
    originalValue: undefined,
  }

  return ComponentWithSaveOnBlur
}

export { withSaveOnBlurControlled }
