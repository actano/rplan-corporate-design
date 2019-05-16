# MVP corporate design
A theme for Material UI to implement the corporate design across all components.

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
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet"> 
```
For layout `Typography` should be used.  
For simplicity only variants `h2`, `h3`, `h5` and `body1` are supported.
