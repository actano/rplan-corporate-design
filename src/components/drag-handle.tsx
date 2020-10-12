import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'
import DragIndicator from '@material-ui/icons/DragIndicator'

import { CorporateDesignTheme } from '../theme/corporate-design-theme'

interface DragHandleProps {
  className?: string,
  dragHandleProps: DraggableProvidedDragHandleProps,
}

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  dragIndicator: {
    width: '16px',
    flex: 'none',
    color: theme.palette.colors.grey,

    '&:hover': {
      color: theme.palette.colors.blue,
    },
  },
}))

const DragHandle: React.FC<DragHandleProps> = ({
  className,
  dragHandleProps,
}) => {
  const classes = useStyles()

  return (
    <div
      className={className}
      {...dragHandleProps}
    >
      <DragIndicator className={classes.dragIndicator} />
    </div>
  )
}

export {
  DragHandle,
}
