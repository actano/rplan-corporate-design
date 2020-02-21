import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

import { testIdProp } from '../utils/test-id-prop'

const useStyles = makeStyles(theme => ({
  descriptionInput: {
    lineHeight: '1.54',
    fontSize: '0.8125rem',
    color: theme.palette.colors.darkestGrey,
    '&::placeholder': {
      color: theme.palette.colors.grey,
    },
    maxHeight: theme.spacing(50),

    overflowY: 'auto',
    overflowX: 'hidden',
  },
  placeholder: {
    lineHeight: '1.54',
    fontSize: '0.8125rem',
    color: theme.palette.colors.grey,
  },
}))

export const RichTextDisplay = ({ value, testIds, placeholder }) => {
  const classes = useStyles()
  return (
    <>
      {
        value
          ? (
            <div
              className={classes.descriptionInput}
              {...testIdProp(testIds.content)}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: value }}
            />
          )
          : (
            <div
              className={classes.placeholder}
              {...testIdProp(testIds.placeholder)}
            >
              <p>{placeholder}</p>
            </div>
          )
      }
    </>
  )
}

RichTextDisplay.propTypes = {
  value: PropTypes.string,
  testIds: PropTypes.shape({
    content: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  placeholder: PropTypes.string,
}

RichTextDisplay.defaultProps = {
  value: '',
  testIds: {
    content: '',
    placeholder: '',
  },
  placeholder: '',
}
