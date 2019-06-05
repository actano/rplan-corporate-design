import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../../src'
import { CommonHeaderBar, TabBar } from '../../../src/components'

const theme = createMuiTheme(themeConfig)

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

const typographyStories = () => {
  storiesOf('HeaderBar with TabBar', module)
    .add('HeaderBar with TabBar', () =>
      (
        <LayoutFix>
          {(tabIndex, onChangeTab) => (
            <MuiThemeProvider theme={theme}>
              <Typography variant="h3" align="left">
                HeaderBar with TabBar
              </Typography>
              <Grid
                container
                spacing={16}
                direction="column"
              >
                <Grid item>
                  <CommonHeaderBar>
                    <TabBar
                      tabs={tabs}
                      selectedTabIndex={tabIndex}
                      onChange={onChangeTab}
                    />
                  </CommonHeaderBar>
                </Grid>
              </Grid>
            </MuiThemeProvider>
          )}
        </LayoutFix>
      ))
}

export default typographyStories
