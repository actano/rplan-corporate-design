import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import GroupAddIcon from '@material-ui/icons/GroupAdd'

import classnames from 'classnames'
import { CommonTooltip } from './common-tooltip'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  button: {
    width: `${theme.spacing(7)}px`,
    height: `${theme.spacing(7)}px`,
    backgroundColor: theme.palette.colors.blue,
    color: theme.palette.colors.white,
    '&:hover': {
      backgroundColor: theme.palette.colors.lighterBlue,
    },
  },
  icon: {
    width: `${theme.spacing(3)}px`,
    height: `${theme.spacing(3)}px`,
  },
}))

interface AddMembersButtonProps {
  buttonProps?: object,
  onClick: () => void,
  tooltip?: string,
  className?: string,
}

const AddMembersButton: React.FC<AddMembersButtonProps> = ({
  buttonProps,
  onClick,
  tooltip = '',
  className = undefined,
}) => {
  const classes = useStyles()

  return (
    <CommonTooltip title={tooltip}>
      <IconButton
        onClick={onClick}
        className={classnames(classes.button, className)}
        {...buttonProps}
      >
        <GroupAddIcon className={classes.icon} />
      </IconButton>
    </CommonTooltip>
  )
}

export {
  AddMembersButton,
}
