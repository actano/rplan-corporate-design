import classnames from 'classnames'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Person from '@material-ui/icons/Person'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { UserAvatarSize } from './types'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  main: {
    backgroundColor: 'transparent',
    border: '1px dashed',
  },
  'avatar-small': {
    width: `${theme.spacing(4)}px`,
    height: `${theme.spacing(4)}px`,
    fontSize: '1rem',
  },
  'avatar-small-2': {
    width: `${theme.spacing(5)}px`,
    height: `${theme.spacing(5)}px`,
    fontSize: '1rem',
  },
  'avatar-regular': {
    width: `${theme.spacing(7)}px`,
    height: `${theme.spacing(7)}px`,
  },
  // A icon font size of 18px results in a height of 12px for the very person,
  // as wished for 'small' in https://actano.atlassian.net/browse/PA-2755 .
  // The other values are proportional to the avatar width/height.
  'person-small': {
    fontSize: '18px',
  },
  'person-small-2': {
    fontSize: `${18 * 1.25}px`,
  },
  'person-regular': {
    fontSize: `${18 * 1.75}px`,
  },
}))

interface UserAvatarPlaceholderProps {
  size: UserAvatarSize,
  className?: string,
}

const UserAvatarPlaceholder: React.FC<UserAvatarPlaceholderProps> = ({
  size,
  className,
}) => {
  const classes = useStyles()

  return (
    <Avatar
      className={
        classnames(
          classes[`avatar-${size}`],
          classes.main,
          className,
        )}
    >
      <Person className={classnames(classes[`person-${size}`])} />
    </Avatar>
  )
}

export {
  UserAvatarPlaceholder,
  UserAvatarPlaceholderProps,
}
