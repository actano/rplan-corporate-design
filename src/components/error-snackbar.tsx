import React from 'react'
import { SnackBar, SnackBarTypes } from './snackbar'

const ErrorSnackBar = ({ message }) => (
  <SnackBar
    message={message}
    type={SnackBarTypes.error}
  />
)

export { ErrorSnackBar }
