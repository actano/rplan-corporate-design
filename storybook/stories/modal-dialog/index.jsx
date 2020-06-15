import React from 'react'
import { storiesOf } from '@storybook/react'

import { DefaultDialogStory } from './default-dialog'
import { FullPageModalStory } from './full-page-modal'
import { ConfirmationDialogStory } from './confirmation-dialog'

const modalDialogStories = () => {
  storiesOf('Modal Dialog', module)
    .add('Default Dialog', () => <DefaultDialogStory />)
    .add('Confirmation Dialog', () => <ConfirmationDialogStory />)
    .add('Full Page Modal Dialog', () => <FullPageModalStory />)
}

export default modalDialogStories
