<template>
  <div class="resume-container">
    <!-- 头部信息 -->
    <div class="header">
      <div class="header-bg"></div>
      <div class="header-content">
        <div class="name">{{ resumeData.header.name }}</div>
        <div class="title">{{ resumeData.header.title }}</div>
        <div class="subtitle">{{ resumeData.header.subtitle }}</div>
        <div class="contact-info">
          <div
            v-for="(contact, index) in resumeData.header.contacts"
            :key="index"
            class="contact-item"
            @click="contact.link ? openLink(contact.link) : null"
            :style="{ cursor: contact.link ? 'pointer' : 'default' }"
          >
            <svg class="icon" viewBox="0 0 1024 1024" v-if="contact.icon === 'phone'">
              <path d="M768 917.333333H256c-64 0-117.333333-53.333333-117.333333-117.333333V224c0-64 53.333333-117.333333 117.333333-117.333333h512c64 0 117.333333 53.333333 117.333333 117.333333v576c0 64-53.333333 117.333333-117.333333 117.333333zM256 170.666667c-29.866667 0-53.333333 23.466667-53.333333 53.333333v576c0 29.866667 23.466667 53.333333 53.333333 53.333333h512c29.866667 0 53.333333-23.466667 53.333333-53.333333V224c0-29.866667-23.466667-53.333333-53.333333-53.333333H256z"/>
              <path d="M704 298.666667H320c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h384c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"/>
            </svg>
            <svg class="icon" viewBox="0 0 1024 1024" v-else-if="contact.icon === 'email'">
              <path d="M853.333333 213.333333H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333334v426.666666c0 46.933333 38.4 85.333333 85.333334 85.333334h682.666666c46.933333 0 85.333333-38.4 85.333334-85.333334V298.666667c0-46.933333-38.4-85.333333-85.333334-85.333334z m-29.866666 85.333334L512 512 200.533333 298.666667h623.466667-0.533333z m29.866666 426.666666H170.666667V359.466667l341.333333 238.933333 341.333333-238.933333v365.866666z"/>
            </svg>
            <svg class="icon" viewBox="0 0 1024 1024" v-else-if="contact.icon === 'location'">
              <path d="M512 85.333333C346.88 85.333333 213.333333 218.88 213.333333 384c0 236.8 277.333333 554.666667 298.666667 554.666667s298.666667-317.866667 298.666667-554.666667c0-165.12-133.546667-298.666667-298.666667-298.666667z m0 426.666667c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z"/>
            </svg>
            <svg class="icon" viewBox="0 0 1024 1024" v-else-if="contact.icon === 'salary'">
              <path d="M512 85.333333c-235.52 0-426.666667 191.146667-426.666667 426.666667s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667-191.146667-426.666667-426.666667-426.666667z m0 768c-188.586667 0-341.333333-152.746667-341.333333-341.333333S323.413333 170.666667 512 170.666667s341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333z"/>
              <path d="M661.333333 469.333333h-106.666666V298.666667c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666667 42.666667v213.333333c0 23.466667 19.2 42.666667 42.666667 42.666667h149.333333c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667z"/>
            </svg>
            <span>{{ contact.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">{{ resumeData.intention.title }}</div>
      <div class="description">
        <template v-for="(item, index) in resumeData.intention.items" :key="index">
          <strong>{{ item.label }}：</strong>{{ item.value }}
          <span v-if="index < resumeData.intention.items.length - 1">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <br v-if="index === 0" />
        </template>
      </div>
    </div>

    <div class="section">
      <div class="section-title">{{ resumeData.education.title }}</div>
      <div class="education-item" v-for="(edu, index) in resumeData.education.items" :key="index">
        <div class="education-left">
          <div class="university">{{ edu.school }}</div>
          <div class="major">{{ edu.major }}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">{{ resumeData.workExperience.title }}</div>
      <div class="work-item" v-for="(work, index) in resumeData.workExperience.items" :key="index">
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
            <li v-for="(resp, rIndex) in work.responsibilities" :key="rIndex">{{ resp }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">{{ resumeData.projects.title }}</div>
      <div class="project-item" v-for="(project, index) in resumeData.projects.items" :key="index">
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
            <li v-for="(achievement, aIndex) in project.achievements" :key="aIndex">
              <span v-html="highlightText(achievement.text, achievement.highlights)"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">{{ resumeData.skills.title }}</div>
      <div class="skills-grid">
        <div class="skill-category" v-for="(category, index) in resumeData.skills.categories" :key="index">
          <h4>{{ category.name }}</h4>
          <div class="skill-list">{{ category.items }}</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">{{ resumeData.advantages.title }}</div>
      <div class="description">
        <ul>
          <li v-for="(item, index) in resumeData.advantages.items" :key="index">
            <strong>{{ item.label }}</strong>{{ item.text }}
          </li>
        </ul>
      </div>
    </div>

    <div class="section" style="margin-bottom: 0">
      <div class="section-title">{{ resumeData.evaluation.title }}</div>
      <div class="description">
        {{ resumeData.evaluation.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { resumeData } from './resume-data';

defineOptions({ name: "ResumePage" });

const openLink = (link: string) => {
  if (link) {
    window.open(link, '_blank');
  }
};

const highlightText = (text: string, highlights: string[]) => {
  if (!highlights || highlights.length === 0) return text;
  let result = text;
  highlights.forEach(highlight => {
    // 使用简单的替换，注意这里如果highlight包含特殊正则字符可能需要转义，
    // 但在这个受控数据中应该没问题。
    result = result.replace(
      new RegExp(highlight, 'g'),
      `<span class="highlight">${highlight}</span>`
    );
  });
  return result;
};
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.resume-container {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
  line-height: 1.7;
  color: var(--text-dark);
  background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
  min-height: 100vh;
  padding: 60px 20px;
}

/* 头部样式 - 现代化设计 */
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

.header-bg {
  /* 保留这个选择器以防HTML中还有引用，但不再使用 */
  display: none;
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

/* 内容区块样式 */
.section {
  margin-bottom: 35px;
  padding: 32px;
  background: var(--bg-card);
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 3px solid #e5e7eb;
  position: relative;

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

/* 工作经历样式 */
.work-item,
.project-item {
  margin-bottom: 28px;
  padding: 20px;
  padding-left: 24px;
  border-left: 3px solid #e5e7eb;
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
    background: #ffffff;
    box-shadow: var(--shadow-sm);
    transform: translateX(4px);

    &::before {
      transform: scale(1.3);
    }
  }
}

.work-header,
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.company-name,
.project-name {
  font-weight: 700;
  font-size: 17px;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.position,
.tech-stack {
  color: var(--text-medium);
  font-size: 14px;
  margin-top: 4px;
}

.tech-stack {
  color: #667eea;
  font-weight: 500;
  font-size: 13px;
}

.period {
  color: var(--text-light);
  font-size: 13px;
  white-space: nowrap;
  padding: 4px 12px;
  background: #e0e7ff;
  border-radius: 12px;
  font-weight: 500;
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

/* 技能网格 */
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
    margin-bottom: 12px;
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

.skill-list {
  font-size: 14px;
  color: var(--text-medium);
  line-height: 1.9;
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
    background: #ffffff;
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

/* 高亮文本 */
.highlight {
  color: #667eea;
  font-weight: 600;
  padding: 2px 6px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.2);
  }
}

/* 动画效果 */
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

/* 打印样式 */
@media print {
  .resume-container {
    background: #fff;
    padding: 0;
    box-shadow: none;
  }

  .header-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  .section {
    box-shadow: none;
    page-break-inside: avoid;
  }

  .work-item,
  .project-item {
    &:hover {
      transform: none;
    }
  }
}

/* 平板样式 */
@media (max-width: 1024px) {
  .resume-container {
    padding: 40px 16px;
  }

  .header {
    padding: 50px 30px;
  }

  .section {
    padding: 24px;
  }
}

/* 移动端样式 */
@media (max-width: 768px) {
  .resume-container {
    padding: 24px 12px;
  }

  .header {
    padding: 40px 20px;
    border-radius: 16px;
  }

  .header-bg {
    height: 120px;
  }

  .name {
    font-size: 32px;
  }

  .title {
    font-size: 16px;
  }

  .subtitle {
    font-size: 12px;
  }

  .contact-info {
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
  }

  .contact-item {
    width: 100%;
    justify-content: center;
  }

  .section {
    padding: 20px;
    margin-bottom: 24px;
  }

  .section-title {
    font-size: 20px;
  }

  .work-header,
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .period {
    font-size: 12px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .work-item,
  .project-item {
    padding: 16px;
    padding-left: 20px;

    &:hover {
      transform: none;
    }
  }
}
</style>
