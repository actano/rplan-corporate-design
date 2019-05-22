import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  'wall-small': {
    padding: theme.spacing.unit,
  },
  'wall-regular': {
    padding: theme.spacing.unit * 2,
  },
  'wall-large': {
    padding: theme.spacing.unit * 4,
  },
})

const _Wall = ({
  classes, children, size, className,
}) => (
  <div className={[classes[`wall-${size}`], className].join(' ')}>
    { children }
  </div>
)

_Wall.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'regular', 'large']).isRequired,
  className: PropTypes.string,
}

_Wall.defaultProps = {
  className: '',
}

const Wall = withStyles(styles)(_Wall)

export { Wall }
