import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { ColorInfo } from './color-categories'

const ColorItem: React.FC<ColorInfo> = ({ name, value }) => {
  const sizeInPx = '150px'
  return (
    <Grid item key={name}>
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
        {`${name}`}
      </Typography>
      <Typography variant="h6" align="center">
        {`${value}`}
      </Typography>
    </Grid>
  )
}

export { ColorItem }
