export const resumeData = {
  header: {
    name: "程少华",
    title: "资深前端开发工程师",
    subtitle: "7+ Years Experience • Front-end Engineer",
    contacts: [
      { icon: "phone", value: "18915635379", link: "tel:18915635379" },
      {
        icon: "email",
        value: "thk562391567@gmail.com",
        link: "mailto:thk562391567@gmail.com",
      },
      { icon: "location", value: "合肥", link: "" },
    ],
  },
  intention: {
    title: "🎯 求职意向",
    items: [
      { label: "目标职位", value: "前端工程师（Front-end Engineer）" },
      { label: "工作性质", value: "全职" },
      { label: "期望薪资", value: "20-25K" },
      { label: "工作地点", value: "合肥" },
    ],
  },
  education: {
    title: "👨‍🎓 教育背景",
    items: [
      {
        school: "西南交通大学",
        major: "计算机科学与技术 • 本科",
      },
    ],
  },
  workExperience: {
    title: "💼 工作经历",
    items: [
      {
        company: "厦门方胜众合企业服务有限公司合肥分公司",
        position: "前端工程师（Front-end Engineer）",
        period: "2022-08~至今",
        responsibilities: [
          "前端公共组件、Hooks封装、完善前端开发规范",
          "不定期参与Code review，推进工程化建设和代码质量管控",
          "指导和培养团队成员，技术难点攻关和性能优化",
          "与产品、后端团队密切配合，确保项目按期高质量交付",
          "深度参与多个大型前端项目的开发，包括EHS企业安全生产管理系统、消防接处警（指挥调度）系统等",
        ],
      },
      {
        company: "安徽善至社区服务有限公司",
        position: "前端工程师（Front-end Engineer）",
        period: "2021-05~2022-08",
        responsibilities: [
          "负责社区协商管理系统、i社教育系统等多个B端产品的前端开发",
          "主导前端技术选型和架构设计，推动Vue3技术栈在团队中的落地",
          "建立前端代码规范和Git工作流，提升团队协作效率30%",
          "跨部门协作，参与产品需求评审和原型设计，输出多个项目原型",
          "指导初级开发人员，定期组织技术分享和Code Review",
        ],
      },
      {
        company: "安徽鼠宝信息科技有限公司",
        position: "前端工程师（Front-end Engineer）",
        period: "2020-03~2021-04",
        responsibilities: [
          "独立负责多个前端项目的全流程开发，从需求分析到上线部署",
          "基于Vue2 + Element UI搭建企业级后台管理系统，支持10+子模块",
          "封装通用业务组件和工具函数，提升开发效率和代码复用率",
          "与客户直接对接需求，快速响应需求变更，保证项目按期交付",
          "优化前端性能，通过懒加载、代码分割等手段将首屏加载时间缩短40%",
        ],
      },
      {
        company: "苏州馨璞信息科技有限公司",
        position: "前端工程师（Front-end Engineer）",
        period: "2017-07~2020-02",
        responsibilities: [
          "负责公司SaaS平台、官网及微信小程序的前端开发工作",
          "参与核心产品的前端架构设计，完成从jQuery到Vue的技术栈升级",
          "使用Vue2 + Vuex构建多个企业级应用，累计服务用户10万+",
          "开发微信小程序，实现与H5页面的数据互通和用户体验一致性",
          "严格按照UI设计稿进行像素级还原，确保视觉效果100%符合设计要求",
        ],
      },
    ],
  },
  projects: {
    title: "🚀 项目经验",
    items: [
      {
        name: "EHS安全生产管理平台",
        techStack: "Vue3 + Vite + TypeScript + Naive UI + Pinia",
        tag: "核心项目",
        description:
          "企业级安全生产管理系统，包含设备管理、事故管理、风险管理、法规管理等十余个子系统，服务企业用户500+",
        achievements: [
          {
            text: "采用 Vue3 Composition API + Vite 构建现代化前端架构，显著提升开发体验与构建性能",
            highlights: ["Vue3 Composition API", "Vite"],
          },
          {
            text: "基于 Qiankun微前端架构 设计，实现5个子应用独立开发部署，支持多团队并行协作",
            highlights: ["Qiankun微前端架构"],
          },
          {
            text: "集成 Echarts + ECharts GL 实现复杂数据可视化和3D场景展示",
            highlights: ["Echarts + ECharts GL"],
          },
          {
            text: "使用 Pinia 进行状态管理，配合 RxJS 处理复杂异步业务流，大幅提升代码可维护性",
            highlights: ["Pinia", "RxJS"],
          },
          {
            text: "建立完整的 ESLint + Prettier + Husky 代码规范体系，配合CI/CD实现自动化质量检测",
            highlights: ["ESLint + Prettier + Husky"],
          },
        ],
      },
      {
        name: "消防指挥调度系统",
        techStack: "Vue2 + TypeScript + Element UI + Vuex + Electron",
        tag: "重点项目",
        description:
          "消防POC接处合一客户端，支持实时调度、GIS定位、视频监控等功能，部署于全国多个消防站点",
        achievements: [
          {
            text: "使用 TypeScript 重构核心业务代码，显著减少运行时错误，提升系统稳定性",
            highlights: ["TypeScript"],
          },
          {
            text: "集成 百度/高德/天地图 多种GIS服务和实时视频监控，支持多路视频同时预览",
            highlights: ["GIS地图"],
          },
          {
            text: "实现 WebSocket 长连接和 StompJS 消息推送，确保调度指令实时送达",
            highlights: ["WebSocket", "StompJS"],
          },
          {
            text: "支持 中英文国际化 (Vue-i18n) 和多套动态主题切换，满足不同地区使用需求",
            highlights: ["中英文国际化"],
          },
          {
            text: "基于 Electron 打包桌面应用，实现跨平台部署和原生能力调用",
            highlights: ["Electron"],
          },
        ],
      },
      {
        name: "GIS综合应用平台",
        techStack: "Nuxt.js + Vue2 + G2-2D + 百度地图API",
        tag: "技术创新",
        description:
          "基于Nuxt.js的服务端渲染GIS应用，支持复杂地图操作和数据可视化，承载高并发访问",
        achievements: [
          {
            text: "采用 Nuxt.js SSR 架构，有效优化首屏加载速度和SEO表现",
            highlights: ["Nuxt.js SSR"],
          },
          {
            text: "集成 G2-2D地图引擎 和多种地图服务，支持海量点位渲染和复杂GIS操作",
            highlights: ["G2-2D地图引擎"],
          },
          {
            text: "实现 WebSocket 实时数据推送和 Echarts 动态图表，数据更新实时流畅",
            highlights: ["WebSocket", "Echarts"],
          },
          {
            text: "支持移动端响应式适配和离线数据缓存（IndexedDB），保障弱网环境下用户体验",
            highlights: ["IndexedDB"],
          },
        ],
      },
      {
        name: "移动端应用矩阵",
        techStack: "Vue3 + Vite + Vant + APICloud + UniApp + Tauri",
        tag: "移动端",
        description: "多个移动端混合应用开发，包括消防移动端、应急管理等，拥有广泛用户基础",
        achievements: [
          {
            text: "基于 Vue3 + Vite 构建高性能移动端应用，提供极致流畅的用户体验",
            highlights: ["Vue3 + Vite"],
          },
          {
            text: "使用 Vant UI 组件库，自定义主题和二次封装，保证移动端交互体验一致性",
            highlights: ["Vant UI"],
          },
          { text: "集成 APICloud 实现原生能力调用（相机、定位、推送等）", highlights: ["APICloud"] },
          { text: "支持 PWA 和离线使用，通过Service Worker实现资源缓存和后台同步", highlights: ["PWA", "Service Worker"] },
        ],
      },
    ],
  },
  skills: {
    title: "🛠️ 技术技能",
    categories: [
      {
        name: "前端框架",
        items:
          "Vue2/3 (精通), Nuxt.js, React, TypeScript, JavaScript ES6+, UniApp, Electron",
      },
      { name: "构建工具", items: "Vite, Webpack 4/5, Rollup, Vue CLI, Gulp, Babel, ESBuild" },
      { name: "状态管理", items: "Vuex, Pinia, RxJS, Redux" },
      { name: "UI组件库", items: "Element UI/Plus, Naive UI, Ant Design, Vant, TailwindCSS" },
      { name: "数据可视化", items: "Echarts, Echarts-GL, G2/G6, D3.js, Canvas, SVG" },
      { name: "工程化", items: "ESLint, Prettier, Husky, CommitLint, Conventional Commits, Git Flow" },
      { name: "微前端", items: "Qiankun, Micro-App, Module Federation" },
      { name: "测试工具", items: "Vitest, Jest, Cypress, Testing Library" },
      { name: "其他技能", items: "SSR/SSG, PWA, WebSocket, HTTP/HTTPS, RESTful API, GraphQL" },
      {
        name: "开发工具",
        items: "WebStorm, VS Code, Git, Chrome DevTools, Postman, Charles",
      },
    ],
  },
  advantages: {
    title: "🌟 专业优势",
    items: [
      {
        label: "大型项目实战：",
        text: "7年+前端开发经验，主导过EHS安全管理平台（500+企业用户）及消防指挥调度系统等大型复杂项目，具备从0到1的架构设计与落地能力。",
      },
      {
        label: "技术架构深耕：",
        text: "精通Vue生态及现代化前端工具链（Vite/TypeScript/Pinia），在微前端架构（Qiankun）、服务端渲染（Nuxt.js）及跨端开发（Electron/UniApp）方面有丰富实战经验。",
      },
      {
        label: "工程化与提效：",
        text: "擅长前端工程化体系建设，通过ESLint+Prettier+Husky规范代码，引入自动化CI/CD流程，显著提升团队开发效率与代码质量。",
      },
      {
        label: "性能优化专家：",
        text: "具备深厚的性能优化功底，曾通过SSR、代码分割、Service Worker等手段大幅提升核心项目首屏加载速度。",
      },
      {
        label: "团队管理与赋能：",
        text: "具备技术团队管理经验，善于通过技术分享、Code Review及文档沉淀提升团队整体技术水平，推动技术梯队建设。",
      },
      {
        label: "持续学习与创新：",
        text: "保持对前沿技术的敏锐度，积极探索Rust、WebAssembly等新技术在前端领域的应用，致力于用技术创新解决业务难题。",
      },
    ],
  },
  evaluation: {
    title: "💡 个人评价",
    description:
      "7年+前端开发经验，精通Vue全家桶生态，在企业级应用架构设计、性能优化、工程化建设方面有深入实践。擅长从0到1搭建前端项目，主导过EHS安全生产管理平台、消防指挥调度系统等多个大型B端项目，具备微前端、SSR、Electron等多种技术栈实战经验。注重代码质量和团队协作，建立了完善的前端开发规范和工程化体系。具备良好的技术视野和学习能力，能够快速掌握新技术并应用到实际项目中，期待在新的平台上持续成长并创造更大价值。",
  },
};
