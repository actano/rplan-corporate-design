import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import {
  CommonToggle, CorporateDesignTheme,
} from '../../../../src'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  formControlLabel: {
    fontSize: '0.825rem',
    fontWeight: 400,
    fontFamily: 'Open Sans',
    color: theme.palette.colors.black,
  },
}))

export const RenderToggles = (args) => {
  const classes = useStyles()
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography>Common</Typography>
      </Grid>
      <Grid item>
        <CommonToggle
          label="Start"
          className={classes.formControlLabel}
          {...args}
        />
      </Grid>
    </Grid>
  )
}
