import React, { useCallback, useState } from 'react'
import {
  IconButton, Snackbar, SnackbarContent,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import { makeStyles } from '@material-ui/styles'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

enum SnackBarTypes {
  error = 'error',
  info = 'info'
}

type SnackBarProps = {
  type: SnackBarTypes
}

function getBackgroundColor(theme: CorporateDesignTheme, type: SnackBarTypes): string {
  switch (type) {
    case SnackBarTypes.error:
      return theme.palette.error.main
    case SnackBarTypes.info:
      return theme.palette.primary.main
    default:
      throw new Error('Snack bar type not supported')
  }
}

function getIcon(type: SnackBarTypes, classes) {
  switch (type) {
    case SnackBarTypes.error:
      return <ErrorIcon className={classes.icon} />
    case SnackBarTypes.info:
      return <InfoIcon className={classes.icon} />
    default:
      throw new Error('Snack bar type not supported')
  }
}

const useStyles = makeStyles<CorporateDesignTheme, SnackBarProps>(theme => ({
  root: {
    zIndex: 'initial',
  },
  content: ({ type }) => ({
    backgroundColor: getBackgroundColor(theme, type),
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'unset',
  }),
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    flex: 'none',
    marginRight: theme.spacing(1),
  },
  action: {
    paddingLeft: '0px',
    alignItems: 'center',
    display: 'flex',
    marginLeft: 'auto',
  },
}))

const SnackBar: React.FunctionComponent<{
  message: string,
  type: SnackBarTypes,
  onClose: Function,
}> = ({ message, type, onClose = () => {} }) => {
  const classes = useStyles({ type })
  const [isVisible, setIsVisible] = useState(true)
  const icon = getIcon(type, classes)
  const hide = useCallback(() => {
    setIsVisible(false)
    onClose()
  }, [onClose])

  return (
    <Snackbar
      className={classes.root}
      open={isVisible}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <SnackbarContent
        classes={{
          root: classes.content,
          message: classes.message,
          action: classes.action,
        }}
        action={[
          <IconButton key="close" color="inherit" onClick={hide} style={{}}>
            <CloseIcon />
          </IconButton>,
        ]}
        message={(
          <React.Fragment>
            {icon}
            {message}
          </React.Fragment>
        )}
      />
    </Snackbar>
  )
}

export { SnackBarTypes, SnackBar }
