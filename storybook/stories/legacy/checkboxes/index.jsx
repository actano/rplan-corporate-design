import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { CommonCheckbox } from '../../../../src'

import { Providers } from '../../providers'

export default {
  title: 'Legacy/Checkboxes',
}

export const checkboxesStory = () => (
  <Providers>
    <Typography variant="h2" align="left">
        Checkboxes
    </Typography>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h3" align="left">
            Common Checkbox
        </Typography>
        <Grid container spacing={2} direction="row">
          <Grid item>
            <CommonCheckbox checked={false} />
          </Grid>
          <Grid item>
            <CommonCheckbox checked />
          </Grid>
          <Grid item>
            <CommonCheckbox disabled />
          </Grid>
          <Grid item>
            <CommonCheckbox checked disabled />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Providers>
)
