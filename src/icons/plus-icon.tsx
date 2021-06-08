import React from 'react'

import { SvgIconProps } from '@material-ui/core'
import Icon from '@material-ui/icons/Add'

import { GenericIcon, GenericIconWrapperProps, IconColor } from './generic-icon'

export const PlusIcon = (props: GenericIconWrapperProps<SvgIconProps>) => (
  <GenericIcon
    {...props}
    color={IconColor.blue}
    Icon={Icon}
  />
)
