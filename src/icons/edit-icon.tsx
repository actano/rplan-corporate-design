import React from 'react'

import { SvgIconProps } from '@material-ui/core'
import Icon from '@material-ui/icons/EditOutlined'

import { GenericIcon, GenericIconWrapperProps } from './generic-icon'

export const EditIcon = (props: GenericIconWrapperProps<SvgIconProps>) => (
  <GenericIcon
    {...props}
    Icon={Icon}
  />
)
