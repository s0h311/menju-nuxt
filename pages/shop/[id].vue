<template>
  <Filterbar />
  <DishCategoryList :dishesByCategory="visibleDishesByCategory" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const shopId = route.params.id

await useDishesByCategory(Number(shopId))

const visibleDishesByCategory = useVisibleDishesByCategory()
</script>
