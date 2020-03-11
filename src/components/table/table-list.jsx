import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  table: {
    tableLayout: 'fixed',
    fontWeight: 'normal',
    fontSize: theme.spacing(1.875),
    borderSpacing: `0 ${theme.spacing(2)}px`,
    borderCollapse: 'separate',
    marginTop: `-${theme.spacing(3)}px`,
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(2),
    },
  },
}))

const TableList = ({
  columnDefinitions,
  showHeaders,
  children,
}) => {
  const classes = useStyles()
  return (
    <Table
      className={classes.table}
    >
      <colgroup>
        {columnDefinitions.map((column, index) => (
          column.width
            // eslint-disable-next-line react/no-array-index-key
            ? <col key={index} width={column.width} />
            // eslint-disable-next-line react/no-array-index-key
            : <col key={index} />
        ))}
      </colgroup>
      <TableHead>
        {showHeaders && (
        <TableRow>
          {columnDefinitions.map(column => (
            <TableCell>{column.name && column.name}</TableCell>
          ))}
        </TableRow>
        )}
      </TableHead>
      <TableBody>
        {children.map(row => (
          row
        ))}
      </TableBody>
    </Table>
  )
}

TableList.propTypes = {
  columnDefinitions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    width: PropTypes.string,
  })).isRequired,
  showHeaders: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

TableList.defaultProps = {
  showHeaders: false,
}

export { TableList }
