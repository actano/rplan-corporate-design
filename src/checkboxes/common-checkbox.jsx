import React from 'react'
import { Checkbox, makeStyles } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiCheckboxMarkedOutline } from '@mdi/js'

const useStyles = makeStyles(theme => ({
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

const CommonCheckbox = ({
  checkedIcon, classes, ...otherProps
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
      {...otherProps}
      checkedIcon={_checkedIcon}
      classes={_classes}
    />
  )
}

CommonCheckbox.propTypes = {
  ...Checkbox.propTypes,
}

CommonCheckbox.defaultProps = {
  ...Checkbox.defaultProps,
  color: 'primary',
}

export { CommonCheckbox }
