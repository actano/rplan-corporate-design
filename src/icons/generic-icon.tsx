import React, { ComponentType } from 'react'
import { makeStyles, SvgIconProps, IconProps as MaterialUiIconProps } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface StyleProps {
    size: string,
    color: string,
    hoverColor: string,
    margin: string,
    cursor: string,
}

const useStyles = makeStyles<CorporateDesignTheme, StyleProps>(theme => ({
  iconStyle: ({
    color, size, hoverColor, margin, cursor,
  }) => ({
    color: theme.palette.colors[color],
    fontSize: size,
    margin,
    flex: 'none',
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
    eightPixel = '8px ',
    sixteenPixel = '16px ',
    twentyfourPixel = '24px ',
}

export enum IconCursor {
    pointer = 'pointer',
}

export enum IconColor {
    grey = 'grey',
    darkerGrey = 'darkerGrey',
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

export type SupportedGenericIconProps = MaterialUiIconProps | SvgIconProps

interface IconProps<T extends SupportedGenericIconProps = {}> {
    size?: IconSize,
    Icon: ComponentType<T>,
    color?: IconColor,
    hoverColor?: IconHoverColor,
    marginRight?: IconMargin,
    marginDown?: IconMargin,
    marginLeft?: IconMargin,
    marginTop?: IconMargin,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void,
    onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void,
    cursor?: IconCursor,
    iconProps?: Omit<T, 'className' | 'classes' | 'styles'>,
}

function GenericIcon_<T extends SupportedGenericIconProps>(props: IconProps<T>, ref) {
  const {
    onClick,
    onMouseEnter,
    onMouseLeave,
    Icon,
    color = IconColor.darkerGrey,
    size = IconSize.large,
    hoverColor = color,
    marginRight = IconMargin.zero,
    marginDown = IconMargin.zero,
    marginLeft = IconMargin.zero,
    marginTop = IconMargin.zero,
    cursor = '',
    iconProps = {},
  } = props
  const margin = marginTop + marginRight + marginDown + marginLeft
  const classes = useStyles({
    color, size, hoverColor, margin, cursor,
  })
  return (
    // We cannot ensure that `iconProps` is satisfying all properties of generic subtype T.
    // @ts-ignore-next-line
    <Icon
      className={classes.iconStyle}
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...iconProps}
    />
  )
}

const GenericIconRef = React.forwardRef(GenericIcon_)

function GenericIcon<T extends SupportedGenericIconProps>(props: IconProps<T>) {
  // @ts-ignore
  // `forwardRef` replaces the generic type T with `unknown`, therefore we must cast here
  return <GenericIconRef {...props} />
}

export { GenericIcon }
