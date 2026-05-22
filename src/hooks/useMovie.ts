import { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '@contexts/LoadingContext'
import { movieService } from '@services/movieService'
import type { Movie } from '@models/Movie'

export function useMovie(id: string | undefined) {
  const { setIsLoading } = useContext(LoadingContext)
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    if (!id) return

    setIsLoading(true)
    movieService
      .getById(id)
      .then(setMovie)
      .catch(console.error)
      .finally(() => setIsLoading(false))

    return () => setMovie(undefined)
  }, [id, setIsLoading])

  return movie
}
