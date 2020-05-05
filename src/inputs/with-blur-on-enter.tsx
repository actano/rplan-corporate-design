import React, { useCallback } from 'react'

const withBlurOnEnter = (Component) => {
  const ComponentWithBlurOnEnter = React.forwardRef<any, any>(({ onKeyUp, ...otherProps }, ref) => {
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

  return ComponentWithBlurOnEnter
}

export { withBlurOnEnter }
