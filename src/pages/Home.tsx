import LoadingScreen from '@/components/LoadingScreen'
import MovieTable from '@/components/MovieTable'
import PageLayout from '@/components/PageLayout'
import type { Movie } from '@/models/Movie'
import { movieService } from '@/services/movieService'
import { useEffect, useState } from 'react'

function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    movieService.getAll()
      .then(setMovies)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <PageLayout>
      {loading && <LoadingScreen />}
      <MovieTable movies={movies} />
    </PageLayout>
  )
}

export default Home