import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMoviesList } from "../services/fetchMoviesList";

const MovieList = () => {
  const [movieListData, setMovieListData] = useState([]);

  //* console.log(fetchMoviesList());

  return (
    <div>
      {movieListData &&
        movieListData.map((data, i) => <MovieCard key={i} {...data} />)}
    </div>
  );
};

export default MovieList;
