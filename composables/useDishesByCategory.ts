import type { DishesByCategory } from '~/server/api/dishesByCategory/models/dishesByCategory.model'
import type { Shop } from '~/server/data/models/shop.model'

export default async function useDishesByCategory(shopId: Shop['id']): Promise<DishesByCategory[]> {
  const nuxtApp = useNuxtApp()

  const visibleDishesByCategory = useVisibleDishesByCategory()

  const { data, error } = await useFetch(`/api/dishesByCategory/${shopId}`, {
    getCachedData: (key) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
    onResponse: ({ response }) => {
      if (!response._data.error) {
        visibleDishesByCategory.value = response._data.data
      }
    },
  })

  if (error.value || data.value?.error || !data.value) {
    // TODO handle error
    return []
  }

  return data.value.data
}
