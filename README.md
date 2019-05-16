# MVP corporate design
A theme for Material UI to implement the corporate design across all components.
## How to use
```
yarn add @rplan/corporate-design @material-ui/core @material-ui/styles
```
In your react components you can use the theme with
```
import { MuiThemeProvider } from '@material-ui/core/styles/index';
import { ThemeProvider } from '@material-ui/styles'
import { mvpCorporateTheme } from 'mvp-corporate-theme'

<MuiThemeProvider theme={mvpCorporateTheme}>
  <ThemeProvider theme={mvpCorporateTheme}>
    <YourComponent />
  </ThemeProvider>
</MuiThemeProvider>      
```
Also the font `Open Sans` needs to be available on the website.  
E.g. include the import of the font in your `index.html`: 
```
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet"> 
```
For layout `Typography` should ge used.  
For simplicity only variants `h2`, `h3`, `h5` and `body1` are supported.
