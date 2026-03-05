import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`)
    ).json();

    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            posterImg={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
