import React from 'react'
import DotIcon from '@material-ui/icons/MoreVert'
import { IconButtonMenu, IconButtonMenuProps, MenuItem } from './icon-button-menu'

const DotMenuItem = React.forwardRef<any, any>(({ children, ...props }, ref) => (
  <MenuItem
    ref={ref}
    {...props}
  >
    {children}
  </MenuItem>
))

interface DotMenuProps extends Omit<Partial<IconButtonMenuProps>, 'icon' | 'getContentAnchorEl'> {
}

const DotMenu = React.forwardRef<any, DotMenuProps>(({
  children,
  ...props
}, ref) => (
  <IconButtonMenu
    ref={ref}
    icon={DotIcon}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    getContentAnchorEl={null}
    {...props}
  >
    {children}
  </IconButtonMenu>
))

export { DotMenu, DotMenuItem }
