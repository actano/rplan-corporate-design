import React from 'react'
import { RootButton, RootButtonProps } from './root-button'

const SecondaryButton = React.forwardRef<HTMLButtonElement, RootButtonProps>(
  ({ children, ...otherProps }, ref) => (
    <RootButton
      {...otherProps}
      ref={ref}
      variant="outlined"
      color="secondary"
    >
      {children}
    </RootButton>
  ),
)

export { SecondaryButton }
