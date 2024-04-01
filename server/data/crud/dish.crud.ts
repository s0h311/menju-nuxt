import { prisma } from '~/server/infrastructue/database/prismaClient'
import { Dish } from '../models/dish.model'
import { DishCategory } from '../models/dishCategory.model'

export function addDish(dish: Omit<Dish, 'id'>): Promise<Dish> {
  return prisma.dish.create({
    data: dish,
  }) as unknown as Promise<Dish>
}

export function getDish(dishId: Dish['id']): Promise<Dish> {
  try {
    return prisma.dish.findFirstOrThrow({
      where: {
        id: dishId,
      },
    }) as unknown as Promise<Dish>
  } catch (exception) {
    throw new Error(`could not find dish with id: ${dishId}`)
  }
}

export function getAllDishesByDishCategoryId(dishCategoryId: DishCategory['id']): Promise<Dish[]> {
  return prisma.dish.findMany({
    where: {
      dishCategoryId,
    },
  }) as unknown as Promise<Dish[]>
}

export function deleteDish(dishId: Dish['id']): Promise<Dish> {
  return prisma.dish.delete({
    where: {
      id: dishId,
    },
  }) as unknown as Promise<Dish>
}

export function updateDish(dish: Dish): Promise<Dish> {
  return prisma.dish.update({
    data: dish,
    where: {
      id: dish.id,
    },
  }) as unknown as Promise<Dish>
}
