import { Shop } from '@prisma/client'
import { zShop } from '../../data/models/shop.model'
import { ApiResponse } from '../types'
import { getShop } from '../../data/crud/shop.crud'

export default defineEventHandler(async (event): Promise<ApiResponse<Shop>> => {
  const shopId = Number(getRouterParam(event, 'id'))

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

  const data = await getShop(shopId)

  return {
    data,
    error: null,
  }
})
