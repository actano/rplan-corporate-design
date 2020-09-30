import React from 'react'
import {
  Accordion,
  AccordionDetails,
  Typography,
  Grid,
} from '@material-ui/core'
import { storiesOf } from '@storybook/react'

import { Providers } from '../../providers'
import { MultilineAccordionSummary, NonCollapsingAccordionSummary } from '../../../../src/components'

const accordionStories = () => {
  storiesOf('Accordion', module)
    .add('Default Accordions', () =>
      (
        <Providers>
          <Grid container direction="column" spacing={5}>
            <Grid item>
              <Typography variant="h2">Non Collapsing Headline</Typography>
              <Accordion
                defaultExpanded
              >
                <NonCollapsingAccordionSummary>
                  This headline will not shrink when collapsed
                </NonCollapsingAccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
              <Accordion
                defaultExpanded
              >
                <NonCollapsingAccordionSummary>
                  This headline will not shrink when collapsed
                </NonCollapsingAccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item>
              <Typography variant="h2">Multiline Headline</Typography>
              <Accordion
                defaultExpanded
              >
                <MultilineAccordionSummary>
                  This headline is rendered as first line
                  <Typography>
                    This sub-headline is rendered below
                  </Typography>
                </MultilineAccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Providers>
      ))
}

export {
  accordionStories,
}
