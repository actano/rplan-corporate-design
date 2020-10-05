import React, { useState } from 'react'

import { CommonSelect } from '../../../../src'

const options = [
  {
    id: 'first',
    value: 'First',
  },
  {
    id: 'second',
    value: 'Second',
  },
  {
    id: 'third',
    value: 'Third',
  },
]

const SelectStateWrapper = (props) => {
  const [firstOption] = options
  const [value, setValue] = useState<string>(firstOption.id)
  const onChange = val => setValue(val)

  return (
    <CommonSelect
      options={options}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export { SelectStateWrapper }
