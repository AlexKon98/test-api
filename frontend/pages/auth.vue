<template>
  <main class="main">
    <section class="auth">
      <form method="post" @submit.prevent>
        <div>
          <label for="username">Username: </label>
          <input type="text" id="username"
            name="username"
            v-model="params.username"
          >
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" id="password"
            name="password"
            v-model="params.password"
          >
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AuthPage',
  data() {
    return {
      params: {
        username: '',
        password: '',
      },
    };
  },
}
</script>
