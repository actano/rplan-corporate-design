import React, { useEffect, useState, useCallback } from 'react'
import classnames from 'classnames'

import { makeStyles } from '@material-ui/styles'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import Sort from '@material-ui/icons/Sort'

import {
  Select, ListItemText, MenuItem,
} from '@material-ui/core'

import { client as sentryClient } from '@rplan/sentry-webclient'
import { testIdProp } from '../shared/test-ids'
import { noop } from '../shared/type-utils'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

import { testIds } from './test-ids'

export interface SortBoxStyleProps {
  disabled: boolean,
}

const useStyles = makeStyles<CorporateDesignTheme, SortBoxStyleProps>(theme => ({
  sortIcon: {
    color: ({ disabled }) => (disabled
      ? theme.palette.colors.lightGrey
      : theme.palette.colors.grey),
    fontSize: theme.spacing(2.5),
  },
  select: {
    fontSize: theme.spacing(1.625),
    paddingLeft: theme.spacing(2),
    whiteSpace: 'normal',
    cursor: ({ disabled }) => (disabled ? 'arrow' : 'pointer'),
  },
  selectItemText: {
    color: ({ disabled }) => (disabled
      ? theme.palette.colors.lightGrey
      : theme.palette.colors.black),

    fontWeight: theme.spacing(75),
    padding: 'unset',
    '&:focus': {
      backgroundColor: 'unset',
    },
  },
  selectItemIcon: {
    color: ({ disabled }) => (disabled
      ? theme.palette.colors.lightGrey
      : theme.palette.colors.grey),
    fontSize: theme.spacing(2.5),
    marginTop: theme.spacing(0.15),
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
  },
  selectedText: {
    color: theme.palette.colors.black,
    fontWeight: theme.spacing(75),
  },
  defaultText: {
    color: theme.palette.colors.darkGrey,
  },
  enabled: {
    '&:hover': {
      borderColor: theme.palette.colors.grey,
      cursor: 'pointer',
    },
  },
  sortBox: {
    whiteSpace: 'nowrap',
    height: theme.spacing(4.75),
    borderWidth: theme.spacing(0.125),
    borderColor: ({ disabled }) => (disabled
      ? theme.palette.colors.veryLightGrey
      : theme.palette.colors.lightGrey),
    borderStyle: 'solid',
    borderRadius: theme.spacing(0.25),
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(0.75, 2),
    '&:focus': { outline: 0 },
    alignItems: 'center',
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
  order?: SortOrder,
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortResult<T> {
  data: T[],
  sortBy: string,
}

export interface SortBoxProps<T> {
  data: T[],
  sortFields: SortField[],
  defaultSortFieldName: string,
  setSortedData: (result: SortResult<T>) => void,
  labelPrefix: string,
  classes?: string,
  testId?: string,
  disabled?: boolean,
}

export function SortBox<T>({
  data,
  sortFields,
  defaultSortFieldName,
  setSortedData = noop,
  labelPrefix,
  classes,
  testId = testIds.sortBox,
  disabled = false,
}: SortBoxProps<T>) {
  const ownClasses = useStyles({ disabled })

  const [activeSortFieldName, setActiveSortFieldName] = useState('')
  useEffect(() => {
    setActiveSortFieldName(defaultSortFieldName)
  }, [defaultSortFieldName])

  const changeSortName = useCallback((newSortFieldName) => {
    if (newSortFieldName !== activeSortFieldName) {
      setActiveSortFieldName(newSortFieldName)
    }
  }, [activeSortFieldName])

  const getSortProperty = useCallback((t: T, sortField: string[]): any => {
    let sortProperty = t
    sortField.forEach((item) => {
      sortProperty = sortProperty ? sortProperty[item] : null
    })
    return sortProperty
  }, [])

  const logToSentry = (entity, property, pathToProperty) => {
    sentryClient.withScope((scope) => {
      scope.setTag('type', 'sortBox')
      scope.setExtra('module', 'corporate-design')
      scope.setLevel(sentryClient.Severity.Warning)
      sentryClient.captureException(new Error(
        `Call sort on field type String with property === ${property} === `
        + `of type === ${typeof property} === `
        + `from entity === ${entity} === `
        + `with sort path === ${pathToProperty}`,
      ))
    })
  }

  const compareElements = useCallback((t1: T, t2: T, sortField: SortField) => {
    const p1 = sortField.sortFieldPath ? getSortProperty(t1, sortField.sortFieldPath) : t1
    const p2 = sortField.sortFieldPath ? getSortProperty(t2, sortField.sortFieldPath) : t2
    const order = sortField.order || SortOrder.ASC

    if (!p1 && !p2) return 0
    if (!p1) return order === SortOrder.ASC ? -1 : 1
    if (!p2) return order === SortOrder.ASC ? 1 : -1
    let s1
    let s2
    switch (sortField.fieldType) {
      case SortFieldType.STRING: {
        if (!(p1 instanceof String)) {
          logToSentry(t1, p1, sortField.sortFieldPath)
        }
        if (!(p2 instanceof String)) {
          logToSentry(t2, p2, sortField.sortFieldPath)
        }
        s1 = JSON.stringify(p1)
        s2 = JSON.stringify(p2)
        return order === SortOrder.ASC
          ? s1.localeCompare(s2)
          : s2.localeCompare(s1)
      }
      case SortFieldType.LOCAL_DATE:
        return order === SortOrder.ASC ? p1.compareTo(p2) : p2.compareTo(p1)
      default: throw new Error('Missing or wrong sort field type.')
    }
  }, [getSortProperty])

  useEffect(
    () => {
      const getSortFieldByName = name => sortFields.find(item => item.sortName === name)
      const sortField = getSortFieldByName(activeSortFieldName)
      if (!sortField || (sortField.fieldType === SortFieldType.DEFAULT)) {
        setSortedData({ data, sortBy: activeSortFieldName || defaultSortFieldName })
      } else {
        const dataToSort = [...data]
        dataToSort.sort((t1, t2) => compareElements(t1, t2, sortField))
        setSortedData({ data: dataToSort, sortBy: activeSortFieldName })
      }
    },
    [activeSortFieldName, compareElements, data, setSortedData, sortFields, defaultSortFieldName],
  )

  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false)
  const openCloseSortMenu = useCallback(() => {
    setIsSortMenuOpen(!isSortMenuOpen)
  }, [isSortMenuOpen])

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classnames(ownClasses.sortBox, {
        [ownClasses.enabled]: !disabled,
      })}
      onClick={() => !disabled && openCloseSortMenu()}
      role="button"
      tabIndex={0}
    >
      <Sort className={ownClasses.sortIcon} />
      <Select
        disableUnderline
        open={isSortMenuOpen}
        className={classnames(classes, ownClasses.select)}
        classes={{
          icon: ownClasses.selectItemIcon,
          select: ownClasses.selectItemText,
        }}
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
        disabled={disabled}
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
