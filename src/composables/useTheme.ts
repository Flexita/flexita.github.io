import { ref, watchEffect, onMounted, onUnmounted } from 'vue'

const THEME_KEY = 'color-scheme'
type Theme = 'light' | 'dark' | 'auto'

export function useTheme() {
  const theme = ref<Theme>('auto')
  const isDark = ref(false)

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
    if (theme.value === 'auto') {
      isDark.value = e.matches
    }
  }

  // Initialize
  const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      theme.value = savedTheme
    } else {
      theme.value = 'auto'
    }
    applyTheme()
  }

  const applyTheme = () => {
    if (theme.value === 'auto') {
      isDark.value = mediaQuery.matches
    } else {
      isDark.value = theme.value === 'dark'
    }
  }

  // Watch for changes
  watchEffect(() => {
    applyTheme()
    const root = document.documentElement
    if (isDark.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(THEME_KEY, theme.value)
  })

  // Listen for system changes
  onMounted(() => {
    mediaQuery.addEventListener('change', updateSystemTheme)
  })

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', updateSystemTheme)
  })

  const toggleTheme = () => {
    const modes: Theme[] = ['auto', 'light', 'dark']
    const nextIndex = (modes.indexOf(theme.value) + 1) % modes.length
    theme.value = modes[nextIndex]
  }

  initTheme()

  return {
    theme,
    isDark,
    toggleTheme,
  }
}
