import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { actions } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { UserAvatar } from '../../../src/components/user-avatar'
import { UserAvatarWithPlaceholder } from '../../../src/components/user-avatar-with-placeholder'

import { Providers } from '../providers'

const onClickAction = actions('onClick')

const UserAvatarWithPlaceholderWithDefaults = ({
  // eslint-disable-next-line react/prop-types
  size, user, variant, disabled, displayUserNameOnHover,
}) => (
  <UserAvatarWithPlaceholder
    user={user}
    size={size}
    disabled={disabled}
    variant={variant}
    displayUserNameOnHover={displayUserNameOnHover}
    {...onClickAction}
  />
)

const avatarStories = () => {
  storiesOf('User Avatar', module)
    .add('UserAvatar', () => {
      const disabledKnob = boolean('UserAvatarWithPlaceholder: disabled', false)
      const hasUser = boolean('UserAvatarWithPlaceholder: hasUser', true)
      const userHasGravatarEmail = boolean('Example user: has gravtar image', true)
      const variant = select('UserAvartarWithPlaceholder: variant', ['grey', 'white'])
      const displayUserNameOnHover = boolean('UserAvatarWithPlaceholder: displayUserNameOnHover', false)

      const sampleUser = {
        firstName: 'Kawhai',
        lastName: 'Leonard',
        email: userHasGravatarEmail ? 'marie.omann@actano.de' : 'invalidEmail@example.com',
      }

      const user = hasUser ? sampleUser : null

      return (
        <Providers>
          <div
            style={{
              paddingLeft: '20px',
              backgroundColor: variant === 'white' ? '#466ada' : 'transparent',
            }}
          >
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
                  User Avatar
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <div>
                    <UserAvatar
                      size="regular"
                      {...sampleUser}
                    />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar
                      {...sampleUser}
                      size="small-2"
                    />
                    <Typography variant="h5" align="left">
                      small-2
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatar
                      {...sampleUser}
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
                  User Avatar with placeholder (if the user is not defined)
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <div>
                    <UserAvatarWithPlaceholderWithDefaults user={user} variant={variant} size="regular" disabled={disabledKnob} displayUserNameOnHover={displayUserNameOnHover} />
                    <Typography variant="h5" align="left">
                      regular
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatarWithPlaceholderWithDefaults user={user} variant={variant} size="small-2" disabled={disabledKnob} displayUserNameOnHover={displayUserNameOnHover} />
                    <Typography variant="h5" align="left">
                      small-2
                    </Typography>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <UserAvatarWithPlaceholderWithDefaults user={user} variant={variant} size="small" disabled={disabledKnob} displayUserNameOnHover={displayUserNameOnHover} />
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
