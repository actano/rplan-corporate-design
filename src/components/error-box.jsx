import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { rgbaString } from '../utils/color-conversion'

const styles = theme => ({
  errorDialog: {
    width: '100%',
    border: `1px solid ${rgbaString(theme.palette.error.main, 0.4)}`,
    textAlign: 'center',
    padding: '24px',
    boxShadow: 'none',
    '&$forceSpecifity': {
      // Override default color of Paper with higher specifity
      backgroundColor: theme.palette.error.light,
    },
  },
  forceSpecifity: {},
})

const _ErrorBox = ({ classes, className, children }) => (
  <Paper
    classes={{
      root: classNames(classes.errorDialog, classes.forceSpecifity, className),
    }}
  >
    <Typography variant="h5" align="center">
      { children }
    </Typography>
  </Paper>
)

_ErrorBox.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

_ErrorBox.defaultProps = {
  className: '',
}

const ErrorBox = withStyles(styles)(_ErrorBox)

export { ErrorBox }
