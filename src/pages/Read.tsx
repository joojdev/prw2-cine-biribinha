import PageLayout from '@/components/PageLayout'
import { useMovie } from '@/hooks/useMovie'
import { Navigate, useParams } from 'react-router-dom'
import { z } from 'zod'

const paramsSchema = z.object({
  id: z.string(),
})

function Read() {
  const rawParams = useParams()
  const result = paramsSchema.safeParse(rawParams)

  if (!result.success) return <Navigate to="/" />

  return <ReadPage id={result.data.id} />
}

function ReadPage({ id }: { id: string }) {
  const movie = useMovie(id)

  if (movie === null) return <Navigate to="/" />

  return (
    <PageLayout title="Ler" showReturn>
      {movie && (
        <>
          <h2>{movie.name}</h2>
          <p>Gênero: {movie.genre}</p>
          <p>Ano: {movie.year}</p>
          <p>ID: {movie.id}</p>
        </>
      )}
    </PageLayout>
  )
}

export default Read
