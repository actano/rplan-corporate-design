import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { SvgIconProps } from '@material-ui/core'
import {
  GenericIcon, IconHoverColor,
} from './generic-icon'

interface LinkedIconProps {
  linked?: boolean,
}

const Icon = React.forwardRef<any, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      transform="translate(3, 4)"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25829 4.20417L0.666626 1.6125L1.84163 0.4375L15.7916 14.3875L14.6166 15.5625L11.275 12.2208H9.83329V10.7792L7.94163 8.8875H5.66663V7.22083H6.27496L4.54996 5.49583C3.25829 5.6375 2.24996 6.72917 2.24996 8.05417C2.24996 9.47917 3.40829 10.6375 4.83329 10.6375H8.16663V12.2208H4.83329C2.53329 12.2208 0.666626 10.3542 0.666626 8.05417C0.666626 6.3125 1.74163 4.82083 3.25829 4.20417ZM13.1666 3.8875H9.83329V5.47083H13.1666C14.5916 5.47083 15.75 6.62917 15.75 8.05417C15.75 9.1125 15.1083 10.0292 14.1916 10.4208L15.3583 11.5875C16.5416 10.8542 17.3333 9.54583 17.3333 8.05417C17.3333 5.75417 15.4666 3.8875 13.1666 3.8875ZM10.9916 7.22083L12.3333 8.5625V7.22083H10.9916Z"
    />
  </SvgIcon>
))

const IconLinked = React.forwardRef<any, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path
      transform="translate(3, 7)"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.16663 7.50004H4.83329C3.45829 7.50004 2.33329 6.37504 2.33329 5.00004C2.33329 3.62504 3.45829 2.50004 4.83329 2.50004H8.16663V0.833374H4.83329C2.53329 0.833374 0.666626 2.70004 0.666626 5.00004C0.666626 7.30004 2.53329 9.16671 4.83329 9.16671H8.16663V7.50004ZM13.1666 0.833374H9.8333V2.50004H13.1666C14.5416 2.50004 15.6666 3.62504 15.6666 5.00004C15.6666 6.37504 14.5416 7.50004 13.1666 7.50004H9.8333V9.16671H13.1666C15.4666 9.16671 17.3333 7.30004 17.3333 5.00004C17.3333 2.70004 15.4666 0.833374 13.1666 0.833374ZM12.3333 4.16671H5.66663V5.83338H12.3333V4.16671Z"
    />
  </SvgIcon>
))


export const LinkedIcon = (props: LinkedIconProps) => (
  <GenericIcon
    Icon={props.linked ? IconLinked : Icon}
    hoverColor={IconHoverColor.blue}
    {...props}
  />
)
