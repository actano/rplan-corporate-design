import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import {
  DangerousButton, PrimaryButton, SecondaryButton, TertiaryButton,
} from '../../../src'

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
                  <PrimaryButton>
                    Primary Button
                  </PrimaryButton>
                </Grid>
                <Grid item>
                  <PrimaryButton disabled>
                    Disabled Primary Button
                  </PrimaryButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                Secondary Buttons
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <SecondaryButton>
                    Secondary Button
                  </SecondaryButton>
                </Grid>
                <Grid item>
                  <SecondaryButton disabled>
                    Disabled Secondary Button
                  </SecondaryButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                Tertiary Buttons
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <TertiaryButton>
                    Tertiary Button
                  </TertiaryButton>
                </Grid>
                <Grid item>
                  <TertiaryButton disabled>
                    Disabled Tertiary Button
                  </TertiaryButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h5" align="left">
                Dangerous Buttons
              </Typography>
              <Grid container spacing={1} direction="row">
                <Grid item>
                  <DangerousButton>
                    Dangerous Button
                  </DangerousButton>
                </Grid>
                <Grid item>
                  <DangerousButton disabled>
                    Disabled Dangerous Button
                  </DangerousButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Providers>
      ))
}

export default buttonStories
