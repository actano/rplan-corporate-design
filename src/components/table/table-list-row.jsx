import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  TableCell,
  TableRow,
} from '@material-ui/core'

import { rgbaString } from '../..'

const useStyles = makeStyles(theme => ({
  row: {
    backgroundColor: theme.palette.colors.white,
    boxShadow: 'none',
    border: '1px solid',
    outline: `1px solid ${theme.palette.colors.veryLightGrey}`,
    transition: 'outline 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      boxShadow: `0 3px 5px ${theme.palette.colors.veryLightGrey}`,
      outline: `1px solid ${rgbaString(theme.palette.colors.blue, 0.30)}`,
      cursor: 'pointer',
    },
    '& > *': {
      borderBottom: 'unset',
      padding: theme.spacing(2),
      color: theme.palette.colors.darkestGrey,
    },
  },
}))

const TableListRow = ({
  children,
  ...otherProps
}) => {
  const classes = useStyles()
  return (
    <TableRow
      {...otherProps}
      className={classes.row}
    >
      {children.map(cell => (
        <TableCell>{cell}</TableCell>
      ))}
    </TableRow>
  )
}

TableListRow.propTypes = {
  children: PropTypes.node.isRequired,
}

export { TableListRow }
