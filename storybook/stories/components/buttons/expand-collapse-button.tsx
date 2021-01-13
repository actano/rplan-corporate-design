import React, { useState } from 'react'
import { ExpandCollapseButton } from '../../../../src/components'

const ExpandCollapseButtonWithState = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <ExpandCollapseButton isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
  )
}

export { ExpandCollapseButtonWithState }
