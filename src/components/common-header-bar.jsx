import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  main: {
    border: 'none',
    backgroundColor: theme.palette.headerBar.BACKGROUND.MAIN,
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: theme.palette.headerBar.BORDER.NORMAL,

    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(13),
    paddingRight: theme.spacing(13),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
})

const _CommonHeaderBar = ({ classes, children, className }) => (
  <div className={classnames(classes.main, className)}>
    { children }
  </div>
)

_CommonHeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

_CommonHeaderBar.defaultProps = {
  className: undefined,
}

const CommonHeaderBar = withStyles(styles)(_CommonHeaderBar)

export { CommonHeaderBar }
