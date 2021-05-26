import React from 'react'
import { SvgIcon } from '@material-ui/core'
import { COLOR_NAMES } from '../theme/theme-config'
import { GenericIcon } from './generic-icon'

type AddColumnIconProps = {
  hover?: boolean,
}

const Icon = React.forwardRef<any, AddColumnIconProps>((props, ref) => (
  <SvgIcon
    ref={ref}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      transform="translate(2, 2)"
      d="M 5.00,3.00 C 5.00,3.00 3.00,3.00 3.00,3.00
             3.00,3.00 3.00,21.00 3.00,21.00
             3.00,21.00 5.00,21.00 5.00,21.00
             5.00,21.00 5.00,3.00 5.00,3.00 Z
           M 11.00,3.00
           C 11.00,3.00 9.00,3.00 9.00,3.00
             9.00,3.00 9.00,21.00 9.00,21.00
             9.00,21.00 11.00,21.00 11.00,21.00
             11.00,21.00 11.00,3.00 11.00,3.00 Z
           M 15.00,3.00
           C 15.00,3.00 17.00,3.00 17.00,3.00
             17.00,3.00 17.00,11.00 17.00,11.00
             17.00,11.00 15.00,11.00 15.00,11.00
             15.00,11.00 15.00,3.00 15.00,3.00 Z
           M 15.00,13.00
           C 15.00,13.00 17.00,13.00 17.00,13.00
             17.00,13.00 17.00,16.00 17.00,16.00
             17.00,16.00 20.00,16.00 20.00,16.00
             20.00,16.00 20.00,18.00 20.00,18.00
             20.00,18.00 17.00,18.00 17.00,18.00
             17.00,18.00 17.00,21.00 17.00,21.00
             17.00,21.00 15.00,21.00 15.00,21.00
             15.00,21.00 15.00,18.00 15.00,18.00
             15.00,18.00 12.00,18.00 12.00,18.00
             12.00,18.00 12.00,16.00 12.00,16.00
             12.00,16.00 15.00,16.00 15.00,16.00
             15.00,16.00 15.00,13.00 15.00,13.00 Z"
      fill={props.hover ? COLOR_NAMES.blue : COLOR_NAMES.grey}
    />
  </SvgIcon>
))

export const AddColumnIcon = (props: AddColumnIconProps) => (
  <GenericIcon Icon={Icon} iconProps={props} />
)
