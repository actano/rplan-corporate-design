import React from 'react'
import { storiesOf } from '@storybook/react'

import { FullPageModalStory } from './full-page-modal'

const modalDialogStories = () => {
  storiesOf('Modal Dialog', module)
    .add('Full Page Modal Dialog', () => <FullPageModalStory />)
}

export default modalDialogStories
