import { storiesOf } from '@storybook/react'

import { changeOnAcceptPickerStory } from './change-on-accept-picker'
import { datePickerButtonStory } from './date-picker-button'

const datePickerStories = () => {
  storiesOf('Date Pickers', module)
    .add('ChangeOnAcceptDatePicker', changeOnAcceptPickerStory)
    .add('DatePickerButton', datePickerButtonStory)
}

export { datePickerStories }
