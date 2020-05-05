import React, { useCallback, useState } from 'react'
import classnames from 'classnames'
import {
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from '@material-ui/core'
import DotIcon from '@material-ui/icons/MoreVert'
import { CorporateDesignTheme } from '..'

const useDotMenuItemStyles = makeStyles<CorporateDesignTheme>(theme => ({
  menuItem: {
    fontSize: '0.8125rem',
    minHeight: 'initial',
    '&:hover': {
      backgroundColor: theme.palette.colors.lightestGrey,
    },
  },
}))

const DotMenuItem = React.forwardRef<any, any>(({ className, children, ...props }, ref) => {
  const classes = useDotMenuItemStyles()

  return (
    <MenuItem
      ref={ref}
      className={classnames(className, classes.menuItem)}
      {...props}
    >
      {children}
    </MenuItem>
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

const DotMenu = React.forwardRef<any, any>(({
  className, classes, children, buttonProps, icon: Icon,
}, ref) => {
  const [menuAnchor, setMenuAnchor] = useState<null | any>(null)

  const openDotMenu = useCallback(
    (event) => {
      setMenuAnchor(event.currentTarget)
    },
    [],
  )

  const closeDotMenu = useCallback(
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
    const onClick = extendCallback(child.props.onClick, closeDotMenu)
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
        onClick={openDotMenu}
        className={classes.button}
        size="small"
        {...buttonProps}
      >
        <Icon />
      </IconButton>
      <Menu
        open={menuAnchor != null}
        onClose={closeDotMenu}
        getContentAnchorEl={null}
        anchorEl={menuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {_children}
      </Menu>
    </div>
  )
})

DotMenu.defaultProps = {
  className: undefined,
  classes: {},
  children: undefined,
  buttonProps: {},
  icon: DotIcon,
}

export { DotMenu, DotMenuItem }
