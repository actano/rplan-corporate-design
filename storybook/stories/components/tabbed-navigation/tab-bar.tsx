import React, { useEffect, useState } from 'react'

import { TabBar } from '../../../../src/components'

const tabs = [
  {
    text: 'Profile Settings',
    subUrl: 'first',
  },
  {
    text: 'Projects',
    subUrl: 'second',
  },
  {
    text: 'Members',
    subUrl: 'third',
  },
  {
    text: 'Organizations',
    subUrl: '4',
  },
  {
    text: 'Resource Settings',
    subUrl: '5',
  },
  {
    text: 'Settings',
    subUrl: '6',
  },
]

/*
When doing only one render, the indicator for the tabs has the wrong width.
This is due to the calculation of the width in material UI internally.
It takes the bounding rect and applies that for the next render.
 */
const LayoutFix = ({ children }) => {
  const [stateToReRender, setStateToReRender] = useState(0)

  const onChangeTab = (event, index) => {
    setStateToReRender(index)
  }

  useEffect(() => {
    setTimeout(() => {
      setStateToReRender(1)
    }, 100)
  }, [])

  return children(stateToReRender, onChangeTab)
}

export const TabBarWithDefaultState = args => (
  <LayoutFix>
    {(tabIndex, onChangeTab) => (
      <TabBar
        tabs={tabs}
        selectedTabIndex={tabIndex}
        onChange={onChangeTab}
        {...args}
      />
    )}
  </LayoutFix>
)
