/* eslint-disable no-undef */
import clsx from 'clsx'
import GSAP from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useUserPreferences } from 'contexts/UserPreferencesContext'

const Cursor = () => {
  const { userAgent } = useUserPreferences()

  const isMobile = typeof userAgent?.device.type !== 'undefined'

  const cursor = useRef<HTMLDivElement>(null)
  const coords = useRef({
    currX: 0,
    currY: 0,
    prevX: 0,
    prevY: 0,
  })
  const [isPointer, setIsPointer] = useState(false)

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    coords.current.currX = clientX
    coords.current.currY = clientY
  }, [])

  const update = useCallback(() => {
    const { currX, currY, prevX, prevY } = coords.current

    const progress = 0.5

    const targetX = GSAP.utils.interpolate(prevX, currX, progress)
    const targetY = GSAP.utils.interpolate(prevY, currY, progress)

    GSAP.to(cursor.current, {
      x: targetX,
      y: targetY,
      duration: 0.6,
      ease: 'expo.out',
    })

    coords.current.prevX = targetX
    coords.current.prevY = targetY

    requestAnimationFrame(update)
  }, [])

  useEffect(() => {
    const requestAnimationFrameId = requestAnimationFrame(update)

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove, false)
    }

    return () => {
      cancelAnimationFrame(requestAnimationFrameId)

      if (!isMobile) {
        window.removeEventListener('mousemove', onMouseMove, false)
      }
    }
  }, [onMouseMove, isMobile, update])

  useEffect(() => {
    const onMouseEnter = () => {
      setIsPointer(true)
    }
    const onMouseLeave = () => {
      setIsPointer(false)
    }

    const elements = [...document.querySelectorAll('[data-follow=true]')]

    elements.forEach(element => {
      element.addEventListener('mouseenter', onMouseEnter, false)
      element.addEventListener('mouseleave', onMouseLeave, false)
    })

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseenter', onMouseEnter, false)
        element.removeEventListener('mouseleave', onMouseLeave, false)
      })
    }
  }, [])

  return !isMobile ? (
    <div className="cursor__container">
      <div ref={cursor} className="cursor__wrapper">
        <div className={clsx('cursor', isPointer && 'pointer')}></div>
      </div>
    </div>
  ) : null
}

export default Cursor
