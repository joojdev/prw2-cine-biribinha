import MovieTable from '@components/MovieTable'
import PageLayout from '@components/PageLayout'
import type { Movie } from '@models/Movie'
import { movieService } from '@services/movieService'
import { useEffect, useState, useContext } from 'react'
import { LoadingContext } from '@contexts/LoadingContext'
import { useToast } from '@hooks/useToast'

function Home() {
  const { setIsLoading } = useContext(LoadingContext)
  const { showToast } = useToast()
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    setIsLoading(true)
    movieService
      .getAll()
      .then(setMovies)
      .catch(() => showToast('Erro ao carregar filmes.'))
      .finally(() => setIsLoading(false))
  }, [setIsLoading, showToast])

  return (
    <PageLayout>
      <MovieTable movies={movies} />
    </PageLayout>
  )
}

export default Home
