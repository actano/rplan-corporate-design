import { Modal } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import React from 'react'

const styles = theme => ({
  main: {
    minHeight: '100vh',
    padding: `${theme.spacing(13)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(5)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
    },
    background: theme.palette.background.special,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: `${theme.spacing(80)}px`,
    marginTop: theme.spacing(8),
    padding: `${theme.spacing(2)}px ${theme.spacing(7)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  },
  buttons: {
    marginTop: `${theme.spacing(4)}px`,
    marginBottom: `${theme.spacing(4)}px`,
  },
  logo: {
    marginBottom: `${theme.spacing(4)}px`,
  },
})

const _ModalDialogWithLogo = ({
  open, onClose, Buttons, Logo, children, classes,
}) => (
  <Modal open={open} onClose={onClose}>
    <div className={classes.main}>
      <Paper className={classes.paper}>
        {children}
        <Grid container spacing={2} direction="row" justify="center" className={classes.buttons}>
          <Grid item>
            <Button
              variant="outlined"
              onClick={onClose}
            >
                Cancel
            </Button>
          </Grid>
          <Grid item>
            {Buttons}
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.logo}>
        {Logo}
      </div>
    </div>
  </Modal>
)

_ModalDialogWithLogo.propTypes = {
  classes: PropTypes.object.isRequired,
  Buttons: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  Logo: PropTypes.node,
}

_ModalDialogWithLogo.defaultProps = {
  Logo: undefined,
}

const ModalDialogWithLogo = withStyles(styles)(_ModalDialogWithLogo)

export {
  ModalDialogWithLogo,
}