import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'

import { TabBar } from '../../../../src/components'
import { Providers } from '../../providers'

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
export function tabBarStories() {
  storiesOf('TabBar', module)
    .add('TabBar', () =>
      (
        <LayoutFix>
          {(tabIndex, onChangeTab) => (
            <Providers>
              <Typography variant="h3" align="left">
                HeaderBar with TabBar
              </Typography>
              <Grid
                container
                spacing={2}
                direction="column"
              >
                <Grid item>
                  <h4>Tabbar standard layout</h4>
                  <TabBar
                    tabs={tabs}
                    selectedTabIndex={tabIndex}
                    onChange={onChangeTab}
                  />
                </Grid>
                <Grid item>
                  <h4>Tabbar fullWidth layout</h4>
                  <TabBar
                    tabs={tabs}
                    selectedTabIndex={tabIndex}
                    onChange={onChangeTab}
                    tabsFullWidth
                  />
                </Grid>
              </Grid>
            </Providers>
          )}
        </LayoutFix>
      ))
}
