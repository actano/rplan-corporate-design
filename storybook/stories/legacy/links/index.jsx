import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { storiesOf } from '@storybook/react'

import { Providers } from '../../providers'

// storybook only shows what <a> tags look like, no interactivity needed
/* eslint-disable jsx-a11y/anchor-is-valid */
const linkStories = () => {
  storiesOf('Links', module)
    .add('links', () =>
      (
        <Providers>
          <Typography variant="h2" align="left">
            Links
          </Typography>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h3" align="left">
                Regular link
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <Typography variant="body1">
                    <Link href="#">
                      regular link
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h3" align="left">
                Ghost button
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <Link component="button">
                    Ghost button
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Providers>
      ))
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export { linkStories }
