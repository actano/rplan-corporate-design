import React from 'react'
import { Providers } from './providers'

export const withProvider = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
)

export const decorators = [withProvider]
