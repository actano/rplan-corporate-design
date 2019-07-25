import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { Providers } from '../providers'
import { DotMenu, DotMenuItem } from '../../../src'

const stories = () => {
  storiesOf('Dot Menu', module)
    .add('Dot Menu', () => (
      <Providers>
        <div style={{ paddingLeft: '20px' }}>
          <Grid
            container
            spacing={2}
            direction="column"
          >
            <Grid item>
              <Typography variant="h2" align="left">
                  Dot Menu
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3" align="left">
                  Default color and size
              </Typography>
              <DotMenu>
                <DotMenuItem onClick={() => console.log('item one clicked')}>Item one</DotMenuItem>
                <DotMenuItem onClick={() => console.log('item two clicked')}>Item two</DotMenuItem>
              </DotMenu>
            </Grid>
          </Grid>
        </div>
      </Providers>
    ))
}

export default stories
