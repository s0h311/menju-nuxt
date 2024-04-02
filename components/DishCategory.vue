<template>
  <li class="space-y-5">
    <h2 class="tracking-wider">
      {{ capitalize(dishesByCategory.dishCategory.name) /** TODO macht das so Sinn? Oder Casing nicht ändern? */ }}
    </h2>
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
