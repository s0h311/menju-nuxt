import { zDish, zExtraIngredient } from './dish.model'
import { z } from 'zod'
import { zPaymentMethod } from './paymentMethod.model'

export const zOrderPosition = z.object({
  dish: zDish,
  quantity: z.number(),
  leftOutIngredients: z.string().array(),
  extraIngredients: z.array(zExtraIngredient),
})

export const zOrderStatus = z.enum(['RECEIVED', 'DONE', 'REJECTED'])

export const zOrder = z.object({
  id: z.number(),
  shopId: z.number(),
  tableId: z.string().min(1).max(20).nullable(),
  positions: z.array(zOrderPosition),
  paymentMethod: zPaymentMethod,
  isPayed: z.boolean(),
  netTotal: z.number().min(0).max(20_000),
  vat: z.number().min(0).max(10_000).nullable(),
  note: z.string().min(0).max(250).nullable(),
  orderDate: z.date(),
  OrderStatus: zOrderStatus,
})

export type OrderPosition = z.infer<typeof zOrderPosition>
export type OrderStatus = z.infer<typeof zOrderStatus>
export type Order = z.infer<typeof zOrder>
