import { getAllDishCategoriesByShopId } from '~/server/data/crud/dishCategory.crud'
import { DishCategory } from '~/server/data/models/dishCategory.model'
import { getAllDishesByDishCategoryId } from '~/server/data/crud/dish.crud'
import { DishesByCategory } from '../models/dishesByCategory.model'
import { ApiResponse } from '../../types'
import { zShop } from '~/server/data/models/shop.model'

export default defineEventHandler(async (event): Promise<ApiResponse<DishesByCategory[]>> => {
  const shopId = Number(getRouterParam(event, 'shopId'))

  const validationResult = zShop.pick({ id: true }).safeParse({ id: shopId })

  if (!validationResult.success) {
    return {
      data: null,
      error: {
        message: 'Validation failed',
        type: 'validation',
      },
    }
  }

  const dishCategories: DishCategory[] = await getAllDishCategoriesByShopId(shopId)

  const dishesByCategory: DishesByCategory[] = await Promise.all(
    dishCategories.map(async (dishCategory): Promise<DishesByCategory> => {
      const dishes = await getAllDishesByDishCategoryId(dishCategory.id)

      return {
        dishCategory,
        dishes,
      }
    })
  )

  return {
    data: dishesByCategory,
    error: null,
  }
})
