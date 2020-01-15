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

const CommonCheckbox = ({ isChecked, ...otherProps }) => {
  const classes = useStyles()
  return (
    <Checkbox
      {...otherProps}
      checked={isChecked}
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
  isChecked: PropTypes.bool,
}

CommonCheckbox.defaultProps = {
  isChecked: false,
}

export { CommonCheckbox }
