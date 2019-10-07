import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const withBlurOnEnter = (Component) => {
  const ComponentWithBlurOnEnter = React.forwardRef(({ onKeyUp, ...otherProps }, ref) => {
    const ownOnKeyUp = useCallback(
      (keyEvent) => {
        if (keyEvent.key === 'Enter') {
          keyEvent.target.blur()
        }

        if (onKeyUp) {
          onKeyUp(keyEvent)
        }
      },
      [onKeyUp],
    )

    return (
      <Component
        ref={ref}
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
