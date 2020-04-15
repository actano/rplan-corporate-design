import React from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from '@material-ui/pickers'

const CommonDateRangePicker = ({
  startText,
  endText,
  startDate,
  endDate,
  onSelectDate,
  pickerProps,
}) => (
  <DateRangePicker
    {...pickerProps}
    startText={startText}
    endText={endText}
    value={[startDate, endDate]}
    onChange={onSelectDate}
  />
)

CommonDateRangePicker.propTypes = {
  startText: PropTypes.string,
  endText: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  pickerProps: PropTypes.object,
  onSelectDate: PropTypes.func,
}

CommonDateRangePicker.defaultProps = {
  startText: '',
  endText: '',
  startDate: null,
  endDate: null,
  pickerProps: undefined,
  onSelectDate: () => {},
}

export { CommonDateRangePicker }
