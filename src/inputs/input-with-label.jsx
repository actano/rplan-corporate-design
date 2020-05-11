import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, InputLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: theme.spacing(0.75),
    color: theme.palette.text.title,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '1.2',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}))

const InputWithLabel = ({ label, children }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <InputLabel
        className={classes.label}
      >
        {label}
      </InputLabel>
      {children}
    </React.Fragment>
  )
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
}

InputWithLabel.defaultProps = {
  children: undefined,
}

export { InputWithLabel }
