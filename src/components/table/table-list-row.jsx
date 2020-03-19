import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  TableRow,
} from '@material-ui/core'

import { rgbaString } from '../..'

const useStyles = makeStyles(theme => ({
  row: ({ isClickable }) => ({
    backgroundColor: theme.palette.colors.white,
    boxShadow: 'none',
    outline: `1px solid ${theme.palette.colors.veryLightGrey}`,
    transition: 'outline 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      boxShadow: `0 3px 5px ${theme.palette.colors.veryLightGrey}`,
      outline: `1px solid ${rgbaString(theme.palette.colors.blue, 0.30)}`,
      cursor: isClickable ? 'pointer' : 'auto',
    },
    '& > *': {
      borderBottom: 'unset',
    },
  }),
}))

const TableListRow = React.forwardRef(({
  children,
  onClick,
  ...otherProps
}, ref) => {
  const classes = useStyles({ isClickable: onClick != null })
  return (
    <TableRow
      {...otherProps}
      ref={ref}
      onClick={onClick}
      className={classes.row}
    >
      {children}
    </TableRow>
  )
})

TableListRow.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

TableListRow.defaultProps = {
  onClick: undefined,
}

export { TableListRow }
