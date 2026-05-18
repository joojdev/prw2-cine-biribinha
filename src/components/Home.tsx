import { useEffect, useState } from 'react'
import { movieRepository } from '../repositories/movieRepository'
import type { Movie } from '../models/Movie'

function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    movieRepository.getAll()
      .then((result) => {
        setMovies(result)
      })
  }, [])

  return <>{JSON.stringify(movies)}</>
}

export default Home