import { storiesOf } from '@storybook/react'

import { changeOnAcceptPickerStory } from './change-on-accept-picker'
import { datePickerButtonStory } from './date-picker-button'
import { dateRangePickerStory } from './date-range-picker'

const datePickerStories = () => {
  storiesOf('Date Pickers', module)
    .add('ChangeOnAcceptDatePicker', changeOnAcceptPickerStory)
    .add('DatePickerButton', datePickerButtonStory)
    .add('DateRangePicker', dateRangePickerStory)
}

export { datePickerStories }
