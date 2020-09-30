import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { ModalDialogWithLogo } from '../../../../src/components/modal-dialog-with-logo'
import { Providers } from '../../providers'

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

const FullPageModalStory = () => (
  <Providers>
    <Grid
      container
      spacing={2}
      direction="column"
    >
      <Grid item>
        <Typography variant="h2" align="left">
          Modal Dialog with logo
        </Typography>
        <Typography variant="h3" align="left">
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
  </Providers>
)

export { FullPageModalStory }
