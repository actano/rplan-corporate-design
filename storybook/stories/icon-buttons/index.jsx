import { Grid, IconButton, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import React from 'react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)
// storybook only shows what <a> tags look like, no interactivity needed
/* eslint-disable jsx-a11y/anchor-is-valid */
const iconButtonStories = () => {
  storiesOf('Icon Buttons', module)
    .addDecorator(muiTheme([theme]))
    .add('Icon Buttons', () => (
        <div>
          <Typography variant="h3" align='left'>
            Icon Buttons
          </Typography>
          <Grid
            container
            spacing={16}
            direction="column"
          >
            <Grid item>
              <Typography variant="h5" align='left'>
                Show password visibility
              </Typography>
              <Grid container spacing={8} direction='row'>
                <Grid item>
                  <IconButton
                    aria-label="Toggle password visibility"
                  >
                    <Visibility />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    aria-label="Toggle password visibility"
                  >
                    <VisibilityOff />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      ),
    )
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default iconButtonStories
