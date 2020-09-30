import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../../src'
import { Providers } from '../../providers'

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

const ColorsStories = () => (
  <Providers>
    <Typography variant="h2" align="left">
      Colors
    </Typography>
    <Grid
      container
      spacing={2}
      direction="column"
    >
      <Grid item>
        <Typography variant="h3" align="left">
          Named color palette
        </Typography>
        <Grid container spacing={1} direction="row">
          {Object.entries(theme.palette.colors).map(entry => ColorItem(entry, '150px'))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
          Background colors
        </Typography>
        <Grid container spacing={1} direction="row">
          {Object.entries(theme.palette.background).map(entry => ColorItem(entry, '150px'))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
          Primary main color
        </Typography>
        <Grid container spacing={1} direction="row">
          {ColorItem(['primary main', theme.palette.primary.main], '100px')}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
          Text colors
        </Typography>
        <Grid container spacing={1} direction="row">
          {Object.entries(theme.palette.text).map(entry => ColorItem(entry, '100px'))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
          Error colors
        </Typography>
        <Grid container spacing={1} direction="row">
          {Object.entries(theme.palette.error).map(entry => ColorItem(entry, '100px'))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
          Support colors
        </Typography>
        <Grid container spacing={1} direction="row">
          {Object.entries(theme.palette.support).map(entry => ColorItem(entry, '100px'))}
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
          Signal colors
        </Typography>
        <Grid container spacing={1} direction="row">
          {Object.entries(theme.palette.signal).map(entry => ColorItem(entry, '100px'))}
        </Grid>
      </Grid>
    </Grid>
  </Providers>
)

export const ColorPalette = () => (<ColorsStories />)

export default {
  title: 'Styles/Colors',
  decorators: [],
  parameters: {},
}
