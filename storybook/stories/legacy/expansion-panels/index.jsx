import {
  ExpansionPanel,
  ExpansionPanelDetails,
  Typography,
  Grid,
} from '@material-ui/core'
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Providers } from '../../providers'
import { MultilineExpansionPanelSummary, NonCollapsingExpansionPanelSummary } from '../../../../src/components'

const expansionPanelStories = () => {
  storiesOf('Expansion Panels', module)
    .add('Default Expansion Panels', () =>
      (
        <Providers>
          <Grid container direction="column" spacing={5}>
            <Grid item>
              <Typography variant="h2">Non Collapsing Headline</Typography>
              <ExpansionPanel
                defaultExpanded
              >
                <NonCollapsingExpansionPanelSummary>
                  This headline will not shrink when collapsed
                </NonCollapsingExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                defaultExpanded
              >
                <NonCollapsingExpansionPanelSummary>
                  This headline will not shrink when collapsed
                </NonCollapsingExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
            <Grid item>
              <Typography variant="h2">Multiline Headline</Typography>
              <ExpansionPanel
                defaultExpanded
              >
                <MultilineExpansionPanelSummary>
                  This headline is rendered as first line
                  <Typography>
                    This sub-headline is rendered below
                  </Typography>
                </MultilineExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </Providers>
      ))
}

export { expansionPanelStories }
