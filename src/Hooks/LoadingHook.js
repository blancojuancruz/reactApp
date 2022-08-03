import { useState } from 'react'

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)

  const showLoading = () => {
    setIsLoading(true)
  }

  const hideLoading = () => {
    setIsLoading(false)
  }

  return { isLoading, showLoading, hideLoading }
}
