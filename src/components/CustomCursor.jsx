import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -200, my = -200, rx = -200, ry = -200
    let raf

    const onMove = e => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      dot.style.left  = `${mx}px`
      dot.style.top   = `${my}px`
      ring.style.left = `${rx}px`
      ring.style.top  = `${ry}px`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const grow = () => {
      dot.style.width = '6px'; dot.style.height = '6px'; dot.style.opacity = '0.5'
      ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(200,241,53,0.12)'
    }
    const shrink = () => {
      dot.style.width = '8px'; dot.style.height = '8px'; dot.style.opacity = '1'
      ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(200,241,53,0.12)'
    }

    document.querySelectorAll('a,button,[role="button"],[tabindex="0"]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    dot.style.opacity = '1'; ring.style.opacity = '1'
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  )
}
