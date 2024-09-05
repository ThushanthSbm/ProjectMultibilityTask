<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        post: {},
      };
    },
    mounted() {
      fetch(`/api/post/${this.id}`)
        .then(response => response.json())
        .then(data => this.post = data);
    },
  };
  </script>
  