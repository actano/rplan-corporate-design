import React from 'react'
import { decorators } from '../decorators'

import { ExampleComponent } from './example-component'

export const ExampleStory1 = args => (<ExampleComponent {...args} />)
export const ExampleStory2 = args => (<ExampleComponent {...args} someValue="foo" />)

export default {
  title: '_Templates/ExampleComponentJSX',
  decorators,
  component: ExampleComponent,
  parameters: {},
}
