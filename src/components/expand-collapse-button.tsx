import React from 'react'
import classnames from 'classnames'
import ExpandIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/styles'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface ExpandCollapseButtonProps {
  isExpanded: boolean,
  onClick: (event: any) => void,
  className?: string,
}

const useStyles = makeStyles<CorporateDesignTheme>((theme) => {
  const transition = {
    duration: theme.transitions.duration.shortest,
  }

  return ({
    expanded: {},
    icon: {
      cursor: 'pointer',
      color: theme.palette.colors.grey,
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      marginRight: theme.spacing(1.5),

      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', transition),
      '&$expanded': {
        transform: 'rotate(180deg)',
      },
    },
  })
})

const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({
  isExpanded,
  onClick,
  className,
}) => {
  const classes = useStyles()

  return (
    <ExpandIcon
      onClick={onClick}
      className={classnames(
        className,
        classes.icon,
        {
          [classes.expanded]: isExpanded,
        },
      )}
    />
  )
}

export {
  ExpandCollapseButton,
}
