import React, { ReactElement, useCallback, useState } from 'react'
import classnames from 'classnames'
import {
  IconButton,
  Menu,
  MenuItem as MaterialMenuItem,
  makeStyles,
  IconButtonProps,
  IconProps,
  PopoverOrigin, MenuProps, SvgIconProps,
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

const useStyles = makeStyles<CorporateDesignTheme>(() => ({
  button: {
  },
}))

export enum IconButtonMenuSize {
  Default = 'default',
  Small = 'small',
}

export interface IconButtonMenuProps extends Omit<Partial<MenuProps>, 'classes'> {
  anchorOrigin?: PopoverOrigin,
  size?: IconButtonMenuSize,
  icon?: React.FunctionComponent<IconProps> | React.FunctionComponent<SvgIconProps>,
  getContentAnchorEl?: ((element: Element) => Element) | null,
  buttonProps?: Partial<IconButtonProps>,
  children?: ReactElement,
  className?: string,
  classes?: {
    button?: string,
  },
}

const IconButtonMenu = React.forwardRef<any, IconButtonMenuProps>(({
  className,
  classes: externalClasses = {},
  size = IconButtonMenuSize.Default,
  children,
  buttonProps = {},
  icon: Icon = DotIcon,
  getContentAnchorEl = null,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  ...otherProps
}, ref) => {
  const classes = useStyles()
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
  const _children = React.Children.map<ReactElement, ReactElement>(children as any, (child) => {
    const onClick = extendCallback(child.props.onClick, closeMenu)
    return React.cloneElement(child, { onClick })
  })

  console.log('size', size)

  return (
    <div
      ref={ref}
      className={className}
      onClick={preventClickThrough}
      role="presentation"
    >
      <IconButton
        onClick={openMenu}
        className={classnames(classes.button, externalClasses.button)}
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

export { IconButtonMenu, MenuItem }
