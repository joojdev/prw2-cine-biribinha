import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '@/components/Input'
import { useMovie } from '@/hooks/useMovie'
import { movieService } from '@/services/movieService'
import type { Movie } from '@/models/Movie'
import { validateGenre, validateName, validateYear } from '@/utils/validation'

function MovieForm({ movieId }: { movieId?: string }) {
  const data = useMovie(movieId)

  if (movieId && !data) return null

  return <MovieFormFields initial={data} movieId={movieId} />
}

function MovieFormFields({ initial, movieId }: { initial?: Movie; movieId?: string }) {
  const navigate = useNavigate()
  const [name, setName] = useState(initial?.name ?? '')
  const [genre, setGenre] = useState(initial?.genre ?? '')
  const [year, setYear] = useState(initial?.year ?? '')

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    if (validateName(name)) return
    if (validateGenre(genre)) return
    if (validateYear(year)) return

    const dto = { name, genre, year }

    if (movieId) {
      await movieService.update(movieId, dto)
    } else {
      await movieService.create(dto)
    }

    navigate('/')
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <Input label="Nome" value={name} setValue={setName} validate={validateName} />
      <Input label="Gênero" value={genre} setValue={setGenre} validate={validateGenre} />
      <Input label="Ano" value={year} setValue={setYear} validate={validateYear} />
      <button className="btn btn-primary" type="submit">
        {movieId ? 'Salvar' : 'Criar'}
      </button>
    </form>
  )
}

export default MovieForm
