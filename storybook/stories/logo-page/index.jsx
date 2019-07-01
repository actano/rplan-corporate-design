import React from 'react'
import { storiesOf } from '@storybook/react'

import { LogoPage, LogoPageHeadline } from '../../../src/components'
import { Providers } from '../providers'

const logoPageStories = () => {
  storiesOf('LogoPage', module)
    .add('LogoPage', () =>
      (
        <Providers>
          <LogoPage>
            <LogoPageHeadline>This is a headline</LogoPageHeadline>
          </LogoPage>
        </Providers>
      ))
}

export { logoPageStories }
