import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { movie_Summary } from "../config";

const useMovieSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState([]);

  const getSummary = async () => {
    const response = await axios.get(movie_Summary(id));
    setSummary(response?.data);
  };

  useEffect(() => {
    getSummary();
  }, []);

  return [summary];
};

export default useMovieSummary;
