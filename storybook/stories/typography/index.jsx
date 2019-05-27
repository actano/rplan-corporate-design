import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

const typographyStories = () => {
  storiesOf('Typography', module)
    .add('Typography', () =>
      (
        <MuiThemeProvider theme={theme}>
          <Typography variant="h3" align='left'>
            Typography
          </Typography>
          <Grid
            container
            spacing={16}
            direction="column"
          >
            <Grid item>
              <Typography
                variant="h2"
                style={{ background: 'linear-gradient(128deg, #5352B2 0%, #4983BD 100%, #4983BD 100%)' }}
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
              <Typography variant="h5">
                h5 - regular
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                body1
              </Typography>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      ),
    )
}

export default typographyStories