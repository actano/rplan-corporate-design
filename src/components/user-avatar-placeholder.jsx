import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Person from '@material-ui/icons/Person'

const useStyles = makeStyles(theme => ({
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
  // A icon font size of 18px results in a hight of 12px for the very person,
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

const UserAvatarPlaceholder = (props) => {
  const classes = useStyles()

  return (
    <Avatar
      className={
      classnames(
        classes[`avatar-${props.size}`],
        classes.main,
        props.className,
      )}
    >
      <Person className={classnames(classes[`person-${props.size}`])} />
    </Avatar>
  )
}

UserAvatarPlaceholder.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'small-2', 'regular']),
}

UserAvatarPlaceholder.defaultProps = {
  className: undefined,
  size: 'regular',
}

export { UserAvatarPlaceholder }
