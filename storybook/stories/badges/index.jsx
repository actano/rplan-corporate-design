import React from 'react'
import { storiesOf } from '@storybook/react'
import { Typography } from '@material-ui/core'

import { Badge } from '../../../src'
import { Providers } from '../providers'

const badgesStories = () => {
  storiesOf('Badges', module)
    .add('Default Badge', () => (
      <Providers>
        <Typography variant="h2" align="left">
          Default Badge
        </Typography>

        <div style={{ marginTop: '20px' }} />

        <Badge text="badge" />

        <div style={{ marginTop: '20px' }} />

        <Badge text="badge with a long text description" />
      </Providers>
    ))
}

export { badgesStories }
