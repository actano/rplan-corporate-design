import React from 'react'
import { SvgIcon } from '@material-ui/core'
import { COLOR_NAMES } from '../theme/theme-config'
import { GenericIcon } from './generic-icon'

const Icon = React.forwardRef<any, {}>((_, ref) => (
  <SvgIcon
    ref={ref}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      transform="translate(2, 2)"
      d="M14.8332 7.33342C14.8332 8.48342 13.0665 9.41675 11.9165 9.41675C10.7665 9.41675 9.62484 8.48342 9.62484 7.33342H8.37484C8.37484 8.48342 7.23317 9.41675 6.08317 9.41675C4.93317 9.41675 3.1665 8.48342 3.1665 7.33342H2.5415C2.40817 7.86675 2.33317 8.42508 2.33317 9.00008C2.33317 10.7682 3.03555 12.4639 4.28579 13.7141C5.53604 14.9644 7.23173 15.6667 8.99984 15.6667C10.7679 15.6667 12.4636 14.9644 13.7139 13.7141C14.9641 12.4639 15.6665 10.7682 15.6665 9.00008C15.6665 8.42508 15.5915 7.86675 15.4582 7.33342H14.8332ZM8.99984 2.33341C6.53317 2.33341 4.37484 3.67508 3.22484 5.66675H14.7748C13.6248 3.67508 11.4665 2.33341 8.99984 2.33341ZM17.3332 9.00008C17.3332 11.2102 16.4552 13.3298 14.8924 14.8926C13.3296 16.4554 11.21 17.3334 8.99984 17.3334C7.90549 17.3334 6.82186 17.1179 5.81081 16.6991C4.79976 16.2803 3.8811 15.6665 3.10728 14.8926C1.54448 13.3298 0.666504 11.2102 0.666504 9.00008C0.666504 6.78994 1.54448 4.67033 3.10728 3.10752C4.67008 1.54472 6.7897 0.666748 8.99984 0.666748C10.0942 0.666748 11.1778 0.882296 12.1889 1.30109C13.1999 1.71987 14.1186 2.3337 14.8924 3.10752C15.6662 3.88135 16.28 4.80001 16.6988 5.81105C17.1176 6.8221 17.3332 7.90573 17.3332 9.00008ZM8.99984 13.3584C7.5415 13.3584 6.25817 12.7501 5.50817 11.8501L6.6915 10.6667C7.0665 11.2667 7.95817 11.6917 8.99984 11.6917C10.0415 11.6917 10.9332 11.2667 11.3082 10.6667L12.4915 11.8501C11.7415 12.7501 10.4582 13.3584 8.99984 13.3584Z"
      fill={COLOR_NAMES.darkGrey}
    />
  </SvgIcon>
))

export const VacationSmileyIcon = () => (<GenericIcon Icon={Icon} />)
