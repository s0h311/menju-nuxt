export type ApiError = {
  message: string
  type: 'validation' | 'unknown'
}

export type ApiResponse<T> =
  | {
      data: T
      error: null
    }
  | {
      data: null
      error: ApiError
    }
