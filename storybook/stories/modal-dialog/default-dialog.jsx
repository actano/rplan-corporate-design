import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'

import { DangerousButton, PrimaryButton, TertiaryButton } from '../../../src/buttons'
import { DefaultDialog } from '../../../src/components/default-dialog'
import { Providers } from '../providers'

const DefaultDialogWithState = () => {
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

      <DefaultDialog
        title="Some Title Text"
        buttons={(
          <>
            <TertiaryButton onClick={handleClose}> Cancel </TertiaryButton>
            <DangerousButton onClick={handleClose}>Dangerous</DangerousButton>
            <PrimaryButton onClick={handleClose}>Confirm</PrimaryButton>
          </>
        )}
        open={open}
        onClose={handleClose}
      >
        <Typography variant="h4">
          Some dialog content
        </Typography>
        <Typography variant="body1">
          Lorem ipsum
        </Typography>
      </DefaultDialog>

    </div>
  )
}

const DefaultDialogStory = () => (
  <Providers>
    <Grid
      container
      spacing={2}
      direction="column"
    >
      <Grid item>
        <Typography variant="h2">
          Default Dialog
        </Typography>
        <Typography variant="h3">
          Default Dialog component with headline and any number of buttons.
          Open/Closed state to be done in parent component.
        </Typography>
        <DefaultDialogWithState />
      </Grid>
    </Grid>
  </Providers>
)

export { DefaultDialogStory }
