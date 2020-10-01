import React from 'react'
import { Typography } from '@material-ui/core'

import { Badge } from '../../../../src'
import { Providers } from '../../providers'

export default {
  title: 'Legacy/Badges',
}

export const badgesStory = () => (
  <Providers>
    <Typography variant="h2" align="left">
        Default Badge
    </Typography>

    <div style={{ marginTop: '20px' }} />

    <Badge text="badge" />

    <div style={{ marginTop: '20px' }} />

    <Badge text="badge with a long text description" />
  </Providers>
)
