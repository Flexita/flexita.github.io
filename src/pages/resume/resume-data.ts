export const resumeData = {
  header: {
    name: "程少华",
    title: "资深前端开发工程师",
    subtitle: "7+ Years Experience • Full Stack Development",
    contacts: [
      { icon: "phone", value: "18915635379", link: "tel:18915635379" },
      {
        icon: "email",
        value: "thk562391567@gmail.com",
        link: "mailto:thk562391567@gmail.com",
      },
      { icon: "location", value: "合肥", link: "" },
      { icon: "salary", value: "期望薪资：20-25K", link: "" },
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
        period: "",
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
          "项目业务需求开发",
          "前端项目规划，任务分派，开发进度进度管理",
          "主导多个前端项目的开发，包括社区协商管理系统、i社教育系统等",
          "建立前端开发规范，指导和培养团队成员",
          "后期兼职产品，部分项目原型输出",
        ],
      },
      {
        company: "安徽鼠宝信息科技有限公司",
        position: "前端工程师（Front-end Engineer）",
        period: "2020-03~2021-04",
        responsibilities: [
          "项目业务需求开发",
          "前端项目规划，任务分派，开发进度进度管理",
          "主导多个前端项目的开发，包括社区协商管理系统、i社教育系统等",
          "建立前端开发规范，指导和培养团队成员",
          "客户需求对接",
        ],
      },
      {
        company: "苏州馨璞信息科技有限公司",
        position: "前端工程师（Front-end Engineer）",
        period: "2017-07~2020-02",
        responsibilities: [
          "微信小程序开发，sass平台开发，网站开发",
          "根据设计稿高度还原前端页面；",
          "负责公司核心产品的前端架构设计和技术选型",
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
          "企业级安全生产管理系统，包含设备管理、事故管理、风险管理、法规管理十数个子系统",
        achievements: [
          {
            text: "采用 Vue3 + Vite 构建现代化前端架构，提升开发效率50%",
            highlights: ["Vue3 + Vite"],
          },
          {
            text: "基于 微前端架构 设计，支持多团队协同开发和独立部署",
            highlights: ["微前端架构"],
          },
          {
            text: "集成 Echarts + ECharts GL 实现复杂数据可视化和3D展示",
            highlights: ["Echarts + ECharts GL"],
          },
          {
            text: "使用 Pinia 进行状态管理，配合 RxJS 处理复杂业务逻辑",
            highlights: ["Pinia", "RxJS"],
          },
          {
            text: "建立完整的 ESLint + Prettier + Husky 代码规范体系",
            highlights: ["ESLint + Prettier + Husky"],
          },
        ],
      },
      {
        name: "消防指挥调度系统",
        techStack: "Vue2 + TypeScript + Element UI + Vuex + Electron",
        tag: "重点项目",
        description:
          "消防POC接处合一客户端，支持实时调度、GIS定位、视频监控等功能",
        achievements: [
          {
            text: "使用 TypeScript 重构项目，提升代码质量和开发效率",
            highlights: ["TypeScript"],
          },
          {
            text: "集成 GIS地图 和实时视频监控，支持多种地图服务",
            highlights: ["GIS地图"],
          },
          {
            text: "实现 WebSocket 实时通信和 StompJS 消息推送",
            highlights: ["WebSocket", "StompJS"],
          },
          {
            text: "支持 多语言国际化 (Vue-i18n) 和动态皮肤切换",
            highlights: ["多语言国际化"],
          },
          {
            text: "建立组件化开发模式，提升代码复用性和维护性",
            highlights: [],
          },
        ],
      },
      {
        name: "GIS综合应用平台",
        techStack: "Nuxt.js + Vue2 + G2-2D + 百度地图API",
        tag: "技术创新",
        description:
          "基于Nuxt.js的服务端渲染GIS应用，支持复杂地图操作和数据可视化",
        achievements: [
          {
            text: "采用 Nuxt.js SSR 架构，优化首屏加载和SEO表现",
            highlights: ["Nuxt.js SSR"],
          },
          {
            text: "集成 G2-2D地图引擎 和多种地图服务，支持复杂GIS操作",
            highlights: ["G2-2D地图引擎"],
          },
          {
            text: "实现 WebSocket 实时数据推送和 Echarts 动态图表",
            highlights: ["WebSocket", "Echarts"],
          },
          {
            text: "支持移动端适配和离线数据缓存，提升用户体验",
            highlights: [],
          },
        ],
      },
      {
        name: "移动端应用矩阵",
        techStack: "Vue3 + Vite + Vant + APICloud + UniApp + Tauri",
        tag: "移动端",
        description: "多个移动端混合应用开发，包括消防移动端、应急管理等",
        achievements: [
          {
            text: "基于 Vue3 + Vite 构建高性能移动端应用",
            highlights: ["Vue3 + Vite"],
          },
          {
            text: "使用 Vant UI 组件库，保证移动端交互体验",
            highlights: ["Vant UI"],
          },
          { text: "集成 APICloud 实现原生能力调用", highlights: ["APICloud"] },
          { text: "支持 PWA 和离线使用，提升用户体验", highlights: ["PWA"] },
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
          "Vue2/3, Nuxt.js, TypeScript, JavaScript ES6+, UniApp, ApiCloud, Electron",
      },
      { name: "构建工具", items: "Vite, Webpack, Vue CLI, Gulp, Babel" },
      { name: "状态管理", items: "Vuex, Pinia, RxJS" },
      { name: "UI组件库", items: "Element UI, Naive UI, Vant, TailwindCSS" },
      { name: "数据可视化", items: "Echarts, Echarts-GL, G2-2D, Canvas, SVG" },
      { name: "工程化", items: "ESLint, Prettier, Husky, CommitLint, Git" },
      { name: "其他技能", items: "微前端, SSR, PWA, WebSocket, HTTP/HTTPS" },
      {
        name: "开发工具",
        items: "Webstorm, VS Code, Git, Chrome DevTools, Postman",
      },
    ],
  },
  advantages: {
    title: "🌟 专业优势",
    items: [
      {
        label: "丰富的项目经验：",
        text: "超7年前端开发经验，主导过多个大型企业级项目",
      },
      { label: "技术架构能力：", text: "具备完整的前端架构设计和技术选型经验" },
      {
        label: "团队协作能力：",
        text: "具备团队带领经验，能够指导和培养团队成员",
      },
      {
        label: "工程化实践：",
        text: "建立完善的前端工程化体系，提升团队开发效率",
      },
      {
        label: "技术前瞻性：",
        text: "紧跟前端技术发展，积极引入新技术和最佳实践",
      },
      { label: "问题解决能力：", text: "具备强大的技术难点攻关和性能优化能力" },
    ],
  },
  evaluation: {
    title: "💡 个人评价",
    description:
      "作为一名拥有超7年经验的资深前端工程师，我在Vue生态系统、工程化建设、团队管理等方面都有深入的理解和实践。擅长从0到1搭建前端架构，具备丰富的大型项目开发经验，能够在保证代码质量的同时快速交付产品。具备良好的沟通协调能力和团队合作精神，能够胜任职位，带领团队完成更具挑战性的项目。",
  },
};
