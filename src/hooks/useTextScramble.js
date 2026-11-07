import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

/**
 * Returns scrambled text that resolves into `finalText` over `duration`ms.
 * Call `trigger()` to restart the animation.
 */
export function useTextScramble(finalText, duration = 900) {
  const [display, setDisplay] = useState(finalText)
  const rafRef  = useRef(null)
  const startRef = useRef(null)

  const scramble = () => {
    cancelAnimationFrame(rafRef.current)
    startRef.current = performance.now()

    const step = (now) => {
      const elapsed  = now - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const resolved = Math.floor(progress * finalText.length)

      const next = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' '
          if (i < resolved) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      setDisplay(next)
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
      else setDisplay(finalText)
    }

    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    scramble()
    return () => cancelAnimationFrame(rafRef.current)
  }, [finalText])

  return { display, trigger: scramble }
}
