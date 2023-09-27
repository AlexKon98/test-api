<template>
  <div class="wrap">
    <header>Какой-то header</header>
    <Nuxt />
    <footer>Какой-то footer</footer>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>

<style scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

footer {
  margin-top: auto;
}

header, footer {
  background-color: rgba(128, 128, 128, .5);
  padding: 10px;
}
</style>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  font-family: sans-serif;
}

ul, ol {
  list-style: none;
}
</style>
