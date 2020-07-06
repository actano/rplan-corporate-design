import React, { useEffect, useMemo, useState } from 'react'
import debounce from 'lodash/debounce'
import _uniq from 'lodash/uniq'
import _isEqual from 'lodash/isEqual'

import { makeStyles } from '@material-ui/styles'

import { DefaultDialogBoxInput } from '../inputs'
import { testIdProp } from '../shared/test-ids'
import { noop } from '../shared/type-utils'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

import { testIds } from './test-ids'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  searchTermInput: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}))

// TODO: Remove this ugly workaround after ts conversion of DefaultDialogBoxInput
const DefaultDialogBoxInputAsAny = DefaultDialogBoxInput as any

const filterPropsForSearchTerm = (props, searchTerm, andFilterRules) => (item) => {
  if (andFilterRules) {
    const acc: string[] = []
    const searchKeys = searchTerm.split(' ').filter(e => e.length)

    props.forEach((prop) => {
      const itemProp = item[prop] || ''
      searchKeys.some((key) => {
        const eq = itemProp.toLowerCase().includes(key)
        if (eq) acc.push(key)
        return eq
      })
    })
    return _isEqual(searchKeys.sort(), _uniq(acc).sort())
  }
  return props.some((prop) => {
    const itemProp = item[prop] || ''
    return itemProp.toLowerCase().includes(searchTerm)
  })
}

interface FilterBoxProps<T> {
  items?: T[],
  filterBy: (keyof T)[],
  setFilteredItems?: (filteredItems: T[]) => void,
  placeholder?: string,
  startAdornment?: JSX.Element,
  classNames?: string[],
  testId?: string,
  andFilterRules?: boolean,
}

function FilterBox<T>({
  items = [],
  filterBy,
  setFilteredItems = noop,
  placeholder = 'Search and filter',
  testId = testIds.filterBox,
  startAdornment,
  classNames = [],
  andFilterRules = false,
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
        .filter(filterPropsForSearchTerm(filterBy, searchTerm.toLowerCase(), andFilterRules)))
    },
    [andFilterRules, filterBy, items, searchTerm, setFilteredItems],
  )

  return (
    <>
      <DefaultDialogBoxInputAsAny
        autoFocus
        className={[classes.searchTermInput, ...classNames]}
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
