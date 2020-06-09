import React from 'react'
import { storiesOf } from '@storybook/react'

import { SnackBar, SnackBarTypes } from '../../../src'
import { Providers } from '../providers'

const snackBar = () => {
  storiesOf('SnackBar', module)
    .add('Error', () => (
      <Providers>
        <SnackBar message="I'm an error" type={SnackBarTypes.error} />
      </Providers>
    ))
    .add('Info', () => (
      <Providers>
        <SnackBar message="I'm an info" type={SnackBarTypes.info} />
      </Providers>
    ))
}

export default snackBar
