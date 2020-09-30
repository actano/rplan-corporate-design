import React from 'react'
import { actions } from '@storybook/addon-actions'
import {
  Grid, TextField, Typography, InputAdornment,
} from '@material-ui/core'
import { withBlurOnEnter, withSaveOnBlurControlled } from '../../../../src/inputs'
import { DefaultControlledInput } from '../../../../src/inputs/default-controlled-input'
import { DefaultControlledTextField } from '../../../../src/inputs/default-controlled-text-field'
import { Providers } from '../../providers'

const CustomInput = React.forwardRef((props, ref) => (
  <TextField
    ref={ref}
    InputProps={{
      endAdornment: <InputAdornment position="start">Kg</InputAdornment>,
    }}
    {...props}
  />
))

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
            <br />
            The &quot;onSave&quot; handler is only triggered
            if the changes are confirmed by the user via blur or enter.
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
            <br />
            The &quot;onSave&quot; handler is only triggered
            if the changes are confirmed by the user via blur or enter.
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
            The example uses two HoCs to create a custom input, that handles its value as
            internal state and provides changes via event-handlers.
            <br />
            The &quot;onSave&quot; handler is only triggered
            if the changes are confirmed by the user via blur or enter.
            <br />
            The used HoCs support any material ui input and text field component.
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
