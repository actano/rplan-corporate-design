import React from 'react'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { Providers } from '../../providers'

const iconButtonStories = () => {
  storiesOf('Icon Buttons', module)
    .add('Icon Buttons', () => (
      <Providers>
        <Typography variant="h2" align="left">
          Icon Buttons
        </Typography>
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Typography variant="h3" align="left">
              Show password visibility
            </Typography>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <IconButton
                  aria-label="Toggle password visibility"
                  size="small"
                >
                  <Visibility />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Toggle password visibility"
                  size="small"
                >
                  <VisibilityOff />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Providers>
    ))
}

export { iconButtonStories }
