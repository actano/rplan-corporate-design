import React from 'react'

import { LogoPage, LogoPageHeadline } from '../../../../src/components'
import { Providers } from '../../providers'

export default {
  title: 'Legacy/LogoPage',
}

export const logoPage = () => (
  <Providers>
    <LogoPage>
      <LogoPageHeadline>This is a headline</LogoPageHeadline>
    </LogoPage>
  </Providers>
)
