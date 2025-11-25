import { ref, watchEffect, onMounted, onUnmounted } from 'vue'

const THEME_KEY = 'color-scheme'
type Theme = 'light' | 'dark' | 'auto'

// Global state
const theme = ref<Theme>((localStorage.getItem(THEME_KEY) as Theme) || 'auto')
const isDark = ref(false)
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
  if (theme.value === 'auto') {
    isDark.value = e.matches
  }
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

export function useTheme() {
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

  return {
    theme,
    isDark,
    toggleTheme,
  }
}
