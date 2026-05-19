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

  return <PageLayout title="Ler">{movie?.name}</PageLayout>
}

export default Read
