import { z } from 'zod'
import { zDish } from '~/server/data/models/dish.model'
import { zDishCategory } from '~/server/data/models/dishCategory.model'

export const zDishesByCategory = z.object({
  dishCategory: zDishCategory,
  dishes: z.array(zDish),
})

export type DishesByCategory = z.infer<typeof zDishesByCategory>
