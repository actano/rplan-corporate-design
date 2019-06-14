import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

// storybook only shows what <a> tags look like, no interactivity needed
/* eslint-disable jsx-a11y/anchor-is-valid */
const linkStories = () => {
  storiesOf('Links', module)
    .add('links', () =>
      (
        <MuiThemeProvider theme={theme}>
          <Typography variant="h3" align="left">
            Links
          </Typography>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" align="left">
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
              <Typography variant="h5" align="left">
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
        </MuiThemeProvider>
      ))
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default linkStories
