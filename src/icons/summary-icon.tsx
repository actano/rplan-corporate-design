import React from 'react'
import { SvgIcon } from '@material-ui/core'

interface SummaryIconProps {
  className?: string,
  [otherProp: string]: any,
}

const SummaryIcon = React.forwardRef<any, SummaryIconProps>(({
  className,
  ...otherProps
}, ref) => (
  <SvgIcon
    {...otherProps}
    className={className}
    ref={ref}
  >
    <path d="m 5.4999994,10 -2.1,8 V 8 H 20.399999 c 0,-0.53043 -0.2107,-1.03914 -0.5858,-1.41421 C 19.439099,6.21071 18.930399,6 18.399999,6 H 11.4 L 9.3999999,4 H 3.3999994 C 2.8695694,4 2.3608594,4.21072 1.9857884,4.58579 1.6107154,4.96086 1.4000013,5.46957 1.4000013,6 v 12 c 0,0.5304 0.2107141,1.0391 0.5857871,1.4142 C 2.3608594,19.7893 2.8695694,20 3.3999994,20 H 18.399999 c 0.9,0 1.7,-0.6 1.9,-1.5 l 2.3,-8.5 z M 18.399999,18 H 5.3999994 l 1.6,-6 H 19.999999 Z" />
  </SvgIcon>
))

export {
  SummaryIcon,
}
