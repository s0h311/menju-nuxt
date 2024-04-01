import { addUser } from '../data/crud/user.crud'
import { User, zUser } from '../data/models/user.model'
import { ApiResponse } from './types'

export default defineEventHandler(async (event): Promise<ApiResponse<User>> => {
  const validationResult = await readValidatedBody(event, zUser.omit({ id: true }).safeParse)

  if (!validationResult.success) {
    return {
      data: null,
      error: {
        message: 'Validation failed',
        type: 'validation',
      },
    }
  }

  const user = validationResult.data

  const data = await addUser(user)

  return {
    data,
    error: null,
  }
})
