<template>
  <DishCategoryList :dishesByCategory="dishesByCategory" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const shopId = route.params.id

const dishesByCategory = await useDishesByCategory(Number(shopId))
</script>
