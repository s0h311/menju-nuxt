<template>
  <ul class="grid grid-flow-col gap-5 overflow-x-scroll">
    <DishCard
      v-for="dish in dishes"
      class="w-[65dvw] md:w-[30dvw] lg:w-72"
      :key="dish.id"
      :dish="dish"
    />
  </ul>
</template>

<script setup lang="ts">
import type { Dish } from '~/server/data/models/dish.model'

type Props = {
  dishes: Dish[]
}

const props = defineProps<Props>()
</script>
