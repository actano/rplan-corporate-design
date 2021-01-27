import omit from 'lodash/omit'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { AccordionSummary, makeStyles } from '@material-ui/core'
import ExpandIcon from '@material-ui/icons/ChevronRight'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>((theme) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  }
  return {
    root: {
      minHeight: theme.spacing(8),
    },
    button: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&$expanded': {
        transform: 'rotate(90deg)',
      },
      '&:hover': {
        color: theme.palette.colors.darkerGrey,
      },
    },
    expanded: {},
  }
})

interface PropTypes {
  className?: string,
  showExpandIcon?: boolean,
  [key: string]: unknown,
}

const filterProps = props => omit(props, 'expandIcon')
/*
  In contrast to the default expansion panel, this panel does not reduce its height when collapsed.
 */
const NonCollapsingAccordionSummary: React.FC<PropTypes> = ({
  children,
  className,
  showExpandIcon = true,
  ...props
}) => {
  const classes = useStyles()

  return (
    <AccordionSummary
      className={classnames(classes.root, className)}
      classes={{
        expandIcon: classes.button,
        expanded: classes.expanded,
      }}
      expandIcon={showExpandIcon ? <ExpandIcon /> : null}
      {...filterProps(props)}
    >
      { children }
    </AccordionSummary>
  )
}

export { NonCollapsingAccordionSummary }
