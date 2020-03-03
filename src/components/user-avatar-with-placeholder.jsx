import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

import { UserAvatar } from './user-avatar'
import { UserAvatarPlaceholder } from './user-avatar-placeholder'

const useStyles = makeStyles(theme => ({
  avatar: ({ isClickable }) => ({
    cursor: isClickable ? 'pointer' : 'auto',
    color: theme.palette.colors.white,
    borderColor: theme.palette.colors.lightGrey,
  }),
  placeholder: ({ isClickable }) => ({
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
  }),
}))

const UserAvatarWithPlaceholder = ({
  className, onClick, user, classes, size, disabled,
}) => {
  const isClickable = !!onClick && !disabled
  const hasUser = user != null
  const ownClasses = useStyles({ isClickable, hasUser })
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
              classes={classes}
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
  classes: PropTypes.object,
  size: PropTypes.oneOf(['small', 'small-2', 'regular']),
  disabled: PropTypes.bool,
}

UserAvatarWithPlaceholder.defaultProps = {
  className: '',
  onClick: undefined,
  user: null,
  classes: {},
  size: 'regular',
  disabled: false,
}

export { UserAvatarWithPlaceholder }
