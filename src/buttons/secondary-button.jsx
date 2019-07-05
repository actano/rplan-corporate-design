import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const SecondaryButton = ({ children, ...otherProps }) => (
  <Button
    {...otherProps}
    variant="outlined"
    color="secondary"
  >
    { children }
  </Button>
)

SecondaryButton.propTypes = {
  children: PropTypes.node,
}

SecondaryButton.defaultProps = {
  children: undefined,
}

export { SecondaryButton }
