import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ExpansionPanelSummary, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: theme.spacing(8),
  },
}))

/*
  In contrast to the default expansion panel, this panel does not reduce its height when collapsed.
 */
const NonCollapsingExpansionPanelSummary = ({
  children,
  className,
  ...props
}) => {
  const classes = useStyles()

  return (
    <ExpansionPanelSummary
      className={classnames(classes.root, className)}
      {...props}
    >
      { children }
    </ExpansionPanelSummary>
  )
}

NonCollapsingExpansionPanelSummary.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

NonCollapsingExpansionPanelSummary.defaultProps = {
  children: undefined,
  className: undefined,
}

export { NonCollapsingExpansionPanelSummary }
