import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'

import { ErrorBox } from '../../../../src'
import { Providers } from '../../providers'

const errorBoxStories = () => {
  storiesOf('Error Box', module)
    .add('Error Box', () => (
      <Providers>
        <Typography variant="h3" align="left">
          Error Box
        </Typography>
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item>
            <Paper style={{ width: '600px', padding: '50px', display: 'flex' }}>
              <ErrorBox>
                This is an Error. Please stand by!
              </ErrorBox>
            </Paper>
          </Grid>
        </Grid>
      </Providers>
    ))
}

export { errorBoxStories }
