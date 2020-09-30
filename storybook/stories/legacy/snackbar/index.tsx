import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { PrimaryButton, SnackBar, SnackBarTypes } from '../../../../src'
import { Providers } from '../../providers'

const snackBar = () => {
  storiesOf('SnackBar', module)
    .add('SnackBar', () => {
      const type = select('SnackBar: type', ['error', 'info'], 'error', 'props') as SnackBarTypes
      const message = text('SnackBar: message', 'Here goes your message!', 'props')
      const [isOpen, setIsOpen] = useState(null)

      return (
        <Providers>
          <SnackBar
            message={message}
            type={type}
            onClose={() => setIsOpen(false)}
            open={isOpen}
          />

          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
          >
            <Grid item>
              {
                !isOpen && (
                  <PrimaryButton onClick={() => setIsOpen(true)}>
                    Show Snackbar
                  </PrimaryButton>
                )
              }
            </Grid>
          </Grid>
        </Providers>
      )
    })
}

export { snackBar }
