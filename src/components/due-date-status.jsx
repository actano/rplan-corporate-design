import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { rgbaString } from '../utils/color-conversion'

export const DUE_DATE_STATUS = {
  ON_TIME: 'on time',
  OVERDUE: 'overdue',
}

const getDueDateColor = (state, theme) => {
  switch (state) {
    case DUE_DATE_STATUS.ON_TIME: {
      return rgbaString(theme.palette.colors.green, 0.1)
    }
    case DUE_DATE_STATUS.OVERDUE: {
      return rgbaString(theme.palette.colors.red, 0.1)
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
      return 'Overdue'
    }
    default: {
      return state
    }
  }
}
const getDisplayStatus = (state, delta) => {
  const displayStatus = translateDisplayStatus(state)
  if (delta === 0) {
    return displayStatus
  }
  return `${displayStatus} (+${delta} days)`
}

const useStyles = makeStyles(theme => ({
  dueDateStatus: ({ state }) => ({
    display: 'flex',
    flex: 'none',
    alignItems: 'center',
    padding: theme.spacing(0.5),
    backgroundColor: getDueDateColor(state, theme),
    fontWeight: 'normal',
  }),
  dueDateText: {
    flex: 'none',
    fontSize: '0.8125rem',
    marginRight: theme.spacing(0.5),
    color: theme.palette.colors.darkestGrey,
  },
  dot: ({ state }) => ({
    flex: 'none',
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    backgroundColor: getDotColor(state, theme),
  }),
}))


export const DueDateStatus = ({
  state,
  delta,
}) => {
  const classes = useStyles({ state })
  const displayStatus = getDisplayStatus(state, delta)
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
