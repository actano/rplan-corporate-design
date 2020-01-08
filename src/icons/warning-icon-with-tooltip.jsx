import React from 'react'
import { PropTypes } from 'prop-types'

import { CommonTooltip } from '../components'
import { WarningIcon } from './warning-icon'

const WarningIconWithRef = React.forwardRef((props, ref) => (
  <div {...props} ref={ref}>
    <WarningIcon />
  </div>
))

const WarningIconWithTooltip = ({ className, tooltipText }) => (
  <div className={className}>
    <CommonTooltip title={tooltipText}>
      <WarningIconWithRef />
    </CommonTooltip>
  </div>
)

WarningIconWithTooltip.propTypes = {
  className: PropTypes.string,
  tooltipText: PropTypes.string.isRequired,
}

WarningIconWithTooltip.defaultProps = {
  className: undefined,
}

export { WarningIconWithTooltip }
