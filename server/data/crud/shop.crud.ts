import { prisma } from '~/server/infrastructue/database/prismaClient'
import { Shop } from '../models/shop.model'

export function addShop(shop: Omit<Shop, 'id'>): Promise<Shop> {
  return prisma.shop.create({
    data: shop,
  })
}

export function getShop(shopId: Shop['id']): Promise<Shop> {
  try {
    return prisma.shop.findFirstOrThrow({
      where: {
        id: shopId,
      },
    })
  } catch (exception) {
    throw new Error(`could not find shop with shopId: ${shopId}`)
  }
}

export function deleteShop(shopId: Shop['id']): Promise<Shop> {
  return prisma.shop.delete({
    where: {
      id: shopId,
    },
  })
}

export function updateShop(shop: Shop): Promise<Shop> {
  return prisma.shop.update({
    data: shop,
    where: {
      id: shop.id,
    },
  })
}
