import React, { ComponentType } from 'react'
import { makeStyles } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { MilestoneIconType } from './milestone-constants'

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
    fourPixel = '4px ',
    /** @deprecated typo use eightPixel */
    eigthPixel = '8px ',
    eightPixel = '8px ',
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
    lighterBlue = 'lighterBlue',
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
    hoverColor?: IconHoverColor,
    marginRight?: IconMargin,
    marginDown?: IconMargin,
    marginLeft?: IconMargin,
    marginTop?: IconMargin,
    flex?: IconFlex,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void,
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void,
    cursor?: IconCursor,
    type?: MilestoneIconType,
    linked?: boolean,
    tooltipText?: string,
}

const GenericIcon = React.forwardRef<any, IconProps>(({
  onClick,
  onMouseEnter,
  onMouseLeave,
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
  type,
  linked,
  tooltipText,
}, ref) => {
  const margin = marginTop + marginRight + marginDown + marginLeft
  const classes = useStyles({
    color, size, hoverColor, margin, flex, cursor,
  })
  return (
    <Icon
      className={classes.iconStyle}
      type={type}
      ref={ref}
      linked={linked}
      color={color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tooltipText={tooltipText}
    />
  )
})

export { GenericIcon }
