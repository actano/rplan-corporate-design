import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles, IconButton } from '@material-ui/core'

import { NonCollapsingAccordionSummary } from './non-collapsing-accordion-summary'

const useStyles = makeStyles((theme) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  }

  return {
    summary: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        flex: 'none',
      },
      width: '100%',
    },
    headline: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headlineContent: {
      flex: '1 1 auto',
    },
    expandIcon: {
      flex: 'none',
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&$expanded': {
        transform: 'rotate(180deg)',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    expanded: {},
  }
})

interface PropTypes {
  expanded?: boolean,
  expandIcon?: React.ReactNode,
  disabled?: boolean,
  IconButtonProps?: { [key: string]: unknown },
  [key: string]: unknown,
}

/*
This extends the original `AccordionSummary` component to support multiple lines while keeping
the expand icon in the top-right position. It provides the same interface as the original component.
Additionally the first child will be treated as the headline and all remaining children will be
rendered als separate lines.
 */
const MultilineAccordionSummary: React.FC<PropTypes> = ({
  children,
  expanded,
  expandIcon,
  disabled = false,
  IconButtonProps,
  ...props
}) => {
  const classes = useStyles()
  const [firstLine, ...remainingLines] = React.Children.toArray(children)

  return (
    <NonCollapsingAccordionSummary
      expanded={expanded}
      disabled={disabled}
      {...props}
    >
      <div className={classes.summary}>
        <div className={classes.headline}>
          <div className={classes.headlineContent}>
            {firstLine}
          </div>
          {expandIcon && (
            <IconButton
              disabled={disabled}
              className={classnames(classes.expandIcon, { [classes.expanded]: expanded })}
              edge="end"
              component="div"
              tabIndex={-1}
              aria-hidden
              {...IconButtonProps}
            >
              {expandIcon}
            </IconButton>
          )}
        </div>
        {remainingLines}
      </div>
    </NonCollapsingAccordionSummary>
  )
}

export {
  MultilineAccordionSummary,
}
