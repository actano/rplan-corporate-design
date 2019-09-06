import React from 'react'
import { storiesOf } from '@storybook/react'

import { DefaultDialogStory } from './default-dialog'
import { FullPageModalStory } from './full-page-modal'

const modalDialogStories = () => {
  storiesOf('Modal Dialog', module)
    .add('Default Dialog', () => <DefaultDialogStory />)
    .add('Full Page Modal Dialog', () => <FullPageModalStory />)
}

export default modalDialogStories
