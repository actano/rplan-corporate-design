import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { DatePicker as DatePickerMui, Day, MuiPickersContext } from '@material-ui/pickers'

import {
  getDate, getDay, getISOWeek, isSameDay, isToday,
} from 'date-fns'
import { makeStyles } from '@material-ui/styles'
import { testIdProp } from '../shared/test-ids'
import { useTranslation } from '../i18n'
import { CommonTooltip } from '../components'

const useStyles = makeStyles((theme) => {
  const { colors } = theme.palette
  return {
    root: {},
    datePicker: {
      display: 'none',
    },
    week: {
      flex: 'none',
      fontSize: 'unset',
      color: colors.darkerGrey,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  }
})

const DatePicker = ({
  leftArrowButtonProps,
  rightArrowButtonProps,
  renderDay,
  ...props
}) => {
  const [translate] = useTranslation()
  const dateUtils = useContext(MuiPickersContext)
  const classes = useStyles()

  const renderDayMerged = renderDay || ((date, selectedDate) => (
    <div className={classes.container}>
      {getDay(date) === 1 && (
        <CommonTooltip title={translate('Calendar week')}>
          <div className={classes.week}>
            {getISOWeek(date)}
          </div>
        </CommonTooltip>
      )}
      <Day
        current={isToday(date)}
        selected={isSameDay(date, selectedDate)}
      >
        {getDate(date)}
      </Day>
    </div>
  ))

  const _renderDay = useCallback(
    (day, selectedDate, dayInCurrentMonth, dayComponent) => {
      const elementWithData = React.cloneElement(
        dayComponent,
        { 'data-date': dateUtils.format(day, 'yyyy-MM-dd') },
      )

      if (renderDayMerged != null) {
        return renderDayMerged(day, selectedDate, dayInCurrentMonth, elementWithData)
      }

      return elementWithData
    },
    [dateUtils, renderDayMerged],
  )

  return (
    <DatePickerMui
      clearLabel={translate('Clear')}
      cancelLabel={translate('Cancel')}
      leftArrowButtonProps={{
        ...leftArrowButtonProps,
        ...testIdProp('date-picker-left-arrow'),
      }}
      rightArrowButtonProps={{
        ...rightArrowButtonProps,
        ...testIdProp('date-picker-right-arrow'),
      }}
      renderDay={_renderDay}
      {...props}
    />
  )
}

DatePicker.propTypes = {
  leftArrowButtonProps: PropTypes.objectOf(PropTypes.string),
  rightArrowButtonProps: PropTypes.objectOf(PropTypes.string),
  renderDay: PropTypes.func,
}

DatePicker.defaultProps = {
  leftArrowButtonProps: {},
  rightArrowButtonProps: {},
  renderDay: undefined,
}

export {
  DatePicker,
}
