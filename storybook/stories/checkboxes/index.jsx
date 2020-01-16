import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import {
  CommonCheckbox,
} from '../../../src'

import { Providers } from '../providers'

export const checkboxesStories = () => {
  storiesOf('Checkboxes', module)
    .add('Checkboxes', () =>
      (
        <Providers>
          <Typography variant="h2" align="left">
            Checkboxes
          </Typography>
          <Grid
            container
            spacing={2}
            direction="column"
          >
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
              </Grid>
            </Grid>
          </Grid>
        </Providers>
      ))
}
