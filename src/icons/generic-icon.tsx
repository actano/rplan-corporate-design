import React, { ComponentType } from 'react'
import { makeStyles } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface StyleProps {
    size: string,
    color: string,
    hoverColor: string,
    margin: string
    flex: string
}

const compareSizes = (condition, then, otherwise) => (condition ? then : otherwise)

const useStyles = makeStyles<CorporateDesignTheme, StyleProps>(theme => ({
  iconStyle: ({
    color, size, hoverColor, margin, flex,
  }) => ({
    color: theme.palette.colors[color],
    fontSize: size === 'small' ? 16 : compareSizes(size === 'medium', 20, 24),
    margin,
    flex,
    '&:hover': {
      color: color !== 'inherit' ? theme.palette.colors[hoverColor] : color,
    },
  }),
}))

export enum IconSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export enum IconMargin {
    zero = '0px ',
    twelvePixel = '12px ',
    forteenPixel = '14px ',
    sixteenPixel = '16px ',
}

export enum IconFlex {
    none = 'none',
    auto = 'auto',
    initial = 'initial',
}

export enum IconColor {
    grey = 'grey',
    darkGrey = 'darkGrey',
    red = 'red',
    white = 'white',
    lightGrey = 'lightGrey',
    turquoise = 'turquoise',
    orange = 'orange',
    blue = 'blue',
    inherit = 'inherit',
}

export enum IconHoverColor {
    grey = 'grey',
    strongerBlue = 'strongerBlue',
    blue = 'blue',
}

interface IconProps {
    size?: IconSize,
    Icon: ComponentType<any>,
    color?: IconColor,
    className?: string,
    hoverColor?: IconHoverColor,
    marginRight?: IconMargin,
    marginDown?: IconMargin,
    marginLeft?: IconMargin,
    marginTop?: IconMargin,
    flex?: IconFlex
}

const GenericIcon = React.forwardRef<any, IconProps>(({
  Icon,
  color = IconColor.grey,
  size = IconSize.large,
  hoverColor = color,
  marginRight = IconMargin.zero,
  marginDown = IconMargin.zero,
  marginLeft = IconMargin.zero,
  marginTop = IconMargin.zero,
  flex = '',
}, ref) => {
  const margin = marginTop + marginRight + marginDown + marginLeft
  const classes = useStyles({
    color, size, hoverColor, margin, flex,
  })
  return (
    <Icon className={classes.iconStyle} ref={ref} />
  )
})

export { GenericIcon }
