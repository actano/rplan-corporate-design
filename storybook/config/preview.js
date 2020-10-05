import { withKnobs } from '@storybook/addon-knobs'

export default {
  parameters: {
    options: {
      showPanel: true,
      panelPosition: 'right',
      sortStory: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [withKnobs],
}
