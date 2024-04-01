<template>
  <p class="text-green-500">{{ dishesByCategory }}</p>

  <p class="text-red-500">{{ JSON.stringify(error) }}</p>
</template>

<script setup lang="ts">
const { data: dishesByCategory, error } = useFetch('/api/dishesByCategory/8')
</script>
