import { Typography } from '@material-ui/core'
import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    color: theme.palette.colors.white,
    fontSize: '0.6875rem',
    fontWeight: 600,
    backgroundColor: theme.palette.colors.blue,
    borderRadius: theme.spacing(0.25),
    height: theme.spacing(2.375),
    padding: `${theme.spacing(0.125)}px ${theme.spacing(0.625)}px`,
  },
}))

const DefaultBadge = ({ text, className, color }) => {
  const classes = useStyles()

  return (
    <Typography
      variant="body1"
      style={color ? { background: color } : null}
      className={classnames(classes.root, className)}
    >
      { text }
    </Typography>
  )
}

DefaultBadge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
}

DefaultBadge.defaultProps = {
  className: undefined,
  color: null,
}

export { DefaultBadge }
