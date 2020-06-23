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

const AvatarImage = ({
  email,
  className,
  src,
  width,
  height,
  onError,
}) => (
  <img
    alt={email}
    className={className}
    src={src}
    onError={onError}
    width={width}
    height={height}
  />
)

AvatarImage.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  onError: PropTypes.func,
}
AvatarImage.defaultProps = {
  email: '',
  className: undefined,
  onError: () => { },
}

const _UserAvatar = ({
  classes,
  firstName,
  lastName,
  email,
  size,
  className,
  profilePictureUrl,
  forceGravatar,
  ImageComponent,
}) => {
  const [gravatarNotFound, setGravatarNotFound] = useState(false)

  useEffect(() => {
    setGravatarNotFound(false)
  }, [email, profilePictureUrl])

  const avatarSize = AVATAR_SIZES[size]
  const requestedGravatarSize = avatarSize * 2

  const getGravatarUrl = () => gravatar.url(email, { s: requestedGravatarSize, d: 404 }, true)

  const imageSrc = forceGravatar
    ? getGravatarUrl()
    : (profilePictureUrl || getGravatarUrl())

  return (
    <MUIAvatar className={classnames(classes[`avatar-${size}`], className)}>
      {
        gravatarNotFound ? calcInitials(firstName, lastName, email)
          : (
            <ImageComponent
              email={email}
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
  forceGravatar: PropTypes.bool,
  ImageComponent: PropTypes.func,
}

_UserAvatar.defaultProps = {
  firstName: '',
  lastName: '',
  size: 'regular',
  email: '',
  className: '',
  profilePictureUrl: '',
  forceGravatar: false,
  ImageComponent: AvatarImage,
}

const UserAvatar = withStyles(styles)(_UserAvatar)

export { UserAvatar, calcInitials }
