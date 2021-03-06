import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { isEmpty } from 'lodash'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { UserAvatar } from './user-avatar'
import { UserAvatarPlaceholder } from './user-avatar-placeholder'
import { CommonTooltip } from './common-tooltip'
import {
  User,
  UserAvatarWithPlaceholderVariant,
  UserAvatarSize,
} from './types'

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
          color: theme.palette.colors.darkerGrey,
          borderColor: theme.palette.colors.grey,

          '&:hover': isClickable ? {
            color: theme.palette.colors.blue,
            borderColor: theme.palette.colors.blue,
          } : {
            color: theme.palette.colors.darkerGrey,
            borderColor: theme.palette.colors.grey,
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
  displayUserNameOnHover?: boolean,
  enablePlaceholder?: boolean,
  tooltipText?: string | ((userName: string) => string),
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
  tooltipText,
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
  const tooltipValue = typeof tooltipText === 'function' ? tooltipText(userName) : tooltipText || userName
  return (<CommonTooltip title={tooltipValue}>{avatarElement}</CommonTooltip>)
}

export {
  UserAvatarWithPlaceholder,
  UserAvatarWithPlaceholderProps,
}
