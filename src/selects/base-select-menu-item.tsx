import { MenuItem, makeStyles } from '@material-ui/core'
import React, { ReactText } from 'react'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { BaseSelectSize } from './base-select'

interface BaseSelectMenuItemProps {
  value: string,
  size: BaseSelectSize,
  isIcon?: boolean,
  children: React.ReactNode,
  [otherProp: string]: any,
}

interface StylesProps {
  size: BaseSelectSize,
  isIcon: boolean,
}

const getPadding = (
  theme: CorporateDesignTheme,
  size: BaseSelectSize,
  isIcon: boolean,
): ReactText => {
  if (isIcon) {
    return theme.spacing(2, 2)
  }
  return size === 'regular' ? theme.spacing(0.5, 2) : theme.spacing(0.5)
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>((theme) => {
  const { colors } = theme.palette

  return {
    selectMenuItem: ({ size, isIcon }) => ({
      fontSize: size === 'regular' ? '0.8125rem' : '0.75rem',
      padding: getPadding(theme, size, isIcon),
      color: isIcon ? colors.darkerGrey : colors.darkGrey,
      '&:hover': {
        backgroundColor: colors.lightestGrey,
        color: colors.darkestGrey,
      },
      '&:focus': {
        backgroundColor: colors.lightGrey,
      },
      '&$selectMenuItemSelected': {
        color: isIcon ? colors.darkestGrey : colors.darkGrey,
        backgroundColor: colors.lightGrey,
        '&:hover': {
          backgroundColor: colors.lightGrey,
        },
        '&:focus': {
          backgroundColor: colors.lightGrey,
        },
      },
    }),
    selectMenuItemSelected: () => ({}),
  }
})

const BaseSelectMenuItem = React.forwardRef<any, BaseSelectMenuItemProps>((props, ref) => {
  const {
    value,
    size,
    isIcon = false,
    children,
    ...otherProps
  } = props
  const ownClasses = useStyles({ size, isIcon })
  return (
    <MenuItem
      ref={ref}
      value={value}
      className={ownClasses.selectMenuItem}
      classes={{
        selected: ownClasses.selectMenuItemSelected,
      }}
      {...otherProps}
    >
      { children }
    </MenuItem>
  )
})

export {
  BaseSelectMenuItem,
  BaseSelectMenuItemProps,
}
