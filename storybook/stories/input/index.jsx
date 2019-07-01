import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { Providers } from '../providers'

const inputStories = () => {
  storiesOf('Input', module)
    .add('Input', () =>
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
                  Input
                </Typography>
              </Grid>
              <form>
                <Grid item>
                  <Typography variant="h3" align="left">
                    Normal Input
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Last name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="left">
                    Normal Input with placeholder
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Last name"
                    placeholder="Last name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="left">
                    Error in input
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="Enter: 'abc'"
                    value="cde"
                    error
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h3" align="left">
                    Disabled Input
                  </Typography>
                  <TextField
                    margin="normal"
                    variant="outlined"
                    label="disabled"
                    value="disabled"
                    disabled
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </form>
            </Grid>
          </div>
        </Providers>
      ))
}

export default inputStories
