import React from 'react'

interface Props {
  someValue?: string,
}

const ExampleComponent: React.FC<Props> = ({ someValue }) => (
  <div>
    An example component
    <br />
    Property value:
    {' '}
    { someValue || 'undefined' }
  </div>
)

export { ExampleComponent }
