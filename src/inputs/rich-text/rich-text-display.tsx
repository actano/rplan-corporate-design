import React from 'react'
import { makeStyles } from '@material-ui/core'
import { sanitizeRichText } from '@rplan/rich-text-sanitization'

import { testIdProp } from '../../utils/test-id-prop'
import { CorporateDesignTheme } from '../../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  descriptionInput: {
    lineHeight: '1.54',
    fontSize: '0.8125rem',
    color: theme.palette.colors.darkestGrey,
    width: '100%',
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

interface RichTextDisplayProps {
  value: string
  testIds: {
    content: string
    placeholder: string
  }
  placeholder: string
}

export const RichTextDisplay: React.FunctionComponent<RichTextDisplayProps> = ({
  value = '', testIds = {
    content: '',
    placeholder: '',
  },
  placeholder = '',
}) => {
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
              dangerouslySetInnerHTML={{ __html: sanitizeRichText(value) }}
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
