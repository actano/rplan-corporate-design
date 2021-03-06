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

import { assertNever } from '@rplan/allex-type-helpers'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { CommonTooltip } from './common-tooltip'

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

export enum IconButtonMenuSize {
  Default = 'default',
  Small = 'small',
}

interface StylesProps {
  size: IconButtonMenuSize,
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>(theme => ({
  button: ({ size }) => {
    let dimensions: number | undefined
    let fontSize: string | undefined
    switch (size) {
      case IconButtonMenuSize.Default: {
        dimensions = theme.spacing(4)
        fontSize = `${theme.spacing(3)}px`
        break
      }
      case IconButtonMenuSize.Small: {
        dimensions = theme.spacing(2.5)
        fontSize = `${theme.spacing(2)}px`
        break
      }
      default: {
        assertNever(size)
      }
    }
    return {
      width: dimensions,
      height: dimensions,
      fontSize,
    }
  },
}))

interface TestIdProp {
  'data-test-id'?: string,
}

export interface IconButtonMenuProps extends Omit<Partial<MenuProps>, 'classes'> {
  anchorOrigin?: PopoverOrigin,
  size?: IconButtonMenuSize,
  icon?: React.FunctionComponent<IconProps> | React.FunctionComponent<SvgIconProps>,
  getContentAnchorEl?: ((element: Element) => Element) | null,
  buttonProps?: Partial<IconButtonProps> & TestIdProp,
  className?: string,
  classes?: {
    button?: string,
  },
  tooltip?: string
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  (condition ? wrapper(children) : children)

const IconButtonMenu = React.forwardRef<any, IconButtonMenuProps>(({
  className,
  classes: externalClasses = {},
  size = IconButtonMenuSize.Default,
  children,
  buttonProps = {},
  icon: Icon = DotIcon,
  getContentAnchorEl = null,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  tooltip,
  ...otherProps
}, ref) => {
  const classes = useStyles({
    size,
  })
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
    if (child) {
      const onClick = extendCallback(child.props.onClick, closeMenu)
      return React.cloneElement(child, { onClick })
    }

    return child
  })

  return (
    <div
      ref={ref}
      className={className}
      onClick={preventClickThrough}
      role="presentation"
    >
      <ConditionalWrapper condition={typeof tooltip !== 'undefined'} wrapper={(wrapperChildren: React.ReactNode) => <CommonTooltip title={tooltip}>{wrapperChildren}</CommonTooltip>}>
        <IconButton
          onClick={openMenu}
          className={classnames(classes.button, externalClasses.button)}
          size="small"
          {...buttonProps}
        >
          <Icon fontSize="inherit" />
        </IconButton>
      </ConditionalWrapper>
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
