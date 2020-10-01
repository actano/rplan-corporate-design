module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../stories/legacy/**/*.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
  ],
  parameters: {
    options: {
      showPanel: true,
      panelPosition: 'right',
    },
  },
}
