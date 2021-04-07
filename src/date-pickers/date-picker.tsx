import { LocalDate, nativeJs } from '@js-joda/core'
import React, { useCallback, useContext } from 'react'
import {
  DatePicker as DatePickerMui,
  DatePickerProps as DatePickerPropsMui,
  Day,
  MuiPickersContext,
} from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

import {
  getDate, getDay, getISOWeek, isSameDay, isToday,
} from 'date-fns'
import { makeStyles } from '@material-ui/styles'
import { testIdProp } from '../shared/test-ids'
import { useTranslation } from '../i18n'
import { CommonTooltip } from '../components'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>((theme) => {
  const { colors } = theme.palette
  return {
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

const isWeekendDate = (date: MaterialUiPickersDate) => date?.getDay() === 0 || date?.getDay() === 6

interface DatePickerProps extends DatePickerPropsMui {
  // we intentionally limit the type options of the mui-picker here
  maxDate?: string,
  minDate?: string,
  disableWeekends?: boolean,
  value: Date | string | undefined,
}

const DatePicker: React.FC<DatePickerProps> = ({
  renderDay,
  shouldDisableDate,
  maxDate,
  minDate,
  disableWeekends = false,
  leftArrowButtonProps = {},
  rightArrowButtonProps = {},
  ...props
}) => {
  const [translate] = useTranslation()
  const dateUtils = useContext(MuiPickersContext)
  const classes = useStyles()

  const shouldDisableDateMerged = (date: MaterialUiPickersDate): boolean => {
    let result = false
    if (shouldDisableDate != null) {
      result = shouldDisableDate(date)
    }
    if (disableWeekends) {
      result = result || isWeekendDate(date)
    }
    return result
  }

  const maxDateJoda = maxDate != null ? LocalDate.parse(maxDate) : null
  const minDateJoda = minDate != null ? LocalDate.parse(minDate) : null
  const renderDayMerged = renderDay || ((date, selectedDate, dayInCurrentMonth) => {
    if (date == null) {
      return <div />
    }

    const dateJoda = LocalDate.from(nativeJs(date))
    const dayIsDisabled = (!!maxDateJoda && dateJoda.isAfter(maxDateJoda))
      || (!!minDateJoda && dateJoda.isBefore(minDateJoda))
      || !dayInCurrentMonth
      || shouldDisableDateMerged(date)

    return (
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
          selected={!!selectedDate && isSameDay(date, selectedDate)}
          disabled={dayIsDisabled}
        >
          {getDate(date)}
        </Day>
      </div>
    )
  })

  const _renderDay = useCallback<NonNullable<DatePickerPropsMui['renderDay']>>(
    (day, selectedDate, dayInCurrentMonth, dayComponent) => {
      const elementWithData = React.cloneElement(
        dayComponent,
        { 'data-date': dateUtils?.format(day, 'yyyy-MM-dd') },
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
      minDate={minDate}
      maxDate={maxDate}
      shouldDisableDate={shouldDisableDateMerged}
      {...props}
    />
  )
}

export {
  DatePicker,
  DatePickerProps,
}
