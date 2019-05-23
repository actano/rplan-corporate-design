import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { ErrorBox } from '../../../src'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)
// storybook only shows what <a> tags look like, no interactivity needed
/* eslint-disable jsx-a11y/anchor-is-valid */
const errorBoxStories = () => {
  storiesOf('Error Box', module)
    .addDecorator(muiTheme([theme]))
    .add('Error Box', () => (
        <div>
          <Typography variant="h3" align='left'>
            Error Box
          </Typography>
          <Grid
            container
            spacing={16}
            direction="column"
          >
            <Grid item>
              <Paper style={{ width: '600px', padding: '50px', display: 'flex'}}>
                <ErrorBox>
                  This is an Error. Please stand by!
                </ErrorBox>
              </Paper>
            </Grid>
          </Grid>
        </div>
      ),
    )
}
/* eslint-enable jsx-a11y/anchor-is-valid */

export default errorBoxStories
