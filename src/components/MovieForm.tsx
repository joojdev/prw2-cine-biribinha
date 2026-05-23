import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/Input'
import { movieService } from '@/services/movieService'
import type { Movie } from '@/models/Movie'
import { validateGenre, validateName, validateYear } from '@/utils/validation'
import { useToast } from '@hooks/useToast'

function MovieForm({ initial, movieId }: { initial?: Movie; movieId?: string }) {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [name, setName] = useState(initial?.name ?? '')
  const [genre, setGenre] = useState(initial?.genre ?? '')
  const [year, setYear] = useState(initial?.year ?? '')

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    if (validateName(name)) return
    if (validateGenre(genre)) return
    if (validateYear(year)) return

    const dto = { name, genre, year }

    try {
      if (movieId) {
        await movieService.update(movieId, dto)
      } else {
        await movieService.create(dto)
      }
      navigate('/')
    } catch {
      showToast(movieId ? 'Erro ao atualizar filme.' : 'Erro ao criar filme.')
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <Input label="Nome" value={name} setValue={setName} validate={validateName} />
      <Input label="Gênero" value={genre} setValue={setGenre} validate={validateGenre} />
      <Input isNumber label="Ano" value={year} setValue={setYear} validate={validateYear} />
      <button className="btn btn-primary" type="submit">
        {movieId ? 'Salvar' : 'Criar'}
      </button>
    </form>
  )
}

export default MovieForm
