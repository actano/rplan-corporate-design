import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import Button from '@material-ui/core/Button/index'

import { Providers } from '../providers'

const buttonStories = () => {
  storiesOf('Buttons', module)
    .add('Contained Buttons', () =>
      (
        <Providers>
          <Typography variant="h2" align="left">
            Buttons
          </Typography>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" align="left">
                Primary Buttons
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Primary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled
                  >
                    Disabled Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                Secondary Buttons
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                  >
                    Secondary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disabled
                  >
                    Disabled Secondary Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                Tertiary Buttons
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="default"
                  >
                    Tertiary Button
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="default"
                    disabled
                  >
                    Disabled Button
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Providers>
      ))
}

export default buttonStories
