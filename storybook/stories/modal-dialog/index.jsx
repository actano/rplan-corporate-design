import Button from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeConfig from '../../../src'
import { ModalDialogWithLogo } from '../../../src/components/modal-dialog-with-logo'


const theme = createMuiTheme(themeConfig)

const ModalWrapperToHandleOpenState = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Open Modal
      </Button>
      <ModalDialogWithLogo
        Buttons={<Button variant="contained" color="primary">Confirm the dialog.</Button>}
        Logo={<div>Logo here</div>}
        open={open}
        onClose={handleClose}
      >
        {children}
      </ModalDialogWithLogo>
    </div>
  )
}

ModalWrapperToHandleOpenState.propTypes = {
  children: PropTypes.node.isRequired,
}

const modalDialogStories = () => {
  storiesOf('Modal Dialog', module)
    .add('Modal Dialog', () => (
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Typography variant="h3" align="left">
              Modal Dialog with logo
            </Typography>
            <Typography variant="h5" align="left">
              Dumb Modal component only. Handling state needs to be done in parent component.
            </Typography>
            <ModalWrapperToHandleOpenState>
              <Typography variant="h4">
                This is a Modal Dialog.
              </Typography>
              <Typography variant="body1">
                You can close it by clicking the cancel button.
              </Typography>
            </ModalWrapperToHandleOpenState>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    ))
}

export default modalDialogStories