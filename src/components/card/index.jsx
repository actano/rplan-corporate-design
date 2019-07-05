import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Card } from '@material-ui/core'
import classnames from 'classnames'
import { rgbaString } from '../../utils/color-conversion'

const useStyles = makeStyles(theme => ({
  main: {
    boxShadow: 'none',
    border: `1px solid ${theme.palette.colors.veryLightGrey}`,
    '&:hover': {
      borderColor: rgbaString(theme.palette.colors.blue, 0.30),
      boxShadow: `0 3px 5px ${theme.palette.colors.veryLightGrey}`,
    },
  },
}))

const DefaultCard = ({ className, children, ...otherProps }) => {
  const classes = useStyles()
  return (
    <Card
      className={classnames(classes.main, className)}
      {...otherProps}
    >
      {children}
    </Card>
  )
}

DefaultCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

DefaultCard.defaultProps = {
  className: undefined,
  children: undefined,
}

export { DefaultCard }
