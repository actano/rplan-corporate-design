import React from 'react'

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    // As this is a setter function, we want to have this side-effect.
    // eslint-disable-next-line no-param-reassign
    ref.current = value
  }
}

export function useForkRef(refA, refB) {
  return React.useMemo(
    () => {
      if (refA == null && refB == null) {
        return null
      }

      return (value) => {
        setRef(refA, value)
        setRef(refB, value)
      }
    },
    [refA, refB],
  )
}
