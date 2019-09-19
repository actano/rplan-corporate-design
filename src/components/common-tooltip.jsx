import { withStyles } from '@material-ui/styles'
import { Tooltip } from '@material-ui/core'

const CommonTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.colors.darkGrey,
    color: theme.palette.colors.white,
    boxShadow: '0 3px 5px 0 rgba(63,63,68,0.15)',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
}))(Tooltip)

export { CommonTooltip }
