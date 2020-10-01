import React from 'react'
import { actions } from '@storybook/addon-actions'
import { Grid, Typography } from '@material-ui/core'

import { ChangeOnAcceptDatePicker } from '../../../../src/date-pickers/change-on-accept-date-picker'
import { Providers } from '../../providers'

const onSaveHandler = actions('onSelectDate')

export default {
  title: 'Legacy/DatePicker',
}

export const changeOnAcceptPickerStory = () => (
  <Providers>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h2">Change-on-Accept Date Picker</Typography>
        <Typography variant="body1">
          This date picker only triggers a &quot;select&quot; event if the date was accepted.
        </Typography>
        <ChangeOnAcceptDatePicker {...onSaveHandler} />
      </Grid>
    </Grid>
  </Providers>
)
