import React from 'react'
import { makeStyles, InputLabel } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  label: {
    marginBottom: theme.spacing(0.75),
    color: theme.palette.text.title,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '1.2',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

interface InputWithLabelProps {
  label: string
  children: React.Component
}

const InputWithLabel: React.FunctionComponent<InputWithLabelProps> = ({
  label,
  children,
}) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <InputLabel
        className={classes.label}
      >
        {label}
      </InputLabel>
      {children}
    </React.Fragment>
  )
}

export { InputWithLabel }
