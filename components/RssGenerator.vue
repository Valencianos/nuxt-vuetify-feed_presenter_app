<script setup lang="ts">

const store = useStore()

const { parse } = require('rss-to-json');

(async () => {
  const rss = await parse('http://static.feed.rbc.ru/rbc/logical/footer/news.rss');

  console.log(JSON.stringify(rss, null, 3));

})();

</script>

<template>

</template>

<style scoped>

</style>