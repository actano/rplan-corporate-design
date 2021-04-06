# MVP corporate design
A theme for Material UI to implement the corporate design across all components.

## Versions
Before pushing a new version tag make sure to check if the storybook is working:
- `yarn storybook`

This is only built for new version tags and sometimes breaks

## How to use
```
yarn add @rplan/corporate-design
```
In your react components you can use the theme with
```
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/index';
import { ThemeProvider } from '@material-ui/styles'
import themeConfig from '@rplan/corporate-design'

const theme = createMuiTheme(themeConfig)

<MuiThemeProvider theme={theme}>
  <ThemeProvider theme={theme}>
    <YourComponent />
  </ThemeProvider>
</MuiThemeProvider>
```
Also the font `Open Sans` needs to be available on the website.
E.g. include the import of the font in your `index.html`:
```
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
```
For layout `Typography` should be used.
For simplicity only variants `h2`, `h3`, `h5` and `body1` are supported.

## Available Components and usage
To showcase the custom themed items there is a storybook present. Here you can see available components and their usage
in the sourceCode addon.
```
yarn install
yarn storybook
```
makes it available locally at [http://localhost:8085/](http://localhost:8085/)

## Local development
For linking into another component 
- `yarn link`
- `yarn build`
- `cd ../rplan-webclient && yarn link '@rplan/corporate-design'`
