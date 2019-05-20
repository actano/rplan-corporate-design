import { Grid, Typography } from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from '@material-ui/core/Button/index'
import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

// storybook only shows what <a> tags look like, no interactivity needed
/* eslint-disable jsx-a11y/anchor-is-valid */
const buttonStories = () => {
  storiesOf('Buttons', module)
    .add('Contained Buttons', () =>
      (
        <MuiThemeProvider theme={theme}>
          <Typography variant="h3" align='left'>
            Buttons
          </Typography>
          <Grid
            container
            spacing={16}
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" align='left'>
                Primary Buttons
              </Typography>
              <Grid container spacing={8} direction='row'>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Primary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled
                  >
                    Disabled Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align='left'>
                Secondary Buttons
              </Typography>
              <Grid container spacing={8} direction='row'>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                  >
                    Secondary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disabled
                  >
                    Disabled Secondary Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align='left'>
                Ternary Buttons
              </Typography>
              <Grid container spacing={8} direction='row'>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="default"
                  >
                    Ternary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="default"
                    disabled
                  >
                    Disabled Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      ),
    )
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default buttonStories
