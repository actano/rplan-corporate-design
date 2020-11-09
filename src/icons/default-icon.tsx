import classnames from 'classnames'
import React from 'react'

import { IconProps } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'

export interface DefaultIconProps extends IconProps {
  Component: React.Component,
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  icon: {
    color: theme.palette.colors.grey,
  },
}))

const DefaultIcon: React.FC<DefaultIconProps> = (
  { Component, ...props },
) => {
  const classes = useStyles()

  return (
    <Component
      className={classnames(classes.icon, props.className)}
      {...props}
    />
  )
}

const makeDefaultIcon: (component: React.Component) => React.FC<DefaultIconProps> =
  (Component) =>
    (props) => {
      const classes = useStyles()

      return (
        <Component
          className={classnames(classes.icon, props.className)}
          {...props}
        />
      )
    }

export {
  DefaultIcon,
  makeDefaultIcon,
}
