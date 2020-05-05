import React, { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash/debounce'
import { DefaultDialogBoxInput } from '@rplan/corporate-design'
import { makeStyles } from '@material-ui/styles'

import { testIdProp } from '../shared/test-ids'
import { testIds } from './test-ids'
import { CorporateDesignTheme } from '../corporate-design-theme'
import { noop } from '../type-utils'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  searchTermInput: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}))

const filterPropsForSearchTerm = (props, searchTerm) => item =>
  props.some((prop) => {
    const itemProp = item[prop] || ''
    return itemProp.toLowerCase().includes(searchTerm)
  })

interface FilterBoxProps<T> {
  items?: T[],
  filterBy: (keyof T)[],
  setFilteredItems?: (filteredItems: T[]) => void,
  placeholder?: string,
}

function FilterBox<T>({
  items = [],
  filterBy,
  setFilteredItems = noop,
  placeholder = 'Search and filter',
}: FilterBoxProps<T>) {
  const classes = useStyles()

  const [searchTerm, setSearchTerm] = useState('')

  const setSearchTermDelayed = useMemo(
    () => debounce(setSearchTerm, 100),
    [setSearchTerm],
  )

  useEffect(
    () => {
      setFilteredItems(items
        .filter(filterPropsForSearchTerm(filterBy, searchTerm.toLowerCase())))
    },
    [filterBy, items, searchTerm, setFilteredItems],
  )

  return (
    <DefaultDialogBoxInput
      autoFocus
      className={classes.searchTermInput}
      originalValue={searchTerm}
      onSave={(value) => { setSearchTermDelayed(value) }}
      onChange={(event) => { setSearchTermDelayed(event.target.value) }}
      placeholder={placeholder}
      {...testIdProp(testIds.filterBox)}
    />
  )
}

export { FilterBox, FilterBoxProps }
