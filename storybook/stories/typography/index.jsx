import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'

import { Providers } from '../providers'

const typographyStories = () => {
  storiesOf('Typography', module)
    .add('Typography', () =>
      (
        <Providers>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography
                variant="h1"
              >
                h1 - title
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
              >
                h2 - title
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">
                h3 - title
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">
                h4 - title
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                h5 - title
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                body1
              </Typography>
            </Grid>
          </Grid>
        </Providers>
      ))
}

export { typographyStories }
