import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import MUIAvatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/styles'

const calcInitials = (firstName, lastName, email) => {
  const initialsFromName = `${firstName && firstName[0]}${lastName && lastName[0]}`
  const initials = initialsFromName || (email && email[0])
  return (initials || '').toUpperCase()
}

const useStyles = makeStyles(
  theme => ({
    'avatar-small': {
      width: `${theme.spacing(4)}px`,
      height: `${theme.spacing(4)}px`,
      fontSize: '1rem',
    },
    'avatar-regular': {
      width: `${theme.spacing(7)}px`,
      height: `${theme.spacing(7)}px`,
    },
  }),
)

const UserAvatar = ({
  firstName,
  lastName,
  email,
  size,
  className,
}) => {
  const classes = useStyles()

  return (
    <MUIAvatar className={classnames(classes[`avatar-${size}`], className)}>
      { calcInitials(firstName, lastName, email) }
    </MUIAvatar>
  )
}

UserAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  size: PropTypes.oneOf(['small', 'regular']),
  className: PropTypes.string,
}

UserAvatar.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  size: 'regular',
  className: '',
}

export { UserAvatar }
