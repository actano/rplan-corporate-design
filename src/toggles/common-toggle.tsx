import React from 'react'
import {
  Switch, FormControlLabel, makeStyles, SwitchProps,
} from '@material-ui/core'

interface CommonToggleProps {
  checked?: boolean,
  classes?: {},
  disabled?: boolean,
  inputRef?: any,
  label?: React.ReactNode,
  labelPlacement?: 'bottom' | 'end' | 'start' | 'top',
  onChange: () => void,
  switchProps?: SwitchProps,
}

const useStyles = makeStyles(() => ({
  label: {
    fontSize: '0.8125rem',
    fontWeight: 400,
  },
}))

const CommonToggle: React.FunctionComponent<CommonToggleProps> = ({
  checked,
  onChange,
  label,
  classes,
  switchProps,
  labelPlacement,
  ...otherProps
}) => {
  const ownClasses = useStyles()

  return (
    <FormControlLabel
      classes={{
        ...ownClasses,
        ...classes,
      }}
      control={(
        <Switch
          checked={checked}
          color="primary"
          onChange={onChange}
          {...switchProps}
        />
)}
      label={label}
      labelPlacement={labelPlacement || 'start'}
      {...otherProps}
    />
  )
}

export { CommonToggle, CommonToggleProps }
