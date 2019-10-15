import React, { useState } from 'react'
import { Grid, Typography, MenuItem } from '@material-ui/core'
import { storiesOf } from '@storybook/react'

import { Providers } from '../providers'
import { Select, OutlinedSelect } from '../../../src'

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
    <Select
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
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h2" align="left">
                  Select
              </Typography>
            </Grid>
            <form>
              <Grid item>
                <Typography variant="h3" align="left">
                    Normal Select
                </Typography>
                <SelectStateWrapper
                  options={options}
                  tooltipText="Change from first to second"
                  disabled={false}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3" align="left">
                    Disabled Select
                </Typography>
                <SelectStateWrapper
                  options={options}
                  tooltipText="Disabled select"
                  disabled
                />
              </Grid>
            </form>
          </Grid>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h2" align="left">
                Outlined Select
              </Typography>
            </Grid>
            <Grid item>
              <OutlinedSelect
                label="Select An Option"
                value="option-2"
                style={{
                  minWidth: '10rem',
                }}
              >
                <MenuItem key="1" value="option-1">
                  First Option
                </MenuItem>
                <MenuItem key="2" value="option-2">
                  Second Option
                </MenuItem>
              </OutlinedSelect>
            </Grid>
          </Grid>
        </div>
      </Providers>
    ))
}

export default inputStories
