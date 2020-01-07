import React from 'react'
import { storiesOf } from '@storybook/react'
import { makeStyles } from '@material-ui/styles'

import { Providers } from '../providers'
import { AllexLogo } from '../../../src/components'

const useStyles = makeStyles(theme => ({
  logo: {
    width: theme.spacing(15),
  },
}))

const AllexLogoWithStyles = () => {
  const classes = useStyles()

  return (
    <AllexLogo className={classes.logo} />
  )
}

const allexLogoStories = () => {
  storiesOf('Allex Logo', module)
    .add('Allex Logo', () => (
      <Providers>
        <AllexLogoWithStyles />
      </Providers>
    ))
}

export {
  allexLogoStories,
}
