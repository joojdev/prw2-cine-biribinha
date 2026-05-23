import { z } from 'zod'

const idSchema = z.coerce.number({ error: 'ID inválido!' })
const nameSchema = z.string().min(1, 'Nome é obrigatório!')
const genreSchema = z.string().min(1, 'Gênero é obrigatório!')
const yearSchema = z.coerce
  .number({ error: 'Ano inválido!' })
  .min(1000, 'Número muito pequeno!')
  .max(9999, 'Número muito grande!')

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
