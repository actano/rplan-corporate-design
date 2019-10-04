import { format } from 'date-fns'

const datePickerDateTostring = dueDate =>
  format(dueDate, 'yyyy-MM-dd')

export { datePickerDateTostring }
