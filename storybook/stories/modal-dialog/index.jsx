import Button from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeConfig, { ModalDialogWithLogo } from '../../../src'


const theme = createMuiTheme(themeConfig)

const ModalButton = ({ onClick }) => <Button onClick={onClick}>Click me!</Button>

const modalDialogStories = () => {
  storiesOf('Modal Dialog', module)
    .add('Modal Dialog', () => (
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3" align="left">
          Modal Dialog with logo
        </Typography>
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <ModalDialogWithLogo
              ModalButton={ModalButton}
              Buttons={<Button variant="contained" color="primary">Confirm the dialog.</Button>}
              Logo={<div>Logo here</div>}
            >
              <Typography variant="h4">
                This is a Modal Dialog.
              </Typography>
              <Typography variant="body1">
                You can close it by clicking the cancel button.
              </Typography>
            </ModalDialogWithLogo>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    ))
}

export default modalDialogStories
