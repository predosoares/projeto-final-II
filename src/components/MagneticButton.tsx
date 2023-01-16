import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { motion, useAnimation } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode, useEffect, useRef } from 'react'

import { useMousePosition } from 'hooks/useMousePosition'

import { distance } from 'utils/math'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  followEnabled?: boolean
  children: ReactNode
}

const Button = ({ followEnabled = true, children, ...rest }: IButtonProps) => {
  const { mouseX, mouseY } = useMousePosition()
  const ref = useRef<HTMLButtonElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const fillControls = useAnimation()

  useEffect(() => {
    let x = 0
    let y = 0

    if (ref.current && textRef.current) {
      const node = ref.current

      // New values for the translations
      const rect = node.getBoundingClientRect()
      const distanceToTrigger = rect.width * 0.7
      const distanceMouseButton = distance(
        mouseX + window.scrollX,
        mouseY + window.scrollY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      )

      console.log(distanceToTrigger, distanceMouseButton)

      // Handle magnetic effect
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2
        y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`
        textRef.current.style.transform = `translate3d(${x / 4}px, ${
          y / 4
        }px, 0)`
      } else {
        // Restore initial position
        node.style.transform = `translate3d(0, 0, 0)`
        textRef.current.style.transform = `translate3d(0, 0, 0)`
      }

      const handleMouseEnter = () => {
        // Handle background color animation
        fillControls.start({
          y: ['80%', '-10%'],
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        })
      }

      const handleMouseLeave = () => {
        fillControls.start({
          y: '-80%',
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        })
      }

      if (node) {
        node.addEventListener('mouseenter', handleMouseEnter)
        node.addEventListener('mouseleave', handleMouseLeave)

        return () => {
          node.removeEventListener('mouseenter', handleMouseEnter)
          node.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }
  }, [mouseX, mouseY, textRef, fillControls])

  return (
    <button className="btn" data-follow={followEnabled} {...rest}>
      <span ref={textRef}>
        <motion.span className="btn__text" data-text={children}>
          {children}
          <ArrowLeftIcon className="btn__icon" />
        </motion.span>
      </span>
      <motion.div className="btn__fill" animate={fillControls} />
    </button>
  )
}

export { Button }
