import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { RootButton } from './root-button'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.colors.red,
    '&:hover': {
      backgroundColor: theme.palette.colors.darkRed,
    },
  },
}))

const DangerousButton = ({ children, className, ...otherProps }) => {
  const classes = useStyles()

  return (
    <RootButton
      variant="contained"
      color="secondary"
      className={classnames(classes.root, className)}
      {...otherProps}
    >
      { children }
    </RootButton>
  )
}

DangerousButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

DangerousButton.defaultProps = {
  children: undefined,
  className: undefined,
}

export { DangerousButton }
