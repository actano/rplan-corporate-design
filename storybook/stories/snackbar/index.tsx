import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { PrimaryButton, SnackBar, SnackBarTypes } from '../../../src'
import { Providers } from '../providers'

const snackBar = () => {
  storiesOf('SnackBar', module)
    .add('SnackBar', () => {
      const type = select('SnackBar: type', ['error', 'info'], 'error', 'props') as SnackBarTypes
      const message = text('SnackBar: message', 'Here goes your message!', 'props')
      const [snackbar, setSnackBar] = useState(null)

      return (
        <Providers>
          {snackbar}

          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
          >
            <Grid item>
              {
                !snackbar && (
                  <PrimaryButton onClick={() => {
                    setSnackBar(
                      <SnackBar message={message} type={type} onClose={() => setSnackBar(null)} />,
                    )
                  }}
                  >
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

export default snackBar
