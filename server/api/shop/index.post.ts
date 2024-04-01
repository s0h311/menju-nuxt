import { addShop } from '../../data/crud/shop.crud'
import { Shop, zShop } from '../../data/models/shop.model'
import { ApiResponse } from '../types'

export default defineEventHandler(async (event): Promise<ApiResponse<Shop>> => {
  const validationResult = await readValidatedBody(event, zShop.omit({ id: true }).safeParse)

  if (!validationResult.success) {
    return {
      data: null,
      error: {
        message: 'Validation failed',
        type: 'validation',
      },
    }
  }

  const shop = validationResult.data

  const data = await addShop(shop)

  return {
    data,
    error: null,
  }
})
