module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../stories/legacy/**/*.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-docs',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
  ],
  parameters: {
    options: {
      showPanel: true,
      panelPosition: 'right',
    },
  },
}
