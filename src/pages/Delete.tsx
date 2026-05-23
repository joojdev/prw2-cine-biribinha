import PageLayout from '@/components/PageLayout'
import SearchForm from '@/components/SearchForm'
import type { Movie } from '@/models/Movie'
import React, { useContext, useState, type SetStateAction } from 'react'
import { LoadingContext } from '@/contexts/LoadingContext'
import { useNavigate } from 'react-router-dom'
import { movieService } from '@/services/movieService'
import { useToast } from '@hooks/useToast'

function DeleteMoviePrompt({
  setMovie,
  movie,
}: {
  setMovie: React.Dispatch<SetStateAction<Movie | null>>
  movie: Movie
}) {
  const navigate = useNavigate()
  const { setIsLoading } = useContext(LoadingContext)
  const { showToast } = useToast()

  async function handleConfirm() {
    setIsLoading(true)

    try {
      await movieService.delete(movie.id)
      navigate('/')
    } catch {
      showToast('Erro ao apagar filme.')
      setMovie(null)
    } finally {
      setIsLoading(false)
    }
  }

  function handleCancel() {
    setMovie(null)
  }

  return (
    <div className="modal-overlay">
      <div className="form-card">
        <p>
          Você tem certeza que quer apagar o filme <strong>{movie.name}</strong> (ID: {movie.id})?
        </p>
        <div className="prompt-actions">
          <button className="btn btn-danger" onClick={handleConfirm}>
            Sim
          </button>
          <button className="btn btn-secondary" onClick={handleCancel}>
            Não
          </button>
        </div>
      </div>
    </div>
  )
}

function Delete() {
  const [movie, setMovie] = useState<Movie | null>(null)

  return (
    <PageLayout title="Apagar" showReturn>
      <SearchForm onSubmit={setMovie} />
      {movie && <DeleteMoviePrompt setMovie={setMovie} movie={movie} />}
    </PageLayout>
  )
}

export default Delete
