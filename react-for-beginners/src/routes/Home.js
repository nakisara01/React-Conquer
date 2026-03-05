import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [Loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://nomad-movies.nomadcoders.workers.dev/movies`,
    );
    const json = await response.json();

    // const json = await (
    //   await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`)
    // ).json();
    //이렇게 하면 더 쉽게도 가능하다고 함

    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);

  return (
    <div>
      {Loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              posterImg={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
