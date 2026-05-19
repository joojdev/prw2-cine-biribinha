import type { Movie } from "@/models/Movie";
import MovieRow from "./MovieRow";

function MovieTable({ movies }: { movies: Movie[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Gênero</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => {
          return <MovieRow key={index} movie={movie} />
        })}
      </tbody>
    </table>
  )
}

export default MovieTable