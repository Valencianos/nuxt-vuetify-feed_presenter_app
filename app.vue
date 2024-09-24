<template>
  <v-container class="pa-md-12">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-container>
</template>
<script setup lang="ts">
import HeaderComponent from "~/components/AppHeader.vue";
import {useNewsStore} from "~/stores/newsStore";

const newsStore = useNewsStore()

await callOnce(newsStore.fetch)
</script>