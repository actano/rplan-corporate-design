import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

import { rgbaString } from '../utils/color-conversion'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { useTranslation } from '../i18n'

const HealthStatusType = {
  Inapplicable: 'inapplicable',
  OnTrack: 'onTrack',
  AtRisk: 'atRisk',
  Delayed: 'delayed',
}

type HealthStatusType = typeof HealthStatusType.Inapplicable | typeof HealthStatusType.OnTrack
  | typeof HealthStatusType.AtRisk | typeof HealthStatusType.Delayed

type PlainHealth = {
  status: typeof HealthStatusType.Inapplicable | typeof HealthStatusType.OnTrack
    | typeof HealthStatusType.AtRisk,
}

type DelayedHealth = {
  status: typeof HealthStatusType.Delayed,
  delay: number,
}

type Health = PlainHealth | DelayedHealth

function getHealthStatusColor(
  status: HealthStatusType,
  theme: CorporateDesignTheme,
): string | undefined {
  switch (status) {
    case HealthStatusType.OnTrack: {
      return rgbaString(theme.palette.colors.green, 0.1)
    }
    case HealthStatusType.Delayed: {
      return rgbaString(theme.palette.colors.red, 0.1)
    }
    case HealthStatusType.AtRisk: {
      return rgbaString(theme.palette.colors.red, 0.1)
    }
    case HealthStatusType.Inapplicable: {
      return rgbaString(theme.palette.colors.grey, 0.1)
    }
    default: {
      return undefined
    }
  }
}

function getDotColor(status: HealthStatusType, theme: CorporateDesignTheme): string | undefined {
  switch (status) {
    case HealthStatusType.OnTrack: {
      return theme.palette.colors.green
    }
    case HealthStatusType.Delayed: {
      return theme.palette.colors.red
    }
    case HealthStatusType.AtRisk: {
      return theme.palette.colors.red
    }
    default: {
      return undefined
    }
  }
}

function translateDisplayStatus(status: HealthStatusType): string {
  switch (status) {
    case HealthStatusType.OnTrack: {
      return 'On track'
    }
    case HealthStatusType.Delayed: {
      return 'Delayed'
    }
    case HealthStatusType.AtRisk: {
      return 'At risk'
    }
    case HealthStatusType.Inapplicable: {
      return 'Inapplicable'
    }
    default: {
      return status
    }
  }
}

function getDisplayStatus(health: Health, translate): string {
  const displayStatus = translate(translateDisplayStatus(health.status))
  if (health.status !== HealthStatusType.Delayed) {
    return displayStatus
  }
  const delayedHealth = health as DelayedHealth
  const dayString = translate('{{ count }} day', { count: delayedHealth.delay })
  return `${displayStatus} ${dayString}`
}

type HealthStatusProps = {
  health: Health,
}

const useStyles = makeStyles<CorporateDesignTheme, HealthStatusProps>(theme => ({
  healthStatus: ({ health }) => ({
    display: 'flex',
    flex: 'none',
    alignItems: 'center',
    padding: theme.spacing(0.875, 1.5),
    backgroundColor: getHealthStatusColor(health.status, theme),
    fontWeight: 'normal',
  }),
  healthStatusText: {
    flex: 'none',
    fontWeight: 600,
    fontSize: '0.75rem',
    color: theme.palette.colors.darkestGrey,
  },
  dot: ({ health }) => ({
    flex: 'none',
    height: 8,
    width: 8,
    borderRadius: '50%',
    marginRight: theme.spacing(1.5),
    backgroundColor: getDotColor(health.status, theme),
  }),
}))

const HealthStatus: React.FunctionComponent<HealthStatusProps> = ({
  health,
}) => {
  const classes = useStyles({ health })
  const { t: translate, ready } = useTranslation('translations', { useSuspense: false })

  if (!ready) {
    return (
      <></>
    )
  }
  const displayStatus = getDisplayStatus(health, translate)
  return (
    <div className={classes.healthStatus}>
      <div className={classes.dot} />
      <Typography className={classes.healthStatusText}>
        {displayStatus}
      </Typography>
    </div>
  )
}

export {
  HealthStatus,
  HealthStatusProps,
  Health,
  HealthStatusType,
}
