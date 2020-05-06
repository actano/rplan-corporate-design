import React, { useCallback, useState } from 'react'
import classnames from 'classnames'
import {
  IconButton,
  Menu,
  MenuItem as MaterialMenuItem,
  makeStyles,
} from '@material-ui/core'
import DotIcon from '@material-ui/icons/MoreVert'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'


const useMenuItemStyles = makeStyles<CorporateDesignTheme>(theme => ({
  menuItem: {
    fontSize: '0.8125rem',
    minHeight: 'initial',
    '&:hover': {
      backgroundColor: theme.palette.colors.lightestGrey,
    },
  },
}))

const MenuItem = React.forwardRef<any, any>(({ className, children, ...props }, ref) => {
  const classes = useMenuItemStyles()

  return (
    <MaterialMenuItem
      ref={ref}
      className={classnames(className, classes.menuItem)}
      {...props}
    >
      {children}
    </MaterialMenuItem>
  )
})

function extendCallback(originalCallback, extension) {
  if (originalCallback == null) {
    return extension
  }

  return (...args) => {
    originalCallback(...args)
    extension(...args)
  }
}

const IconButtonMenu = React.forwardRef<any, any>(({
  className,
  classes,
  children,
  buttonProps,
  icon: Icon,
  getContentAnchorEl,
  anchorOrigin,
  ...otherProps
}, ref) => {
  const [menuAnchor, setMenuAnchor] = useState<null | any>(null)

  const openMenu = useCallback(
    (event) => {
      setMenuAnchor(event.currentTarget)
    },
    [],
  )

  const closeMenu = useCallback(
    () => {
      setMenuAnchor(null)
    },
    [],
  )

  const preventClickThrough = useCallback(
    (event) => {
      event.stopPropagation()
    },
    [],
  )

  // automatically close the menu when a child (i.e. menu item) is clicked
  const _children = React.Children.map(children, (child) => {
    const onClick = extendCallback(child.props.onClick, closeMenu)
    return React.cloneElement(child, { onClick })
  })

  return (
    <div
      ref={ref}
      className={className}
      onClick={preventClickThrough}
      role="presentation"
    >
      <IconButton
        onClick={openMenu}
        className={classes.button}
        size="small"
        {...buttonProps}
      >
        <Icon />
      </IconButton>
      <Menu
        open={menuAnchor != null}
        onClose={closeMenu}
        anchorEl={menuAnchor}
        getContentAnchorEl={getContentAnchorEl}
        anchorOrigin={anchorOrigin}
        {...otherProps}
      >
        {_children}
      </Menu>
    </div>
  )
})

IconButtonMenu.defaultProps = {
  className: undefined,
  classes: {},
  children: undefined,
  buttonProps: {},
  icon: DotIcon,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
}

export { IconButtonMenu, MenuItem }
