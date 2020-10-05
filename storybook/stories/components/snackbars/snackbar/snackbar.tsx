import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import { PrimaryButton, SnackBar } from '../../../../../src'

const SnackBarWithButton: React.FC = (args) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <PrimaryButton onClick={() => setIsOpen(true)}>
            Show Snackbar
          </PrimaryButton>
        </Grid>
      </Grid>
      <SnackBar
        onClose={() => setIsOpen(false)}
        open={isOpen}
        {...args}
      />
    </>
  )
}

export { SnackBarWithButton }
