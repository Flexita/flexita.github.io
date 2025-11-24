<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { computed } from 'vue'

const { theme, toggleTheme } = useTheme()

const buttonText = computed(() => {
  switch (theme.value) {
    case 'light':
      return '🌞'
    case 'dark':
      return '🌙'
    case 'auto':
      return '🌓'
    default:
      return '🌓'
  }
})

const titleText = computed(() => {
  switch (theme.value) {
    case 'light':
      return 'Light Mode'
    case 'dark':
      return 'Dark Mode'
    case 'auto':
      return 'Auto Mode'
    default:
      return 'Auto Mode'
  }
})
</script>

<template>
  <button class="theme-toggle" @click="toggleTheme" :title="titleText">
    {{ buttonText }}
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle:hover {
  background-color: var(--color-bg-mute);
}
</style>
