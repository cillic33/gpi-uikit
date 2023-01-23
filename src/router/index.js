import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/Index.vue';
import Typography from "@/pages/Typography.vue";
import Inputs from "@/pages/Inputs.vue";
import Buttons from "@/pages/Buttons.vue";
import Tabs from "@/pages/Tabs.vue";
import Charts from "@/pages/Charts.vue";
import Tables from "@/pages/Tables.vue";

const routes = [
    {path: '/', name: 'Index', component: Index},
    {path: '/typography', name: 'Typography', component: Typography},
    {path: '/inputs', name: 'Inputs', component: Inputs},
    {path: '/buttons', name: 'Buttons', component: Buttons},
    {path: '/tabs', name: 'tabs', component: Tabs},
    {path: '/charts', name: 'Charts', component: Charts},
    {path: '/tables', name: 'Tables', component: Tables},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
