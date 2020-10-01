import React from 'react'
import { actions } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'
import { Grid, Typography } from '@material-ui/core'

import { DefaultControlledTextField } from '../../../../src/inputs/default-controlled-text-field'
import { InputWithLabel } from '../../../../src/inputs/input-with-label'
import { NumberInput } from '../../../../src/inputs/number-input'
import { RichTextInput } from '../../../../src/inputs/rich-text/rich-text-input'
import { RichTextEditor } from '../../../../src/inputs/rich-text/rich-text-editor'

import { Providers } from '../../providers'

const onSaveHandler = actions('onSave')

export default {
  title: 'Legacy/Input',
}

export const specificInput = () => (
  <Providers>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h2">Label wrapper for inputs</Typography>
        <Typography variant="body1">This wrapper provides a label to any given input</Typography>
        <br />
        <InputWithLabel label="Full Name">
          <DefaultControlledTextField placeholder="John Doe" />
        </InputWithLabel>
      </Grid>
      <Grid item>
        <Typography variant="h2">Number Input</Typography>
        <Typography variant="body1">
          This input allows the input of numbers as well as a validation of the given number. It is
          a controlled input and only calls the onSave handler if the input was valid.
        </Typography>
        <NumberInput
          originalValue={10}
          getValidationError={n => (n < 42 ? 'Number must be above 42' : null)}
          {...onSaveHandler}
        />
      </Grid>
      <Grid item>
        <Typography variant="h2">Rich Text Input</Typography>
        <Typography variant="body1">
          This input allows the input of rich text. It is a controlled input. If the encoding of the
          text exceeds the maximum length it displays a message and disables the Save button. It
          only calls the onSave handler if the user clicks save.
        </Typography>
        <RichTextInput
          originalValue={'<h1> Hello There </h1>'}
          placeholder={text('placeholder', 'type something')}
          maxInputLength={number('maximal input length', 50)}
          disabled={boolean('Rich text editor disabled', false)}
          {...onSaveHandler}
        />
      </Grid>
      <Grid item>
        <Typography variant="h2">Rich Text Editor</Typography>
        <Typography variant="body1">
          This editor allows the input of rich text. For this a fixed height can be defined. If the
          encoding of the text exceeds the maximum length it calls a callback.
        </Typography>
        <RichTextEditor
          data={'<h1> Hello There </h1>'}
          placeholder={text('placeholder', 'type something')}
          fixedHeight={150}
          {...onSaveHandler}
        />
      </Grid>
    </Grid>
  </Providers>
)
