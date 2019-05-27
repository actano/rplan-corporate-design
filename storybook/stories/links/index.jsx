import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

// storybook only shows what <a> tags look like, no interactivity needed
/* eslint-disable jsx-a11y/anchor-is-valid */
const linkStories = () => {
  storiesOf('Links', module)
    .addDecorator(muiTheme([theme]))
    .add('links', () =>
      (
        <div>
          <Typography variant="h3" align='left'>
            Links
          </Typography>
          <Grid
            container
            spacing={16}
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" align='left'>
                Regular link
              </Typography>
              <Grid container spacing={8} direction='row'>
                <Grid item>
                  <Typography variant="body1">
                    <Link href="#">
                      regular link
                    </Link>
                    <Link href="https://www.google.com">
                      regular link visited
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align='left'>
                Ghost button
              </Typography>
              <Grid container spacing={8} direction='row'>
                <Grid item>
                  <Link component="button">
                    Ghost button
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ),
    )
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default linkStories
