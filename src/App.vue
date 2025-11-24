<template>
  <header>
    <ThemeToggle />
  </header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}
</style>
