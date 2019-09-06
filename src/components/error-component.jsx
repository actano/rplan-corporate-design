import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Typography, makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(64),
    color: theme.palette.colors.lightGrey,
    textAlign: 'center',
  },
  description: {
    fontSize: theme.typography.pxToRem(20),
    textAlign: 'center',
  },
  container: {
    width: '100%',
    margin: 'auto',
  },
}))

const ErrorComponent = ({
  title,
  description,
  children,
  containerClassName,
  titleClassName,
  descriptionClassName,
}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={3}
      className={classnames(classes.container, containerClassName)}
    >
      <Grid item>
        <Typography
          variant="h2"
          className={classnames(classes.title, titleClassName)}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle1"
          className={classnames(classes.description, descriptionClassName)}
        >
          {description}
        </Typography>
      </Grid>
      <Grid item>
        {children}
      </Grid>
    </Grid>
  )
}

ErrorComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  containerClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

ErrorComponent.defaultProps = {
  title: '',
  description: '',
  containerClassName: '',
  titleClassName: '',
  descriptionClassName: '',
  children: [],
}

export { ErrorComponent }
