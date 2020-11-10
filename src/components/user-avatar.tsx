import classnames from 'classnames'
import React, { useEffect, useState } from 'react'
import gravatar from 'gravatar'

import { makeStyles } from '@material-ui/styles'
import MUIAvatar from '@material-ui/core/Avatar'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const calcInitials = (firstName, lastName, email) => {
  const initialsFromName = `${firstName && firstName[0]}${lastName && lastName[0]}`
  const initials = initialsFromName || (email && email[0])
  return (initials || '').toUpperCase()
}

enum UserAvatarSize {
  small = 'small',
  small2 = 'small-2',
  regular = 'regular',
}

type AvatarSizeMap = {
  [size in UserAvatarSize]: number
}

const AVATAR_SIZES: AvatarSizeMap = {
  small: 32,
  'small-2': 40,
  regular: 56,
}

interface AvatarImageProps {
  email?: string,
  className?: string,
  src: string,
  width: number,
  height: number,
  // TODO: consider error type
  onError: (error: any) => void,
}

const AvatarImage: React.FC<AvatarImageProps> = ({
  email = '',
  className,
  src,
  width,
  height,
  onError = () => {},
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

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
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
}))

interface UserAvatarProps {
  firstName?: string,
  lastName?: string,
  email?: string,
  profilePictureUrl?: string,
  size?: UserAvatarSize,
  forceGravatar?: boolean
  ImageComponent?: React.FC<AvatarImageProps>,
  className?: string,
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  firstName = '',
  lastName = '',
  email = '',
  size = UserAvatarSize.regular,
  profilePictureUrl = '',
  forceGravatar = false,
  ImageComponent = AvatarImage,
  className,
}) => {
  const [gravatarNotFound, setGravatarNotFound] = useState(false)
  const classes = useStyles()

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

export {
  UserAvatar,
  calcInitials,
  AVATAR_SIZES,
  UserAvatarSize,
}
