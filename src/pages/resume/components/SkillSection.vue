<template>
  <div class="skills-grid">
    <div class="skill-category" v-for="(category, index) in skills.categories" :key="index">
      <h4>{{ category.name }}</h4>
      <div class="skill-tags">
        <span v-for="(item, i) in parseSkills(category.items)" :key="i" class="skill-tag">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skills: {
    categories: Array<{
      name: string
      items: string
    }>
  }
}>()

const parseSkills = (items: string) => {
  return items.split(',').map((item) => item.trim())
}
</script>

<style lang="scss" scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 10px;
}

.skill-category {
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
  padding: 20px;
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  /* Use a more specific selector strategy that works reliably with scoped styles */
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-color: #374151;
  }

  /* Use a global override to ensure specificity wins */
  :global(.dark) & {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%) !important;
    border-color: #374151 !important;
  }

  &:hover {
    border-color: #c7d2fe;
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);

    &::before {
      transform: scaleX(1);
    }
  }

  h4 {
    font-size: 15px;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: '●';
      color: #667eea;
      font-size: 12px;
    }
  }
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  font-size: 13px;
  color: var(--text-medium);
  background: rgba(255, 255, 255, 0.6);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    color: var(--text-medium);
  }

  :global(.dark) & {
    background: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
    color: var(--text-medium) !important;
  }

  &:hover {
    background: #ffffff;
    color: #667eea;
    border-color: #c7d2fe;
    transform: translateY(-1px);

    @media (prefers-color-scheme: dark) {
      background: rgba(255, 255, 255, 0.1);
      color: #a5b4fc;
      border-color: #6366f1;
    }

    :global(.dark) & {
      background: rgba(255, 255, 255, 0.1) !important;
      color: #a5b4fc !important;
      border-color: #6366f1 !important;
    }
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<style lang="scss">
/* Global override for dark mode to ensure specificity */
.dark .skill-category {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%) !important;
  border-color: #374151 !important;
}

.dark .skill-tag {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: #9ca3af !important; /* text-medium */
}

.dark .skill-tag:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #a5b4fc !important;
  border-color: #6366f1 !important;
}
</style>
