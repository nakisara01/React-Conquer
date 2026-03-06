import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

class Home extends React.Component {
  state = {
    isLoading: true,
    data: [],
  };

  getMovies = async () => {
    const { data } = await axios.get(
      "https://nomad-movies.nomadcoders.workers.dev/movies",
    );
    this.setState({ data, isLoading: false });
    console.log(data);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {data.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                release_date={movie.release_date}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;