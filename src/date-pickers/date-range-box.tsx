import React, { ReactNode, useCallback } from 'react'
import { makeStyles } from '@material-ui/core'
import * as _locale from 'date-fns/locale'
import { format } from 'date-fns'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import { CommonTooltip } from '../components'
import { DatePickerButton } from './date-picker-button'

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
    marginBottom: theme.spacing(0.75),
    width: '100%',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.2,
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
    padding: theme.spacing(1.625),
    fontSize: '1rem',
    lineHeight: 1.1875,

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
    fontSize: '1rem',
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
  clearable?: boolean,
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

const withOptionalTooltip = (tooltip: string | undefined) =>
  (node: ReactNode): ReactNode => (
    tooltip != null ? (
      <CommonTooltip title={tooltip}>
        {node}
      </CommonTooltip>
    ) : node
  )

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
  clearable = false,
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
    console.log('language:', language)
    console.log(language.split('-')[0])
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
                clearable,
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
                clearable,
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
