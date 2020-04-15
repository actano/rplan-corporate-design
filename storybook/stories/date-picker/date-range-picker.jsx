import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { CommonDateRangePicker } from '../../../src/date-pickers/date-range-picker'
import { Providers } from '../providers'

const dateRangePickerStory = () =>
  (
    <Providers>
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Typography variant="h2">
            Date Range Picker
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            This component allows to select a date range.
          </Typography>
        </Grid>
        <Grid item>
          <CommonDateRangePicker
            startText="start date"
            endText="end date"
            startDate="2020-04-02"
            endDate="2020-04-20"
            pickerProps={{
              inputFormat: 'dd.MM.yyyy',
              mask: '__.__.____',
            }}
          />
        </Grid>
      </Grid>
    </Providers>
  )

export { dateRangePickerStory }
