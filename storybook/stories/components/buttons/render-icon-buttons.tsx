import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import VisibilityOffOutlined from '@material-ui/icons/VisibilityOffOutlined'
import { Grid, IconButton } from '@material-ui/core'
import { ExpandCollapseButtonWithState } from './expand-collapse-button'

const renderIconButtons = args => (
  <Grid container direction="row" spacing={1}>
    <Grid item xs={1} container direction="column" spacing={1}>
      <Grid item>
        <IconButton {...args} size="small">
          <Visibility />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton {...args} size="small">
          <VisibilityOutlined />
        </IconButton>
      </Grid>
    </Grid>
    <Grid item xs={1} container direction="column" spacing={1}>
      <Grid item>
        <IconButton {...args} size="small">
          <VisibilityOff />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton {...args} size="small">
          <VisibilityOffOutlined />
        </IconButton>
      </Grid>
    </Grid>
    <Grid item xs={1} container direction="column" spacing={1}>
      <Grid item>
        <ExpandCollapseButtonWithState />
      </Grid>
    </Grid>
  </Grid>
)

export {
  renderIconButtons,
}
