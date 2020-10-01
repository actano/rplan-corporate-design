import React from 'react'

import { Providers } from '../../providers'
import { CommonTooltip } from '../../../../src/components/common-tooltip'

export default {
  title: 'Legacy/Tooltip',
}

export const tooltip = () => (
  <Providers>
    <CommonTooltip title="Common tooltip">
      <div style={{ width: '200px' }}>Common tooltip</div>
    </CommonTooltip>
  </Providers>
)
