import { z } from 'zod'

export const zPaymentMethod = z.enum(['CARD', 'CASH'])

export type PaymentMethod = z.infer<typeof zPaymentMethod>
