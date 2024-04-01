import { prisma } from '~/server/infrastructue/database/prismaClient'
import { DishCategory } from '../models/dishCategory.model'
import { Shop } from '../models/shop.model'

export function addDishCategory(dishCategory: Omit<DishCategory, 'id'>): Promise<DishCategory> {
  return prisma.dishCategory.create({
    data: dishCategory,
  })
}

export function getDishCategory(dishCategoryId: DishCategory['id']): Promise<DishCategory> {
  try {
    return prisma.dishCategory.findFirstOrThrow({
      where: {
        id: dishCategoryId,
      },
    })
  } catch (exception) {
    throw new Error(`could not find dish category with id: ${dishCategoryId}`)
  }
}

export function getAllDishCategoriesByShopId(shopId: Shop['id']): Promise<DishCategory[]> {
  return prisma.dishCategory.findMany({
    where: {
      shopId: shopId,
    },
  })
}

export function deleteDishCategory(dishCategoryId: DishCategory['id']): Promise<DishCategory> {
  return prisma.dishCategory.delete({
    where: {
      id: dishCategoryId,
    },
  })
}

export function updateDishCategory(dishCategory: DishCategory): Promise<DishCategory> {
  return prisma.dishCategory.update({
    data: dishCategory,
    where: {
      id: dishCategory.id,
    },
  })
}
