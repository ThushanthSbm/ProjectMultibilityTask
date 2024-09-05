import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/Index.vue';
import Create from '../components/Create.vue';
import Edit from '../components/Edit.vue';
import Posts from './components/Posts.vue';  // Import the Posts component
import Post from './components/Post.vue';    // Import the Post component

const routes = [
  { path: '/users', component: Index },
  { path: '/users/create', component: Create },
  { path: '/users/:id/edit', component: Edit, props: true },
  { path: '/posts', component: Posts },                   // Route for listing posts
  { path: '/posts/:id', component: Post, props: true }     // Route for displaying a single post
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
