import { makeStyles } from '@material-ui/styles'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import React, { useState, useCallback } from 'react'
import { Typography } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { DatePicker } from './date-picker'

const useStyles = makeStyles<CorporateDesignTheme>((theme) => {
  const { colors } = theme.palette

  return {
    labelDatePickerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      minHeight: theme.spacing(5.250),
      border: `1px solid ${colors.lightGrey}`,
      borderRadius: '2px',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    label: {
      padding: theme.spacing(1, 1.5),
      fontSize: '0.8125rem',
      alignSelf: 'center',
    },
    datePicker: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(0.5),
      fontSize: '0.8125rem',
      backgroundColor: colors.lightestGrey,
    },
    input: {
      fontSize: '0.8125rem',
      '& input': {
        textAlign: 'center',
      },
      '&:after': {
        content: 'none',
      },
      '&:before': {
        content: 'none',
      },
    },
    pickers: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.spacing(18),
      padding: theme.spacing(0, 1),

      backgroundColor: colors.lightestGrey,
    },
    startInput: {
      fontSize: '0.8125rem',
      '& input': {
        textAlign: 'center',
        width: theme.spacing(10),
      },
      '&:after': {
        content: 'none',
      },
      '&:before': {
        content: 'none',
      },
    },
  }
})

interface LabelIntervalDatePickerProps {
  label: React.ReactNode,
  minStartDate: string | undefined,
  maxStartDate: string | undefined,
  valueStartDate: string | undefined,
  onSelectStartDate: (value: MaterialUiPickersDate) => void,
  minEndDate: string | undefined,
  maxEndDate: string | undefined,
  valueEndDate: string | undefined,
  onSelectEndDate: (value: MaterialUiPickersDate) => void,
  [otherProp: string]: any,
}

const LabelIntervalDatePicker = React.forwardRef<any, LabelIntervalDatePickerProps>((
  {
    label,
    minStartDate = '1000-01-01',
    maxStartDate = '2900-01-01',
    valueStartDate,
    onSelectStartDate,
    minEndDate = '1000-01-01',
    maxEndDate = '2900-01-01',
    valueEndDate,
    onSelectEndDate,
    ...otherProps
  },
  ref,
) => {
  const classes = useStyles()

  const [startDate, setStartDate] = useState<MaterialUiPickersDate | undefined>()
  const [endDate, setEndDate] = useState<MaterialUiPickersDate | undefined>()

  const onChangeStartDate = useCallback(
    (newDate) => { setStartDate(newDate) },
    [setStartDate],
  )

  const onChangeEndDate = useCallback(
    (newDate) => { setEndDate(newDate) },
    [setEndDate],
  )

  const onAcceptStartDate = useCallback(
    (newDate: MaterialUiPickersDate) => {
      setStartDate(undefined)
      onSelectStartDate(newDate)
    },
    [setStartDate, onSelectStartDate],
  )

  const onAcceptEndDate = useCallback(
    (newDate: MaterialUiPickersDate) => {
      setEndDate(undefined)
      onSelectEndDate(newDate)
    },
    [setEndDate, onSelectEndDate],
  )

  const onClose = useCallback(
    () => {
      setStartDate(undefined)
      setEndDate(undefined)
    },
    [setStartDate, setEndDate],
  )

  return (
    <div className={classes.labelDatePickerContainer}>
      <span
        className={classes.label}
      >
        {label}
      </span>
      <div className={classes.pickers}>
        <DatePicker
          ref={ref}
          {...otherProps}
          className={classes.datePicker}
          onChange={onChangeStartDate}
          onAccept={onAcceptStartDate}
          onClose={onClose}
          value={startDate ? startDate.toISOString() : valueStartDate}
          format="dd.MM.yyyy"
          minDate={minStartDate}
          maxDate={maxStartDate}
          inputVariant="standard"
          InputProps={{ className: classes.startInput }}
        />
        <Typography variant="body2" align="center">
          -
        </Typography>
        <DatePicker
          ref={ref}
          {...otherProps}
          className={classes.datePicker}
          onChange={onChangeEndDate}
          onAccept={onAcceptEndDate}
          onClose={onClose}
          value={endDate ? endDate.toISOString() : valueEndDate}
          format="dd.MM.yyyy"
          minDate={minEndDate}
          maxDate={maxEndDate}
          inputVariant="standard"
          InputProps={{ className: classes.input }}
        />
      </div>
    </div>
  )
})

export {
  LabelIntervalDatePicker,
  LabelIntervalDatePickerProps,
}
