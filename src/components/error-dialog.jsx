import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  errorDialog: {
    width: '100%',
    backgroundColor: theme.palette.error.light,
    border: `1px solid ${theme.palette.error.main}`,
    textAlign: 'center',
    padding: '24px',
    boxShadow: 'none',
  },
})

const _ErrorDialog = ({ classes, className, children }) => (
  <Paper className={classNames(classes.errorDialog, className)}>
    <Typography variant="h5">
      { children }
    </Typography>
  </Paper>
)

_ErrorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
}

_ErrorDialog.defaultProps = {
  classNames: '',
}

const ErrorDialog = withStyles(styles)(_ErrorDialog)

export { ErrorDialog }
