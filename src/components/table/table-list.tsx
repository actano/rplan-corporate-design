import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableCellProps,
} from '@material-ui/core'
import classNames from 'classnames'
import { CorporateDesignTheme } from '../..'

interface TableListColumnDefinition {
  name: string,
  width: number,
  headerAlignment?: TableCellProps['align'],
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  table: {
    tableLayout: 'fixed',
    fontWeight: 'normal',
    borderSpacing: theme.spacing(0, 1),
    borderCollapse: 'separate',

    overflow: 'hidden',
  },
}))

interface TableListProps {
  className?: object
  columnDefinitions: TableListColumnDefinition[]
  showHeaders?: boolean
  children?: React.ReactNode
}

const TableList = React.forwardRef<any, TableListProps>(({
  className,
  columnDefinitions,
  showHeaders = false,
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
            style={{
              width: column.width,
            }}
          />
        ))}
      </colgroup>
      <TableHead>
        {showHeaders && (
        <TableRow>
          {
            columnDefinitions.map((column, index) => (
              <TableCell
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                align={column.headerAlignment || 'inherit'}
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

export { TableList, TableListColumnDefinition }
