import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const PrimaryButton = ({ children, ...otherProps }) => (
  <Button
    {...otherProps}
    variant="contained"
    color="primary"
  >
    { children }
  </Button>
)

PrimaryButton.propTypes = {
  children: PropTypes.node,
}

PrimaryButton.defaultProps = {
  children: undefined,
}

export { PrimaryButton }
