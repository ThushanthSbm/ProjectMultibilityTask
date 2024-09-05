<template>
  <div>
    <h1>Edit User</h1>
    <form @submit.prevent="updateUser">
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
      <button type="submit">Update</button>
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
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await fetch(`/api/users/${this.$route.params.id}`);
        this.form = await response.json();
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
    async updateUser() {
      try {
        await fetch(`/api/users/${this.$route.params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });
        this.$router.push('/users');
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
  },
};
</script>
