import MovieCard from "../components/MovieCard";
import useMovieList from "../hooks/useMovieList";

const MovieList = () => {
  const [movie] = useMovieList();

  return (
    <div className="movie-list">
      {movie.map((movie) => {
        return <MovieCard key={movie?.show?.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
