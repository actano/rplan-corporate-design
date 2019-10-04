import React from 'react'
import { DefaultDialog } from '../../../src/components'
import { DialogBoxInput } from '../../../src/inputs'
import { Providers } from '../providers'

const dialogBoxInputStory = () =>
  (
    <Providers>
      <DefaultDialog
        title="Some Dialog"
        buttons={[]}
        open
      >
        <DialogBoxInput
          style={{
            width: '100%',
          }}
          placeholder="Some input"
        />
      </DefaultDialog>
    </Providers>
  )

export { dialogBoxInputStory }
