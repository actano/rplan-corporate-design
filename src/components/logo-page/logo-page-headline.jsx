import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  headline: {
    fontFamily: 'Open Sans',
    fontSize: '2.5rem',
    color: theme.palette.colors.WHITE,
    letterSpacing: '0.025rem',
    textAlign: 'center',
    lineHeight: 1,
    fontWeight: 300,
  },
}))

const LogoPageHeadline = ({ className, children, ...otherProps }) => {
  const classes = useStyles()

  return (
    <Typography
      {...otherProps}
      className={classnames(classes.headline, className)}
      align="center"
      variant="h2"
    >
      { children }
    </Typography>
  )
}

LogoPageHeadline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

LogoPageHeadline.defaultProps = {
  className: undefined,
  children: undefined,
}

export { LogoPageHeadline }
