import { useEffect, useRef } from 'react'

function usePrevious<T>(value: T): 0 | T {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current ? ref.current : 0
}

export default usePrevious
