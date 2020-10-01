import React from 'react'
import { DefaultDialog } from '../../../../src/dialogs'
import { DialogBoxInput } from '../../../../src/inputs'
import { Providers } from '../../providers'

export default {
  title: 'Legacy/Input',
}

export const dialogBoxInput = () => (
  <Providers>
    <DefaultDialog title="Some Dialog" buttons={[]} open>
      <DialogBoxInput
        style={{
          width: '100%',
        }}
        placeholder="Some input"
      />
    </DefaultDialog>
  </Providers>
)
