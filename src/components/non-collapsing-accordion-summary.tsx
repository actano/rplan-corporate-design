import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { AccordionSummary, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(8),
  },
}))

interface PropTypes {
  className?: string,
  [key: string]: unknown,
}

/*
  In contrast to the default expansion panel, this panel does not reduce its height when collapsed.
 */
const NonCollapsingAccordionSummary: React.FC<PropTypes> = ({
  children,
  className,
  ...props
}) => {
  const classes = useStyles()

  return (
    <AccordionSummary
      className={classnames(classes.root, className)}
      {...props}
    >
      { children }
    </AccordionSummary>
  )
}

export { NonCollapsingAccordionSummary }
