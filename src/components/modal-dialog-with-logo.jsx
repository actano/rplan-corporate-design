import { Modal } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
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
}))

const ModalWithLogo = ({
  open, onClose, Buttons, Logo, children,
}) => {
  const classes = useStyles()

  return (
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
}

ModalWithLogo.propTypes = {
  Buttons: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  Logo: PropTypes.node,
}

ModalWithLogo.defaultProps = {
  Logo: undefined,
}

const ModalDialogWithLogo = ({
  ModalButton, Buttons, Logo, children,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <ModalButton onClick={handleOpen} />
      <ModalWithLogo
        Buttons={Buttons}
        Logo={Logo}
        open={open}
        onClose={handleClose}
      >
        {children}
      </ModalWithLogo>
    </div>
  )
}

ModalDialogWithLogo.propTypes = {
  ModalButton: PropTypes.func.isRequired,
  Buttons: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  Logo: PropTypes.node,
}

ModalDialogWithLogo.defaultProps = {
  Logo: undefined,
}

export {
  ModalDialogWithLogo,
  ModalWithLogo,
}
