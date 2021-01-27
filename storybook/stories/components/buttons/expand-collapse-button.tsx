import React, { useState } from 'react'
import { ExpandCollapseButton } from '../../../../src/components'

const ExpandCollapseButtonWithState = ({ ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <ExpandCollapseButton
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
      {...props}
    />
  )
}

export { ExpandCollapseButtonWithState }
