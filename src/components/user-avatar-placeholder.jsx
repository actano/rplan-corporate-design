import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Person from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: 'transparent',
    border: '1px dashed',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}))

const UserAvatarPlaceholder = (props) => {
  const classes = useStyles()
  const { color } = props.classes

  return (
    <Avatar
      className={
      classnames(
        classes.main,
        props.className,
        color,
      )}
      classes={{ colorDefault: color }}
    >
      <Person />
    </Avatar>
  )
}

UserAvatarPlaceholder.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
}

UserAvatarPlaceholder.defaultProps = {
  className: undefined,
  classes: {},
}

export { UserAvatarPlaceholder }
