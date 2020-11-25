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

export type FormattedDate = {
  display: Display,
  text: string,
  tooltip: string,
}

interface FormattedDateDisplayProps {
  formattedDate: FormattedDate,
  className?: string,
}

interface StylesProps {
  display: Display,
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>(theme => ({
  formattedText: ({ display }) => ({
    color: display === Display.WARN
      ? theme.palette.colors.red
      : theme.palette.colors.grey,
    fontWeight: 600,
    fontSize: theme.spacing(1.5),
  }),
}))

const FormattedDateDisplay: React.FC<FormattedDateDisplayProps> = ({
  formattedDate,
  className,
}) => {
  const classes = useStyles({ display: formattedDate.display })
  return (
    <CommonTooltip title={formattedDate.tooltip}>
      <Typography
        className={classnames(classes.formattedText, className)}
        variant="body1"
        noWrap
      >
        {formattedDate.text}
      </Typography>
    </CommonTooltip>
  )
}
export { FormattedDateDisplay }
