import React from 'react'
import Link from '@material-ui/core/Link'
import { Grid, Typography } from '@material-ui/core'

import {
  DangerousButton, PrimaryButton, SecondaryButton, TertiaryButton,
} from '../../../../src'

const renderButtons = args => (
  <Grid container direction="row" spacing={1}>
    <Grid item xs={3} container direction="column" spacing={1}>
      <Grid item>
        <Typography>Primary</Typography>
      </Grid>
      <Grid item>
        <PrimaryButton {...args}>Create Account</PrimaryButton>
      </Grid>
      <Grid item>
        <PrimaryButton {...args} disabled>Create Account</PrimaryButton>
      </Grid>
    </Grid>
    <Grid item xs={3} container direction="column" spacing={1}>
      <Grid item>
        <Typography>Secondary</Typography>
      </Grid>
      <Grid item>
        <SecondaryButton {...args}>Learn More</SecondaryButton>
      </Grid>
      <Grid item>
        <SecondaryButton {...args} disabled>Learn More</SecondaryButton>
      </Grid>
    </Grid>
    <Grid item xs={3} container direction="column" spacing={1}>
      <Grid item>
        <Typography>Ghost</Typography>
      </Grid>
      <Grid item>
        <Link {...args} component="button">Learn More</Link>
      </Grid>
      <Grid item>
        <Link {...args} disabled component="button">Learn More</Link>
      </Grid>
    </Grid>
    <Grid item xs={3} container direction="column" spacing={1}>
      <Grid item>
        <Typography>Tertiary</Typography>
      </Grid>
      <Grid item>
        <TertiaryButton {...args}>Cancel</TertiaryButton>
      </Grid>
      <Grid item>
        <TertiaryButton {...args} disabled>Cancel</TertiaryButton>
      </Grid>
    </Grid>
    <Grid item xs={3} container direction="column" spacing={1}>
      <Grid item>
        <Typography>Primary / Negative</Typography>
      </Grid>
      <Grid item>
        <DangerousButton {...args}>Delete Project</DangerousButton>
      </Grid>
      <Grid item>
        <DangerousButton {...args} disabled>Delete Project</DangerousButton>
      </Grid>
    </Grid>
  </Grid>
)

export {
  renderButtons,
}
