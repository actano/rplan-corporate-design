import React from 'react'
import { Grid } from '@material-ui/core'

import {
  CommonToggle,
} from '../../../../src'

export const RenderToggles = args => (
  <Grid container direction="column" spacing={1}>
    <Grid item>
      <CommonToggle
        label="Start"
        {...args}
      />
    </Grid>
  </Grid>
)
