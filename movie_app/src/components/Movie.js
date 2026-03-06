import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, release_date, title, overview, poster_path }) {
  return (
    <div className="movies_movie">
      <Link
        to={`/movie-detail`}
        state={{ release_date, title, overview, poster_path }}
      >
        <img src={poster_path} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie_title" style={{ backgroundColor: "red" }}>
            {title}
          </h3>
          <h5 className="release_data">{release_date}</h5>
          <p className="movie_overview">{overview.slice(0, 240)}</p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
