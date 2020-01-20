import React from 'react'
import { actions } from '@storybook/addon-actions'
import { Grid, Typography } from '@material-ui/core'
import { DefaultControlledTextField } from '../../../src/inputs/default-controlled-text-field'
import { InputWithLabel } from '../../../src/inputs/input-with-label'
import { NumberInput } from '../../../src/inputs/number-input'
import { RichTextInput } from '../../../src/inputs/rich-text-input'
import { Providers } from '../providers'

const onSaveHandler = actions('onSave')

const specificInputStory = () =>
  (
    <Providers>
      <Grid
        container
        spacing={2}
        direction="column"
      >
        <Grid item>
          <Typography variant="h2">
            Label wrapper for inputs
          </Typography>
          <Typography variant="body1">
            This wrapper provides a label to any given input
          </Typography>
          <br />
          <InputWithLabel
            label="Full Name"
          >
            <DefaultControlledTextField
              placeholder="John Doe"
            />
          </InputWithLabel>
        </Grid>
        <Grid item>
          <Typography variant="h2">
            Number Input
          </Typography>
          <Typography variant="body1">
            This input allows the input of numbers as well as a validation of the given number.
            It is a controlled input and only calls the onSave handler if the input was valid.
          </Typography>
          <NumberInput
            originalValue={10}
            getValidationError={number => (number < 42 ? 'Number must be above 42' : null)}
            {...onSaveHandler}
          />
        </Grid>
        <Grid item>
          <Typography variant="h2">
            Rich Text Input
          </Typography>
          <Typography variant="body1">
            This input allows the input of rich text.
            It is an uncontrolled input and only calls the onSave handler if the user clicks save.
          </Typography>
          <RichTextInput
            originalValue={'<h1> Hello There </h1>'}
            {...onSaveHandler}
          />
        </Grid>
      </Grid>
    </Providers>
  )

export { specificInputStory }
