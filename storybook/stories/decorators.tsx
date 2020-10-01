import React from 'react'

import { withActions } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Providers } from './providers'

export const withProvider = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
)

export const decorators = [withProvider, withKnobs, withActions]
