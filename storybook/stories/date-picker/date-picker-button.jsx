import React from 'react'
import { actions } from '@storybook/addon-actions'
import { Grid, Typography } from '@material-ui/core'

import { PrimaryButton } from '../../../src/buttons'
import { DatePickerButton } from '../../../src/date-pickers'
import { Providers } from '../providers'

const onSaveHandler = actions('onSelectDate')

const datePickerButtonStory = () =>
  (
    <Providers>
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Typography variant="h2">
            Date Picker Button
          </Typography>
          <Typography variant="body1">
            This component shows a date picker calendar when any given button is pressed.
          </Typography>
          <DatePickerButton
            pickerProps={{
              value: '2019-01-25',
            }}
            renderButton={showPicker => (
              <PrimaryButton onClick={showPicker}>
                Show Picker
              </PrimaryButton>
            )}
            {...onSaveHandler}
          />
        </Grid>
      </Grid>
    </Providers>
  )

export { datePickerButtonStory }
