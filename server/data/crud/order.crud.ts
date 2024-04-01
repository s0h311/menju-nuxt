import { prisma } from '~/server/infrastructue/database/prismaClient'
import { Order } from '../models/order.model'

export function addOrder(order: Omit<Order, 'id'>): Promise<Order> {
  return prisma.order.create({
    data: order,
  }) as unknown as Promise<Order>
}

export function getOrder(orderId: Order['id']): Promise<Order> {
  try {
    return prisma.order.findFirstOrThrow({
      where: {
        id: orderId,
      },
    }) as unknown as Promise<Order>
  } catch (exception) {
    throw new Error(`could not find order with id: ${orderId}`)
  }
}

export function deleteOrder(orderId: Order['id']): Promise<Order> {
  return prisma.order.delete({
    where: {
      id: orderId,
    },
  }) as unknown as Promise<Order>
}

export function updateOrder(order: Order): Promise<Order> {
  return prisma.order.update({
    data: order,
    where: {
      id: order.id,
    },
  }) as unknown as Promise<Order>
}
