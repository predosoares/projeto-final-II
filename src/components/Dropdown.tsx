// import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
// import { GearIcon } from '@radix-ui/react-icons'

// import { useTheme } from 'hooks/useTheme'

import { ThemeSwitch } from './ThemeSwitch'

export const DropdownConfigMenu = () => {
  // const { toggleTheme } = useTheme()

  return (
    <div className="dropdown">
      {/* <RadixDropdownMenu.Root>
        <RadixDropdownMenu.Trigger asChild>
          <button className="dropdown__btn" aria-label="Configuration options">
            <GearIcon />
          </button>
        </RadixDropdownMenu.Trigger>

        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content
            className="dropdown__content"
            sideOffset={10}
            align="end"
          >
            <RadixDropdownMenu.Item
              className="dropdown__item"
              onClick={toggleTheme}
            >
              <ThemeSwitch />
            </RadixDropdownMenu.Item>
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root> */}
      <ThemeSwitch />
    </div>
  )
}
