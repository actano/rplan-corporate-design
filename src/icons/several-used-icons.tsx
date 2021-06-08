import React, { FunctionComponent, memo } from 'react'
import AddIcon from '@material-ui/icons/Add'
import GroupAddOutlined from '@material-ui/icons/GroupAddOutlined'

import { SvgIconProps } from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon'
import {
  GenericIcon, GenericIconWrapperProps, IconColor, IconSize,
} from './generic-icon'

const createGenericIcon = (
  icon: typeof SvgIcon,
  overrideDefaults?: GenericIconWrapperProps<SvgIconProps>,
): FunctionComponent<GenericIconWrapperProps<SvgIconProps>> =>
  props => <GenericIcon Icon={icon} {...overrideDefaults} {...props} />

export const PlusIcon = memo(createGenericIcon(AddIcon, { color: IconColor.blue }))
export const GroupAddOutlinedIcon = memo(createGenericIcon(GroupAddOutlined,
  { color: IconColor.inherit, size: IconSize.medium }))
