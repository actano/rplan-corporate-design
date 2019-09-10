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
  },
  'avatar-small': {
    width: `${theme.spacing(4)}px`,
    height: `${theme.spacing(4)}px`,
    fontSize: '1rem',
  },
  'avatar-small-2': {
    width: `${theme.spacing(5)}px`,
    height: `${theme.spacing(5)}px`,
    fontSize: '1rem',
  },
  'avatar-regular': {
    width: `${theme.spacing(7)}px`,
    height: `${theme.spacing(7)}px`,
  },
}))

const UserAvatarPlaceholder = (props) => {
  const classes = useStyles()
  const { color } = props.classes

  return (
    <Avatar
      className={
      classnames(
        classes[`avatar-${props.size}`],
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
  size: PropTypes.oneOf(['small', 'small-2', 'regular']),
}

UserAvatarPlaceholder.defaultProps = {
  className: undefined,
  classes: {},
  size: 'regular',
}

export { UserAvatarPlaceholder }
