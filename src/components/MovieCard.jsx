import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import MovieImage from "./MovieImage";
import MovieName from "./MovieName";

const MovieCard = ({ movie }) => {
  const { id, image, name, genres } = movie?.show;
  return (
    <div className="movie-card">
      <MovieImage src={image?.medium} alt={name} />
      <MovieName name={name} className={"movie-name"}/>
      <div>
        {genres.map((genre, i) => {
          return (
            <span key={i} className="movie-genre">
              {genre}
              {i !== genres.length - 1 && "/"}
            </span>
          );
        })}
      </div>
      <Link to={`/summary/${id}`}>
        <Button name={"Summary"} type={"button"} />
      </Link>
    </div>
  );
};

export default MovieCard;
