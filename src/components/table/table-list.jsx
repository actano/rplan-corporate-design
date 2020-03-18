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
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
  table: {
    tableLayout: 'fixed',
    fontWeight: 'normal',
    borderSpacing: `0 ${theme.spacing(2)}px`,
    borderCollapse: 'separate',
    padding: '0px 1px', // exactly on px padding in order to show the borders of the rows

    overflow: 'hidden',
  },
}))

const TableList = ({
  className,
  columnDefinitions,
  showHeaders,
  children,
}) => {
  const classes = useStyles()
  return (
    <Table
      className={classNames(className, classes.table)}
    >
      <colgroup>
        {columnDefinitions.map((column, index) => (
          <col
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{
              width: column.width,
            }}
          />
        ))}
      </colgroup>
      <TableHead>
        {showHeaders && (
        <TableRow>
          {columnDefinitions.map(column => (
            <TableCell>{column.name}</TableCell>
          ))}
        </TableRow>
        )}
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  )
}

TableList.propTypes = {
  className: PropTypes.string,
  columnDefinitions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    width: PropTypes.string,
  })).isRequired,
  showHeaders: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

TableList.defaultProps = {
  className: undefined,
  showHeaders: false,
}

export { TableList }
