import { storiesOf } from '@storybook/react'
import { controlledInputStory } from './controlled-inputs'
import { defaultInputStory } from './default-inputs'
import { dialogBoxInputStory } from './dialog-box-input'
import { specificInputStory } from './specific-inputs'

const inputStories = () => {
  storiesOf('Input', module)
    .add('Default Inputs', defaultInputStory)
    .add('Default Controlled Inputs', controlledInputStory)
    .add('Specialized Inputs', specificInputStory)
    .add('Dialog Box Input', dialogBoxInputStory)
}

export default inputStories
