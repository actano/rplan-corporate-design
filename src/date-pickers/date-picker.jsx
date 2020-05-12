import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import { DatePicker as DatePickerMui, MuiPickersContext } from '@material-ui/pickers'

import { testIdProp } from '../utils/test-id-prop'
import { useTranslation } from '../i18n'

const DatePicker = ({
  leftArrowButtonProps,
  rightArrowButtonProps,
  renderDay,
  ...props
}) => {
  const [translate] = useTranslation()
  const dateUtils = useContext(MuiPickersContext)

  const _renderDay = useCallback(
    (day, selectedDate, dayInCurrentMonth, dayComponent) => {
      const elementWithData = React.cloneElement(
        dayComponent,
        { 'data-date': dateUtils.format(day, 'yyyy-MM-dd') },
      )

      if (renderDay != null) {
        return renderDay(day, selectedDate, dayInCurrentMonth, elementWithData)
      }

      return elementWithData
    },
    [dateUtils, renderDay],
  )

  return (
    <DatePickerMui
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
