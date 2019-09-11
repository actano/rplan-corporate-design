import React from 'react'
import { Checkbox as MaterialCheckBox } from '@material-ui/core'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const Checkbox = ({ checked, onChange, label }) => {
  const _onChange = e => onChange(e.target.value)

  return (
    <FormControlLabel
      label={label}
      control={
        <MaterialCheckBox checked={checked} onChange={_onChange} />
    }
    />
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export { Checkbox }
