import { z } from 'zod'
import { zDish } from './dish.model'

export const zDishCategory = z.object({
  id: z.number(),
  shopId: z.number(),
  name: z.string().min(1).max(50),
  priority: z.number(),
  imageUrl: z.string().url().nullable(),
})

export type DishCategory = z.infer<typeof zDishCategory>
