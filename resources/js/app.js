import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createRouter, createWebHistory } from 'vue-router';
import AuthenticatedLayout from './Layouts/AuthenticatedLayout.vue';
import Guest from './Layouts/Guest.vue';

// Import your additional components
import Posts from '../components/Posts.vue';
import Post from '../components/Post.vue';

// Define your routes
const routes = [
  { path: '/users', name: 'user-index', component: () => import('../components/Index.vue') },
  { path: '/users/create', name: 'user-create', component: () => import('../components/Create.vue') },
  { path: '/users/:id/edit', name: 'user-edit', component: () => import('../components/Edit.vue'), props: true },
  { path: '/posts', name: 'posts-index', component: Posts },
  { path: '/posts/:id', name: 'posts-show', component: Post, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(router)  // Add Vue Router to the app
            .component('authenticated-layout', AuthenticatedLayout)
            .component('guest-layout', Guest)
            .component('Posts', Posts)  // Register Posts component globally
            .component('Post', Post)    // Register Post component globally
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
