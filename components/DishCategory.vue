<template>
  <li class="space-y-5">
    <h2>{{ dishesByCategory.dishCategory.name }}</h2>
    <DishList :dishes="dishesByCategory.dishes" />
  </li>
</template>

<script setup lang="ts">
import type { DishesByCategory } from '~/server/api/dishesByCategory/models/dishesByCategory.model'

type Props = {
  dishesByCategory: DishesByCategory
}

const props = defineProps<Props>()
</script>
