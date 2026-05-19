import { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '@contexts/LoadingContext'
import { movieService } from '@services/movieService'
import type { Movie } from '@models/Movie'

export function useMovie(id: string) {
  const { setIsLoading } = useContext(LoadingContext)
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    setIsLoading(true)
    movieService
      .getById(id)
      .then(setMovie)
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [id, setIsLoading])

  return movie
}
