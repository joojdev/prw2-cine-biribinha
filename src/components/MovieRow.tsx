import type { Movie } from "@/models/Movie";
import { useNavigate } from "react-router-dom";

function MovieRow({ movie }: { movie: Movie }) {
  const navigate = useNavigate();

  function handleClickMovie() {
    navigate(`/ler/${movie.id}`)
  }

  return (
    <tr onClick={handleClickMovie}>
      <td>{movie.id}</td>
      <td>{movie.name}</td>
      <td>{movie.genre}</td>
      <td>{movie.year}</td>
    </tr>
  )
}

export default MovieRow