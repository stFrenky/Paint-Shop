import { createRouter, createWebHistory } from 'vue-router';
import { PSPage } from '@/pages/PaintShop';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PaintShop',
      component: PSPage,
    },
  ],
});
export default router;
