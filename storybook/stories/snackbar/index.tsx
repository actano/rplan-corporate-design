import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import { text, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { SnackBar, SnackBarTypes } from '../../../src'
import { Providers } from '../providers'

const snackBar = () => {
  storiesOf('SnackBar', module)
    .add('SnackBar', () => {
      const type = select('SnackBar: type', ['error', 'info'], 'error', 'props') as SnackBarTypes
      const message = text('SnackBar: message', 'Here goes your message!', 'props')
      const [isVisible, setIsVisible] = useState(true)

      return (
        <Providers>
          {
            !isVisible && (
              <Typography variant="h2" align="left">
                You have closed the snack bar
              </Typography>
            )
          }

          <SnackBar message={message} type={type} onClose={() => setIsVisible(false)} />
        </Providers>
      )
    })
}

export default snackBar
