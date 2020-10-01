import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Providers } from '../../providers'
import { AllexLogo } from '../../../../src/components'

const useStyles = makeStyles(theme => ({
  logo: {
    width: theme.spacing(15),
  },
}))

const AllexLogoWithStyles = () => {
  const classes = useStyles()

  return <AllexLogo className={classes.logo} />
}

export default {
  title: 'Legacy/Allex Logo',
  excludeStories: ['allexLogoStories'],
}

export const allexLogoStory = () => (
  <Providers>
    <AllexLogoWithStyles />
  </Providers>
)
