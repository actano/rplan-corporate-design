import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'

import { UserAvatar } from './user-avatar'
import { UserAvatarPlaceholder } from './user-avatar-placeholder'

const useStyles = makeStyles(() => ({
  avatar: ({ isClickable }) => ({
    cursor: isClickable ? 'pointer' : 'auto',
  }),
}))

const UserAvatarWithPlaceholder = ({
  className, onClick, user, classes, size,
}) => {
  const ownClasses = useStyles({ isClickable: !!onClick })
  const combinedClassNames = classnames(className, ownClasses.avatar)

  return (
    <div
      role="presentation"
      onClick={onClick}
    >
      {
        user
          ? (
            <UserAvatar
              className={combinedClassNames}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              size={size}
            />
          ) : (
            <UserAvatarPlaceholder
              className={combinedClassNames}
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
}

UserAvatarWithPlaceholder.defaultProps = {
  className: '',
  onClick: undefined,
  user: null,
  classes: {},
  size: 'regular',
}

export { UserAvatarWithPlaceholder }
