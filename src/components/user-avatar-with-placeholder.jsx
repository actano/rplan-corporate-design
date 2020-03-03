import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

import { UserAvatar } from './user-avatar'
import { UserAvatarPlaceholder } from './user-avatar-placeholder'

const useStyles = makeStyles(theme => ({
  avatar: ({ variant, isClickable }) => {
    switch (variant) {
      case 'grey': {
        return {
          cursor: isClickable ? 'pointer' : 'auto',
          color: theme.palette.colors.white,
          borderColor: theme.palette.colors.lightGrey,
        }
      }
      case 'white': {
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

const UserAvatarWithPlaceholder = ({
  className,
  onClick,
  user,
  size,
  disabled,
  variant,
}) => {
  const isClickable = !!onClick && !disabled
  const hasUser = user != null
  const ownClasses = useStyles({ isClickable, hasUser, variant })

  const combinedAvatarClasses = classnames(className, ownClasses.avatar)
  const combinedPlaceholderClasses = classnames(className, ownClasses.placeholder)

  return (
    <div
      role="presentation"
      onClick={isClickable ? onClick : undefined}
    >
      {
        hasUser
          ? (
            <UserAvatar
              className={combinedAvatarClasses}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
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
}

UserAvatarWithPlaceholder.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
  size: PropTypes.oneOf(['small', 'small-2', 'regular']),
  variant: PropTypes.oneOf(['grey', 'white']),
  disabled: PropTypes.bool,
}

UserAvatarWithPlaceholder.defaultProps = {
  className: '',
  onClick: undefined,
  user: null,
  size: 'regular',
  variant: 'grey',
  disabled: false,
}

export { UserAvatarWithPlaceholder }
