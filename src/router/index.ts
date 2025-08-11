import { createMemoryHistory, createRouter } from 'vue-router'
import ResumePage from "@/pages/resume/index.vue";


const routes = [
    { path: '/', component: ResumePage },
    { path: '/resume', component: ResumePage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})