import axios from "axios";
import { useEffect, useState } from "react";
import { MOVIE_LIST } from "../config";

const useMovieList = () => {
  const [movie, setMovie] = useState([]);

  const getMovieList = async () => {
    const response = await axios.get(MOVIE_LIST);
    setMovie(response?.data);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return [movie];
};

export default useMovieList;
