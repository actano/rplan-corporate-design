import { MenuItem, makeStyles } from '@material-ui/core'
import React from 'react'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { BaseSelectSize } from './base-select'

interface BaseSelectMenuItemProps {
  value: string,
  size: BaseSelectSize,
  children: React.ReactNode,
  [otherProp: string]: any,
}

interface StylesProps {
  size: BaseSelectSize,
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>((theme) => {
  const { colors } = theme.palette

  return {
    selectMenuItem: ({ size }) => ({
      fontSize: size === 'regular' ? '0.8125rem' : '0.75rem',
      padding: size === 'regular' ? theme.spacing(0.5, 2) : theme.spacing(0.5),
      color: colors.darkGrey,
      '&:hover': {
        backgroundColor: colors.veryLightGrey,
      },
      '&:focus': {
        backgroundColor: colors.veryLightGrey,
      },
      '&$selectMenuItemSelected': {
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
    children,
    ...otherProps
  } = props
  const ownClasses = useStyles({ size })

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
