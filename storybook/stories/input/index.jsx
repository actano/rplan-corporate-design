import { storiesOf } from '@storybook/react'
import { defaultInputStory } from './default-inputs'
import { dialogBoxInputStory } from './dialog-box-input'
import { checkboxesInputStory } from './checkboxes'

const inputStories = () => {
  storiesOf('Input', module)
    .add('Default Inputs', defaultInputStory)
    .add('Dialog Box Input', dialogBoxInputStory)
    .add('Checkbox Input', checkboxesInputStory)
}

export default inputStories
