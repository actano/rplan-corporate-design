import React, { ReactNode } from 'react'
import { CommonTooltip } from '../components'

export const withOptionalTooltip = (tooltip: string | undefined) =>
  (node: ReactNode): ReactNode => (
    tooltip != null ? (
      <CommonTooltip title={tooltip}>
        {node}
      </CommonTooltip>
    ) : node
  )
