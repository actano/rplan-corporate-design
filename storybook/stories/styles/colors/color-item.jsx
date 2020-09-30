import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../../src'

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

export { ColorItem, theme }
