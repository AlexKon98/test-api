<template>
  <main class="main">
    <section class="auth">
      <h1>Авторизация</h1>
      <form class="auth__form" method="post" @submit.prevent="sendForm">
        <div class="auth__wrap">
          <label for="username">Имя пользователя: </label>
          <input type="text" id="username"
            name="username"
            v-model="params.username"
            @input="error.show = false"
          >
        </div>
        <div class="auth__wrap">
          <label for="password">Пароль: </label>
          <input type="password" id="password"
            name="password"
            v-model="params.password"
            @input="error.show = false"
          >
        </div>
        <div class="auth__error" v-if="error.show">{{ error.message }}</div>
        <button class="auth__send" type="submit">Отправить</button>
      </form>
    </section>
  </main>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'AuthPage',
  data() {
    return {
      error: {
        message: 'Неверное имя пользователя и/или пароль',
        show: false
      },
      params: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async sendForm() {
      this.error.show = false;
      try {
        let req = await this.$store.dispatch('fetchToken', { username: this.params.username, password: this.params.password });
        if (req.status === 200) {
          this.$store.commit('setToken', 'Token ' + req.data.token);
          Vue.$cookies.set('token', 'Token ' + req.data.token, { path: '/', maxAge: 10000000000000000 });
          this.$router.push('/');
        }
      } catch (e) {
        if (e.message.includes('400')) this.error.show = true;
      }
    }
  },
}
</script>


<style scoped>
.auth__form {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.auth__wrap {
  display: flex;
  flex-direction: column;
}

.auth__error {
  color: red;
  max-width: 207px;
  margin: 5px 0;
}

.main {
  margin: auto;
}
</style>
