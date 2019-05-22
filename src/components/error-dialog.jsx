import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import { Wall } from './wall'

const styles = theme => ({
  errorDialog: {
    backgroundColor: theme.palette.error.light,
    textAlign: 'center',
  },
})

const _ErrorDialog = ({ classes, children }) => (
  <Paper className={classes.errorDialog}>
    <Wall size="small">
      <Typography variant="body2">
        { children }
      </Typography>
    </Wall>
  </Paper>
)

_ErrorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const ErrorDialog = withStyles(styles)(_ErrorDialog)

export { ErrorDialog }
