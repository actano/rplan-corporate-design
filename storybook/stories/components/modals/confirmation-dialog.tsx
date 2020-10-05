import Button from '@material-ui/core/Button'
import React, { useState } from 'react'

import { ConfirmationDialog } from '../../../../src/dialogs/confirmation-dialog'

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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Confirmation Dialog
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

export { ConfirmationDialogWithState }
