<template>
  <main class="main">
    <section class="nomen">
      <h1 class="nomen__title">Номенклатура</h1>
      <ul class="nomen__list">
        <li class="nomen__item" v-for="nomen in nomens" :key="nomen.id">
          <NuxtLink :to="'/nomen/' + nomen.id">
            <div>{{ nomen.name }}</div>
            <div>{{ nomen.code }}</div>
          </NuxtLink>
        </li>
      </ul>
      <div class="nomen__error" v-if="error.show">
        {{ error.message }}
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      nomens: [],
      error: {
        message: 'Авторизуйтесь',
        show: false
      }
    }
  },
  computed: {
    token() {
      return this.$store.getters['getToken'];
    }
  },
  async fetch() {
    try {
      let req = await this.$store.dispatch('fetchNomen', this.token);

      if (req.status === 200) this.nomens = req.data.results;
      if (req.status === 401) this.error.message = 'Учетные данные не были предоставлены';
      if (req.status === 404) this.error.message = 'Номенклатура не найдена';
    } catch (e) {
      console.log(e.code);
      console.log(e.status);
      console.log(e.message);
      // this.error.show = true;
    }
  }
}
</script>

<style>
.nomen__title {
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 10px;
}

.nomen__list {
  margin-top: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.nomen__item {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  max-width: 50%;
}

.nomen__item:hover {
  background-color: rgba(128, 128, 128, .5);
}
</style>
