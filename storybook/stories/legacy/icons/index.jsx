import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../../src'
import { WarningIcon, WarningIconWithTooltip } from '../../../../src/icons'

const theme = createMuiTheme(themeConfig)

export default {
  title: 'Legacy/Icons',
}

export const icons = () => (
  <MuiThemeProvider theme={theme}>
    <Typography variant="h3" align="left">
        Icons
    </Typography>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h5" align="left">
            Warning Icon
        </Typography>
        <Grid container spacing={1} direction="row">
          <Grid item>
            <WarningIcon />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5" align="left">
              Warning Icon With Tooltip
          </Typography>
          <Grid container spacing={1} direction="row">
            <Grid item>
              <WarningIconWithTooltip tooltipText="A description of the warning" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </MuiThemeProvider>
)
