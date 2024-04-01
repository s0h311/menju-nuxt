import { Dish, zDish } from '~/server/data/models/dish.model'
import { ApiResponse } from '../types'
import { addDish } from '~/server/data/crud/dish.crud'

export default defineEventHandler(async (event): Promise<ApiResponse<Dish>> => {
  const validationResult = await readValidatedBody(event, zDish.omit({ id: true }).safeParse)

  if (!validationResult.success) {
    return {
      data: null,
      error: {
        message: 'Validation failed',
        type: 'validation',
      },
    }
  }

  const dish = validationResult.data

  const data = await addDish(dish)

  return {
    data,
    error: null,
  }
})
