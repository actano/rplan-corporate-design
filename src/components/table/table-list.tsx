import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import classNames from 'classnames'
import { CorporateDesignTheme } from '../..'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  table: {
    tableLayout: 'fixed',
    fontWeight: 'normal',
    borderSpacing: `0 ${theme.spacing(2)}px`,
    borderCollapse: 'separate',
    padding: '0px 1px', // exactly on px padding in order to show the borders of the rows

    overflow: 'hidden',
  },
}))

const TableList = React.forwardRef<any, any>(({
  className,
  columnDefinitions,
  showHeaders,
  children,
}, ref) => {
  const classes = useStyles()
  return (
    <Table
      className={classNames(className, classes.table)}
      ref={ref}
    >
      <colgroup>
        {columnDefinitions.map((column, index) => (
          <col
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={
              column.minWidth
                ? {
                  minWidth: column.minWidth,
                } : {
                  width: column.width,
                }
            }
          />
        ))}
      </colgroup>
      <TableHead>
        {showHeaders && (
        <TableRow>
          {
            columnDefinitions.map((column, index) => (
              <TableCell
                style={
                  column.minWidth
                    ? {
                      minWidth: column.minWidth,
                    } : {
                      width: column.width,
                    }
                }
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                { column.name }
              </TableCell>
            ))
          }
        </TableRow>
        )}
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  )
})

TableList.defaultProps = {
  className: undefined,
  showHeaders: false,
}

export { TableList }
