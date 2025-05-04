import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/HomePage.vue';
import About from '../views/About.vue';
import BlogPage from '../views/BlogPage.vue';
import ContactPage from '../views/ContactPage.vue';
import TrainingPage from '../views/TrainingPage.vue';
import ClinicPage from '../views/ClinicPage.vue';

const routes = [
  { path: '/', component: Home, meta: { layout: 'MainLayout', pageTitle: 'Home' } },
  { path: '/about', component: About, meta: { layout: 'MainLayout', pageTitle: 'About Us' } },
  { path: '/blog', component: BlogPage, meta: { layout: 'MainLayout', pageTitle: 'Blog' } },
  { path: '/contact', component: ContactPage, meta: { layout: 'MainLayout', pageTitle: 'Contact' } },
  { path: '/training', component: TrainingPage, meta: { layout: 'MainLayout', pageTitle: 'Training Programs' } },
  { path: '/clinic', component: ClinicPage, meta: { layout: 'MainLayout', pageTitle: 'Clinic' } },
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const title = to.meta.pageTitle || 'My App';
  document.title = `${title} | Royal Diadem Group`;
});


export default router;
