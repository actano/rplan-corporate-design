import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { DatePicker as DatePickerMui, Day } from '@material-ui/pickers'

import { testIdProp } from '../utils/test-id-prop'

const DatePicker = ({
  leftArrowButtonProps,
  rightArrowButtonProps,
  renderDay,
  ...props
}) => {
  const _renderDay = useCallback(
    (day, selectedDate, dayComponentProps) => {
      const elementWithData = <Day {...dayComponentProps} />
      if (renderDay != null) {
        return renderDay(day, selectedDate, elementWithData)
      }

      return elementWithData
    },
    [renderDay],
  )

  return (
    <DatePickerMui
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
