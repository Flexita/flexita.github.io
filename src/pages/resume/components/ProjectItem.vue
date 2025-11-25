<template>
  <div class="project-item">
    <div class="project-header">
      <div>
        <div class="project-name">{{ project.name }}</div>
        <div class="tech-stack">{{ project.techStack }}</div>
      </div>
      <div class="period">{{ project.tag }}</div>
    </div>
    <div class="description">
      <strong>项目描述：</strong>{{ project.description }}
      <ul>
        <li v-for="(achievement, index) in project.achievements" :key="index">
          <span v-html="highlightText(achievement.text, achievement.highlights)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    name: string
    techStack: string
    tag: string
    description: string
    achievements: Array<{
      text: string
      highlights: string[]
    }>
  }
}>()

const highlightText = (text: string, highlights: string[]) => {
  if (!highlights || highlights.length === 0) return text
  let result = text
  highlights.forEach((highlight) => {
    result = result.replace(
      new RegExp(highlight, 'g'),
      `<span class="highlight">${highlight}</span>`,
    )
  })
  return result
}
</script>

<style lang="scss" scoped>
.project-item {
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

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.project-name {
  font-weight: 700;
  font-size: 17px;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.tech-stack {
  color: #667eea;
  font-weight: 500;
  font-size: 13px;
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

/* Deep selector for v-html content */
:deep(.highlight) {
  color: #667eea;
  font-weight: 600;
  padding: 2px 6px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;

  :global(.dark) & {
    color: #a5b4fc;
    background: rgba(99, 102, 241, 0.2);
  }

  &:hover {
    background: rgba(102, 126, 234, 0.2);
  }
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .period {
    font-size: 12px;
  }

  .project-item {
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
.dark .project-item .period {
  background: rgba(99, 102, 241, 0.2) !important;
  color: #a5b4fc !important;
}
</style>
