import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import gravatar from 'gravatar'

import MUIAvatar from '@material-ui/core/Avatar'
import withStyles from '@material-ui/core/styles/withStyles'

const calcInitials = (firstName, lastName, email) => {
  const initialsFromName = `${firstName && firstName[0]}${lastName && lastName[0]}`
  const initials = initialsFromName || (email && email[0])
  return (initials || '').toUpperCase()
}

const AVATAR_SIZES = {
  small: 32,
  regular: 56,
}

const styles = theme => ({
  gravatar: {
    backgroundColor: 'transparent',
  },
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
  const [showInitials, setShowInitials] = useState(false)

  useEffect(() => {
    setShowInitials(false)
  }, [email])

  return (
    <MUIAvatar className={classnames(classes[`avatar-${size}`], className)}>
      {
        showInitials ? calcInitials(firstName, lastName, email)
          : (
            <img
              alt={email}
              className={classes.gravatar}
              src={gravatar.url(email, { s: AVATAR_SIZES[size], d: 404 }, true)}
              onError={() => setShowInitials(true)}
            />
          )
      }
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
  size: 'regular',
  email: '',
  className: '',
}

const UserAvatar = withStyles(styles)(_UserAvatar)

export { UserAvatar }
