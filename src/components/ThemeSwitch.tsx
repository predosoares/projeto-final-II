import * as RadixSwitch from '@radix-ui/react-switch'

import { useTheme } from 'hooks/useTheme'

const ThemeSwitch = () => {
  const { toggleTheme, currentTheme } = useTheme()

  const handleSwitchTheme = () => {
    toggleTheme()
  }

  return (
    <div className="switch">
      <label className="switch__label" htmlFor="theme-switch">
        {currentTheme} theme
      </label>

      <RadixSwitch.Root
        className="switch__root"
        id="theme-switch"
        onCheckedChange={handleSwitchTheme}
      >
        <RadixSwitch.Thumb className="switch__thumb" />
      </RadixSwitch.Root>
    </div>
  )
}

export { ThemeSwitch }
