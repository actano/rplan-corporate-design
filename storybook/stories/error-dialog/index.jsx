import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeConfig, { ErrorBox } from '../../../src'


const theme = createMuiTheme(themeConfig)

const errorBoxStories = () => {
  storiesOf('Error Box', module)
    .add('Error Box', () => (
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3" align="left">
            Error Box
        </Typography>
        <Grid
          container
          spacing={16}
          direction="column"
        >
          <Grid item>
            <Paper style={{ width: '600px', padding: '50px', display: 'flex' }}>
              <ErrorBox>
                  This is an Error. Please stand by!
              </ErrorBox>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    ))
}

export default errorBoxStories
