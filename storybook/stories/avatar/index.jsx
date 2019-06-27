import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { UserAvatar } from '../../../src/components/user-avatar'

import themeConfig from '../../../src'

const theme = createMuiTheme(themeConfig)

const avatarStories = () => {
  storiesOf('User Avatar', module)
    .add('UserAvatar', () =>
      (
        <MuiThemeProvider theme={theme}>
          <div style={{ paddingLeft: '20px' }}>
            <Grid
              container
              spacing={2}
              direction="column"
            >
              <Grid item>
                <Typography variant="h3" align="left">
                  User Avatar with gravatar image
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <div>
                    <UserAvatar email="rplan-ci@actano.de" firstName="Example" lastName="Smith" size="regular" />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar email="rplan-ci@actano.de" firstName="Example" lastName="Smith" size="small" />
                    <Typography variant="h5" align="left">
                      small
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Typography variant="h3" align="left">
                  User Avatar with initials (when the gravatar picture is not found)
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <div>
                    <UserAvatar email="invalidEmail@example.com" firstName="Example" lastName="Smith" size="regular" />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar email="invalidEmail@example.com" firstName="Example" lastName="Smith" size="small" />
                    <Typography variant="h5" align="left">
                      small
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      ))
}

export default avatarStories
