import PropTypes from 'prop-types'
import React from 'react'
import {
  Dialog,
  DialogContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(6, 7.25),

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headline: {
    flex: 'none',
    marginBottom: theme.spacing(2.875),

    textAlign: 'center',
    maxWidth: '100%',
  },
  childContainer: {
    flex: '1 0 auto',
    margin: theme.spacing(1.25, 0),
    width: '100%',
  },
  buttonContainer: {
    flex: 'none',
    marginTop: theme.spacing(5),

    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
}))

const _DefaultDialog = ({
  open, title, children, buttons, onClose,
}) => {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent className={classes.content}>
        <Typography
          className={classes.headline}
          component="h1"
          variant="h3"
        >
          { title }
        </Typography>
        <div className={classes.childContainer}>
          { children }
        </div>
        <div className={classes.buttonContainer}>
          { buttons }
        </div>
      </DialogContent>
    </Dialog>
  )
}

_DefaultDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  buttons: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

_DefaultDialog.defaultProps = {
}

const DefaultDialog = _DefaultDialog

export {
  DefaultDialog,
}
