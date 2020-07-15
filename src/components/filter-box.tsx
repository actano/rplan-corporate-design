import React, { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash/debounce'
import classnames from 'classnames'

import { makeStyles } from '@material-ui/styles'

import { DefaultDialogBoxInput } from '../inputs'
import { testIdProp } from '../shared/test-ids'
import { noop } from '../shared/type-utils'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

import { testIds } from './test-ids'

export enum FilterRule {
  andFilter = 'andFilter',
  exactMatch = 'exactMatch',
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  searchTermInput: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}))

// TODO: Remove this ugly workaround after ts conversion of DefaultDialogBoxInput
const DefaultDialogBoxInputAsAny = DefaultDialogBoxInput as any

const andFilter = (item, props, searchTerm) => {
  const getAllOptions = o => o.reduce((acc, e, i) => acc.concat(`${acc.slice(i - 1).join(' ')} ${e}`), []).map(e => e.substr(1))
  const searchKeys = searchTerm.split(' ').filter(e => e.length)
  const allKeyOptions = searchKeys.reduce((acc, e, i) => acc.concat(
    [getAllOptions(searchKeys.slice(i))],
  ), [])
  let hits = 0

  for (const sk of allKeyOptions) {
    if (props.some((p) => {
      const itemProp = item[p] || ''
      return sk.some(k => itemProp.toLowerCase().includes(k))
    })) {
      hits += 1
    }
  }

  return hits === allKeyOptions.length
}

const filterPropsForSearchTerm = (props, searchTerm, rule) => (item) => {
  switch (rule) {
    case FilterRule.andFilter:
      return andFilter(item, props, searchTerm)

    default:
      return props.some((prop) => {
        const itemProp = item[prop] || ''
        return itemProp.toLowerCase().includes(searchTerm)
      })
  }
}

interface FilterBoxProps<T> {
  items?: T[],
  filterBy: (keyof T)[],
  setFilteredItems?: (filteredItems: T[]) => void,
  placeholder?: string,
  startAdornment?: JSX.Element,
  className?: string,
  testId?: string,
  rule?: FilterRule,
}

function FilterBox<T>({
  items = [],
  filterBy,
  setFilteredItems = noop,
  placeholder = 'Search and filter',
  testId = testIds.filterBox,
  startAdornment,
  className,
  rule = FilterRule.exactMatch,
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
        .filter(filterPropsForSearchTerm(filterBy, searchTerm.toLowerCase(), rule)))
    },
    [rule, filterBy, items, searchTerm, setFilteredItems],
  )

  return (
    <>
      <DefaultDialogBoxInputAsAny
        autoFocus
        className={classnames(classes.searchTermInput, className)}
        originalValue={searchTerm}
        onSave={(value) => { setSearchTermDelayed(value) }}
        onChange={(event) => { setSearchTermDelayed(event.target.value) }}
        placeholder={placeholder}
        startAdornment={startAdornment}
        {...testIdProp(testId)}
      />
    </>
  )
}

export { FilterBox, FilterBoxProps }
