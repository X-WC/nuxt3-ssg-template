<script setup lang="ts">
/**
 * index代替app组件
 */

const appConfig = useAppConfig();
</script>

<template>
  <h1>{{ appConfig.title }}</h1>
  <h2>{{ appConfig.title }}</h2>
  <h3>{{ appConfig.title }}</h3>
  <div class="text-banner">{{ appConfig.title }}</div>
  <div>{{ appConfig.title }}</div>
  <div class="text-notes">{{ appConfig.title }}</div>

  <button>了解更多</button>
  <button class="button-sm">了解更多</button>
</template>
