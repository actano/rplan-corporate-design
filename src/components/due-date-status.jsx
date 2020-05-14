import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import PropTypes from 'prop-types'

import { useTranslation } from '../i18n'
import { rgbaString } from '../utils/color-conversion'

export const DUE_DATE_STATUS = {
  ON_TIME: 'on time',
  OVERDUE: 'overdue',
  AT_RISK: 'at risk',
  INAPPLICABLE: 'inapplicable',
}

const getDueDateColor = (state, theme) => {
  switch (state) {
    case DUE_DATE_STATUS.ON_TIME: {
      return rgbaString(theme.palette.colors.green, 0.1)
    }
    case DUE_DATE_STATUS.OVERDUE: {
      return rgbaString(theme.palette.colors.red, 0.1)
    }
    case DUE_DATE_STATUS.AT_RISK: {
      return rgbaString(theme.palette.colors.red, 0.1)
    }
    case DUE_DATE_STATUS.INAPPLICABLE: {
      return rgbaString(theme.palette.colors.grey, 0.1)
    }
    default: {
      return null
    }
  }
}
const getDotColor = (state, theme) => {
  switch (state) {
    case DUE_DATE_STATUS.ON_TIME: {
      return theme.palette.colors.green
    }
    case DUE_DATE_STATUS.OVERDUE: {
      return theme.palette.colors.red
    }
    case DUE_DATE_STATUS.AT_RISK: {
      return theme.palette.colors.red
    }
    default: {
      return null
    }
  }
}

const translateDisplayStatus = (state) => {
  switch (state) {
    case DUE_DATE_STATUS.ON_TIME: {
      return 'On Time'
    }
    case DUE_DATE_STATUS.OVERDUE: {
      return 'Delayed'
    }
    case DUE_DATE_STATUS.AT_RISK: {
      return 'At Risk'
    }
    case DUE_DATE_STATUS.INAPPLICABLE: {
      return 'Inapplicable'
    }
    default: {
      return state
    }
  }
}
const getDisplayStatus = (state, delta, translate) => {
  const displayStatus = translate(translateDisplayStatus(state))
  if (delta === 0) {
    return displayStatus
  }
  const dayString = translate('{{ count }} day', { count: delta })
  return `${displayStatus} ${dayString}`
}

const useStyles = makeStyles(theme => ({
  dueDateStatus: ({ state }) => ({
    display: 'flex',
    flex: 'none',
    alignItems: 'center',
    padding: theme.spacing(0.875, 1.5),
    backgroundColor: getDueDateColor(state, theme),
    fontWeight: 'normal',
  }),
  dueDateText: {
    flex: 'none',
    fontWeight: 600,
    fontSize: '0.75rem',
    color: theme.palette.colors.darkestGrey,
  },
  dot: ({ state }) => ({
    flex: 'none',
    height: 8,
    width: 8,
    borderRadius: '50%',
    marginRight: theme.spacing(1.5),
    backgroundColor: getDotColor(state, theme),
  }),
}))


export const DueDateStatus = ({
  state,
  delta,
}) => {
  const classes = useStyles({ state })
  const { t: translate, ready } = useTranslation('translations', { useSuspense: false })

  if (!ready) {
    return (
      <></>
    )
  }
  const displayStatus = getDisplayStatus(state, delta, translate)
  return (
    <div className={classes.dueDateStatus}>
      <div className={classes.dot} />
      <Typography className={classes.dueDateText}>
        {displayStatus}
      </Typography>
    </div>
  )
}

DueDateStatus.propTypes = {
  state: PropTypes.oneOf(Object.values(DUE_DATE_STATUS)).isRequired,
  delta: PropTypes.number,
}

DueDateStatus.defaultProps = {
  delta: 0,
}
