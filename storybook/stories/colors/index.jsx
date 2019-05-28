import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

const ColorItem = (entry, sizeInPx) => {
  const [key, value] = entry
  return (
    <Grid item key={key}>
      <div
        style={{
          width: `${sizeInPx}`,
          height: `${sizeInPx}`,
          background: `${value}`,
          border: 'solid 1px #000000',
        }}
        title={`${value}`}
      />
      <Typography variant="h5" align="center">
        {`${key}`}
      </Typography>
    </Grid>
  )
}

const colorsStories = () => {
  storiesOf('Colors', module)
    .add('Colors', () =>
      (
        <MuiThemeProvider theme={theme}>
          <Typography variant="h3" align='left'>
            Colors
          </Typography>
          <Grid
            container
            spacing={16}
            direction="column"
          >
            <Grid item>
              <Typography variant="h3" align='left'>
                Background colors
              </Typography>
              <Grid container spacing={8} direction='row'>
                {Object.entries(theme.palette.background).map((entry) => ColorItem(entry, '150px'))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h3" align='left'>
                Primary main color
              </Typography>
              <Grid container spacing={8} direction='row'>
                {ColorItem(['primary main', theme.palette.primary.main], '100px')}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h3" align='left'>
                Text colors
              </Typography>
              <Grid container spacing={8} direction='row'>
                {Object.entries(theme.palette.text).map((entry) => ColorItem(entry, '100px'))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h3" align='left'>
                Input colors
              </Typography>
              <Grid container spacing={8} direction='row'>
                {Object.entries(theme.palette.input).map((entry) => ColorItem(entry, '100px'))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h3" align='left'>
                Error colors
              </Typography>
              <Grid container spacing={8} direction='row'>
                {Object.entries(theme.palette.error).map((entry) => ColorItem(entry, '100px'))}
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      ),
    )
}

export default colorsStories
