import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { isEmpty } from 'lodash'

import { UserAvatar, UserAvatarSize } from './user-avatar'
import { UserAvatarPlaceholder } from './user-avatar-placeholder'
import { CommonTooltip } from './common-tooltip'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface User {
  firstName?: string,
  lastName?: string,
  email?: string,
  profilePictureUrl?: string,
}

enum UserAvatarWithPlaceholderVariant {
  grey = 'grey',
  white = 'white',
}

interface StylesProps {
  variant: UserAvatarWithPlaceholderVariant,
  isClickable: boolean,
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>(theme => ({
  avatar: ({ variant, isClickable }) => {
    switch (variant) {
      case UserAvatarWithPlaceholderVariant.grey: {
        return {
          cursor: isClickable ? 'pointer' : 'auto',
          color: theme.palette.colors.white,
          borderColor: theme.palette.colors.lightGrey,
        }
      }
      case UserAvatarWithPlaceholderVariant.white: {
        return {
          cursor: isClickable ? 'pointer' : 'auto',
          color: theme.palette.colors.white,
          borderColor: theme.palette.colors.white,
        }
      }
      default: {
        throw new Error(`Invalid avatar color variant ${variant}`)
      }
    }
  },
  placeholder: ({ variant, isClickable }) => {
    switch (variant) {
      case 'grey': {
        return {
          cursor: isClickable ? 'pointer' : 'auto',
          color: theme.palette.colors.grey,
          borderColor: theme.palette.colors.lightGrey,

          '&:hover': isClickable ? {
            color: theme.palette.colors.blue,
            borderColor: theme.palette.colors.blue,
          } : {
            color: theme.palette.colors.grey,
            borderColor: theme.palette.colors.lightGrey,
          },
        }
      }
      case 'white': {
        return {
          cursor: isClickable ? 'pointer' : 'auto',
          color: theme.palette.colors.white,
          borderColor: theme.palette.colors.white,

          '&:hover': isClickable ? {
            color: theme.palette.colors.white,
            borderColor: theme.palette.colors.white,
          } : {
            color: theme.palette.colors.white,
            borderColor: theme.palette.colors.white,
          },
        }
      }
      default: {
        throw new Error(`Invalid avatar color variant ${variant}`)
      }
    }
  },
}))

const getUserName = (user: User): string => {
  if (!user) {
    return ''
  }
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`.trim()
  }
  return user.email || ''
}

interface UserAvatarWithPlaceholderProps {
  className?: string,
  onClick?: () => void,
  user?: User,
  size?: UserAvatarSize,
  variant?: UserAvatarWithPlaceholderVariant,
  disabled?: boolean,
  displayUserNameOnHover?: boolean
  enablePlaceholder?: boolean,
}

const UserAvatarWithPlaceholder: React.FC<UserAvatarWithPlaceholderProps> = ({
  className,
  onClick,
  user = {},
  size = UserAvatarSize.regular,
  disabled = false,
  variant = UserAvatarWithPlaceholderVariant.grey,
  displayUserNameOnHover = false,
  enablePlaceholder = true,
}) => {
  const isClickable = !!onClick && !disabled
  const hasUser = !isEmpty(user)
  const userName = getUserName(user)
  const ownClasses = useStyles({ isClickable, variant })

  const combinedAvatarClasses = classnames(className, ownClasses.avatar)
  const combinedPlaceholderClasses = classnames(className, ownClasses.placeholder)
  const shouldShowAvatar = hasUser || !enablePlaceholder

  const avatarElement = (
    <div
      role="presentation"
      onClick={isClickable ? onClick : undefined}
    >
      {
        shouldShowAvatar
          ? (
            <UserAvatar
              className={combinedAvatarClasses}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              profilePictureUrl={user.profilePictureUrl}
              size={size}
            />
          ) : (
            <UserAvatarPlaceholder
              className={combinedPlaceholderClasses}
              size={size}
            />
          )
      }
    </div>
  )
  if (!displayUserNameOnHover) {
    return avatarElement
  }
  return <CommonTooltip title={userName}>{avatarElement}</CommonTooltip>
}

export {
  UserAvatarWithPlaceholder,
  UserAvatarWithPlaceholderVariant,
  User,
}
