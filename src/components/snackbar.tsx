import React, { useCallback, useState, useEffect } from 'react'
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core'
import classNames from 'classnames'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import { makeStyles } from '@material-ui/styles'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

enum SnackBarTypes {
  error = 'error',
  info = 'info',
}

type SnackBarProps = {
  type: SnackBarTypes
}

type Classes = {
  root?: any
  content?: any
  message?: any
  icon?: any
  action?: any
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
    paddingLeft: '2px',
    alignItems: 'center',
    display: 'flex',
    marginLeft: 'auto',
  },
}))

const SnackBar: React.FunctionComponent<{
  message?: JSX.Element | string
  type: SnackBarTypes
  open: boolean
  autoHideDuration?: number
  persistent?: boolean
  onClose?: Function
  classes?: Classes
  action?: React.ReactNode
}> = ({
  message = '',
  type,
  open = true,
  persistent,
  autoHideDuration,
  onClose = () => {},
  classes: userStyles = {},
  action,
}) => {
  const styles = useStyles({ type })
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => setIsOpen(open), [open])

  const hide = useCallback(() => {
    if (!persistent) {
      setIsOpen(false)
    }
    onClose()
  }, [onClose, persistent])

  return (
    <Snackbar
      className={classNames(userStyles.root, styles.root)}
      open={isOpen}
      autoHideDuration={persistent ? null : autoHideDuration}
      onClose={hide}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <SnackbarContent
        classes={{
          root: classNames(userStyles.content, styles.content),
          message: classNames(userStyles.message, styles.message),
          action: classNames(userStyles.action, styles.action),
        }}
        action={persistent ? action : (
          <>
            {action}
            <IconButton key="close" color="inherit" onClick={hide} style={{}}>
              <CloseIcon />
            </IconButton>
          </>
        )}
        message={(
          <React.Fragment>
            {getIcon(type, styles)}
            {message}
          </React.Fragment>
)}
      />
    </Snackbar>
  )
}

export { SnackBarTypes, SnackBar }
