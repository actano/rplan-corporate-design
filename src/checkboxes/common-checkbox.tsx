import React from 'react'
import { Checkbox, makeStyles } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiCheckboxMarkedOutline } from '@mdi/js'
import { CheckboxProps } from '@material-ui/core/Checkbox'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  checkbox: {
    color: theme.palette.colors.lightGrey,
    '&$checkboxChecked': {
      color: theme.palette.colors.grey,
    },
    '&$checkboxDisabled': {
      color: theme.palette.colors.veryLightGrey,
    },
  },
  checkboxChecked: {},
  checkboxDisabled: {},
  checkboxCheckedIcon: {
    fill: 'currentColor',
    width: theme.spacing(3),
  },
}))

const CommonCheckbox: React.ComponentType<CheckboxProps> = ({
  color = 'primary',
  checkedIcon,
  classes,
  ...otherProps
}) => {
  const styleClasses = useStyles()

  const _checkedIcon = checkedIcon || (
    <Icon
      path={mdiCheckboxMarkedOutline}
      className={styleClasses.checkboxCheckedIcon}
    />
  )

  const _classes = classes || {
    root: styleClasses.checkbox,
    checked: styleClasses.checkboxChecked,
    disabled: styleClasses.checkboxDisabled,
  }

  return (
    <Checkbox
      color={color}
      {...otherProps}
      checkedIcon={_checkedIcon}
      classes={_classes}
    />
  )
}

export { CommonCheckbox }
