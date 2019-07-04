# Material UI - Basic learnings
- *Don't* include color maps for specific custom ui components in the theme config. 
    Instead provide a React component that encapsulates the styling via `makeStyles` in the javascript code.
    The theme config should not have any knowledge about specific custom components. Example:
    - [incorrect example]( https://github.com/actano/rplan-corporate-design/blob/977e6d029b0de2a1195dc064b89972d2b88de98b/src/theme/theme-config.js#L153-L158)
    - [correct example]( https://github.com/actano/rplan-corporate-design/blob/1213e6334ff9e71a91c8dd86d828736141200d01/src/components/card/index.jsx#L8-L17 ) 

- Always use `rem` for font sizes. Convert pixel values by dividing by `16px`. 
    See [doc](https://material-ui.com/customization/typography/#font-size).

- How to correctly use the semantic elements `h1` to `h6`
    - These are *semantic* elements. Use them to indicate the "level" of the headline/section. 
    - Don't use them just to achieve a specific styling.
    - To achieve a specific styling material ui provides the `variant` and `component` attributes: 
        - `<Typography variant="h1" component="h2">` 
        - This is a headline of level 2 (semantics) with the styling of a level 1 headline (visuals/design only)
    - Don't use more than one `h1`. Don't skip a `hX` number.
    - See [doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#Usage_notes).

- If you have an issue with a too low specificity when providing custom styling, 
    there is a [solution](https://material-ui.com/customization/components/#use-rulename-to-reference-a-local-rule-within-the-same-style-sheet) in the official documentation:
    
    
- Use `theme.spacing(a, b, c, ...)` for spacing (e.g. padding, margin, width) in your custom styles.
    See [doc](https://material-ui.com/customization/spacing/).

- Material UI is mobile first. It supports responsive design very well. 
    Please completely read the corresponding [doc](https://material-ui.com/customization/breakpoints/).
    
- Only use `overrides` if really, really necessary. 
    Only use this if the changes shall be applied to all instances of the material ui component in our app.
    For specific components (e.g. a "dangerous delete action button"), write a custom react component that encapsulates 
    the styling and uses a material ui button via composition and the [classes](https://material-ui.com/api/button/#css) API to provide its styling.

