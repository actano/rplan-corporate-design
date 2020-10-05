import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { ModalDialogWithLogo } from '../../../../src/components/modal-dialog-with-logo'

const FullPageDialogWithState = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Full Page Dialog
      </Button>
      <ModalDialogWithLogo
        Buttons={(
          <Button variant="contained" color="primary">
            Confirm the dialog.
          </Button>
        )}
        Logo={<div>Logo here</div>}
        open={open}
        onClose={handleClose}
      >
        <Typography variant="h4">This is a Modal Dialog.</Typography>
        <Typography variant="body1">You can close it by clicking the cancel button.</Typography>
      </ModalDialogWithLogo>
    </div>
  )
}

export { FullPageDialogWithState }
