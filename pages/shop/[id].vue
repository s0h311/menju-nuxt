<template>
  <ul class="space-y-10">
    <li
      v-for="{ dishCategory, dishes } in dishesByCategory"
      class="space-y-5"
      :key="dishCategory.id"
    >
      <h2>{{ dishCategory.name }}</h2>

      <ul class="grid grid-flow-col gap-5 items-center overflow-x-scroll">
        <li
          v-for="dish in dishes"
          class="w-[60dvw] md:w-[30dvw] lg:w-72 border rounded-lg p-5"
          :key="dish.id"
        >
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.price }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const shopId = route.params.id

const dishesByCategory = await useDishesByCategory(Number(shopId))
</script>
