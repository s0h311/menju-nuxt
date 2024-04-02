<template>
  <ul class="space-y-10">
    <DishCategory
      v-for="dishesByCat in dishesByCategory"
      :key="dishesByCat.dishCategory.id"
      :dishes-by-category="dishesByCat"
    />
  </ul>
</template>

<script setup lang="ts">
import type { DishesByCategory } from '~/server/api/dishesByCategory/models/dishesByCategory.model'

type Props = {
  dishesByCategory: DishesByCategory[]
}

const props = defineProps<Props>()
</script>
