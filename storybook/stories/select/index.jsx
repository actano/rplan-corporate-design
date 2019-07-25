import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { Providers } from '../providers'
import { Select } from '../../../src'

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
        </div>
      </Providers>
    ))
}

export default inputStories