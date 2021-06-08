import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

import { GenericIcon, IconColor, IconHoverColor } from './generic-icon'

interface AddColumnIconProps {
    hover?: boolean,
}

const Icon = React.forwardRef<any, SvgIconProps>((props, ref) => (
  <SvgIcon {...props} ref={ref}>
    <path d="M7 5H5v18h2V5zm6 0h-2v18h2V5zm4 0h2v8h-2V5zm0 10h2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z" />
  </SvgIcon>
))

export const AddColumnIcon = (props: AddColumnIconProps) => (
  <GenericIcon
    Icon={Icon}
    color={props.hover ? IconColor.blue : IconColor.darkerGrey}
    hoverColor={IconHoverColor.blue}
  />
)
