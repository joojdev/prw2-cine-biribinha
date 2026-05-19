import axios from 'axios'
import { MovieSchema, type CreateMovieDTO, type Movie, type UpdateMovieDTO } from '../models/Movie'
import { z } from 'zod'

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/movies`

const api = axios.create({
  baseURL: BASE_URL,
})

export const movieRepository = {
  getAll: async (): Promise<Movie[]> => {
    const { data } = await api.get('/')
    return z.array(MovieSchema).parse(data)
  },

  getById: async (id: string): Promise<Movie> => {
    const { data } = await api.get(`/${id}`)
    return MovieSchema.parse(data)
  },

  create: async (dto: CreateMovieDTO): Promise<Movie> => {
    const { data } = await api.post('/', dto)
    return MovieSchema.parse(data)
  },

  update: async (id: string, dto: UpdateMovieDTO): Promise<Movie> => {
    const { data } = await api.post(`/${id}`, dto)
    return MovieSchema.parse(data)
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`${BASE_URL}/${id}`)
  },
}
