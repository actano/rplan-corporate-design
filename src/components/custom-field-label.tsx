import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { themeConfig } from '../theme/theme-config'

interface CustomFieldLabelProps {
  bgColor?: string
  fontSize?: number | string
  decorator?: React.ReactNode
}

type CustomFieldLabelStyleProps = Pick<CustomFieldLabelProps, 'bgColor' | 'fontSize'>

const checkColorIsDark = (color) => {
  const lightColors = [
    undefined,
    null,
    themeConfig.palette.support.lightestBlue,
    themeConfig.palette.support.turquoise20,
    themeConfig.palette.support.lightOrange,
    themeConfig.palette.support.lightPeach,
    themeConfig.palette.support.lightRed,
  ]
  return !!lightColors.includes(color)
}

const useStyles = makeStyles<CorporateDesignTheme, CustomFieldLabelStyleProps>(theme => ({
  root: ({ bgColor }) => ({
    display: 'flex',
    flex: 'none',
    justifyContent: 'center',
    padding: theme.spacing(0.5, 1),
    borderRadius: '2px',
    width: 'max-content',
    maxWidth: '8rem',
    backgroundColor: bgColor || 'transparent',
  }),
  text: ({ bgColor, fontSize }) => ({
    fontSize: fontSize || '0.8125rem',
    color: checkColorIsDark(bgColor)
      ? theme.palette.colors.darkestGrey
      : theme.palette.colors.white,
  }),
}))

const CustomFieldLabel: React.FunctionComponent<CustomFieldLabelProps> = ({
  decorator,
  bgColor,
  fontSize,
  children,
}) => {
  const classes = useStyles({ bgColor, fontSize })
  return (
    <div className={classes.root}>
      {decorator}
      <Typography className={classes.text} noWrap>
        {children}
      </Typography>
    </div>
  )
}

export { CustomFieldLabel }
