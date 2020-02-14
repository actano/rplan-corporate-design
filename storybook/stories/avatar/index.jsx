import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { actions } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { UserAvatar } from '../../../src/components/user-avatar'
import { UserAvatarWithPlaceholder } from '../../../src/components/user-avatar-with-placeholder'

import { Providers } from '../providers'

const onClickAction = actions('onClick')

const useStyles = makeStyles(theme => ({
  withPlaceholder: {
    color: theme.palette.colors.grey,
    borderColor: theme.palette.colors.lightGrey,
  },
}))

// eslint-disable-next-line react/prop-types
const UserAvatarWithPlaceholderWithStyles = ({ size, disabled }) => {
  const classes = useStyles()
  return (
    <UserAvatarWithPlaceholder
      classes={{ color: classes.withPlaceholder }}
      user={null}
      size={size}
      disabled={disabled}
      {...onClickAction}
    />
  )
}

const avatarStories = () => {
  storiesOf('User Avatar', module)
    .add('UserAvatar', () => {
      const disabledKnob = boolean('disable UserAvatarWithPlaceholder', false)
      return (
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
                    <UserAvatar
                      email="marie.omann@actano.de"
                      firstName="Example"
                      lastName="Smith"
                      size="regular"
                    />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar
                      email="marie.omann@actano.de"
                      firstName="Example"
                      lastName="Smith"
                      size="small-2"
                    />
                    <Typography variant="h5" align="left">
                      small-2
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar
                      email="marie.omann@actano.de"
                      firstName="Example"
                      lastName="Smith"
                      size="small"
                    />
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
                    <UserAvatar
                      email="invalidEmail@example.com"
                      firstName="Example"
                      lastName="Smith"
                      size="regular"
                    />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar
                      email="invalidEmail@example.com"
                      firstName="Example"
                      lastName="Smith"
                      size="small-2"
                    />
                    <Typography variant="h5" align="left">
                      small-2
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar
                      email="invalidEmail@example.com"
                      firstName="Example"
                      lastName="Smith"
                      size="small"
                    />
                    <Typography variant="h5" align="left">
                      small
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Typography variant="h3" align="left">
                  User Avatar with placeholder (when the user is null)
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <div>
                    <UserAvatarWithPlaceholderWithStyles size="regular" disabled={disabledKnob} />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatarWithPlaceholderWithStyles size="small-2" disabled={disabledKnob} />
                    <Typography variant="h5" align="left">
                      small-2
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatarWithPlaceholderWithStyles size="small" disabled={disabledKnob} />
                    <Typography variant="h5" align="left">
                      small
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Providers>
      )
    })
}

export default avatarStories
