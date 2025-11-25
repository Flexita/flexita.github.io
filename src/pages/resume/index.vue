<template>
  <div class="resume-container">
    <ResumeHeader :header-data="resumeData.header" />

    <ResumeSection :title="resumeData.intention.title">
      <div class="description">
        <template v-for="(item, index) in resumeData.intention.items" :key="index">
          <strong>{{ item.label }}：</strong>{{ item.value }}
          <span v-if="index < resumeData.intention.items.length - 1">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <br v-if="index === 0" />
        </template>
      </div>
    </ResumeSection>

    <ResumeSection :title="resumeData.education.title">
      <div class="education-item" v-for="(edu, index) in resumeData.education.items" :key="index">
        <div class="education-left">
          <div class="university">{{ edu.school }}</div>
          <div class="major">{{ edu.major }}</div>
        </div>
      </div>
    </ResumeSection>

    <ResumeSection :title="resumeData.workExperience.title">
      <WorkExperience
        v-for="(work, index) in resumeData.workExperience.items"
        :key="index"
        :work="work"
      />
    </ResumeSection>

    <ResumeSection :title="resumeData.projects.title">
      <ProjectItem
        v-for="(project, index) in resumeData.projects.items"
        :key="index"
        :project="project"
      />
    </ResumeSection>

    <ResumeSection :title="resumeData.skills.title">
      <SkillSection :skills="resumeData.skills" />
    </ResumeSection>

    <ResumeSection :title="resumeData.advantages.title">
      <div class="description">
        <ul>
          <li v-for="(item, index) in resumeData.advantages.items" :key="index">
            <strong>{{ item.label }}</strong>{{ item.text }}
          </li>
        </ul>
      </div>
    </ResumeSection>

    <ResumeSection :title="resumeData.evaluation.title" style="margin-bottom: 0">
      <div class="description">
        {{ resumeData.evaluation.description }}
      </div>
    </ResumeSection>
  </div>
</template>

<script lang="ts" setup>
import { resumeData } from './resume-data'
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeSection from './components/ResumeSection.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProjectItem from './components/ProjectItem.vue'
import SkillSection from './components/SkillSection.vue'

defineOptions({ name: 'ResumePage' })
</script>

<style lang="scss" scoped>
/* 全局样式和CSS变量 */
:root {
  --primary-color: #4f46e5;
  --primary-light: #6366f1;
  --primary-dark: #4338ca;
  --secondary-color: #06b6d4;
  --text-dark: #1f2937;
  --text-medium: #4b5563;
  --text-light: #6b7280;
  --bg-light: #f8fafc;
  --bg-card: #ffffff;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

:global(.dark) {
  --text-dark: #f3f4f6;
  --text-medium: #d1d5db;
  --text-light: #9ca3af;
  --bg-light: #1f2937;
  --bg-card: #111827;
  --border-color: #374151;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resume-container {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Microsoft YaHei',
    Arial,
    sans-serif;
  line-height: 1.8;
  color: var(--text-dark);
  background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
  min-height: 100vh;
  padding: 80px 20px;
  transition: all 0.3s ease;
  max-width: 1000px;
  margin: 0 auto;
}

:global(.dark) .resume-container {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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

/* 教育背景 */
.education-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  background: var(--bg-light);
  border-radius: 12px;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-card);
    border-color: #e0e7ff;
    box-shadow: var(--shadow-sm);
  }
}

.education-left {
  flex: 1;
}

.university {
  font-weight: 700;
  color: var(--text-dark);
  font-size: 16px;
  margin-bottom: 4px;
}

.major {
  color: var(--text-medium);
  font-size: 14px;
}

/* 平板样式 */
@media (max-width: 1024px) {
  .resume-container {
    padding: 40px 16px;
  }
}

/* 移动端样式 */
@media (max-width: 768px) {
  .resume-container {
    padding: 24px 12px;
  }
}

/* 打印样式 */
@media print {
  .resume-container {
    background: #fff;
    padding: 0;
    box-shadow: none;
    max-width: 100%;
  }

  :global(body) {
    background: #fff;
  }

  :global(.theme-toggle) {
    display: none;
  }
}
</style>
