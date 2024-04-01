import { z } from 'zod'
import { zDishCategory } from './dishCategory.model'
import { zOrder } from './order.model'
import { zPaymentMethod } from './paymentMethod.model'

export const zTheme = z.enum(['DEFAULT'])

export const zShop = z.object({
  id: z.number(),
  userId: z.number(),
  name: z.string().min(1).max(50),
  abbreviation: z.string().min(1).max(6),
  logoUrl: z.string().url().nullable(),
  cartType: z.enum(['CAN_ORDER', 'CANNOT_ORDER']),
  isFilterBarEnabled: z.boolean(),
  paymentMethods: z.array(zPaymentMethod),
  theme: zTheme,
})

export type Theme = z.infer<typeof zTheme>
export type Shop = z.infer<typeof zShop>
