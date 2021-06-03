import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'
import { COLOR_NAMES } from '../theme/theme-config'
import { GenericIcon } from './generic-icon'

interface FixedDatesIconProps extends SvgIconProps {
  darkBackgroud: boolean,
}

const Icon = React.forwardRef<any, FixedDatesIconProps>((
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
      fill={props.darkBackgroud ? COLOR_NAMES.white : COLOR_NAMES.darkGrey}
    />
  </SvgIcon>
))


export const FixedDatesIcon = (props : FixedDatesIconProps) => (
  <GenericIcon
    Icon={Icon}
    iconProps={props}
  />
)
