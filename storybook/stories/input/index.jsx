import { storiesOf } from '@storybook/react'
import { defaultInputStory } from './default-inputs'

const inputStories = () => {
  storiesOf('Input', module)
    .add('Default Inputs', defaultInputStory)
}

export default inputStories
