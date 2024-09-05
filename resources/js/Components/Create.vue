<template>
  <div>
    <h1>Create New User</h1>
    <form @submit.prevent="createUser">
      <div>
        <label for="name">Name:</label>
        <input v-model="form.name" id="name" type="text" />
      </div>
      <div>
        <label for="username">Username:</label>
        <input v-model="form.username" id="username" type="text" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="form.email" id="email" type="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="form.password" id="password" type="password" />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async createUser() {
      try {
        await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });
        this.$router.push('/users');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    },
  },
};
</script>
