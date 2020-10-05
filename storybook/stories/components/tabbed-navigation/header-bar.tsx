import React, { useEffect, useState } from 'react'

import { CommonHeaderBar, TabBar } from '../../../../src/components'

const tabs = [
  {
    text: 'Project Settings',
    subUrl: 'first',
  },
  {
    text: 'Second Tab',
    subUrl: 'second',
  },
  {
    text: 'Third Tab',
    subUrl: 'third',
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

const HeaderBarWithTabBar = () => (
  <LayoutFix>
    {(tabIndex, onChangeTab) => (
      <CommonHeaderBar>
        <TabBar tabs={tabs} selectedTabIndex={tabIndex} onChange={onChangeTab} />
      </CommonHeaderBar>
    )}
  </LayoutFix>
)

export { HeaderBarWithTabBar }
