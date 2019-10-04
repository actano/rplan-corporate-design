import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'

import { useForkRef } from '../utils/ref-helpers'

const withBlurOnEnter = (Component) => {
  const ComponentWithBlurOnEnter = React.forwardRef(({ onKeyUp, ...otherProps }, ref) => {
    const ownRef = useRef()
    const inputRef = useForkRef(ownRef, ref)

    const ownOnKeyUp = useCallback(
      (keyEvent) => {
        if (keyEvent.key === 'Enter' && ownRef.current) {
          ownRef.current.querySelector('input').blur()
        }

        if (onKeyUp) {
          onKeyUp(keyEvent)
        }
      },
      [onKeyUp],
    )

    return (
      <Component
        ref={inputRef}
        onKeyUp={ownOnKeyUp}
        {...otherProps}
      />
    )
  })

  ComponentWithBlurOnEnter.propTypes = {
    onKeyUp: PropTypes.func,
  }

  ComponentWithBlurOnEnter.defaultProps = {
    onKeyUp: undefined,
  }

  return ComponentWithBlurOnEnter
}

export { withBlurOnEnter }
