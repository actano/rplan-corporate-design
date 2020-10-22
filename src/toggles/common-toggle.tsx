import React from 'react'
import { Switch, FormControlLabel } from '@material-ui/core'

interface CommonToggleProps {
  checked: boolean,
  onChange: () => void,
  label: string,
  className: any,
  [otherProp: string]: any,
}

const CommonToggle: React.FunctionComponent<CommonToggleProps> = ({
  checked,
  onChange,
  label,
  className,
  ...otherProps
}) => {
  const classes = {
    formControlLabel: {
      label: className,
    },
  }

  return (
    <FormControlLabel
      classes={classes.formControlLabel}
      value="start"
      control={<Switch checked={checked} color="primary" onChange={onChange} {...otherProps} />}
      label={label}
      labelPlacement="start"
    />
  )
}

export { CommonToggle }
