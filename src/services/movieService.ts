import {
  CreateMovieSchema,
  UpdateMovieSchema,
  type CreateMovieDTO,
  type UpdateMovieDTO,
} from '../models/Movie'
import { movieRepository } from '../repositories/movieRepository'

export const movieService = {
  getAll: () => movieRepository.getAll(),
  getById: (id: string) => movieRepository.getById(id),
  create: (dto: CreateMovieDTO) => {
    CreateMovieSchema.parse(dto)
    return movieRepository.create(dto)
  },
  update: (id: string, dto: UpdateMovieDTO) => {
    UpdateMovieSchema.parse(dto)
    return movieRepository.update(id, dto)
  },
  delete: (id: string) => movieRepository.delete(id),
}
