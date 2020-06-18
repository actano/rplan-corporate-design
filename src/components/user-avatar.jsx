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
  'small-2': 40,
  regular: 56,
}

const styles = theme => ({
  gravatar: {
    backgroundColor: 'transparent',
  },
  'avatar-small': {
    width: `${theme.spacing(4)}px`,
    height: `${theme.spacing(4)}px`,
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  'avatar-small-2': {
    width: `${theme.spacing(5)}px`,
    height: `${theme.spacing(5)}px`,
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  'avatar-regular': {
    width: `${theme.spacing(7)}px`,
    height: `${theme.spacing(7)}px`,
    fontWeight: 600,
  },
})

const _UserAvatar = ({
  classes,
  firstName,
  lastName,
  email,
  size,
  className,
  profilePictureUrl,
}) => {
  const [gravatarNotFound, setGravatarNotFound] = useState(false)

  useEffect(() => {
    setGravatarNotFound(false)
  }, [email, profilePictureUrl])

  const avatarSize = AVATAR_SIZES[size]
  const requestedGravatarSize = avatarSize * 2
  const imageSrc = profilePictureUrl
    || gravatar.url(email, { s: requestedGravatarSize, d: 404 }, true)

  return (
    <MUIAvatar className={classnames(classes[`avatar-${size}`], className)}>
      {
        gravatarNotFound ? calcInitials(firstName, lastName, email)
          : (
            <img
              alt={email}
              className={classes.gravatar}
              src={imageSrc}
              onError={() => setGravatarNotFound(true)}
              width={avatarSize}
              height={avatarSize}
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
  profilePictureUrl: PropTypes.string,
  size: PropTypes.oneOf(['small', 'small-2', 'regular']),
  className: PropTypes.string,
}

_UserAvatar.defaultProps = {
  firstName: '',
  lastName: '',
  size: 'regular',
  email: '',
  className: '',
  profilePictureUrl: '',
}

const UserAvatar = withStyles(styles)(_UserAvatar)

export { UserAvatar }
