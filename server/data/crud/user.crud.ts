import { prisma } from '~/server/infrastructue/database/prismaClient'
import { User } from '../models/user.model'

export function addUser(user: Omit<User, 'id'>): Promise<User> {
  return prisma.user.create({
    data: user,
  })
}

export function getUser(userId: User['id']): Promise<User> {
  try {
    return prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
    })
  } catch (exception) {
    throw new Error(`could not find user with userId: ${userId}`)
  }
}

export function deleteUser(userId: User['id']): Promise<User> {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  })
}

export function updateUser(user: User): Promise<User> {
  return prisma.user.update({
    data: user,
    where: {
      id: user.id,
    },
  })
}
