import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Providers } from '../providers'
import { Checkbox } from '../../../src/components/check-box'

const ControlledCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false)

  return <Checkbox checked={checked} label={label} onChange={() => setChecked(!checked)} />
}

const checkboxesInputStory = () =>
  (
    <Providers>
      <Typography variant="h2" align="left">
        Checkboxes
      </Typography>
      <ControlledCheckbox label="Example" />
    </Providers>
  )


export { checkboxesInputStory }
