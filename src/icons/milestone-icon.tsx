import React from 'react'
import { SvgIcon } from '@material-ui/core'

interface MilestoneIconProps {
  className?: string,
  isFlexible: boolean,
}

const MilestoneIcon: React.FunctionComponent<MilestoneIconProps> = ({
  className,
  isFlexible,
}) => (
  <SvgIcon className={className}>
    {
      isFlexible
        ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5253 5.04855L9.51017 9.0637L13.5313 13.0848L11.8658 14.7503L6.2535 9.06372L11.8598 3.38305L13.5253 5.04855ZM13.5284 5.04547L9.02334 0.540405L0.5 9.06374L9.02618 17.5899L11.8658 14.7503L11.8669 14.7514L13.5324 13.0859L18.0051 17.5586L26.5 9.0637L18.0051 0.568782L13.5284 5.04547Z"
            transform="scale(0.92) translate(0, 4)"
          />
        ) : (
          <path
            d="M19.9281 9.99997L10.5 0.571899L1.07193 9.99997L10.5 19.428L19.9281 9.99997Z"
            transform="translate(2, 2)"
          />
        )
    }
  </SvgIcon>
)

export { MilestoneIcon }
