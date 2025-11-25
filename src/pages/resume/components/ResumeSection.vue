<template>
  <div class="section">
    <div class="section-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 48px;
  padding: 40px;
  background: var(--bg-card);
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
}

.section-title {
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 3px solid var(--border-color);
  position: relative;
  letter-spacing: -0.5px;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .section {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 20px;
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 20px;
  }
}

@media print {
  .section {
    box-shadow: none;
    page-break-inside: avoid;
  }
}
</style>
