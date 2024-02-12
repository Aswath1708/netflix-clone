import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { moviesApi } from "../utils/getMoviesApi";
import styles from '../styles/components/MovieList.module.css'

const MovieList = () => {
  const [moviesListData, setMoviesListData] = useState([]);

  useEffect(() => {
    axios
      .get(moviesApi(), {
        headers: {
          ProjectId: "b03yddsyncpz",
        },
      })
      .then((res) => setMoviesListData(res.data.data));
  }, []);

  return (
    <div className={styles.movieList}>
      <h2>Movies</h2>
      <div>
      {moviesListData.length > 0 &&
        moviesListData.map((data, i) => <MovieCard key={i} {...data} />)}
        </div>
    </div>
  );
};

export default MovieList;
