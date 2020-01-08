import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'

import { Providers } from '../providers'
import { CommonSelect } from '../../../src'

const options = [
  {
    id: 'first',
    value: 'First',
  },
  {
    id: 'second',
    value: 'Second',
  },
]

const SelectStateWrapper = (props) => {
  const [value, setValue] = useState(options[0].id)

  const onChange = val =>
    setValue(val)

  return (
    <CommonSelect
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

const inputStories = () => {
  storiesOf('Select', module)
    .add('Select', () => (
      <Providers>
        <div style={{ paddingLeft: '20px' }}>
          <Grid
            container
            spacing={10}
            direction="row"
          >
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" align="left">
                    Select (regular)
                  </Typography>
                </Grid>
                <form>
                  <Grid item>
                    <SelectStateWrapper
                      options={options}
                      tooltipText="Change from first to second"
                      disabled={false}
                    />
                  </Grid>
                  <Grid item>
                    <SelectStateWrapper
                      options={options}
                      tooltipText="Disabled select"
                      disabled
                    />
                  </Grid>
                </form>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" align="left">
                    Select (small)
                  </Typography>
                </Grid>
                <form>
                  <Grid item>
                    <SelectStateWrapper
                      options={options}
                      tooltipText="Change from first to second"
                      disabled={false}
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <SelectStateWrapper
                      options={options}
                      tooltipText="Disabled select"
                      disabled
                      size="small"
                    />
                  </Grid>
                </form>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" align="left">
                    Outlined Select
                  </Typography>
                </Grid>
                <Grid item>
                  <SelectStateWrapper
                    options={options}
                    tooltipText="Change from first to second"
                    disabled={false}
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <SelectStateWrapper
                    options={options}
                    tooltipText="Disabled select"
                    disabled
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
              >
                <Grid item>
                  <Typography variant="h3" align="left">
                    Outlined Select Full Width
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ width: '250px' }}>
                    <SelectStateWrapper
                      options={options}
                      tooltipText="Change from first to second"
                      disabled={false}
                      variant="outlined"
                      fullWidth
                      label="Select an option"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ width: '250px' }}>
                    <SelectStateWrapper
                      options={options}
                      tooltipText="Disabled select"
                      disabled
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Providers>
    ))
}

export default inputStories
