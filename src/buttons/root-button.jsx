import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  small: {
    padding: theme.spacing(0.5, 1.5),
  },
}))

const RootButton = ({
  children, size, className, ...otherProps
}) => {
  const classes = useStyles()
  return (
    <Button
      {...otherProps}
      size={size}
      className={classnames((size === 'small') ? classes.small : null, className)}
    >
      { children }
    </Button>
  )
}

RootButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  className: PropTypes.string,
}

RootButton.defaultProps = {
  children: undefined,
  size: undefined,
  className: undefined,
}

export { RootButton }
