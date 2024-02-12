import React from "react";
import styles from "../styles/components/MovieCard.module.css";
import { faChevronDown, faCirclePlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import nLogo from '../assets/n_logo.png'

const MovieCard = ({ title, thumbnail }) => {
  return (
    <div className={styles.movieCard}>
      <img src={nLogo} alt="netflix_original" className={styles.netflixOriginal}/>
      <div className={styles.thumbnailContainer}>
      <img src={`${thumbnail}`} alt="movie-poster" />
      </div>
      <div className={styles.previewOptions}>
        <div>
        <FontAwesomeIcon icon={faCirclePlay} />
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div>
        <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
