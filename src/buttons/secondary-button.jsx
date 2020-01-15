import React from 'react'
import PropTypes from 'prop-types'
import { RootButton } from './root-button'

const SecondaryButton = ({ children, ...otherProps }) => (
  <RootButton
    {...otherProps}
    variant="outlined"
    color="secondary"
  >
    { children }
  </RootButton>
)

SecondaryButton.propTypes = {
  children: PropTypes.node,
}

SecondaryButton.defaultProps = {
  children: undefined,
}

export { SecondaryButton }
