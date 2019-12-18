import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { Skeleton } from '../../../src/components/skeleton'

import { Providers } from '../providers'

const skeleton = () => {
  storiesOf('Skeleton', module)
    .add('Skeleton', () =>
      (
        <Providers>
          <div style={{ paddingLeft: '20px' }}>
            <Grid
              container
              spacing={2}
              direction="column"
            >
              <Grid item>
                <Typography variant="h2" align="left">
                  Skeleton
                </Typography>
                <Typography variant="h3" align="left">
                  Variant: Text
                </Typography>
                <div>
                  <Skeleton width="60%" />
                </div>
              </Grid>
              <Grid item>
                <Typography variant="h2" align="left">
                  Skeleton
                </Typography>
                <Typography variant="h3" align="left">
                  Variant: Circle
                </Typography>
                <div>
                  <Skeleton variant="circle" width="40px" height="40px" />
                </div>
              </Grid>
            </Grid>
          </div>
        </Providers>
      ))
}

export { skeleton }
