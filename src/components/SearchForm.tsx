import type { Movie } from '@/models/Movie'
import { validateId } from '@/utils/validation'
import { useContext, useState } from 'react'
import Input from './Input'
import { movieService } from '@/services/movieService'
import { LoadingContext } from '@/contexts/LoadingContext'
import axios from 'axios'

function SearchForm({ onSubmit }: { onSubmit: (movie: Movie) => void }) {
  const { setIsLoading } = useContext(LoadingContext)
  const [id, setId] = useState('')
  const [notFound, setNotFound] = useState(false)

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    if (validateId(id)) return
    setNotFound(false)

    setIsLoading(true)
    let movie = null

    try {
      movie = await movieService.getById(id)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        setNotFound(true)
      }
    } finally {
      setIsLoading(false)
    }

    if (!movie) return

    onSubmit(movie)
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <Input label="ID" setValue={setId} value={id} validate={validateId} />
      {notFound && <span className="form-error">Nenhum filme encontrado com esse ID!</span>}
      <button className="btn btn-primary" type="submit">
        Procurar
      </button>
    </form>
  )
}

export default SearchForm
