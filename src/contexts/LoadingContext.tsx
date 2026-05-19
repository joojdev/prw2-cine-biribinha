import { createContext } from 'react'

export const LoadingContext = createContext<{
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isLoading: false,
  setIsLoading: () => {},
})
