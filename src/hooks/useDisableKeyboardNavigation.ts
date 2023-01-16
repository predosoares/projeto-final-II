import { useEffect } from 'react'

interface IUseDisableKeyboardNavigationP {
  containerId?: string
}

const useDisableKeyboardNavigation = ({
  containerId = '',
}: IUseDisableKeyboardNavigationP) => {
  useEffect(() => {
    const navigationKeys = [
      'Space',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ]

    const handleKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement

      if (
        navigationKeys.indexOf(event.code) > -1 &&
        target.id === containerId
      ) {
        event.preventDefault()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [containerId])
}

export { useDisableKeyboardNavigation }
