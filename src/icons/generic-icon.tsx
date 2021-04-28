import React, { ComponentType } from 'react'
import { makeStyles } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface StyleProps {
    size: string,
    color: string,
    hoverColor: string,
    margin: string,
    flex: string,
    cursor: string,
}

const useStyles = makeStyles<CorporateDesignTheme, StyleProps>(theme => ({
  iconStyle: ({
    color, size, hoverColor, margin, flex, cursor,
  }) => ({
    color: theme.palette.colors[color],
    fontSize: size,
    margin,
    flex,
    cursor,
    '&:hover': {
      color: color !== 'inherit' ? theme.palette.colors[hoverColor] : color,
    },
  }),
}))

export enum IconSize {
    small = '16px',
    medium = '20px',
    large = '24px',
    largePlus = '32px'
}

export enum IconMargin {
    auto = 'auto ',
    zero = '0px ',
    eigthPixel = '8px ',
    sixteenPixel = '16px ',
    twentyfourPixel = '24px ',
}

export enum IconFlex {
    none = 'none',
    auto = 'auto',
    initial = 'initial',
}

export enum IconCursor {
    pointer = 'pointer',
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
    flex?: IconFlex,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    cursor?: IconCursor,
}

const GenericIcon = React.forwardRef<any, IconProps>(({
  onClick,
  Icon,
  color = IconColor.grey,
  size = IconSize.large,
  hoverColor = color,
  marginRight = IconMargin.zero,
  marginDown = IconMargin.zero,
  marginLeft = IconMargin.zero,
  marginTop = IconMargin.zero,
  flex = '',
  cursor = '',
}, ref) => {
  const margin = marginTop + marginRight + marginDown + marginLeft
  const classes = useStyles({
    color, size, hoverColor, margin, flex, cursor,
  })
  return (
    <Icon className={classes.iconStyle} ref={ref} onClick={onClick} />
  )
})

export { GenericIcon }
