import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'

import { ConfirmationDialog } from '../../../src/dialogs/confirmation-dialog'
import { Providers } from '../providers'

const ConfirmationDialogWithState = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleConfirm = () => {
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Open confirmation dialog
      </Button>

      <ConfirmationDialog
        isOpen={open}
        title="Some Title Text"
        confirmationText="Confirm"
        cancellationText="Cancel"
        infoText="This is the main info text shown in the dialog."
        confirm={handleConfirm}
        cancel={handleCancel}
      />
    </div>
  )
}

const ConfirmationDialogStory = () => (
  <Providers>
    <Grid
      container
      spacing={2}
      direction="column"
    >
      <Grid item>
        <Typography variant="h2">
          Confirmation Dialog
        </Typography>
        <Typography variant="h3">
          Confirmation dialog component with headline, info text, confirm and cancel buttons.
          Callbacks for confirm and cancel buttons and all texts are passed in as props.
          Open/Closed state to be done in parent component.
        </Typography>
        <ConfirmationDialogWithState />
      </Grid>
    </Grid>
  </Providers>
)

export { ConfirmationDialogStory }
