import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { decorators } from '../../decorators'

import { Providers } from '../../providers'
import { AllexLogo } from '../../../../src/components'

export default {
  title: 'Brand Elements/Allex Logo',
  decorators,
}

const useStyles = makeStyles(theme => ({
  logo: {
    width: theme.spacing(15),
  },
  lightBackground: {
    padding: theme.spacing(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.palette.colors.white,
  },
  darkBackground: {
    padding: theme.spacing(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.palette.colors.veryDarkDeepBlue,
  },
  colorBackground: {
    padding: theme.spacing(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: theme.palette.colors.deepBlue,
  },
}))


export const allexLogoLight = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles()

  return (
    <Providers>
      <div className={classes.lightBackground}>
        <AllexLogo className={classes.logo} />
      </div>
    </Providers>
  )
}

export const allexLogoDark = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles()

  return (
    <Providers>
      <div className={classes.darkBackground}>
        <AllexLogo className={classes.logo} />
      </div>
    </Providers>
  )
}

export const allexLogoOnColor = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles()

  return (
    <Providers>
      <div className={classes.colorBackground}>
        <AllexLogo className={classes.logo} />
      </div>
    </Providers>
  )
}
