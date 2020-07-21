import React, { useEffect, useState, useCallback } from 'react'
import classnames from 'classnames'

import { makeStyles } from '@material-ui/styles'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import Sort from '@material-ui/icons/Sort'

import {
  Select, ListItemText, MenuItem,
} from '@material-ui/core'
import { testIdProp } from '../shared/test-ids'
import { noop } from '../shared/type-utils'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

import { testIds } from './test-ids'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  sortIcon: {
    color: theme.palette.colors.blue,
  },
  select: {
    fontSize: theme.spacing(1.625),
    paddingLeft: theme.spacing(2),
  },
  selectItemText: {
    color: theme.palette.colors.black,
    fontWeight: 600,
    padding: 'unset',
    '&:focus': {
      backgroundColor: 'unset',
    },
  },
  selectItemIcon: {
    color: theme.palette.colors.grey,
  },
  listItem: {
    fontSize: theme.spacing(1.625),
    color: theme.palette.colors.darkGrey,
  },
  listItemSelected: {
    backgroundColor: theme.palette.colors.white,
    '&:hover': {
      backgroundColor: theme.palette.colors.veryLightGrey,
    },
    '&:focus': {
      backgroundColor: theme.palette.colors.white,
    },
    '&$selectMenuItemSelected': {
      '&:hover': {
        backgroundColor: theme.palette.colors.veryLightGrey,
      },
      '&:focus': {
        backgroundColor: theme.palette.colors.white,
      },
    },
  },
  selectedText: {
    color: theme.palette.colors.black,
    fontWeight: 600,
  },
  defaultText: {
    color: theme.palette.colors.darkGrey,
  },
  sortBox: {
    minWidth: theme.spacing(22),
    height: theme.spacing(4.75),
    borderWidth: theme.spacing(0.125),
    borderColor: theme.palette.colors.veryLightGrey,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(0.75, 2),
  },
}))

export enum SortFieldType {
  DEFAULT = 'default',
  STRING = 'string',
  LOCAL_DATE = 'local_date',
}
export interface SortField {
  sortName: string,
  fieldType: SortFieldType,
  sortFieldPath?: string[],
}

interface SortBoxProps<T> {
  data: T[],
  sortFields: SortField[],
  defaultSortFieldName: string,
  setSortedData: (sortedData: T[]) => void,
  labelPrefix: string,
  classes?: string,
  testId?: string,
}

export function SortBox<T>({
  data,
  sortFields,
  defaultSortFieldName,
  setSortedData = noop,
  labelPrefix,
  classes,
  testId = testIds.sortBox,
}: SortBoxProps<T>) {
  const ownClasses = useStyles()

  const [activeSortFieldName, setActiveSortFieldName] = useState('')
  useEffect(() => {
    setActiveSortFieldName(defaultSortFieldName)
  }, [defaultSortFieldName])

  const changeSortName = useCallback((newSortFieldName) => {
    if (newSortFieldName !== activeSortFieldName) {
      setActiveSortFieldName(newSortFieldName)
    }
  }, [activeSortFieldName])

  const getSortProperty = useCallback((t: T, sortField: string[]) :any => {
    let sortProperty = t
    sortField.forEach((item) => { sortProperty = sortProperty[item] })
    return sortProperty
  }, [])

  const compareElements = useCallback((t1: T, t2: T, sortField: SortField) => {
    const p1 = sortField.sortFieldPath ? getSortProperty(t1, sortField.sortFieldPath) : t1
    const p2 = sortField.sortFieldPath ? getSortProperty(t2, sortField.sortFieldPath) : t2
    if (!p1 && !p2) return 0
    if (!p1) return -1
    if (!p2) return 1
    switch (sortField.fieldType) {
      case SortFieldType.STRING:
        return p1.localeCompare(p2)
      case SortFieldType.LOCAL_DATE:
        return p1.compareTo(p2)
      default: throw new Error('Missing or wrong sort field type.')
    }
  }, [getSortProperty])

  useEffect(
    () => {
      const getSortFieldByName = name => sortFields.find(item => item.sortName === name)
      const sortField = getSortFieldByName(activeSortFieldName)
      if (!sortField || (sortField.fieldType === SortFieldType.DEFAULT)) {
        setSortedData(data)
      } else {
        const dataToSort = [...data]
        dataToSort.sort((t1, t2) => compareElements(t1, t2, sortField))
        setSortedData(dataToSort)
      }
    },
    [activeSortFieldName, compareElements, data, setSortedData, sortFields],
  )

  return (
    <div className={ownClasses.sortBox}>
      <Sort className={ownClasses.sortIcon} />
      <Select
        disableUnderline
        className={classnames(classes, ownClasses.select)}
        classes={{ icon: ownClasses.selectItemIcon, select: ownClasses.selectItemText }}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        }}
        value={activeSortFieldName}
        IconComponent={ExpandIcon}
        onChange={(event) => {
          changeSortName(event.target.value)
        }}
        renderValue={() => `${labelPrefix} ${activeSortFieldName}`}
        {...testIdProp(testId)}
      >
        {
          sortFields.map(sortField => (
            <MenuItem
              key={sortField.sortName}
              value={sortField.sortName}
              classes={{
                root: ownClasses.listItem,
                selected: ownClasses.listItemSelected,
              }}
            >
              <ListItemText
                classes={{
                  primary: (sortField.sortName === activeSortFieldName
                    ? ownClasses.selectedText
                    : ownClasses.defaultText),
                }}
                primary={`${labelPrefix} ${sortField.sortName}`}
              />
            </MenuItem>
          ))
        }
      </Select>
    </div>
  )
}
