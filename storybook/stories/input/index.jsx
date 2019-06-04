import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

const inputStories = () => {
  storiesOf('Input', module)
    .add('Input', () =>
      (
        <MuiThemeProvider theme={theme}>
          <div style={{ paddingLeft: '20px' }}>
            <Grid
              container
              spacing={16}
              direction="column"
            >
              <Grid item>
                <Typography variant="h3" align="left">
                  Input
                </Typography>
              </Grid>
              <form>
                <Grid item>
                  <Typography variant="h5" align="left">
                    Normal Input
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Last name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" align="left">
                    Normal Input with placeholder
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Last name"
                    placeholder="Last name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" align="left">
                    Error in input
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Enter: 'abc'"
                    value="cde"
                    error
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h5" align="left">
                    Disabled Input
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="disabled"
                    value="disabled"
                    disabled
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </form>
            </Grid>
          </div>
        </MuiThemeProvider>
      ))
}

export default inputStories
