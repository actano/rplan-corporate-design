import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

import logoUrl from './logo.svg'

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
  childrenWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    marginBottom: `${theme.spacing(4)}px`,
  },
}))

const LogoPage = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      <div className={classes.childrenWrapper}>
        {children}
      </div>
      <figure className={classes.logo}>
        <img src={logoUrl} alt="ALLEX logo" />
      </figure>
    </div>
  )
}

LogoPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LogoPage }
