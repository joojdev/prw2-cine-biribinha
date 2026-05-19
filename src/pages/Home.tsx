import MovieTable from '@components/MovieTable'
import PageLayout from '@components/PageLayout'
import type { Movie } from '@models/Movie'
import { movieService } from '@services/movieService'
import { useEffect, useState, useContext } from 'react'
import { LoadingContext } from '@contexts/LoadingContext'

function Home() {
  const { setIsLoading } = useContext(LoadingContext)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    setIsLoading(true)
    movieService
      .getAll()
      .then(setMovies)
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }, [setIsLoading])

  return (
    <PageLayout>
      <MovieTable movies={movies} />
    </PageLayout>
  )
}

export default Home
