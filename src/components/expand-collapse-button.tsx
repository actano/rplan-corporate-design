import React from 'react'
import classnames from 'classnames'
import ExpandIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface ExpandCollapseButtonProps {
  isExpanded: boolean,
  onClick: (event: any) => void,
  className?: string,
  [key: string]: unknown,
}

const useStyles = makeStyles<CorporateDesignTheme>((theme) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  }

  return ({
    expanded: {},
    icon: {
      color: theme.palette.colors.grey,
      '&:hover': {
        color: theme.palette.colors.darkerGrey,
      },

      width: theme.spacing(2.5),
      height: theme.spacing(2.5),

      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&$expanded': {
        transform: 'rotate(90deg)',
      },
    },
    iconButton: {
      cursor: 'pointer',
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
      marginRight: theme.spacing(0.5),
    },
  })
})

const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({
  isExpanded,
  onClick,
  className,
  ...props
}) => {
  const classes = useStyles()

  return (
    <IconButton
      className={classnames(className, classes.iconButton)}
      size="small"
      {...props}
    >
      <ExpandIcon
        onClick={onClick}
        className={classnames(
          classes.icon,
          {
            [classes.expanded]: isExpanded,
          },
        )}
      />
    </IconButton>
  )
}

export {
  ExpandCollapseButton,
}
