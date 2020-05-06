import React from 'react'
import DotIcon from '@material-ui/icons/MoreVert'
import { IconButtonMenu, MenuItem } from './icon-button-menu'

const DotMenuItem = React.forwardRef<any, any>(({ children, ...props }, ref) => (
  <MenuItem
    ref={ref}
    {...props}
  >
    {children}
  </MenuItem>
))

const DotMenu = React.forwardRef<any, any>(({ children, ...props }, ref) => (
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

DotMenu.defaultProps = {
  className: undefined,
  classes: {},
  children: undefined,
  buttonProps: {},
}

export { DotMenu, DotMenuItem }
