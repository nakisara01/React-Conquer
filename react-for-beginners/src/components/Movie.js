import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, posterImg, title, overview }) {
  return (
    <div>
      <img src={posterImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{overview.length > 235 ? `${overview.slice(0,235)}...` : overview}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  posterImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default Movie;

//<a href=""> 형식으로 이동을 할 수도 있지만 이 경우 브라우저가 새로고침됨 but Link는 그렇지 않음!
