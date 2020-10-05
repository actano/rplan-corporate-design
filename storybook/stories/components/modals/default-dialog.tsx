import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { ReportProblemOutlined } from '@material-ui/icons'
import { boolean } from '@storybook/addon-knobs'

import { DangerousButton, PrimaryButton, TertiaryButton } from '../../../../src/buttons/index'
import { DefaultDialog } from '../../../../src/dialogs/default-dialog'

const DefaultDialogWithState = () => {
  const [open, setOpen] = useState(false)
  const withIcon = boolean('with icon', true)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Default Dialog
      </Button>

      <DefaultDialog
        title="Some Title Text"
        buttons={(
          <>
            <TertiaryButton onClick={handleClose}>Cancel</TertiaryButton>
            <DangerousButton onClick={handleClose}>Delete</DangerousButton>
            <PrimaryButton onClick={handleClose}>Confirm</PrimaryButton>
          </>
        )}
        open={open}
        icon={withIcon ? <ReportProblemOutlined /> : undefined}
        onClose={handleClose}
      >
        <Typography variant="h4">Some dialog content</Typography>
        <Typography variant="body1">Lorem ipsum</Typography>
      </DefaultDialog>
    </div>
  )
}

export { DefaultDialogWithState }
