import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const TertiaryButton = ({ children, ...otherProps }) => (
  <Button
    {...otherProps}
    variant="outlined"
    color="default"
  >
    { children }
  </Button>
)

TertiaryButton.propTypes = {
  children: PropTypes.node,
}

TertiaryButton.defaultProps = {
  children: undefined,
}

export { TertiaryButton }
