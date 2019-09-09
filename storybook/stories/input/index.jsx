import { storiesOf } from '@storybook/react'
import { defaultInputStory } from './default-inputs'
import { dialogBoxInputStory } from './dialog-box-input'

const inputStories = () => {
  storiesOf('Input', module)
    .add('Default Inputs', defaultInputStory)
    .add('Dialog Box Input', dialogBoxInputStory)
}

export default inputStories
