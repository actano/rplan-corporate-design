import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

import { UserAvatar } from './user-avatar'
import { UserAvatarPlaceholder } from './user-avatar-placeholder'

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
  },
}))

const UserAvatarWithPlaceholder = ({ onClick, user, classes }) => {
  const ownClasses = useStyles()
  return (
    <div
      role="presentation"
      onClick={onClick}
    >
      {
        user
          ? (
            <UserAvatar
              className={ownClasses.avatar}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              size="small"
            />
          ) : (
            <UserAvatarPlaceholder
              className={ownClasses.avatar}
              classes={classes}
            />
          )
      }
    </div>
  )
}

UserAvatarWithPlaceholder.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
  classes: PropTypes.object,
}

UserAvatarWithPlaceholder.defaultProps = {
  onClick: () => {},
  user: null,
  classes: {},
}

export { UserAvatarWithPlaceholder }
