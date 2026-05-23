import { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '@contexts/LoadingContext'
import { movieService } from '@services/movieService'
import { useToast } from '@hooks/useToast'
import type { Movie } from '@models/Movie'

export function useMovie(id: string | undefined) {
  const { setIsLoading } = useContext(LoadingContext)
  const { showToast } = useToast()
  const [movie, setMovie] = useState<Movie | null>()

  useEffect(() => {
    if (!id) return

    setIsLoading(true)
    movieService
      .getById(id)
      .then(setMovie)
      .catch(() => {
        showToast('Erro ao carregar filme.')
        setMovie(null)
      })
      .finally(() => setIsLoading(false))

    return () => setMovie(undefined)
  }, [id, setIsLoading, showToast])

  return movie
}
