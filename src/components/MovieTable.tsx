import type { Movie } from '@/models/Movie'
import MovieRow from './MovieRow'

function MovieTable({ movies }: { movies: Movie[] }) {
  if (movies.length === 0) {
    return (
      <div className="table-wrapper">
        <div className="empty-state">
          <p>Nenhum filme encontrado.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <MovieRow key={index} movie={movie} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MovieTable
