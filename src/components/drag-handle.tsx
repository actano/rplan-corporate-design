import classnames from 'classnames'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import DragIndicator from '@material-ui/icons/DragIndicator'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'
import {
  GenericIcon, IconColor, IconHoverColor, IconSize,
} from '../icons'

interface DragHandleProps {
  className?: string,
  dragHandleProps: object,
  [otherProp: string]: any,
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  dragHandle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    height: theme.spacing(3),
  },
}))

const DragHandle: React.FC<DragHandleProps> = ({
  className,
  dragHandleProps,
  ...otherProps
}) => {
  const classes = useStyles()
  return (
    <div
      className={classnames(className, classes.dragHandle)}
      {...dragHandleProps}
      {...otherProps}
    >
      <GenericIcon
        Icon={DragIndicator}
        size={IconSize.small}
        color={IconColor.grey}
        hoverColor={IconHoverColor.blue}
      />
    </div>
  )
}

export {
  DragHandle,
}
