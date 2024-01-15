import { useEffect, useState } from 'react'

import s from './Loader.module.scss'

export const Loader = ({ delay }: { delay: number }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay (you can replace this with your actual loading process)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, delay) // Change 2000 to the actual loading time in milliseconds

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div className={`${s.loadingContainer} ${loading ? s.visible : s.hidden}`}>
      <div className={s.loader}></div>
      <p>Loading...</p>
    </div>
  )
}
