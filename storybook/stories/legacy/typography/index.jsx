import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { Providers } from '../../providers'

export default {
  title: 'Legacy/Typography',
  excludeStories: ['typographyStories'],
}

export const typographyStory = () => (
  <Providers>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h1">h1 - title</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2">h2 - title</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">h3 - title</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">h4 - title</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5">h5 - title</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">h6 - title</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">body1</Typography>
      </Grid>
    </Grid>
  </Providers>
)
