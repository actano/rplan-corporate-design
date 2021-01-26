import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { CommonTooltip } from './common-tooltip'

export enum Display {
  NORMAL = 'normal',
  WARN = 'warn',
}

export type DisplayElement = {
  text: string,
  display: Display,
}

export type DisplayElementContainer = {
  elements: DisplayElement[],
  tooltip: string,
  onClick?: () => void,
}

interface FormattedDisplayProps {
  displayElements: DisplayElementContainer,
  className?: string,
  rootClassName?: string,
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  formattedText: {
    fontWeight: 600,
    fontSize: theme.spacing(1.5),
  },
  warning: {
    color: theme.palette.colors.red,
  },
  normal: {
    color: theme.palette.colors.grey,
  },
}))

const FormattedDisplay: React.FC<FormattedDisplayProps> = ({
  displayElements,
  rootClassName,
  className,
}) => {
  const classes = useStyles()
  return (
    <CommonTooltip title={displayElements.tooltip}>
      <div
        className={classnames(classes.root, rootClassName)}
        onClick={displayElements.onClick}
        role="presentation"
      >
        {displayElements.elements.map((element, index) => (
          <Typography
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            className={classnames(
              classes.formattedText,
              className,
              element.display === Display.WARN ? classes.warning : classes.normal,
            )}
            variant="body1"
            noWrap
          >
            {element.text}
            {'\u00A0'}
          </Typography>
        ))
      }
      </div>
    </CommonTooltip>
  )
}
export { FormattedDisplay }
