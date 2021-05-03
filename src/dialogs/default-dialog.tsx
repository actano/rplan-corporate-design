import React from 'react'
import {
  Dialog,
  DialogContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface Classes {
  buttonContainer?: string
  childContainer?: string
  content?: string
  headerButtons?: string
  headline?: string
}
interface StyleProps {
  hasIcon: boolean,
  classes?: Classes,
}

const useStyles = makeStyles<CorporateDesignTheme, StyleProps>(theme => ({
  content: {
    padding: theme.spacing(6, 7.25),
    '&:first-child': {
      padding: theme.spacing(6, 7.25),
    },

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  headerButtons: {
    top: '0px',
    right: '0px',
    padding: theme.spacing(5, 6),
    position: 'absolute',
  },
  headline: ({ hasIcon }) => ({
    flex: 'none',
    marginBottom: theme.spacing(2.875),
    marginTop: hasIcon ? theme.spacing(2.875) : 0,

    textAlign: 'center',
    maxWidth: '100%',
  }),
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

interface DefaultDialogProps {
  title: string,
  headerButtons?: React.ReactNode,
  children: React.ReactNode,
  buttons: React.ReactNode,
  open: boolean,
  onClose: () => void,
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
  fullWidth?: boolean,
  icon?: React.ReactNode,
  classes?: Classes,
  [x: string]: any,
}

const DefaultDialog: React.FunctionComponent<DefaultDialogProps> = ({
  open,
  title,
  headerButtons,
  children,
  buttons,
  onClose,
  maxWidth = 'sm',
  fullWidth = true,
  icon,
  classes,
  ...otherProps
}) => {
  const hasIcon = icon != null
  const ownClasses = useStyles({ hasIcon, classes })

  return (
    <Dialog
      {...otherProps}
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
    >
      <DialogContent className={ownClasses.content}>
        <div className={ownClasses.headerButtons}>
          { headerButtons }
        </div>
        { icon }
        <Typography
          className={ownClasses.headline}
          component="h1"
          variant="h3"
        >
          { title }
        </Typography>
        <div className={ownClasses.childContainer}>
          { children }
        </div>
        <div className={ownClasses.buttonContainer}>
          { buttons }
        </div>
      </DialogContent>
    </Dialog>
  )
}

export {
  DefaultDialog,
}
