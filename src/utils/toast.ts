export type ToastType = 'error' | 'success'

export interface ToastState {
  message: string
  type: ToastType
  id: number
}
