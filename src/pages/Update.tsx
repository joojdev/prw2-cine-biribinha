import MovieForm from '@/components/MovieForm'
import PageLayout from '@/components/PageLayout'
import SearchForm from '@/components/SearchForm'
import type { Movie } from '@/models/Movie'
import { useState } from 'react'

function Update() {
  const [movie, setMovie] = useState<Movie | null>(null)

  return (
    <PageLayout title="Alterar" showReturn>
      {!movie && <SearchForm onSubmit={setMovie} />}
      {movie && <MovieForm movieId={movie.id} />}
    </PageLayout>
  )
}

export default Update
