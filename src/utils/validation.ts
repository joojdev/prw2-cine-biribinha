import { z } from 'zod'

const idSchema = z.coerce.number({ error: 'ID inválido!' })
const nameSchema = z.string().min(1, 'Nome é obrigatório!')
const genreSchema = z.string().min(1, 'Gênero é obrigatório!')
const yearSchema = z.coerce.number({ error: 'Ano inválido!' }).min(1895, 'Número muito pequeno!')
// Data de lançamento da obra "La Sortie de l'usine Lumière à Lyon" (A Saída da Fábrica Lumière)
// O primeiro filme da história!
// .max(9999, 'Número muito grande!')
// Ainda teremos filmes até lá se a terra for preservada...

function fromZod(schema: z.ZodType) {
  return (value: string): string | null => {
    const result = schema.safeParse(value)
    return result.success ? null : result.error.issues[0].message
  }
}

export const validateId = fromZod(idSchema)
export const validateName = fromZod(nameSchema)
export const validateGenre = fromZod(genreSchema)
export const validateYear = fromZod(yearSchema)
