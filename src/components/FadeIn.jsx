import { useEffect, useRef, useState } from 'react'

export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

export default function FadeIn({ children, delay = 0, className = '', style = {} }) {
  const [ref, visible] = useFadeIn()

  return (
    <div
      ref={ref}
      className={`fade-in${visible ? ' visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  )
}
