import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

import { GenericIcon, IconColor } from './generic-icon'

interface FixedDatesIconProps {
  darkBackgroud: boolean,
}

const Icon = React.forwardRef<any, SvgIconProps>((
  props,
  ref,
) => (
  <SvgIcon
    {...props}
    ref={ref}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      transform="translate(2, 2)"
      d="M6 5.00365H13V6.00365H12.4167V7.00365H11.8333V11.0036H13V12.0036V13.0036H9.96667V16.0036H9.03333V13.0036H6V12.0036V11.0036H7.16667V7.00365H6.58333V6.00365H6V5.00365Z"
    />
  </SvgIcon>
))


export const FixedDatesIcon = (props: FixedDatesIconProps) => (
  <GenericIcon
    Icon={Icon}
    color={props.darkBackgroud ? IconColor.white : IconColor.darkGrey}
  />
)
