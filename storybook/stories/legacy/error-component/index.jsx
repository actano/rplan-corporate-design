
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Typography } from '@material-ui/core'

import { ErrorComponent } from '../../../../src'
import { Providers } from '../../providers'

const errorComponentStories = () => {
  storiesOf('Error Component', module)
    .add('Error Component', () => (
      <Providers>
        <Typography variant="h2" align="left">
          Error Component
        </Typography>
        <ErrorComponent
          title="My Error"
          description="My error description is here"
        >
          <div> My error children are here </div>
        </ErrorComponent>
      </Providers>
    ))
}

export { errorComponentStories }
