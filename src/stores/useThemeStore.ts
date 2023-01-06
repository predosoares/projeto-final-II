import create from 'zustand'

type Theme = 'light' | 'dark'

interface IThemeState {
  currentTheme: Theme
  toggleTheme: () => void
}

export default create<IThemeState>()(set => ({
  currentTheme: 'light',
  toggleTheme: () => {
    set(state => ({
      currentTheme: state.currentTheme === 'dark' ? 'light' : 'dark',
    }))
  },
}))
