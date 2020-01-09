import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import {
  Select,
  FormControl,
  OutlinedInput,
  InputLabel,
} from '@material-ui/core'

let nextId = 0

const useOutlinedSelectStyles = makeStyles(() => ({
  outlinedInput: {
    backgroundColor: 'transparent',
  },
}))

// This code implements an outlined select as suggested by the official material ui docs. There
// doesn't seem to be an easier encapsulation by material ui itself at the moment. Using the
// documented variant="outlined" doesn't work. See https://github.com/mui-org/material-ui/issues/14203

/**
 * @deprecated This component is deprecated and will be removed soon.
 * Please use CommonSelect with variant outlined instead.
 */
const OutlinedSelect = ({
  className, children, margin, label, ...props
}) => {
  const inputLabel = useRef(null)
  const [labelWidth, setLabelWidth] = useState(0)
  const [inputId, setInputId] = useState()

  const classes = useOutlinedSelectStyles()

  useEffect(
    () => {
      if (inputLabel.current) {
        setLabelWidth(inputLabel.current.offsetWidth)
      }
    },
    [],
  )

  useEffect(
    () => {
      setInputId(`outlined-select-${nextId}`)
      nextId += 1
    },
    [],
  )

  return (
    <FormControl
      variant="outlined"
      className={className}
      margin={margin}
    >
      <InputLabel ref={inputLabel} htmlFor={inputId}>
        { label }
      </InputLabel>
      <Select
        input={(
          <OutlinedInput
            classes={{
              input: classes.outlinedInput,
            }}
            variant="outlined"
            labelWidth={labelWidth}
            id={inputId}
          />
        )}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  )
}

OutlinedSelect.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  margin: PropTypes.string,
}

OutlinedSelect.defaultProps = {
  className: undefined,
  children: undefined,
  margin: undefined,
}

export { OutlinedSelect }
