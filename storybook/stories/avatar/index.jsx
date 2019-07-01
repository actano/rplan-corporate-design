import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { UserAvatar } from '../../../src/components/user-avatar'

import { Providers } from '../providers'

const avatarStories = () => {
  storiesOf('User Avatar', module)
    .add('UserAvatar', () =>
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
                  User Avatar
                </Typography>
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
        </Providers>
      ))
}

export default avatarStories
