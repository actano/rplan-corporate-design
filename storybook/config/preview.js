import { withKnobs } from '@storybook/addon-knobs'

export default {
  parameters: {
    options: {
      showPanel: true,
      panelPosition: 'right',
      stortStory: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [withKnobs],
}
