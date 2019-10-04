import React from 'react'
import { actions } from '@storybook/addon-actions'
import {
  Grid, TextField, Typography, InputAdornment,
} from '@material-ui/core'
import { withBlurOnEnter, withSaveOnBlurControlled } from '../../../src/inputs'
import { DefaultControlledInput } from '../../../src/inputs/default-controlled-input'
import { DefaultControlledTextField } from '../../../src/inputs/default-controlled-text-field'
import { Providers } from '../providers'

const CustomInput = props => (
  <TextField
    InputProps={{
      endAdornment: <InputAdornment position="start">Kg</InputAdornment>,
    }}
    {...props}
  />
)

const CustomControlledInput = withSaveOnBlurControlled(
  withBlurOnEnter(
    CustomInput,
  ),
)

const onSaveHandler = actions('onSave')

const controlledInputStory = () =>
  (
    <Providers>
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Typography variant="h2">
            Default Controlled Input (no styling)
          </Typography>
          <Typography variant="body1">
            This input handles its value as internal state and provides changes via event-handlers.
          </Typography>
          <DefaultControlledInput
            placeholder="write some text"
            originalValue="initial text"
            {...onSaveHandler}
          />
        </Grid>

        <Grid item>
          <Typography variant="h2">
            Default Controlled Text Field
          </Typography>
          <Typography variant="body1">
            This input handles its value as internal state and provides changes via event-handlers.
          </Typography>
          <DefaultControlledTextField
            placeholder="write some text"
            originalValue="initial text"
            {...onSaveHandler}
          />
        </Grid>

        <Grid item>
          <Typography variant="h2">
            Custom Controlled Input
          </Typography>
          <Typography variant="body1">
            This input uses two HoC which create an input, that handles its value as
            internal state and provides changes via event-handlers.
            Also pressing enter blurs the input.
            The actual input component can be any material ui input component.
          </Typography>
          <CustomControlledInput
            originalValue="42"
            {...onSaveHandler}
          />
        </Grid>
      </Grid>
    </Providers>
  )

export { controlledInputStory }
