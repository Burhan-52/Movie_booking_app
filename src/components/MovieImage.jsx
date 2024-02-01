import React from "react";

const MovieImage = ({ src, alt }) => {
  return <img className="movie-image" src={src} alt={alt} />;
};

export default MovieImage;
