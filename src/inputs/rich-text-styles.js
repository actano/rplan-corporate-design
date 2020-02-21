export const createHeaderStyles = (classNamePrefix, theme) => ({
  [`& ${classNamePrefix}1`]: {
    fontSize: '0.9375rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    color: theme.palette.colors.black,
  },
  [`& ${classNamePrefix}2`]: {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    color: theme.palette.colors.black,
  },
  [`& ${classNamePrefix}3`]: {
    fontSize: '0.8125rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    color: theme.palette.colors.black,
  },
})
export const createLinkStyles = theme => ({
  '& a': {
    color: theme.palette.colors.blue,
    '&:visited': {
      color: theme.palette.colors.darkBlue,
    },
  },
})
export const createBlockquoteStyles = theme => ({
  '& blockquote': {
    overflow: 'hidden',
    paddingRight: '1.5em',
    paddingLeft: '1.5em',
    marginLeft: 0,
    marginRight: 0,
    fontStyle: 'italic',
    borderLeft: `5px solid ${theme.palette.colors.veryLightGrey}`,
  },

})
