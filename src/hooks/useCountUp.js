import { useState, useEffect, useRef } from 'react'

/**
 * Counts up from 0 to `target` with an ease-out curve.
 * `shouldStart` — trigger (typically from IntersectionObserver)
 */
export function useCountUp(target, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return
    const numeric = parseFloat(target)
    if (isNaN(numeric)) return

    const startTime = performance.now()

    const step = (now) => {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.floor(eased * numeric))
      if (t < 1) rafRef.current = requestAnimationFrame(step)
      else setCount(numeric)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [shouldStart, target, duration])

  return count
}
