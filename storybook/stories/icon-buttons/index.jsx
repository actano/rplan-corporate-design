import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

const iconButtonStories = () => {
  storiesOf('Icon Buttons', module)
    .add('Icon Buttons', () => (
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3" align="left">
            Icon Buttons
        </Typography>
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Typography variant="h5" align="left">
                Show password visibility
            </Typography>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <IconButton
                  aria-label="Toggle password visibility"
                >
                  <Visibility />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Toggle password visibility"
                >
                  <VisibilityOff />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    ))
}

export default iconButtonStories
