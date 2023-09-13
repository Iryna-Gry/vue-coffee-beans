import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import HomePage from './pages/HomePage.vue';
import MenuPage from './pages/MenuPage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import ContactUsPage from './pages/ContactUsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/menu', component: MenuPage },
    { path: '/about', component: AboutUsPage },
    { path: '/contact', component: ContactUsPage },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
