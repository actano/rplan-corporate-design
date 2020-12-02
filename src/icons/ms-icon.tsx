import classnames from 'classnames'
import React from 'react'
import { SvgIcon, makeStyles } from '@material-ui/core'
import { MilestoneIconType } from './milestone-constants'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

export enum MsColor {
  Default = 'default',
  Inherit = 'inherit',
}

interface MsIconProps {
  className?: string,
  type: MilestoneIconType,
  color?: MsColor,
  [otherProp: string]: any,
}

interface StylesProps {
  type: MilestoneIconType,
  color: MsColor,
}

const useStyles = makeStyles<CorporateDesignTheme, StylesProps>((theme) => {
  const { colors } = theme.palette

  return {
    root: ({ type, color: msColor }) => {
      if (msColor === MsColor.Inherit) {
        return { stroke: 'currentColor' }
      }
      let color
      switch (type) {
        case MilestoneIconType.FLEXIBLE: {
          color = colors.paleBlue
          break
        }
        case MilestoneIconType.WITH_BUFFER: {
          color = colors.turquoise
          break
        }
        case MilestoneIconType.WITH_DELAY: {
          color = colors.red
          break
        }
        case MilestoneIconType.COMPLETED: {
          color = colors.darkerGrey
          break
        }
        default: color = colors.paleBlue
      }
      return {
        stroke: color,
      }
    },
  }
})

const getContent = (type: MilestoneIconType) => {
  let result
  switch (type) {
    case MilestoneIconType.FLEXIBLE:
      result = (
        <>
          <path
            d="M11.5858 23.5858L2.41421 14.4142C1.63316 13.6332 1.63316 12.3668 2.41421 11.5858L11.5858 2.41421C12.3669 1.63316 13.6332 1.63317 14.4142 2.41422L23.5858 11.5858C24.3668 12.3668 24.3668 13.6332 23.5858 14.4142L14.4142 23.5858C13.6332 24.3668 12.3669 24.3668 11.5858 23.5858Z"
            fill="white"
            strokeWidth="2"
          />
          <path
            d="M12.2929 18.8787L7.12132 13.7071C6.73079 13.3166 6.73079 12.6834 7.12132 12.2929L12.2929 7.12132C12.6834 6.7308 13.3166 6.7308 13.7071 7.12132L18.8787 12.2929C19.2692 12.6834 19.2692 13.3166 18.8787 13.7071L13.7071 18.8787C13.3166 19.2692 12.6834 19.2692 12.2929 18.8787Z"
            fill="white"
            strokeWidth="2"
          />
          <rect x="9.99999" y="5" width="6" height="15.5" rx="3" fill="white" />
        </>
      )
      break

    case MilestoneIconType.WITH_BUFFER:
      result = (
        <path
          d="M11.5858 23.5858L2.41422 14.4142C1.63317 13.6332 1.63317 12.3668 2.41422 11.5858L11.5858 2.41421C12.3669 1.63317 13.6332 1.63317 14.4142 2.41422L23.5858 11.5858C24.3668 12.3668 24.3668 13.6332 23.5858 14.4142L14.4142 23.5858C13.6332 24.3668 12.3669 24.3668 11.5858 23.5858Z"
          fill="white"
          strokeWidth="2"
        />
      )
      break

    case MilestoneIconType.WITH_DELAY:
      result = (
        <path
          d="M11.0858 23.5858L1.91422 14.4142C1.13317 13.6332 1.13317 12.3668 1.91422 11.5858L11.0858 2.41421C11.8669 1.63316 13.1332 1.63317 13.9142 2.41422L23.0858 11.5858C23.8669 12.3668 23.8669 13.6332 23.0858 14.4142L13.9142 23.5858C13.1332 24.3668 11.8669 24.3668 11.0858 23.5858Z"
          fill="white"
          strokeWidth="2"
        />
      )
      break

    case MilestoneIconType.COMPLETED:
      result = (
        <>
          <path
            d="M11.0858 23.5858L1.91422 14.4142C1.13317 13.6332 1.13317 12.3668 1.91422 11.5858L11.0858 2.41421C11.8669 1.63317 13.1332 1.63317 13.9142 2.41422L23.0858 11.5858C23.8668 12.3668 23.8668 13.6332 23.0858 14.4142L13.9142 23.5858C13.1332 24.3668 11.8669 24.3668 11.0858 23.5858Z"
            fill="white"
            strokeWidth="2"
          />
          <path
            d="M17.25 10.705L11.25 16.705L8.5 13.955L9.205 13.25L11.25 15.29L16.545 10L17.25 10.705Z"
            fill="#7F869F"
          />
        </>
      )
      break

    default:
      result = (
        <path
          d="M11.0858 23.5858L1.91422 14.4142C1.13317 13.6332 1.13317 12.3668 1.91422 11.5858L11.0858 2.41421C11.8669 1.63317 13.1332 1.63317 13.9142 2.41422L23.0858 11.5858C23.8668 12.3668 23.8668 13.6332 23.0858 14.4142L13.9142 23.5858C13.1332 24.3668 11.8669 24.3668 11.0858 23.5858Z"
          fill="white"
          strokeWidth="2"
        />
      )
  }
  return result
}

const MsIcon = React.forwardRef<any, MsIconProps>(({
  className,
  type = MilestoneIconType.NORMAL,
  color = MsColor.Default,
  ...otherProps
}, ref) => {
  const classes = useStyles({ type, color })
  return (
    <SvgIcon
      {...otherProps}
      ref={ref}
      className={classnames(classes.root, className)}
      viewBox="0 0 26 26"
    >
      {
        getContent(type)
      }
    </SvgIcon>
  )
})

export { MsIcon, MilestoneIconType }
