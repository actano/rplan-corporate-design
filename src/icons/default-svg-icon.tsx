import classnames from 'classnames'
import React from 'react'

import { SvgIcon, SvgIconProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'

export interface DefaultSvgIconProps extends SvgIconProps {
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  icon: {
    color: theme.palette.colors.grey,
  },
}))

const DefaultSvgIcon: React.FC<DefaultSvgIconProps> = (
  props,
) => {
  const classes = useStyles()

  return (
    <SvgIcon
      className={classnames(classes.icon, props.className)}
      {...props}
    />
  )
}

export {
  DefaultSvgIcon,
}
