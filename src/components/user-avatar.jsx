import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import MUIAvatar from '@material-ui/core/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'

const calcInitials = (firstName, lastName, email) => {
  const initialsFromName = `${firstName && firstName[0]}${lastName && lastName[0]}`
  const initials = initialsFromName || (email && email[0])
  return (initials || '').toUpperCase()
}

const styles = theme => ({
  'avatar-small': {
    width: `${theme.spacing(4)}px`,
    height: `${theme.spacing(4)}px`,
    fontSize: '1rem',
  },
  'avatar-regular': {
    width: `${theme.spacing(7)}px`,
    height: `${theme.spacing(7)}px`,
  },
})

const _UserAvatar = ({
  classes,
  firstName,
  lastName,
  email,
  size,
  className,
}) => {
  return (
    <MUIAvatar className={classnames(classes[`avatar-${size}`], className)}>
      { calcInitials(firstName, lastName, email) }
    </MUIAvatar>
  )
}

_UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  size: PropTypes.oneOf(['small', 'regular']),
  className: PropTypes.string,
}

_UserAvatar.defaultProps = {
  firstName: '',
  lastName: '',
  email: '',
  size: 'regular',
  className: '',
}

const UserAvatar = withStyles(styles)(_UserAvatar)

export { UserAvatar }
