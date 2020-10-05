import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { Providers } from '../../providers'
import { DueDateStatus, DUE_DATE_STATUS } from '../../../../src/components/due-date-status'

export default {
  title: 'Legacy/Due Date Status',
}

export const dueDateStatusStory = () => (
  <Providers>
    <Typography variant="h2" align="left">
      Due Date Status
    </Typography>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h3" align="left">
            Prop: state
        </Typography>
          Possible values are exported via the constant&nbsp;
        <code>DUE_DATE_STATUS</code>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="left">
            Prop: delta
        </Typography>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography variant="h4" align="left">
                Without delta
            </Typography>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.ON_TIME} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.OVERDUE} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.AT_RISK} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.INAPPLICABLE} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="left">
                With delta of&nbsp;
              <code>0</code>
            </Typography>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.ON_TIME} delta={0} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.OVERDUE} delta={0} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.AT_RISK} delta={0} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.INAPPLICABLE} delta={0} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="left">
                With delta of&nbsp;
              <code>1</code>
            </Typography>
            <Grid container spacing={1} direction="row">
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.OVERDUE} delta={1} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.AT_RISK} delta={1} />
              </Grid>
              <Grid item>
                <DueDateStatus state={DUE_DATE_STATUS.INAPPLICABLE} delta={1} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Providers>
)
