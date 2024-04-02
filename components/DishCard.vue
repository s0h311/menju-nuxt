<template>
  <li class="border rounded-lg">
    <NuxtImg
      v-if="dish.imageUrl"
      class="aspect-[5/3] object-cover rounded-t-lg"
      :src="`dummy/foodImages/${dish.imageUrl}`"
      width="400"
      height="240"
    />
    <div class="space-y-3 p-3">
      <div class="grid grid-flow-col gap-4 justify-between">
        <h3>{{ dish.name }}</h3>
        <p>{{ toMonetaryValue(dish.price) }}</p>
      </div>

      <p class="line-clamp-2 text-sm">{{ allIngredients }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Dish } from '~/server/data/models/dish.model'

type Props = {
  dish: Dish
}

const props = defineProps<Props>()

const allIngredients = computed<string>(() => {
  const ingredients = props.dish.ingredients
  return `${ingredients.required.join(', ')}, ${ingredients.optional.join(', ')}`
})
</script>
