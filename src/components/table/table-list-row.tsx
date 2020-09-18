import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  TableRow,
} from '@material-ui/core'

import { CorporateDesignTheme, rgbaString } from '../..'

interface StyleProps {
  isClickable: boolean,
  height: string,
}

const useStyles = makeStyles<CorporateDesignTheme, StyleProps>(theme => ({
  row: ({ isClickable, height }) => ({
    backgroundColor: theme.palette.colors.white,
    height,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 3px 5px ${theme.palette.colors.veryLightGrey}`,
      cursor: isClickable ? 'pointer' : 'auto',
    },
    '& > *': {
      borderBottom: 'unset',
    },

    '& td': {
      transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      borderColor: theme.palette.colors.veryLightGrey,
      borderStyle: 'solid',
      borderWidth: '1px 0',
    },
    '& td:first-child': {
      borderLeftWidth: '1px',
      borderRadius: '2px 0 0 2px',
    },
    '& td:last-child': {
      borderRightWidth: '1px',
      borderRadius: ' 0 2px 2px 0',
    },
    '&:hover td': {
      borderColor: rgbaString(theme.palette.colors.blue, 0.30),
    },
  }),
}))

const TableListRow = React.forwardRef<any, any>(({
  children,
  onClick,
  height,
  ...otherProps
}, ref) => {
  const classes = useStyles({ isClickable: onClick != null, height })
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

export { TableListRow }
