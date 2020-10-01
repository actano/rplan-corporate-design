import React from 'react'
import map from 'lodash/map'
import { Grid, Typography } from '@material-ui/core'

import { AVATAR_SIZES } from '../../../../src/components/user-avatar'

const makeSampleUser = (hasGravatar: boolean, hasUploadedImage: boolean) => ({
  firstName: 'Kawhai',
  lastName: 'Leonard',
  email: hasGravatar ? 'marie.omann@actano.de' : 'invalidEmail@example.com',
  profilePictureUrl: hasUploadedImage ? 'https://via.placeholder.com/150' : null,
})

const forEachSize = render => (
  map(AVATAR_SIZES, (valueInPx, sizeName) => (
    <Grid key={sizeName} item container direction="column" alignItems="center" xs={1}>
      <Grid>
        {render(sizeName)}
      </Grid>
      <Grid>
        <Typography align="center">
          { `${sizeName} (${valueInPx}x${valueInPx})` }
        </Typography>
      </Grid>
    </Grid>
  ))
)

export { makeSampleUser, forEachSize }
