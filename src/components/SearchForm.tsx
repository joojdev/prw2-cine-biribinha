import type { Movie } from '@/models/Movie'
import { validateId } from '@/utils/validation'
import { useContext, useState } from 'react'
import Input from './Input'
import { movieService } from '@/services/movieService'
import { LoadingContext } from '@/contexts/LoadingContext'
import { useToast } from '@/hooks/useToast'
import axios from 'axios'

function SearchForm({ onSubmit }: { onSubmit: (movie: Movie) => void }) {
  const { setIsLoading } = useContext(LoadingContext)
  const { showToast } = useToast()
  const [id, setId] = useState('')

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    if (validateId(id)) return

    setIsLoading(true)
    let movie = null

    try {
      movie = await movieService.getById(id)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        showToast('Nenhum filme encontrado com esse ID!')
      } else {
        showToast('Erro ao buscar filme. Tente novamente.')
      }
    } finally {
      setIsLoading(false)
    }

    if (!movie) return

    onSubmit(movie)
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <Input isNumber label="ID" setValue={setId} value={id} validate={validateId} />
      <button className="btn btn-primary" type="submit">
        Procurar
      </button>
    </form>
  )
}

export default SearchForm
