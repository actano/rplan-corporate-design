import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'
import { WarningIcon } from '../../../src/icons'

const theme = createMuiTheme(themeConfig)

export const iconStories = () => {
  storiesOf('Icons', module)
    .add('icons', () =>
      (
        <MuiThemeProvider theme={theme}>
          <Typography variant="h3" align="left">
            Icons
          </Typography>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" align="left">
                WarningIcon
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <WarningIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      ))
}
