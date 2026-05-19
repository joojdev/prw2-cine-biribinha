import type { Movie } from "@/models/Movie";

function MovieRow({ movie }: { movie: Movie }) {
  return (
    <tr>
      <td>{movie.id}</td>
      <td>{movie.name}</td>
      <td>{movie.genre}</td>
      <td>{movie.year}</td>
    </tr>
  )
}

export default MovieRow