import PropTypes from 'prop-types'
import React from 'react'

import { Modal } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import logoUrl from './logo-page/logo.svg'

import { TertiaryButton } from '../buttons'
import { useTranslation } from '../i18n'

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
    width: '100%',
    maxWidth: `${theme.spacing(80)}px`,
    marginTop: theme.spacing(8),
    padding: `${theme.spacing(2)}px ${theme.spacing(7)}px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
  classes, open, children, Buttons, onClose, onSubmit,
}) => {
  const [translate] = useTranslation()

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.main}>
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={onSubmit}>
            {children}
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              className={classes.buttons}
            >
              <Grid item>
                <TertiaryButton
                  onClick={onClose}
                >
                  {translate('Cancel')}
                </TertiaryButton>
              </Grid>
              <Grid item>
                {Buttons}
              </Grid>
            </Grid>
          </form>
        </Paper>
        <div className={classes.logo}>
          <figure>
            <img src={logoUrl} alt="Allex logo" />
          </figure>
        </div>
      </div>
    </Modal>
  )
}

_ModalDialogWithLogo.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  Buttons: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
}

_ModalDialogWithLogo.defaultProps = {
  onSubmit: () => {},
}

const ModalDialogWithLogo = withStyles(styles)(_ModalDialogWithLogo)

export {
  ModalDialogWithLogo,
}
