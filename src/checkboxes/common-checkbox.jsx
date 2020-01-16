import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, makeStyles } from '@material-ui/core'
import Icon from '@mdi/react'
import { mdiCheckboxMarkedOutline } from '@mdi/js'

const useStyles = makeStyles(theme => ({
  checkbox: {
    color: theme.palette.colors.lightGrey,
  },
  checkboxChecked: {
    fill: theme.palette.colors.grey,
    width: theme.spacing(3),
  },
}))

const CommonCheckbox = ({ checked, ...otherProps }) => {
  const classes = useStyles()
  return (
    <Checkbox
      {...otherProps}
      checked={checked}
      checkedIcon={(
        <Icon
          path={mdiCheckboxMarkedOutline}
          className={classes.checkboxChecked}
        />
      )}
      color="primary"
      classes={{
        root: classes.checkbox,
      }}
    />
  )
}

CommonCheckbox.propTypes = {
  checked: PropTypes.bool,
}

CommonCheckbox.defaultProps = {
  checked: false,
}

export { CommonCheckbox }
