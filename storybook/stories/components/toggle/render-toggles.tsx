import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import {
  CommonToggle,
} from '../../../../src'

const renderToggles = args => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <Typography>Common</Typography>
    </Grid>
    <Grid item>
      <CommonToggle
        label="Start"
        {...args}
      />
    </Grid>
  </Grid>
)

export {
  renderToggles,
}
