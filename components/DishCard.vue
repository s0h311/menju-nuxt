<template>
  <li class="border rounded-lg">
    <NuxtImg
      v-if="dish.imageUrl"
      class="aspect-[5/3] object-cover rounded-t-lg"
      :src="`dummy/foodImages/${dish.imageUrl}`"
      width="400"
      height="300"
    />
    <div class="p-3">
      <h3>{{ dish.name }}</h3>
      <p>{{ toMonetaryValue(dish.price) }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Dish } from '~/server/data/models/dish.model'

type Props = {
  dish: Dish
}

const props = defineProps<Props>()
</script>
