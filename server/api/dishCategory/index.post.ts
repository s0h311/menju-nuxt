import { DishCategory, zDishCategory } from '~/server/data/models/dishCategory.model'
import { ApiResponse } from '../types'
import { addDishCategory } from '~/server/data/crud/dishCategory.crud'

export default defineEventHandler(async (event): Promise<ApiResponse<DishCategory>> => {
  const validationResult = await readValidatedBody(event, zDishCategory.omit({ id: true }).safeParse)

  if (!validationResult.success) {
    return {
      data: null,
      error: {
        message: 'Validation failed',
        type: 'validation',
      },
    }
  }

  const dishCategory = validationResult.data

  const data = await addDishCategory(dishCategory)

  return {
    data,
    error: null,
  }
})
