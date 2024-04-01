import { z } from 'zod'

export const zExtraIngredient = z.object({
  name: z.string(),
  price: z.number().min(0),
})

export const zIngredients = z.object({
  required: z.array(z.string()),
  optional: z.array(z.string()),
  extra: z.array(zExtraIngredient),
})

export const zDish = z.object({
  id: z.number(),
  dishCategoryId: z.number(),
  name: z.string().min(1).max(50),
  priority: z.number(),
  imageUrl: z.string().url().nullable(),
  price: z.number().min(0).max(10_000),
  ingredients: zIngredients,
  labels: z.array(z.string()),
  description: z.string().nullable(),
})

export type ExtraIngredient = z.infer<typeof zExtraIngredient>
export type Ingredients = z.infer<typeof zIngredients>
export type Dish = z.infer<typeof zDish>
