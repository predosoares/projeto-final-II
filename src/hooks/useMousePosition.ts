// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
import { useState, useEffect } from 'react'

import { distance } from 'utils/math'

type MousePosition = { mouseX: number; mouseY: number }

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: -9999,
    mouseY: -9999,
  })

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    const { mouseX, mouseY } = mousePosition

    const diff = distance(mouseX, mouseY, clientX, clientY)

    if (diff > 5) {
      setMousePosition({ mouseX: event.clientX, mouseY: event.clientY })
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

export { useMousePosition }
