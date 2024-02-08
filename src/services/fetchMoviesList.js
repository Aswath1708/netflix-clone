import axios from "axios";
import { moviesApi } from "../utils/getMoviesApi";

export const fetchMoviesList = () => {
  axios.get(moviesApi()).then((data) => data);
};
