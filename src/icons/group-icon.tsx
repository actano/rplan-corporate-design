import React from 'react'

import { SvgIconProps } from '@material-ui/core'
import Icon from '@material-ui/icons/GroupAddOutlined'

import {
  GenericIcon, GenericIconWrapperProps, IconColor, IconSize,
} from './generic-icon'

export const GroupIcon = (props: GenericIconWrapperProps<SvgIconProps>) => (
  <GenericIcon
    {...props}
    {...{ color: IconColor.inherit, size: IconSize.medium }}
    Icon={Icon}
  />
)
