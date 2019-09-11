import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import * as PropTypes from 'prop-types'

import { Providers } from '../providers'
import { Checkbox } from '../../../src/components/check-box'

const ControlledCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false)

  return <Checkbox checked={checked} label={label} onChange={() => setChecked(!checked)} />
}
ControlledCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
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
