import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    display: 'block',
    backgroundColor: theme.palette.action.hover,
    height: '1.2em',
  },
  text: {
    marginTop: 0,
    marginBottom: 0,
    height: 'auto',
    transformOrigin: '0 60%',
    transform: 'scale(1, 0.60)',
    borderRadius: theme.shape.borderRadius,
    '&:empty:before': {
      content: '"\\00a0"',
    },
  },
  circle: {
    borderRadius: '50%',
  },
  animate: {
    animation: '$animate 1.5s ease-in-out infinite',
  },
  '@keyframes animate': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.4,
    },
    '100%': {
      opacity: 1,
    },
  },
})

const _Skeleton = ({
  classes,
  className,
  disableAnimate,
  height,
  variant,
  width,
}) => (
  <div
    className={classnames(
      classes.root,
      classes[variant],
      {
        [classes.animate]: !disableAnimate,
      },
      className,
    )}
    style={{
      width,
      height,
    }}
  />
)

_Skeleton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disableAnimate: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(['text', 'circle']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

_Skeleton.defaultProps = {
  className: '',
  disableAnimate: false,
  variant: 'text',
  height: '',
  width: '',
}

const Skeleton = withStyles(styles)(_Skeleton)

export { Skeleton }
