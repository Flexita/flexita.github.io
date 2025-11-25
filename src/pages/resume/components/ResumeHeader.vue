<template>
  <div class="header">
    <div class="header-content">
      <div class="name">{{ headerData.name }}</div>
      <div class="title">{{ headerData.title }}</div>
      <div class="subtitle">{{ headerData.subtitle }}</div>
      <div class="contact-info">
        <div
          v-for="(contact, index) in headerData.contacts"
          :key="index"
          class="contact-item"
          @click="contact.link ? openLink(contact.link) : null"
          :style="{ cursor: contact.link ? 'pointer' : 'default' }"
        >
          <component :is="getIcon(contact.icon)" class="icon" />
          <span>{{ contact.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { Component } from 'vue'

// Define props with a specific type if possible, or use any for now based on resume-data structure
defineProps<{
  headerData: {
    name: string
    title: string
    subtitle: string
    contacts: Array<{
      icon: string
      value: string
      link: string
    }>
  }
}>()

const openLink = (link: string) => {
  if (link) {
    window.open(link, '_blank')
  }
}

// Simple SVG icons as functional components
const PhoneIcon = () => h('svg', { viewBox: '0 0 1024 1024' }, [
  h('path', { d: 'M768 917.333333H256c-64 0-117.333333-53.333333-117.333333-117.333333V224c0-64 53.333333-117.333333 117.333333-117.333333h512c64 0 117.333333 53.333333 117.333333 117.333333v576c0 64-53.333333 117.333333-117.333333 117.333333zM256 170.666667c-29.866667 0-53.333333 23.466667-53.333333 53.333333v576c0 29.866667 23.466667 53.333333 53.333333 53.333333h512c29.866667 0 53.333333-23.466667 53.333333-53.333333V224c0-29.866667-23.466667-53.333333-53.333333-53.333333H256z' }),
  h('path', { d: 'M704 298.666667H320c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h384c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z' })
])

const EmailIcon = () => h('svg', { viewBox: '0 0 1024 1024' }, [
  h('path', { d: 'M853.333333 213.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333334v426.666666c0 46.933333 38.4 85.333333 85.333334 85.333334h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333334V298.666667c0-46.933333-38.4-85.333333-85.333334-85.333334z m-29.866666 85.333334L512 512 200.533333 298.666667h623.466667-0.533333z m29.866666 426.666666H170.666667V359.466667l341.333333 238.933333 341.333333-238.933333v365.866666z' })
])

const LocationIcon = () => h('svg', { viewBox: '0 0 1024 1024' }, [
  h('path', { d: 'M512 85.333333C346.88 85.333333 213.333333 218.88 213.333333 384c0 236.8 277.333333 554.666667 298.666667 554.666667s298.666667-317.866667 298.666667-554.666667c0-165.12-133.546667-298.666667-298.666667-298.666667z m0 426.666667c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z' })
])

const SalaryIcon = () => h('svg', { viewBox: '0 0 1024 1024' }, [
  h('path', { d: 'M512 85.333333c-235.52 0-426.666667 191.146667-426.666667 426.666667s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667-191.146667-426.666667-426.666667-426.666667z m0 768c-188.586667 0-341.333333-152.746667-341.333333-341.333333S323.413333 170.666667 512 170.666667s341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333z' }),
  h('path', { d: 'M661.333333 469.333333h-106.666666V298.666667c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666667 42.666667v213.333333c0 23.466667 19.2 42.666667 42.666667 42.666667h149.333333c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667z' })
])

const getIcon = (name: string): Component | string => {
  switch (name) {
    case 'phone': return PhoneIcon
    case 'email': return EmailIcon
    case 'location': return LocationIcon
    case 'salary': return SalaryIcon
    default: return 'div'
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  text-align: center;
  padding: 60px 40px;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  animation: slideDown 0.6s ease-out;
}

.header-content {
  position: relative;
  z-index: 1;
}

.name {
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 12px;
  letter-spacing: -1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 0.8s ease-out;
}

.title {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 8px;
  font-weight: 500;
  animation: fadeInUp 0.9s ease-out;
}

.subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: fadeInUp 1s ease-out;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 30px;
  animation: fadeInUp 1.1s ease-out;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 13px;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .icon {
    width: 18px;
    height: 18px;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .header {
    padding: 50px 30px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 40px 24px;
    border-radius: 20px;
    margin-bottom: 32px;
  }

  .name {
    font-size: 36px;
    margin-bottom: 16px;
  }

  .title {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    margin-bottom: 24px;
  }

  .contact-info {
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
    align-items: center;
  }

  .contact-item {
    width: 100%;
    max-width: 320px;
    justify-content: center;
    padding: 12px 20px;
  }
}

@media print {
  .header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>
