import { z } from 'zod'

export const MovieSchema = z.object({
  id: z.string(),
  name: z.string(),
  genre: z.string(),
  year: z.string()
})

export const CreateMovieSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  genre: z.string().min(1, 'Gênero é obrigatório'),
  year: z.string().min(4, 'Ano é obrigatório')
})

export const UpdateMovieSchema = z.object({
  name: z.string().min(1).optional(),
  genre: z.string().min(1).optional(),
  year: z.string().min(4).optional()
})

export type Movie = z.infer<typeof MovieSchema>
export type CreateMovieDTO = z.infer<typeof CreateMovieSchema>
export type UpdateMovieDTO = z.infer<typeof UpdateMovieSchema>