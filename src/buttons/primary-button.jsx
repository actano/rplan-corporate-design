import React from 'react'
import PropTypes from 'prop-types'
import { RootButton } from './root-button'

const PrimaryButton = ({ children, ...otherProps }) => (
  <RootButton
    {...otherProps}
    variant="contained"
    color="primary"
  >
    { children }
  </RootButton>
)

PrimaryButton.propTypes = {
  children: PropTypes.node,
}

PrimaryButton.defaultProps = {
  children: undefined,
}

export { PrimaryButton }
