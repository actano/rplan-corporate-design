import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core'
import * as _locale from 'date-fns/locale'
import { format } from 'date-fns'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { DatePickerButton } from './date-picker-button'
import { withOptionalTooltip } from '../shared/with-optional-tooltip'

interface ContainerStylesProps {
  noBorderLeft: boolean,
  noBorderRight: boolean,
}

interface ContentStylesProps {
  disabled: boolean,
}

const useContainerStyles = makeStyles<CorporateDesignTheme, ContainerStylesProps>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',

    overflow: 'hidden',

    flex: '0 1 auto',
  },
  label: {
    flex: 'none',
    marginBottom: theme.spacing(1),
    width: '100%',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    fontWeight: 400,
    fontSize: '0.8125rem',
    color: theme.palette.colors.darkestGrey,
  },
  box: ({ noBorderLeft, noBorderRight }) => ({
    flex: 'none',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whitespace: 'nowrap',

    backgroundColor: theme.palette.colors.white,
    border: `1px solid ${theme.palette.colors.lightGrey}`,
    borderRight: noBorderRight ? 'none' : undefined,
    borderLeft: noBorderLeft ? 'none' : undefined,
    padding: theme.spacing(1.75),
    fontSize: '0.8125rem',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  }),
}))

const useContentStyles = makeStyles<CorporateDesignTheme, ContentStylesProps>(theme => ({
  date: ({ disabled }) => ({
    flex: 'none',
    margin: theme.spacing(0, 0.5),

    color: disabled ? theme.palette.colors.grey : theme.palette.colors.darkestGrey,
  }),
  dateButton: {
    background: 'transparent',
    border: 'none',
    padding: 0,

    color: theme.palette.colors.darkestGrey,
    fontSize: '0.8125rem',
    cursor: 'pointer',
    outline: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  divider: () => ({
    flex: 'none',
    margin: theme.spacing(0, 0.5),

    color: theme.palette.colors.grey,
  }),
}))

interface DateRangeBoxContainerProps {
  label: string
  noBorderLeft?: boolean,
  noBorderRight?: boolean,
}

interface DateRangeBoxProps extends DateRangeBoxContainerProps {
  start: string,
  end: string,
  disabled?: boolean,
  onAcceptStart?: (date?: Date | null) => void,
  onAcceptEnd?: (date?: Date | null) => void,
  startTooltip?: string,
  endTooltip?: string,
  language?: string,
  testIdPropForStartDate?: object,
  testIdPropForEndDate?: object,
}

function formatNullableDate(
  date: string | undefined,
  formatDate: (isoDate: string) => string,
): string {
  return date ? formatDate(date) : ''
}

const DateRangeBoxContainer: React.FC<DateRangeBoxContainerProps> = ({
  label,
  noBorderLeft = false,
  noBorderRight = false,
  children,
}) => {
  const classes = useContainerStyles({ noBorderRight, noBorderLeft })

  return (
    <div
      className={classes.root}
    >
      <div
        className={classes.label}
      >
        { label }
      </div>
      <div className={classes.box}>
        {children}
      </div>
    </div>
  )
}

const isGerman = (language: string | undefined): boolean =>
  (language != null) && (language.split('-')[0] === 'de')

const DateRangeBox: React.FC<DateRangeBoxProps> = ({
  start,
  end,
  label,
  disabled = false,
  noBorderLeft = false,
  noBorderRight = false,
  onAcceptStart = () => {},
  onAcceptEnd = () => {},
  startTooltip,
  endTooltip,
  language = 'en-US',
  testIdPropForStartDate,
  testIdPropForEndDate,
}) => {
  const classes = useContentStyles({ disabled })

  const formatDate = useCallback((isoDate) => {
    let datePattern = 'MMM d yyyy'
    let locale = _locale.enUS
    if (isGerman(language)) {
      datePattern = 'd. MMM yyyy'
      locale = _locale.de
    }

    return format(Date.parse(isoDate), datePattern, { locale })
  }, [language])

  const withStartTooltip = withOptionalTooltip(startTooltip)
  const withEndTooltip = withOptionalTooltip(endTooltip)

  return (
    <DateRangeBoxContainer
      label={label}
      noBorderLeft={noBorderLeft}
      noBorderRight={noBorderRight}
    >
      <div
        className={classes.date}
        {...testIdPropForStartDate}
      >
        {
          disabled ? (
            formatNullableDate(start, formatDate)
          ) : (
            <DatePickerButton
              pickerProps={{
                value: start,
                clearable: false,
              }}
              renderButton={showPicker => withStartTooltip(
                <button
                  type="button"
                  className={classes.dateButton}
                  onClick={showPicker}
                >
                  {formatDate(start)}
                </button>,
              )}
              onSelectDate={onAcceptStart}
            />
          )
        }
      </div>
      <div
        className={classes.divider}
      >
        -
      </div>
      <div
        className={classes.date}
        {...testIdPropForEndDate}
      >
        {
          disabled ? (
            formatNullableDate(end, formatDate)
          ) : (
            <DatePickerButton
              pickerProps={{
                value: end,
                clearable: false,
              }}
              renderButton={showPicker => withEndTooltip(
                <button
                  type="button"
                  className={classes.dateButton}
                  onClick={showPicker}
                >
                  {formatDate(end)}
                </button>,
              )}
              onSelectDate={onAcceptEnd}
            />
          )
        }
      </div>
    </DateRangeBoxContainer>
  )
}

export {
  DateRangeBox,
  DateRangeBoxProps,
  DateRangeBoxContainer,
  DateRangeBoxContainerProps,
}
