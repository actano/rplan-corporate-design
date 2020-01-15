import React from 'react'
import PropTypes from 'prop-types'
import { RootButton } from './root-button'

const TertiaryButton = ({ children, ...otherProps }) => (
  <RootButton
    {...otherProps}
    variant="outlined"
    color="default"
  >
    { children }
  </RootButton>
)

TertiaryButton.propTypes = {
  children: PropTypes.node,
}

TertiaryButton.defaultProps = {
  children: undefined,
}

export { TertiaryButton }
