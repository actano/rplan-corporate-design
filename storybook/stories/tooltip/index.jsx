import React from 'react'
import { storiesOf } from '@storybook/react'

import { Providers } from '../providers'
import { CommonTooltip } from '../../../src/components/common-tooltip'

const tooltipStories = () => {
  storiesOf('Tooltip', module)
    .add('Tooltip', () =>
      (
        <Providers>
          <CommonTooltip
            title="Common tooltip"
          >
            <div style={{ width: '200px' }}>
              Common tooltip
            </div>
          </CommonTooltip>
        </Providers>
      ))
}

export default tooltipStories
