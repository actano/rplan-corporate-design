import React from 'react'
import PropTypes from 'prop-types'
import { Switch, FormControlLabel } from '@material-ui/core'

const CommonToggle = ({
  checked, onChange, label, className, ...otherProps
}) => (
  <FormControlLabel
    classes={{
      label: className,
    }}
    value="start"
    control={<Switch checked={checked} color="primary" onChange={onChange} {...otherProps} />}
    label={label}
    labelPlacement="start"
  />
)

CommonToggle.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
}

CommonToggle.defaultProps = {
  checked: undefined,
  label: undefined,
  onChange: undefined,
  className: undefined,
}

export { CommonToggle }
