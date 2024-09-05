<template>
    <div>
      <h1>Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      fetch('/api/posts')
        .then(response => response.json())
        .then(data => this.posts = data);
    },
  };
  </script>
  