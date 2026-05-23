import type { ToastType } from '@/utils/toast'
import { createContext } from 'react'

export const ToastContext = createContext<{
  showToast: (message: string, type?: ToastType) => void
}>({
  showToast: () => {},
})
