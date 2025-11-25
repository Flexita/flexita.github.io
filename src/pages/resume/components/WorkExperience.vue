<template>
  <div class="work-item">
    <div class="work-header">
      <div>
        <div class="company-name">{{ work.company }}</div>
        <div class="position">{{ work.position }}</div>
      </div>
      <div class="period">{{ work.period }}</div>
    </div>
    <div class="description">
      <strong>主要职责：</strong>
      <ul>
        <li v-for="(resp, index) in work.responsibilities" :key="index">{{ resp }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  work: {
    company: string
    position: string
    period: string
    responsibilities: string[]
  }
}>()
</script>

<style lang="scss" scoped>
.work-item {
  margin-bottom: 28px;
  padding: 20px;
  padding-left: 24px;
  border-left: 3px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-light);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -7px;
    top: 24px;
    width: 11px;
    height: 11px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 3px var(--bg-card);
  }

  &:hover {
    border-left-color: #667eea;
    background: var(--bg-card);
    box-shadow: var(--shadow-sm);
    transform: translateX(4px);

    :global(.dark) & {
      background: #374151; // Lighter than --bg-light (#1f2937)
    }

    &::before {
      transform: scale(1.3);
    }
  }
}

.work-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.company-name {
  font-weight: 700;
  font-size: 17px;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.position {
  color: var(--text-medium);
  font-size: 14px;
  margin-top: 4px;
}

.period {
  color: var(--text-light);
  font-size: 13px;
  white-space: nowrap;
  padding: 4px 12px;
  background: #e0e7ff;
  border-radius: 12px;
  font-weight: 500;

  :global(.dark) & {
    background: rgba(99, 102, 241, 0.2);
    color: #a5b4fc;
  }
}

.description {
  margin-top: 12px;
  color: var(--text-medium);
  font-size: 14px;
  line-height: 1.8;
}

.description ul {
  margin-top: 10px;
  padding-left: 24px;
  list-style: none;
}

.description li {
  margin-bottom: 8px;
  position: relative;
  padding-left: 8px;

  &::before {
    content: '▸';
    position: absolute;
    left: -16px;
    color: #667eea;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .work-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .period {
    font-size: 12px;
  }

  .work-item {
    padding: 16px;
    padding-left: 20px;

    &:hover {
      transform: none;
    }
  }
}
</style>

<style lang="scss">
/* Global override for dark mode to ensure specificity */
.dark .work-item .period {
  background: rgba(99, 102, 241, 0.2) !important;
  color: #a5b4fc !important;
}
</style>
